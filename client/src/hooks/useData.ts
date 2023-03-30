import ApiService from "../api/ApiService";
import { useQuery } from "react-query";

export const useData = (type: any, setData: any) => {
  const { isLoading, data, refetch } = useQuery(
    ["modal list send", type],
    () => ApiService.getAllData(type),
    {
      onSuccess(data: []) {
        setData(data);
      },
      onError(err: any) {
        alert(err.message);
      },
    }
  );
  return { isLoading, data, refetch };
};
