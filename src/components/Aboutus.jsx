import React from 'react'
import office from "../assets/img/oficina.png"
import voluntariado from "../assets/img/voluntariado.jpg"
import iconoMano from "../assets/icons/icono-mano.png"
import iconoManoCorazon from "../assets/icons/icono-mano-corazon.png"
import iconoReciclar from "../assets/icons/icono-reciclar.png"
import iconoMaletin from "../assets/icons/icono-maletin.png"

const Aboutus = () => {
    return (
        <>
                  <section id="aboutus" className="section-aboutus bg-[#1C78FD] w-full grid grid-cols-1 auto-rows-auto sm:grid-cols-2 sm:justify-center sm:items-center sm:px-28 sm:py-28">
        <div className="py-4">
            <img className="px-4 rounded-md w-full h-48 sm:h-96 object-cover" src={office} alt="office"/>
        </div>
        <div className="py-4 px-2 text-white">
            <p className="text-2xl sm:text-4xl text-center">Soluciones para empresas</p>
            <br/>
            <p className="text-center">Generamos un medio para que las empresas se involucren en actividades de responsabilidad social.</p>
        </div>
        <div className="py-4 sm:col-start-2">
            <img className="px-4 rounded-md w-full h-48 sm:h-96 object-cover" src={voluntariado} alt="office"/>
        </div>
        <div className="py-4 px-2 text-white sm:col-start-1 sm:row-start-2">
            <p className="text-2xl sm:text-4xl text-center">Soluciones para organizaciones</p>
            <br/>
            <p className="text-center">Apoyamos a las organizaciones sociales para que alcancen sus objetivos. Ponemos a su disposición una comunidad de voluntarios dispuestos a apoyarlos en sus necesidades.
                Equipos de voluntarios por empresas dispuestos a potenciar tu impacto en la sociedad.</p>
        </div>
      </section>
      <section className="section-opportunities w-full bg[#fafafa] sm:flex sm:flex-col sm:items-center sm:justify-center">
        <div className="p-4 sm:pt-28 sm:px-96">
            <p className="text-2xl text-center sm:text-4xl">Encuentra las mejores oportunidades</p>
            <br/>
            <p className="text-center">La plataforma cuenta con gran variedad de proyectos locales(sociales, educativos y medioambientales), donde encontraras el que mejor se adapte a la experiencia que estas buscando.
                Te ayudamos en la coordinacion con la organizacion de forma simple y rapida.
            </p>
        </div>
        <div className="cards w-full flex flex-col sm:flex-row items-center justify-center py-4">
            <div className="card-container w-56 h-40 sm:hover:w-60 sm:hover:h-44 sm:duration-200 sm:ease-in p-4 bg-[#DC3545] rounded-2xl my-2 sm:mx-3 cursor-pointer">
                <div className="flex flex-row items-center justify-end">
                    <i className="fa-solid fa-plus text-white text-xl"></i>
                </div>
                <div className="card-icons  flex flex-row items-center">
                    <img className="w-10 h-11" src={iconoMano} alt=""/>
                </div>
                <div className="card-text mt-4">
                    <p className="text-white text-xl">Ser voluntario</p>
                </div>
            </div>
            <div className="card-container w-56 h-40 p-4 sm:hover:w-60 sm:hover:h-44 sm:duration-200 sm:ease-in bg-[#FF9C07] rounded-2xl my-2 sm:mx-3 cursor-pointer">
                <div className="flex flex-row items-center justify-end">
                    <i className="fa-solid fa-plus text-white text-xl"></i>
                </div>
                <div className="card-icons  flex flex-row items-center">
                    <img className="w-11 h-11" src={iconoManoCorazon} alt=""/>
                </div>
                <div className="card-text mt-4">
                    <p className="text-white text-xl">Donar</p>
                </div>
            </div>
            <div className="card-container w-56 h-40 p-4 sm:hover:w-60 sm:hover:h-44 sm:duration-200 sm:ease-in bg-[#28A745] rounded-2xl my-2 sm:mx-3 cursor-pointer">
                <div className="flex flex-row items-center justify-end">
                    <i className="fa-solid fa-plus text-white text-xl"></i>
                </div>
                <div className="card-icons  flex flex-row items-center">
                    <img className="w-10 h-11" src={iconoReciclar} alt=""/>
                </div>
                <div className="card-text mt-4">
                    <p className="text-white text-xl">Reciclar</p>
                </div>
            </div>
            <div className="card-container w-56 h-40 p-4 sm:hover:w-60 sm:hover:h-44 sm:duration-200 sm:ease-in bg-[#17A2B8] rounded-2xl my-2 sm:mx-3 cursor-pointer">
                <div className="flex flex-row items-center justify-end">
                    <i className="fa-solid fa-plus text-white text-xl"></i>
                </div>
                <div className="card-icons  flex flex-row items-center">
                    <img className="w-10 h-11" src={iconoMaletin} alt=""/>
                </div>
                <div className="card-text mt-4">
                    <p className="text-white text-xl">Llamados laborales</p>
                </div>
            </div>
        </div>
      </section>
        </>
    );
}

export default Aboutus;