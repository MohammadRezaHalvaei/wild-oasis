import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export default function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { status, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,

    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { status, deleteCabin };
}
