import Banner from "../../Components/Banner/Banner";
import BistroBoss from "../../Components/BistroBoss/BistroBoss";
import CallUs from "../../Components/CallUs/CallUs";
import Category from "../../Components/Category/Category";
import ChefRecommend from "../../Components/ChefRecommend/ChefRecommend";
import FeatureMenu from "../../Components/FeatureMenu/FeatureMenu";
import OurMenu from "../../Components/OurMenu/OurMenu";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
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
