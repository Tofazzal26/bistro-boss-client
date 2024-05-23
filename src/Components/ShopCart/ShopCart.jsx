import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../hooks/AxiosSecure/useAxiosSecure";
import useCart from "../../hooks/useCart/useCart";
const ShopCart = ({ items }) => {
  const { name, image, price, recipe, _id } = items;

  const [, refetch] = useCart();

  const { user } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const axiosSecure = useAxiosSecure();

  const handleAddCart = (product) => {
    if (user && user?.email) {
      const userItems = {
        email: user.email,
        id: _id,
        name,
        image,
        price,
      };

      axiosSecure.post(`/carts`, userItems).then((result) => {
        console.log(result.data);
        if (result.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} "added to your cart"`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Are you not Logged In",
        text: "Please login to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
    console.log(product);
  };

  return (
    <div className="space-y-2 ">
      <div className="card bg-[#f3f3f3] rounded-none h-full">
        <figure className="relative">
          <img src={image} alt="Salad" className="w-full" />
          <div className="bg-red-500 absolute right-6 top-6">
            <p className="text-white px-6 font-semibold py-2">${price}</p>
          </div>
        </figure>
        <div className="card-body items-center text-center space-y-2">
          <h2 className="card-title font-semibold text-2xl">{name}</h2>
          <p className="font-semibold">{recipe}</p>
          <div className="card-actions rounded-b-lg rounded-t-lg bg-[#BB8506] h-[55px] ">
            <button
              onClick={() => handleAddCart(items)}
              className="uppercase font-semibold bg-[#E8E8E8] px-6 py-3 text-lg rounded-md text-[#BB8506]"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
