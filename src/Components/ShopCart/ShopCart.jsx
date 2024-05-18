const ShopCart = ({ items }) => {
  const { name, image, price, recipe } = items;

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
            <button className="uppercase font-semibold bg-[#E8E8E8] px-6 py-3 text-lg rounded-md text-[#BB8506]">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
