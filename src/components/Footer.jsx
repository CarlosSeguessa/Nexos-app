import React from "react";
import whiteLogo from "../assets/img/logo-blanco.png"
const Footer = () => {
  return (
    <>
      <footer className="w-full flex flex-col border-t-8 border-[#5227CC] bg-gradient-to-r from-[#7749F8] to-[#5227CC] rounded-b-lg">
        <section className="sm:grid sm:grid-cols-5">
          <div>
            <div className="p-4 sm:col-start-1">
              <a href="home">
                <img
                  className="sm:pl-44"
                  src={whiteLogo}
                  alt=" logo blanco"
                />
              </a>
            </div>
          </div>
          <div className="w-full sm:col-start-2">
            <ul className="text-white flex sm:flex-col">
              <li className="mx-2 underline text-sm sm:no-underline">
                <a href="#aboutus">Nosotros</a>
              </li>
              <li className="mx-2 underline text-sm sm:no-underline">
                <a href="#section-news">Noticias</a>
              </li>
              <li className="mx-2 underline text-sm sm:no-underline">
                <a href="#section-contact">Contacto</a>
              </li>
              <li className="sm:mx-2 underline text-sm sm:no-underline">
                <a href="terms">Terminos y condiciones</a>
              </li>
            </ul>
          </div>
          <div className="flex w-full items-center justify-center text-white flex-col sm:col-start-5">
            <div>
              <h3>Seguinos!</h3>
            </div>
            <div className="flex w-full flex-row justify-center items-center">
              <a href="facebook">
                <i className="fa-brands fa-facebook text-xl"></i>
              </a>
              <a href="twitter">
                <i className="fa-brands fa-twitter mx-5 sm:mx-2 text-xl"></i>
              </a>
              <a href="instagram">
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          <div className="flex w-full justify-center items-center border-t-2 border-white h-10 sm:col-span-5 sm:mt-4">
            <p>Copyright 2022 © NEXOS</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
