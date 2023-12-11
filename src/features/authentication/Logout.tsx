import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import useLogout from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

export default function Logout() {
  const { isLogingOut, logout } = useLogout();

  console.log(isLogingOut);

  return (
    <ButtonIcon
      onClick={logout as () => void}
      disabled={isLogingOut === "pending"}
    >
      {isLogingOut === "pending" ? (
        <SpinnerMini />
      ) : (
        <HiArrowRightOnRectangle />
      )}
    </ButtonIcon>
  );
}
