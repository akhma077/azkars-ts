import { ISignInData } from "./../types/types";
import * as React from "react";
import ApiService from "../api/ApiService";
import { useMutation, useQuery } from "react-query";
import { Flip, toast } from "react-toastify";
import { AuthorizationContext } from "../context/index";
import { useNavigate } from "react-router-dom";

export const useSignIn = (email: string, password: any, setUserData: any) => {
  const { setUser }: any = React.useContext(AuthorizationContext);
  const navigate = useNavigate();

  const {
    mutateAsync: refetch,
    isLoading,
    error,
  } = useMutation("singIn", () => ApiService.signIn(email, password), {
    onSuccess(data: ISignInData) {
      if (data) {
        let date: any = new Date(Date.now() + 86400e3 * 7);
        date = date.toUTCString();
        document.cookie = `token=${data.accesToken} secure; expires=` + date;
        document.cookie = `id=${data.userId}`;
        const fetchData = async () => {
          const user = await ApiService.getUserData(
            data.userId,
            data.accesToken
          );
          setUser(user);
        };
        fetchData();
        setUserData(data);
        navigate("/");
      } else {
        toast.error("Введен неправильный логин или пароль", {
          transition: Flip,
        });
      }
    },
    onError(err) {
      toast.error(`Произошла ошибка ${err}`, { transition: Flip });
    },
  });

  return { refetch, isLoading, error };
};
