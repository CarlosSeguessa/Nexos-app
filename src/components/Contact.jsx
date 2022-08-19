import React from 'react'
import laptop from "../assets/img/laptop-escritorio.jpg"
const Contact = () => {
    return (
        <>
        <section id="section-contact" className="w-full bg-[#fafafa] grid grid-cols-1 auto-cols-max p-2 sm:grid-cols-2 sm:p-24">
        <div className="flex justify-center items-center sm:hidden">
            <p className="font-bold text-2xl m-4">Contacto</p>
        </div>
        <div className="sm:col-start-1 sm:row-start-1">
            <img className="sm:w-full sm:object-cover sm:h-96" src={laptop} alt="Manos sobre laptop"/>
        </div>
        <div className="sm:w-full sm:flex sm:flex-col sm:justify-center">
          <div className="hidden sm:flex sm:justify-center sm:items-center">
            <p className="font-bold text-2xl sm:text-6xl m-4">Contacto</p>
          </div>
          <div className="sm:w-full sm:flex sm:flex-row sm:justify-center">
          <div className="sm:flex sm:flex-col sm:justify-center">
            <div className="flex flex-col justify-center items-center m-5 sm:items-start">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" placeholder="Nombre" className="w-80 h-10 border-2 border-black rounded-2xl px-2" />
            </div>
            <div className="flex flex-col justify-center items-center m-5 sm:items-start">
                <label htmlFor="name">Email</label>
                <input type="text" name="name" placeholder="Email" className="w-80 h-10 border-2 border-black rounded-2xl px-2" />
            </div>
          </div>
            <div className="flex flex-col justify-center items-center sm:items-start m-5 sm:h-56">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea name="mensaje" cols="30" rows="10" placeholder="Mensaje" className="w-80 h-20  sm:h-40 p-3 border-2 border-black rounded-2xl"></textarea>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button className="w-40 bg-[#5227CC] text-white rounded-lg h-8 sm:hover:bg-[#7749F8] sm:transition-colors sm:duration-500 sm:ease-in-out">Enviar</button>
          </div>
        </div>
      </section>
        </>
    );
}

export default Contact;