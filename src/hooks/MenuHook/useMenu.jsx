import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "../useAxiosPublic";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();

  // const [ourMenu, setOurMenu] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:4000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setOurMenu(data);
  //       setLoading(false);
  //     });
  // }, []);

  const {
    data: ourMenu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/menu`);
      return res.data;
    },
  });

  return [ourMenu, loading, refetch];
};

export default useMenu;
