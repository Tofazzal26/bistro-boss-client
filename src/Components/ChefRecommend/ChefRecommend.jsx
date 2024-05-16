import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Salad from "../../../public/menu/salad-bg.jpg";
const ChefRecommend = () => {
  return (
    <div className="mb-12">
      <div>
        <SectionTitle subHeader={"Should Try"} paraHeader={"CHEF RECOMMENDS"} />
      </div>
      <div className="mt-12 space-y-2">
        <div className="card lg:w-96 bg-[#f3f3f3] rounded-none">
          <figure>
            <img src={Salad} alt="Salad" className="" />
          </figure>
          <div className="card-body items-center text-center space-y-2">
            <h2 className="card-title font-semibold text-2xl">Caeser Salad</h2>
            <p className="font-semibold">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions rounded-b-lg rounded-t-lg bg-[#BB8506] h-[55px] ">
              <button className="uppercase font-semibold bg-[#E8E8E8] px-6 py-3 text-lg rounded-md text-[#BB8506]">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommend;
