import * as React from "react";
import { useMutation } from "react-query";
import { Flip, toast } from "react-toastify";
import ApiService from "../api/ApiService";
import { AuthorizationContext } from "../context";
import { IData } from "../types/types";

export const useDeleteAzkFavourities = (azkId: string) => {
  const { setUser }: any = React.useContext(AuthorizationContext);

  const { mutateAsync: mutateAsyncDeleteAzk } = useMutation(
    "delete favourites",
    () => ApiService.deleteFavourities(azkId),
    {
      onSuccess() {
        setUser((prev: any) => ({
          ...prev,
          favourites: [
            ...prev.favourites.filter((item: IData) => item?._id !== azkId),
          ],
        }));
      },
      onError(error) {
        toast.error(`Произошла ошибка ${error}`, { transition: Flip });
      },
    }
  );
  return { mutateAsyncDeleteAzk };
};
