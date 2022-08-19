import React from "react";
import modalImg from "../assets/img/imagen-modal.JPG"
const Modal = () => {
  return (
    <>
      <div
        id="modal-container"
        className="hidden bg-black bg-opacity-60 fixed inset-0 flex items-center justify-center"
      >
        <div className="w-96 bg-[#f7f9f4] h-[720px] shadow-xl rounded-2xl flex flex-col sm:w-[800px] sm:h-[500px] sm:grid sm:grid-cols-2">
          <div className="w-full rounded-2xl sm:rounded-l-2xl">
            <div className="sm:hidden absolute flex w-96 text-white justify-between p-2">
              <div className="arrow-close flex cursor-pointer items-center">
                <i className="fa-solid fa-arrow-left mr-4 text-xl"></i>
                <p>Volver atrás</p>
              </div>
              <div className="close-button flex items-center cursor-pointer mr-2">
                <i className="fa-solid fa-xmark text-2xl"></i>
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
              <div className="arrow-close-dk sm:flex sm:justify-center sm:items-center sm:cursor-pointer">
                <i className="fa-solid fa-arrow-left sm:mr-4 sm:text-xl"></i>
                <p>Volver atrás</p>
              </div>
              <button className="close-button-dk sm:flex sm:items-center sm:cursor-pointer">
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

export default Modal;
