import { useContext } from "react";
import { AuthContext } from "./../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/AxiosSecure/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  console.log(payments);

  return (
    <div>
      <div className="my-10">
        <SectionTitle
          subHeader="PAYMENT HISTORY"
          paraHeader="At a Glance!"
        ></SectionTitle>
      </div>
      <div className="bg-white border-2 lg:w-[990px] mx-auto">
        <div className="p-6">
          <h2 className="font-semibold text-2xl mb-4 uppercase">
            Total Payments: {payments.length}
          </h2>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-[#D1A054] text-white text-[14px]">
                <tr>
                  <th>EMAIL</th>
                  <th>TRANSACTION</th>
                  <th>TOTAL PRICE</th>
                  <th>PAYMENT DATE</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((pay) => (
                  <tr key={pay._id}>
                    <td className="text-[16px] font-semibold">
                      <h1>{pay?.email}</h1>
                    </td>
                    <td className="text-[16px] font-semibold">
                      {pay?.transactionId}
                    </td>
                    <td className="text-[16px] font-semibold">${pay?.price}</td>
                    <td className="text-[16px] font-semibold">{pay.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
