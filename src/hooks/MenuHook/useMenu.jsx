import { useEffect, useState } from "react";

const useMenu = () => {
  const [ourMenu, setOurMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/menu")
      .then((res) => res.json())
      .then((data) => {
        setOurMenu(data);
        setLoading(false);
      });
  }, []);

  return [ourMenu, loading];
};

export default useMenu;
