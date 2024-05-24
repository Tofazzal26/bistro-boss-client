import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { TbToolsKitchen3 } from "react-icons/tb";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const category = data.category;
    const price = data.price;
    const details = data.details;
    console.log(name, category, price, details);
  };

  return (
    <div>
      <div>
        <div className="my-10">
          <SectionTitle
            subHeader={"ADD AN ITEM"}
            paraHeader={"What's new?"}
          ></SectionTitle>
        </div>
        <div className="px-4 lg:px-24">
          <div className="p-8 space-y-3 bg-[#F3F3F3]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate=""
              action=""
              className="space-y-6"
            >
              <div className="space-y-2 text-sm">
                <label
                  htmlFor="username"
                  className="block text-black font-semibold text-base"
                >
                  Recipe Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Username"
                  {...register("name", { required: true })}
                  className="w-full px-4 py-3 font-semibold text-sm rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-black font-semibold text-base mb-2"
                  >
                    Category
                  </label>
                  <select
                    {...register("category", { required: true })}
                    name="category"
                    className="select select-bordered border-none text-gray-600 bg-[#f9fafb] font-semibold text-base w-full"
                  >
                    <option disabled selected>
                      Category
                    </option>
                    <option value={"Salad"}>Salad</option>
                    <option value={"Pizza"}>Pizza</option>
                    <option value={"Soup"}>Soup</option>
                    <option value={"Dessert"}>Dessert</option>
                    <option value={"Drinks"}>Drinks</option>
                  </select>
                </div>
                <div>
                  <div className="space-y-2 text-sm">
                    <label
                      htmlFor="username"
                      className="block text-black font-semibold text-base"
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      name="price"
                      id="npriceame"
                      placeholder="Price"
                      {...register("price", { required: true })}
                      className="w-full px-4 py-3 font-semibold text-sm rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    />
                    {errors.price && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <textarea
                {...register("details", { required: true })}
                className="textarea textarea-bordered border-none w-full font-semibold lg:h-[250px]"
                placeholder="Recipe Details"
              ></textarea>
              {errors.details && (
                <span className="text-red-500">This field is required</span>
              )}
              <button className="bg-[#b07e2f] px-6 py-3 flex items-center gap-2 text-white font-semibold">
                Add Item <TbToolsKitchen3 size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
