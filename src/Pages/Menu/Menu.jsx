import { Helmet } from "react-helmet-async";
import HeadCover from "../../Components/HeadCover/HeadCover";
import HeadImg from "../../../public/menu/banner3.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import OurMenu from "../../Components/OurMenu/OurMenu";
import BannerCover from "../../Components/BannerCover/BannerCover";
import BannerImg from "../../../public/home/chef-service.jpg";
import useMenu from "../../hooks/MenuHook/useMenu";
import MenuItem from "../../Components/MenuItem/MenuItem";
import PizzaImg from "../../../public/reservation/category-pizza.jpg";
import SaladImg from "../../../public/menu/salad-bg.jpg";
import SoupImg from "../../../public/menu/soup-bg.jpg";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  const [ourMenu] = useMenu();

  const offer = ourMenu.filter((item) => item.category === "offered");
  const pizza = ourMenu.filter((item) => item.category === "pizza");
  const Dessert = ourMenu.filter((item) => item.category === "dessert");
  const salads = ourMenu.filter((item) => item.category === "salad");
  const soups = ourMenu.filter((item) => item.category === "soup");

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

      <div>
        <div className="my-12">
          <SectionTitle
            subHeader={"TODAY'S OFFER"}
            paraHeader={"Don't miss "}
          ></SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offer.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="my-12 text-center">
          <button className="font-semibold bg-transparent text-black px-6 py-3 rounded-md border-b-2 border-black">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </div>

      <div>
        <div>
          <HeadCover
            img={BannerImg}
            title={
              "Indulge in the decadent pleasure of a Chocolate Lava Cake, where a delicate, slightly crisp outer shell gives way to a warm,"
            }
            head={"DESSERTS"}
          />
        </div>
        <div>
          <div className="my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Dessert.map((item) => (
                <MenuItem key={item._id} item={item}></MenuItem>
              ))}
            </div>
            <div className="my-12 text-center">
              <NavLink to={`/ourShop/${"dessert"}`}>
                <button className="font-semibold bg-transparent text-black px-6 py-3 rounded-md border-b-2 border-black">
                  ORDER YOUR FAVOURITE FOOD
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div>
          <div>
            <HeadCover
              img={PizzaImg}
              title={
                "Savor the simplicity of a Margherita Pizza, featuring a thin, crispy crust topped with rich tomato sauce, fresh mozzarella cheese"
              }
              head={"PIZZA"}
            />
          </div>
          <div>
            <div className="my-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pizza.map((item) => (
                  <MenuItem key={item._id} item={item}></MenuItem>
                ))}
              </div>
              <div className="my-12 text-center">
                <NavLink to={`/ourShop/${"pizza"}`}>
                  <button className="font-semibold bg-transparent text-black px-6 py-3 rounded-md border-b-2 border-black">
                    ORDER YOUR FAVOURITE FOOD
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <HeadCover
              img={SaladImg}
              title={
                "Enjoy the classic Caesar Salad, featuring crisp romaine lettuce tossed with creamy Caesar dressing, crunchy garlic croutons"
              }
              head={"SALADS"}
            />
          </div>
          <div>
            <div className="my-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {salads.map((item) => (
                  <MenuItem key={item._id} item={item}></MenuItem>
                ))}
              </div>
              <div className="my-12 text-center">
                <NavLink to={`/ourShop/${"salad"}`}>
                  <button className="font-semibold bg-transparent text-black px-6 py-3 rounded-md border-b-2 border-black">
                    ORDER YOUR FAVOURITE FOOD
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <HeadCover
              img={SoupImg}
              title={
                "Warm up with a bowl of Tomato Basil Soup, where ripe tomatoes are simmered to perfection with fresh basil garlic"
              }
              head={"SOUPS"}
            />
          </div>
          <div>
            <div className="my-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {soups.map((item) => (
                  <MenuItem key={item._id} item={item}></MenuItem>
                ))}
              </div>
              <div className="my-12 text-center">
                <NavLink to={`/ourShop/${"soup"}`}>
                  <button className="font-semibold bg-transparent text-black px-6 py-3 rounded-md border-b-2 border-black">
                    ORDER YOUR FAVOURITE FOOD
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
