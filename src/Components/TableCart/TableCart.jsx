import { MdDeleteForever } from "react-icons/md";
import { LuPenSquare } from "react-icons/lu";
import useAxiosSecure from "../../hooks/AxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
const TableCart = ({ cartItem, refetch }) => {
  const { image, name, price, _id, id } = cartItem;

  const axiosSecure = useAxiosSecure();

  const handleDelete = (deleteID) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${deleteID}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </td>
        <td className="text-[16px] font-semibold">{name}</td>
        <td className="text-[16px] font-semibold">${price}</td>
        <td>
          <button className="py-2 px-4 text-white bg-[#D1A054] rounded-md">
            <LuPenSquare size={20} />
          </button>
        </td>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="py-2 px-4 text-white bg-red-500 rounded-md"
          >
            <MdDeleteForever size={22} />
          </button>
        </th>
      </tr>
    </>
  );
};

export default TableCart;
