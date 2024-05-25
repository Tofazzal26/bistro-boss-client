import { LuPenSquare } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";

const ManageTable = ({ manageItem, index, handleItemDelete }) => {
  const { image, name, price, _id } = manageItem;

  return (
    <>
      <tr>
        <td className="text-[16px] font-semibold">{index + 1}</td>
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
            onClick={() => handleItemDelete(_id)}
            className="py-2 px-4 text-white bg-red-500 rounded-md"
          >
            <MdDeleteForever size={22} />
          </button>
        </th>
      </tr>
    </>
  );
};

export default ManageTable;
