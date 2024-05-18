import HeadCover from "../../Components/HeadCover/HeadCover";
import OurShopImg from "../../../public/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/MenuHook/useMenu";
import ShopCart from "../../Components/ShopCart/ShopCart";
import ShopTabs from "../../Components/ShopTabs/ShopTabs";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [ourMenu] = useMenu();
  const offer = ourMenu.filter((item) => item.category === "offered");
  const pizza = ourMenu.filter((item) => item.category === "pizza");
  const Dessert = ourMenu.filter((item) => item.category === "dessert");
  const salads = ourMenu.filter((item) => item.category === "salad");
  const soups = ourMenu.filter((item) => item.category === "soup");

  return (
    <div>
      <div>
        <HeadCover
          img={OurShopImg}
          title={"Would you like to try a dish?"}
          head={"OUR SHOP"}
        />
      </div>
      <div className="my-12">
        <div>
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>salad</Tab>
              <Tab>pizza</Tab>
              <Tab>soup</Tab>
              <Tab>dessert</Tab>
              <Tab>drinks</Tab>
            </TabList>

            <TabPanel>
              <ShopTabs ItemsTabs={salads} />
            </TabPanel>
            <TabPanel>
              <ShopTabs ItemsTabs={pizza} />
            </TabPanel>
            <TabPanel>
              <ShopTabs ItemsTabs={soups} />
            </TabPanel>
            <TabPanel>
              <ShopTabs ItemsTabs={Dessert} />
            </TabPanel>
            <TabPanel>
              <ShopTabs ItemsTabs={offer} />
            </TabPanel>
          </Tabs>
        </div>
        <div>Pagination</div>
      </div>
    </div>
  );
};

export default OurShop;
