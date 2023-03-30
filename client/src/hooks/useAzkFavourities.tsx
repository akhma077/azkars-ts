import * as React from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import ApiService from "../api/ApiService";
import { AuthorizationContext } from "../context";
//favourites

export const useAzkFavourities = (azkId: string) => {
  const { setUser }: any = React.useContext(AuthorizationContext);

  const { mutateAsync } = useMutation(
    "app favourites",
    () => ApiService.favourities(azkId),
    {
      onSuccess(data) {
        setUser((prevState: any) => ({
          ...prevState,
          favourites: [...prevState.favourites, data],
        }));
      },
      onError(error) {
        toast.error(`Произошла ошибка ${error}`);
      },
    }
  );

  return { mutateAsync };
};
