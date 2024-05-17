import { Parallax, Background } from "react-parallax";

const BannerCover = ({ img, head, title }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
      >
        {/* <div style={{ height: "200px" }} /> */}
        <div
          className="hero "
          style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            height: "700px",
          }}
        >
          <div className="hero-overlay bg-opacity-30"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="lg:w-[800px] bg-[#15151599]">
              <div className="lg:p-0 p-4 lg:py-16">
                <h1 className="mb-5 text-5xl font-bold">{head}</h1>
                <p className="mb-5 px-4">{title}</p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default BannerCover;
