import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ApiService from "../api/ApiService";

export const useRegisterForm = (
  email: string,
  password: string,
  name: string,
  secondName: string
) => {
  const navigate = useNavigate();
  const {
    data,
    mutateAsync: refetch,
    isLoading,
  } = useMutation(
    "signUp",
    () => ApiService.signup(email, password, name, secondName),
    {
      onSuccess(data: any) {
        if (data && password.length >= 8) {
          document.cookie = `token=${data.accesToken}`;
          document.cookie = `user=${data.userId}`;
          navigate("/login");
        } else {
          toast.error("Не все поля корректно заполнены");
        }
      },
      onError(err: any) {
        toast.error(`Произошла ошибка ${err}`);
      },
    }
  );
  return { data, refetch, isLoading };
};
