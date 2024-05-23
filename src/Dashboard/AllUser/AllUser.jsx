import { useQueries, useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/AxiosSecure/useAxiosSecure";
import AllUserTable from "./AllUserTable/AllUserTable";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

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
