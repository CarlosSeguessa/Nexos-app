import { React, useState } from "react";
import logo from "../assets/img/logo.png";
import Modal from "./Modal"
const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
  return (
    <>
      <header className="flex flex-row h-[10vh] w-full bg-white items-center px-5 sm:px-32">
        <img src={logo} alt="Logo" className="w-[200px] h-[30px] sm:h-[30px]" />
        <nav className="hidden sm:flex justify-center">
          <ul className="sm:w-[600px] flex flex-row items-center justify-center">
            <li className="w-[120px] h-[40px] flex items-center justify-center font-bold hover:underline">
              <a href="#aboutus">Nosotros</a>
            </li>
            <li className="w-[120px] h-[40px] flex items-center justify-center font-bold hover:underline">
              <a href="#section-news">Noticias</a>
            </li>
            <li className="w-[120px] h-[40px] flex items-center justify-center font-bold hover:underline">
              <a href="#section-contact">Ayuda</a>
            </li>
          </ul>
        </nav>
        <div className="hidden sm:flex w-full sm:justify-end">
          <button className="logindk w-[138px] h-[40px] bg-[#5227CC] sm:hover:bg-[#7749F8] sm:transition-colors sm:duration-500 sm:ease-in-out text-white rounded-3xl">
            INGRESAR
          </button>
        </div>
        <div className="w-full flex justify-end items-center text-[40px] mr-[20px] sm:hidden">
          <i
          onClick={handleOpen}
            id="hamburguer-button"
            className="fa-solid fa-bars cursor-pointer"
          ></i>
        </div>
      </header>
      <div id="hamburguer-menu" className={`${open === true ? '' : 'hidden'}      absolute w-full z-10 sm:hidden`}>
        <div className=" h-60 bg-white shadow-xl rounded-b-2xl w-full">
          <ul className="w-full flex flex-col items-center justify-center">
            <li className="w-[120px] h-[40px] flex items-center justify-center font-bold my-2 sm:hover:underline">
              <a id="aboutusmb" href="#aboutus">
                Nosotros
              </a>
            </li>
            <li className="w-[120px] h-[40px] flex items-center justify-center font-bold my-2 sm:hover:underline">
              <a id="news" href="#section-news">
                Noticias
              </a>
            </li>
            <li className="w-[120px] h-[40px] flex items-center justify-center font-bold my-2 sm:hover:underline">
              <a id="help" href="#section-contact">
                Ayuda
              </a>
            </li>
          </ul>
          <div className="w-full flex items-center justify-center my-2">
            <button className="login w-[138px] h-[40px] bg-[#5227CC] text-white rounded-3xl">
              INGRESAR
            </button>
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
};

export default Header;
