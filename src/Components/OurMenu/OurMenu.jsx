import { useEffect } from "react";
import { useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../hooks/MenuHook/useMenu";

const OurMenu = () => {
  const [ourMenu] = useMenu();

  const onlyPopularData = ourMenu.filter((item) => item.category === "popular");

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
            {onlyPopularData.map((item) => (
              <MenuItem key={item._id} item={item}></MenuItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
