import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featureImg from "../../../public/home/featured.jpg";
import "./FeatureMenu.css";

const FeatureMenu = () => {
  return (
    <div className="feature-content mb-12">
      <div className="lg:py-20 px-6 py-4 lg:px-36">
        <div className="space-y-12">
          <div>
            <SectionTitle
              subHeader={"OUR FEATURE MENU"}
              paraHeader={"Check it out"}
              changeColor={true}
            />
          </div>
          <div className="flex lg:flex-row flex-col items-center text-white gap-12">
            <div>
              <img className="w-[650px]" src={featureImg} alt="" />
            </div>
            <div className="space-y-2">
              <p className="text-[24px]">March 20, 2023</p>
              <h2 className="text-[24px]">WHERE CAN I GET SOME?</h2>
              <p className="text-lg mx-auto lg:w-[600px]">
                A public eating establishment similar to a restaurant is
                mentioned in a 512 BC record from Ancient Egypt. It served only
                one dish, a plate of cereal, wildfowl, and onions
              </p>
              <div>
                <button className="font-semibold bg-transparent text-white px-6 py-3 rounded-md border-b-2">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureMenu;
