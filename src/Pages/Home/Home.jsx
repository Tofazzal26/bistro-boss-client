import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import BistroBoss from "../../Components/BistroBoss/BistroBoss";
import CallUs from "../../Components/CallUs/CallUs";
import Category from "../../Components/Category/Category";
import ChefRecommend from "../../Components/ChefRecommend/ChefRecommend";
import FeatureMenu from "../../Components/FeatureMenu/FeatureMenu";
import OurMenu from "../../Components/OurMenu/OurMenu";
import Testimonials from "../../Components/Testimonials/Testimonials";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <BistroBoss />
      <OurMenu />
      <CallUs />
      <ChefRecommend />
      <FeatureMenu />
      <Testimonials />
    </div>
  );
};

export default Home;
