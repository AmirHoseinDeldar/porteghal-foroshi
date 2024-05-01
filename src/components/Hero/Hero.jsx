import { useState } from "react";
import OrangeImg from "../../assets/orangebg.png";
import Navbar from "../Navbar/Navbar";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
const Hero = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <main className="md:px-12 md:py-6 bg-primaryDark">
      <section className="relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
        <div className="container">
          <Navbar sideBar={sideBar} setSideBar={setSideBar} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[650px]">
            <div className="text-white mt-[100px] md:mt-0 p-4 space-y-6">
              <h1 data-aos="fade-up" className="text-3xl pr-6 md:pr-14">
                01___
              </h1>
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-bold text-shadow"
              >
                میوه ای از سلامتی
              </h1>
              <p data-aos="fade-up" data-aos-delay="500" className="text-sm">
                میوه‌ها و سبزیجات یکی از ۴ گروه اصلی غذایی هستند که جایگاه
                ویژه‌ای در میان سایر مواد غذایی دارند‌. این گروه سرشار از خواص
                و‌ فواید متعدد هستند که مصرف آنها برای حفظ سلامت بدن توصیه
                می‌شود
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="700"
                className="primary-btn"
              >
                {" "}
                همین الان خرید کنید
              </button>
            </div>
            <div data-aos="zoom-in">
              <img
                src={OrangeImg}
                alt="عکسی وجود ندارد"
                className="relative z-10 w-[400px] img-shadow"
              />
            </div>
            <div className="md:hidden"></div>
          </div>
        </div>

        <h1
          data-aos="fade"
          data-aos-delay="700"
          data-aos-duration="1800"
          className="larger-text"
        >
          پرتقال
        </h1>

        {sideBar && (
          <div className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10">
            <div className="w-full h-full flex justify-center items-center">
              <div className="text-white flex flex-col justify-center items-center gap-6">
                <div className="w-[1px] h-[70px] bg-white"> </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaLinkedinIn className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
