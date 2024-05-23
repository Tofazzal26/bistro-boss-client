import { HiUserGroup } from "react-icons/hi2";
import { MdDeleteForever } from "react-icons/md";

const AllUserTable = ({
  allUser,
  index,
  handleDeleteUser,
  handleUserAdmin,
}) => {
  const { name, email } = allUser;

  return (
    <>
      <tr className="text-[15px] font-semibold">
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          {allUser?.role === "Admin" ? (
            "Admin"
          ) : (
            <button
              onClick={() => handleUserAdmin(allUser)}
              className="py-2 px-4 text-white bg-[#D1A054] rounded-md"
            >
              <HiUserGroup size={20} />
            </button>
          )}
        </td>
        <td>
          <button
            onClick={() => handleDeleteUser(allUser)}
            className="py-2 px-4 text-white bg-red-500 rounded-md"
          >
            <MdDeleteForever size={22} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default AllUserTable;
