import { GiHamburgerMenu } from "react-icons/gi";

// eslint-disable-next-line react/prop-types
const Navbar = ({ sideBar, setSideBar }) => {
  return (
    <div className="absolute top-0 right-0 w-full py-2 text-white z-20">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">
            پرتقال <span className="font-normal text-2xl">نعناع</span>
          </h1>

          <ul className="lg:flex hidden  text-xl gap-6">
            <li>
              <a href="#" className="hover:text-black font-bold">
                خانه
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black font-bold">
                آدرس ما
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black font-bold">
                تماس با ما
              </a>
            </li>
          </ul>
          <div onClick={() => setSideBar(!sideBar)}>
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
