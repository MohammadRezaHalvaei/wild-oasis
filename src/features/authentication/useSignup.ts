import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useSignup() {
  const { mutate: signup, isPending: isSignup } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => toast.success("Account successfuly created!"),
  });

  return { signup, isSignup };
}
