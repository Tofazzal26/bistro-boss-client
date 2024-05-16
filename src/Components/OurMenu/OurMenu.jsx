import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";

const OurMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const MenuData = async () => {
      const response = await fetch("public/menu.json");
      const data = await response.json();
      const onlyPopularData = data.filter(
        (item) => item.category === "popular"
      );
      setMenu(onlyPopularData);
    };
    MenuData();
  }, []);

  return (
    <div>
      <div>
        <div className="my-12">
          {" "}
          <SectionTitle
            subHeader={"FROM OUR MENU"}
            paraHeader={"Check it out"}
          />
        </div>
        <div className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menu.map((item) => (
              <MenuItem key={item._id} item={item}></MenuItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
