import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/AxiosSecure/useAxiosSecure";
import useMenu from "../../hooks/MenuHook/useMenu";
import ManageTable from "./ManageTable";
import Swal from "sweetalert2";
const ManageAllItems = () => {
  const [ourMenu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleItemDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${id}`);
        console.log(res.data);

        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "Success",
          });
        }
      }
    });
  };

  return (
    <div>
      <div className="my-10">
        <SectionTitle subHeader={"MANAGE ALL ITEMS"} paraHeader={"Hurry Up"} />
      </div>
      <div>
        <div className="bg-white border-2 lg:w-[990px] mx-auto">
          <div className="p-6">
            <h2 className="font-semibold text-2xl uppercase mb-4">
              Total items: {ourMenu.length}
            </h2>

            <div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead className="bg-[#D1A054] text-white text-[14px]">
                    <tr>
                      <th>Serial</th>
                      <th>ITEM IMAGE</th>
                      <th>ITEM NAME</th>
                      <th>PRICE</th>
                      <th>ACTION</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ourMenu.map((manageItem, index) => (
                      <ManageTable
                        key={manageItem._id}
                        manageItem={manageItem}
                        index={index}
                        handleItemDelete={handleItemDelete}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllItems;
