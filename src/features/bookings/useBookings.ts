import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export default function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // Sort
  const sortValue = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortValue.split("-") as [
    "startDate" | "totalPrice",
    "asc" | "desc"
  ];
  const sortBy = { field, direction };

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: bookings, count } = {}, isLoading } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings(filter, sortBy, page),
  });

  const pageCount = Math.ceil(count! / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings(filter, sortBy, page + 1),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings(filter, sortBy, page - 1),
    });

  return { bookings, isLoading, count };
}
