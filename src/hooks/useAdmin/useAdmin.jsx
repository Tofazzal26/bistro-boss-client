import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";

const useAdmin = () => {
  const { user, notLoading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !notLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(res.data);
      return res.data?.admin;
    },
  });

  return [isAdmin, isLoading];
};

export default useAdmin;
