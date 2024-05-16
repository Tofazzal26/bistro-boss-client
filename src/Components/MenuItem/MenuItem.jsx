const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div>
      <div className="flex gap-6 lg:flex-row flex-col">
        <img
          style={{
            borderRadius: "0px 200px 200px 200px",
          }}
          className="w-[120px]"
          src={image}
          alt=""
        />
        <div className="space-y-2">
          <h2 className="text-xl">{name}------------------</h2>
          <p>{recipe}</p>
        </div>
        <p className="text-[#BB8506] font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
