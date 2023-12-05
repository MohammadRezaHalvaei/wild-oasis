import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createEditCabin } from "../../services/apiCabins";

export default function useEditCabin() {
  const queryClient = useQueryClient();
  const { status: editStatus, mutate: editCabin } = useMutation({
    mutationFn: ({
      newCabinData,
      id,
    }: {
      newCabinData: CabinDataProps;
      id: number;
    }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("New cabin successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { editStatus, editCabin };
}
