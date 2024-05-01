import { FaFacebook, FaGoogle, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-6" data-aos="fade-up">
            <h1 className="text-4xl font-bold">پرتقال نعناع</h1>
            <p className="text-sm max-w-[300px]">
              سروبان با شعار از قلب مزرعه همراه همیشگی شما فعالین عرصه کشاورزی
              می باشد.در هر لحظه و در هر زمان تنها با چند کلیک ساده بازار خود را
              بسازید، دانش خود را بیافزایید،
            </p>
          </div>
          <div className="space-y-6" data-aos="fade-up">
            <h1 className="text-4xl font-bold">لینک ها</h1>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#">خانه</a>
                  </li>
                  <li>
                    <a href="#">درباره ما</a>
                  </li>
                  <li>
                    <a href="#">تماس با ما</a>
                  </li>
                  <li>
                    <a href="#">پیدا کردن میوه</a>
                  </li>
                  <li>
                    <a href="#">حریم خصوصی</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#">خانه</a>
                  </li>
                  <li>
                    <a href="#">درباره ما</a>
                  </li>
                  <li>
                    <a href="#">تماس با ما</a>
                  </li>
                  <li>
                    <a href="#">پیدا کردن میوه</a>
                  </li>
                  <li>
                    <a href="#">حریم خصوصی</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-6" data-aos="fade-up">
            <h1 className="text-3xl font-bold">ما را دنبال کنید</h1>
            <div>
              <p dir="ltr" className="text-right">
                +98 909 230 12 02
              </p>
              <p>جنت آباد مرکزی خیابان چمران</p>
            </div>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />{" "}
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />{" "}
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />{" "}
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
