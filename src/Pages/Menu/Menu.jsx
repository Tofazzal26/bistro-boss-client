import { Helmet } from "react-helmet-async";
import HeadCover from "../../Components/HeadCover/HeadCover";
import HeadImg from "../../../public/menu/banner3.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import OurMenu from "../../Components/OurMenu/OurMenu";
import BannerCover from "../../Components/BannerCover/BannerCover";
import BannerImg from "../../../public/home/chef-service.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <HeadCover
        img={HeadImg}
        head={"OUR MENU"}
        title={"Would you like to try a dish?"}
      />

      <OurMenu />
      <div className="mb-12 text-center">
        <button className="font-semibold bg-transparent text-black px-6 py-3 rounded-md border-b-2 border-black">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
      <div>
        <BannerCover
          img={BannerImg}
          head={"DESSERTS"}
          title={
            "Cheesecake: A rich, creamy dessert with a smooth cheese filling on a graham cracker crust, often topped with fruits or chocolate. Decadent and delightful."
          }
        />
      </div>
      <div>
        <OurMenu />
        <BannerCover
          img={BannerImg}
          head={"PIZZA"}
          title={
            "Pizza is a savory Italian dish featuring a round, flat crust topped with tomato sauce, cheese, and various toppings. Delicious and versatile"
          }
        />
      </div>
      <div>
        <OurMenu />
        <BannerCover
          img={BannerImg}
          head={"SALADS"}
          title={
            "Crisp romaine lettuce, Parmesan cheese, croutons, and Caesar dressing made with garlic, lemon, anchovies, and egg. Classic and tangy."
          }
        />
        <OurMenu />
        <div className="mb-12 text-center">
          <button className="font-semibold bg-transparent text-black px-6 py-3 rounded-md border-b-2 border-black">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
