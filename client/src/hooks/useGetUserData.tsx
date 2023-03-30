import * as React from "react";
import { useQuery } from "react-query";
import ApiService from "../api/ApiService";
import { AuthorizationContext } from "../context";

// export const useGetUserData = (userID: string | null) => {
//   const { setUser }: any = React.useContext(AuthorizationContext);
//   const {
//     isLoading: userLoading,
//     data,
//     refetch: getUser,
//   } = useQuery(["ger user", userID], () => ApiService.getUserData(userID), {
//     onSuccess(data: any) {
//       setUser(data);
//     },
//     onError(err: any) {
//       alert(err.message);
//     },
//     enabled: false,
//   });
//   return { userLoading, data, getUser };
// };
