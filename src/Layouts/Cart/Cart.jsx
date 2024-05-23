import React from "react";
import useCart from "../../hooks/useCart/useCart";
import SectionTitle from "./../../Shared/SectionTitle/SectionTitle";
import TableCart from "../../Components/TableCart/TableCart";

const Cart = () => {
  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce(
    (item, currentPrice) => item + currentPrice.price,
    0
  );

  return (
    <div>
      <div className="my-10">
        <SectionTitle subHeader={"MANAGE ALL ITEMS"} paraHeader={"Hurry Up!"} />
      </div>

      <div className="bg-white border-2 lg:w-[990px] mx-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-2xl uppercase">
              Total items: {cart.length}
            </h2>
            <h2 className="font-semibold text-2xl uppercase">
              Total Price: ${totalPrice}
            </h2>
          </div>

          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="bg-[#D1A054] text-white text-[14px]">
                  <tr>
                    <th>ITEM IMAGE</th>
                    <th>ITEM NAME</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((cartItem) => (
                    <TableCart
                      key={cartItem._id}
                      cartItem={cartItem}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
