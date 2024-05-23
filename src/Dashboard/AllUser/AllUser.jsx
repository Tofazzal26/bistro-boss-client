import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/AxiosSecure/useAxiosSecure";
import AllUserTable from "./AllUserTable/AllUserTable";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const handleUserAdmin = (admin) => {
    axiosSecure.patch(`/users/admin/${admin._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
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
    <div>
      <div className="my-10">
        <SectionTitle
          subHeader={"MANAGE ALL USERS"}
          paraHeader={"How Many??"}
        />
      </div>
      <div>
        <div className="bg-white border-2 lg:w-[990px] mx-auto">
          <div className="p-6">
            <div className="mb-4">
              <h2 className="font-semibold text-2xl uppercase">
                Total users: {users.length}
              </h2>
            </div>

            <div>
              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  {/* head */}
                  <thead>
                    <tr className="text-[14px] font-semibold bg-[#d1a054] text-white">
                      <th></th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((allUser, index) => (
                      <AllUserTable
                        key={allUser._id}
                        allUser={allUser}
                        index={index}
                        handleDeleteUser={handleDeleteUser}
                        handleUserAdmin={handleUserAdmin}
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

export default AllUser;
