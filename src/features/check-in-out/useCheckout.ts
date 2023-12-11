import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

type Props = {
  bookingId: number | undefined;
};

export default function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, status: isCheckingOut } = useMutation({
    mutationFn: ({ bookingId }: Props) =>
      updateBooking(bookingId!, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfuly checked out`);
      queryClient.resetQueries();
    },

    onError: () => toast.error("There was an error while checking out"),
  });

  return { checkout, isCheckingOut };
}
