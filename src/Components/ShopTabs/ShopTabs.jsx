import ShopCart from "../ShopCart/ShopCart";

const ShopTabs = ({ ItemsTabs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {ItemsTabs.map((items) => (
        <ShopCart key={items._id} items={items} />
      ))}
    </div>
  );
};

export default ShopTabs;
