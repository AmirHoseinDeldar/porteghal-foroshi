import bannerImg from "../../assets/website/banner.jpg";
import PlayStore from "../../assets/website/play_store.png";
import AppStore from "../../assets/website/app_store.png";

const bannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};
const AppBanner = () => {
  return (
    <>
      <div className="container my-14">
        <div
          className="sm:min-h-[400px] sm:flex sm:justify-start sm:items-center rounded-xl"
          style={bannerStyle}
        >
          <div>
            <div className="space-y-6 max-w-xl mx-auto">
              <h1 className="text-2xl text-center sm:text-4xl font-semibold">
                دانلود برنامه
              </h1>
              <p
                className="text-center sm:px-28 hidden sm:inline-block "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                میوه‌ها و سبزیجات یکی از ۴ گروه اصلی غذایی هستند که جایگاه
                ویژه‌ای در میان سایر مواد غذایی دارند‌.
              </p>
              <div className="flex justify-center items-center gap-3">
                <a href="#">
                  <img
                    src={PlayStore}
                    alt="playstore"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[180px]"
                  />
                </a>{" "}
                <a href="#">
                  <img
                    src={AppStore}
                    alt="AppStore"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[180px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBanner;
