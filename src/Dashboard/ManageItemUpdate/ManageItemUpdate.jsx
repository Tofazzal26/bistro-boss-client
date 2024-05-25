import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/AxiosSecure/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { TbToolsKitchen3 } from "react-icons/tb";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const ManageItemUpdate = () => {
  const { name, category, image, price, recipe, _id } = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const name = data.name;
    const category = data.category;
    const price = data.price;
    const details = data.details;
    const image = data.image[0];
    const formData = new FormData();
    formData.append(`image`, image);

    const res = await axiosPublic.post(image_hosting_api, formData, {
      headers: {
        "content-type": "multipart/from-data",
      },
    });

    if (res.data.success) {
      const ItemMenu = {
        name: name,
        recipe: details,
        price: price,
        image: res.data.data.display_url,
        category: category,
      };
      const item = await axiosSecure.patch(`/menu/${_id}`, ItemMenu);
      if (item.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} is updated`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      console.log(item.data);
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl text-center font-semibold my-12">
          UPDATE ITEM
        </h1>
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
                defaultValue={name}
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
                  defaultValue={category}
                  {...register("category", { required: true })}
                  required
                  name="category"
                  className="select select-bordered border-none text-gray-600 bg-[#f9fafb] font-semibold text-base w-full"
                >
                  <option disabled value={"default"}>
                    Category
                  </option>
                  <option value={"salad"}>salad</option>
                  <option value={"pizza"}>pizza</option>
                  <option value={"soup"}>soup</option>
                  <option value={"dessert"}>dessert</option>
                  <option value={"drinks"}>drinks</option>
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
                    type="number"
                    name="price"
                    defaultValue={price}
                    placeholder="Price"
                    {...register("price", { required: true })}
                    className="w-full px-4 py-3 font-semibold text-sm rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  />
                  {errors.price && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
            </div>
            <textarea
              {...register("details", { required: true })}
              defaultValue={recipe}
              className="textarea textarea-bordered border-none w-full font-semibold lg:h-[250px]"
              placeholder="Recipe Details"
            ></textarea>
            {errors.details && (
              <span className="text-red-500">This field is required</span>
            )}
            <div>
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
              {errors.file && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <button className="bg-[#b07e2f] px-6 py-3 flex items-center gap-2 text-white font-semibold">
              Update Recipe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageItemUpdate;
