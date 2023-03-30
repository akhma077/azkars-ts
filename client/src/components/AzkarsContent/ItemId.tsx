import * as React from "react";
import { IoIosHeart, IoMdHeartEmpty } from "react-icons/io";
import { useAzkFavourities } from "../../hooks/useAzkFavourities";
import { AuthorizationContext } from "../../context";
import { Flip, toast } from "react-toastify";
import { IData } from "../../types/types";
import { useDeleteAzkFavourities } from "../../hooks/useDeleteAzkFavourities";
import { IContent } from "./AzkarsContent";

interface IitemID {
  item: IData;
  setContent: IContent | any;
  idx: number;
}

const ItemId: React.FC<IitemID> = ({ item, setContent, idx }) => {
  const { user }: any = React.useContext(AuthorizationContext);
  const { mutateAsync } = useAzkFavourities(item._id);
  const { mutateAsyncDeleteAzk } = useDeleteAzkFavourities(item._id);

  const handleAddFavourities = async () => {
    if (user) {
      await mutateAsync();
      setContent((prev: IContent) => {
        prev.data[idx].favourites = true;
        return { ...prev };
      });

      toast.success(`${item.title} добавлен в избранное!`, {
        transition: Flip,
      });
    } else {
      toast.error(
        "Для добавления азкаров в избранное, необходимо азторизоваться",
        {
          transition: Flip,
        }
      );
    }
  };

  const handleDeleteAzkFavourites = async () => {
    if (user) {
      await mutateAsyncDeleteAzk();
      setContent((prev: IContent) => {
        prev.data[idx].favourites = false;
        return { ...prev };
      });

      toast.info(`${item.title} удален из избранного!`, { transition: Flip });
    }
  };

  return (
    <div>
      {item?.favourites ? (
        <IoIosHeart
          style={{
            width: "25px",
            height: "25px",
            color: "red",
            cursor: "pointer",
          }}
          onClick={handleDeleteAzkFavourites}
        />
      ) : (
        <IoMdHeartEmpty
          style={{
            width: "25px",
            height: "25px",
          }}
          onClick={handleAddFavourities}
        />
      )}
    </div>
  );
};

export default ItemId;
