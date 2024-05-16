const SectionTitle = ({ subHeader, paraHeader }) => {
  return (
    <div>
      <div className="text-center lg:w-[400px] mx-auto">
        <p className="text-[#D99904] text-[20px] mb-4 font-semibold">
          ---{paraHeader}---
        </p>
        <h1 className="text-[40px] border-y-4 py-2">{subHeader}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;
