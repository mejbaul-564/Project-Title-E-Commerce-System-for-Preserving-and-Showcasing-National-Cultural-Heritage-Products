import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import styles from "./header.module.css";
import logo from "./side_logo.png";
import Button1 from "./sign_log_button/log_sign_button.js";

export default function Header() {
  return (
    <div>
      <div
        className={`grid grid-flow-col grid-rows-1 gap-4  p-3 ${styles.header}`}
      >
        {/* logo */}
        <div className="col-span-3 ">
          <div className="ml-10">
            <Image
              src={logo}
              width={40}
              height={40}
              alt="Picture of the logo"
            />
          </div>
        </div>
        {/* Search */}
        <div className="col-span-6 flex justify-center items-center ">
          <div
            className={`bg-white flex items-center px-2 rounded-md shadow ${styles.search_bar}`}
          >
            {/* Search Icon */}
            <CiSearch className="text-gray-500 mr-2 text-xl" />

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 rounded-md outline-none "
            />
          </div>
        </div>

        {/* account */}

        <div className="col-span-3 flex justify-end items-center space-x-2">
          <CgDarkMode className="text-xl text-white" />
          <IoIosNotificationsOutline className="text-xl text-white" />
          <BsCart2 className="text-xl text-white" />
          <div> </div>
          <Button1 />
        </div>
      </div>
    </div>
  );
}
