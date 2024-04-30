import Fruits1 from "../../assets/fruits/fruits1.webp";
import Fruits2 from "../../assets/fruits/fruits2.png";
import Fruits3 from "../../assets/fruits/fruits3.png";

/* eslint-disable no-undef */
const ServiceData = [
  {
    id: 1,
    image: Fruits1,
    title: "میوه تازه",
    subtitle: "میوه‌ها و سبزیجات یکی از ۴ گروه اصلی غذایی هستند",
    aosDelay: "300",
  },
  {
    id: 1,
    image: Fruits2,
    title: "آب میوه تازه",
    subtitle: "میوه‌ها و سبزیجات یکی از ۴ گروه اصلی غذایی هستند",
    aosDelay: "500",
  },
  {
    id: 1,
    image: Fruits3,
    title: "پرتقال تازه",
    subtitle: "میوه‌ها و سبزیجات یکی از ۴ گروه اصلی غذایی هستند",
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      <div className="text-center max-w-lg mx-auto space-y-2">
        <h1 className="text-3xl font-bold text-dark">
          میوه های <span className="text-primary">تازه و خوشمزه</span>
          <p className="text-sm opacity-50 mt-2">
            میوه‌ها و سبزیجات یکی از ۴ گروه اصلی غذایی هستند که جایگاه ویژه‌ای
            در میان سایر مواد غذایی دارند‌. این گروه سرشار از خواص و‌ فواید
          </p>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ServiceData.map((item) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={item.aosDelay}
            className="p-4 text-center space-y-6"
          >
            <img
              src={item.image}
              alt=""
              className="max-w-[200px] mx-auto hover:scale-110 duration-300 img-shdow2"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">{item.title}</h1>
              <p className="text-dark opacity-80">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
