const HeadCover = ({ img, title, head }) => {
  return (
    <div>
      <div
        className="hero min-h-[700px]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="lg:w-[800px] bg-[#15151599]">
            <div className="lg:p-0 p-4 lg:py-16">
              <h1 className="mb-5 text-5xl font-bold">{head}</h1>
              <p className="mb-5">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadCover;
