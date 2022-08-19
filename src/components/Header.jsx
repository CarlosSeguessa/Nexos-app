import { React, useState } from "react";
import logo from "../assets/img/logo.png";
import manos from "../assets/img/manos.jpg"
import modalImg from "../assets/img/imagen-modal.JPG"
const Header = () => {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const hamburguerMenu = document.getElementById("hamburguer-menu");
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }

    const abrirModal = () => {
        setOpenModal(true);
        // Como se puede hacer de otra forma esto
        html.classList.add('overflow-y-hidden');
        body.classList.add('overflow-y-hidden');
        hamburguerMenu.classList.add('hidden');
    }

    const cerrarModal = () => {
        setOpenModal(false);
        html.classList.remove('overflow-y-hidden');
        body.classList.remove('overflow-y-hidden');
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
          <button onClick={abrirModal} className="logindk w-[138px] h-[40px] bg-[#5227CC] sm:hover:bg-[#7749F8] sm:transition-colors sm:duration-500 sm:ease-in-out text-white rounded-3xl" >
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
      <div id="hamburguer-menu" className={`${open === true ? '' : 'hidden'} absolute w-full z-10 sm:hidden`}>
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
            <button onClick={abrirModal} className="login w-[138px] h-[40px] bg-[#5227CC] text-white rounded-3xl">
              INGRESAR
            </button>
          </div>
        </div>
      </div>
      <div className="relative bg-black">
      <img
        src={manos}
        alt="headerImage"
        className="h-[27vh] sm:h-[57vh] sm:w-full object-fill opacity-60"
      />
      <div className="absolute bottom-0 top-0 text-white w-full h-full">
        <div
          className="flex flex-col items-center justify-center h-full w-full opacity-100"
        >
          <h2 className="text-2xl sm:text-5xl font-bold">
            ¡Actúa para cambiar el mundo!
          </h2>
          <br />
          <p className="text-center">
            Fomentamos el vínculo entre empresas y organizaciones civiles para
            generar un impacto positivo en la sociedad.
          </p>
          <p className="text-center">
            Descubri diferentes maneras de involucrar tu organización con la
            sociedad.
          </p>
        </div>
      </div>
    </div>
    <div
        id="modal-container"
        className={`${openModal === true ? '' : 'hidden'} bg-black bg-opacity-60 fixed inset-0 flex items-center justify-center`}
      >
        <div className="w-96 bg-[#f7f9f4] h-[720px] shadow-xl rounded-2xl flex flex-col sm:w-[800px] sm:h-[500px] sm:grid sm:grid-cols-2">
          <div className="w-full rounded-2xl sm:rounded-l-2xl">
            <div className="sm:hidden absolute flex w-96 text-white justify-between p-2">
              <div onClick={cerrarModal} className="arrow-close flex cursor-pointer items-center">
                <i className="fa-solid fa-arrow-left mr-4 text-xl"></i>
                <p>Volver atrás</p>
              </div>
              <div className="close-button flex items-center cursor-pointer mr-2">
                <i onClick={cerrarModal} className="fa-solid fa-xmark text-2xl"></i>
              </div>
            </div>
            <img
              src={modalImg}
              alt="modal img"
              className="w-full h-96 object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-r-none sm:h-[500px]"
            />
          </div>
          <div>
            <div className="hidden sm:w-[360px] sm:flex sm:h-5 sm:m-5 sm:justify-between">
              <div onClick={cerrarModal} className="arrow-close-dk sm:flex sm:justify-center sm:items-center sm:cursor-pointer">
                <i className="fa-solid fa-arrow-left sm:mr-4 sm:text-xl"></i>
                <p>Volver atrás</p>
              </div>
              <button onClick={cerrarModal} className="close-button-dk sm:flex sm:items-center sm:cursor-pointer">
                <i className="fa-solid fa-xmark sm:text-xl"></i>
              </button>
            </div>
            <div className="mt-2 w-full h-6 flex justify-center items-center sm:col-start-2">
              <h3 className="text-2xl font-bold">REGISTRAR</h3>
            </div>
            <div className="w-full px-4">
              <div className="flex flex-row w-[350px] h-32 bg-white mt-3 rounded-2xl shadow-xl sm:mt-16 sm:w-full">
                <div className="bg-[#5298FF] w-[98px] rounded-l-2xl flex items-center justify-center">
                  <i className="fa-solid fa-briefcase text-white text-2xl"></i>
                </div>
                <div className="w-full flex flex-col py-5 px-6 sm:p-6 justify-center">
                  <p className="text-2xl text-[#5298FF] font-bold">
                    MI EMPRESA
                  </p>
                  <p>Breve explicación a lo que nos referimos</p>
                  <div className="w-full flex justify-end">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-[350px] h-32 bg-white mt-3 rounded-2xl shadow-xl sm:mx-0 sm:w-full">
                <div className="bg-[#7749F8] w-[98px] rounded-l-2xl flex items-center justify-center">
                  <i className="fa-solid fa-user-large text-white text-2xl"></i>
                </div>
                <div className="w-full flex flex-col py-5 px-6">
                  <p className="text-2xl text-[#7749F8] font-bold">
                    MI ORGANIZACIÓN
                  </p>
                  <p>Estamos para ayudarlos a tener exito.</p>
                  <div className="w-full flex justify-end">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
