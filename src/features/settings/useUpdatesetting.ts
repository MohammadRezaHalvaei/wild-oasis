import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export default function useUpdatesetting() {
  const queryClient = useQueryClient();
  const { status: updateStatus, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { updateStatus, updateSetting };
}
