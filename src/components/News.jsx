import React from "react";

const News = () => {
  return (
    <>
      <section id="section-news" className="w-full bg-[#1C78FD] py-5 h-screen">
        <div className=" text-white text-6xl text-center pt-8">
          <p className="">Noticias</p>
        </div>
        <div className=" text-white underline text-center">
          <p>ver mas</p>
        </div>
        {/* <!--primera noticias--> */}
        <div className="mx-10 sm:flex sm:justify-center">
          <div className="bg-white h-[480px] mx-3 rounded-lg mt-4 sm:w-[400px] sm:h-[590px] sm:mx-4 sm:mt-10">
            <div>
              <div className="absolute flex ml-3 bg-[#5227CC] text-white rounded-full w-[55px] justify-center mt-[150px] sm:mt-[220px]">
                <p>salud</p>
              </div>
              <img
                className="rounded-lg"
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <img
                  src="../assets/icons/icono-calendario.png"
                  className="ml-2"
                  alt=""
                />
                <p className="ml-2">16/08/2022</p>
              </div>
              <div className="flex items-center">
                <img
                  src="../assets/icons/icono-reloj.png"
                  className="mr-2"
                  alt=""
                />
                <p className="mr-2">4 min</p>
              </div>
            </div>
            <div>
              <p className="font-bold ml-2 mt-4 sm:mt-10 sm:text-2xl">
                Consejos para mejorar tu rutina!
              </p>
              <p className="ml-2 mt-6 sm:mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                quas similique voluptas temporibus beatae ipsa voluptatibus quod
                repellendus.
              </p>
            </div>
            <div className="flex w-full items-center justify-end sm:mt-12">
              <i className="fa-solid fa-arrow-right"></i>
              <p className="underline ml-2 mr-4">ver mas</p>
            </div>
          </div>
          {/* <!--segunda noticia--> */}
          <div className="hidden sm:flex sm:flex-col bg-white h-[480px] mx-3 rounded-lg mt-4 sm:w-[400px] sm:h-[590px] sm:mx-4  sm:mt-10">
            <div>
              <div className="absolute flex mt-[190px] ml-3 bg-[#5227CC] text-white rounded-full w-[90px] justify-center sm:mt-[220px]">
                <p>economia</p>
              </div>
              <img
                className="rounded-lg"
                src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <img
                  src="../assets/icons/icono-calendario.png"
                  className="ml-2"
                  alt=""
                />
                <p className="ml-2">16/08/2022</p>
              </div>
              <div className="flex items-center">
                <img
                  src="../assets/icons/icono-reloj.png"
                  className="mr-2"
                  alt=""
                />
                <p className="mr-2">4 min</p>
              </div>
            </div>
            <div>
              <p className="font-bold ml-2 mt-4 sm:mt-10 sm:text-2xl">
                Tips para ahorra mas!
              </p>
              <p className="ml-2 mt-6 sm:mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                quas similique voluptas temporibus beatae ipsa voluptatibus quod
                repellendus.
              </p>
            </div>
            <div className="flex w-full items-center justify-end sm:mt-12">
              <i className="fa-solid fa-arrow-right"></i>
              <p className="underline ml-2 mr-4">ver mas</p>
            </div>
          </div>
          {/* <!--tercera noticia--> */}
          <div className="hidden sm:flex sm:flex-col bg-white h-[480px] mx-3 rounded-lg mt-4 sm:w-[400px] sm:h-[590px] sm:mx-4  sm:mt-10">
            <div>
              <div className="absolute flex mt-[190px] ml-3 bg-[#5227CC] text-white rounded-full w-[90px] justify-center sm:mt-[220px]">
                <p>comida</p>
              </div>
              <img
                className="rounded-lg w-[400px] h-[265px]"
                src="https://placeralplato.com/files/2015/07/pastaflora-640x480.jpg?width=1200&enable=upscale"
                alt=""
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <img
                  src="../assets/icons/icono-calendario.png"
                  className="ml-2"
                  alt=""
                />
                <p className="ml-2">16/08/2022</p>
              </div>
              <div className="flex items-center">
                <img
                  src="../assets/icons/icono-reloj.png"
                  className="mr-2"
                  alt=""
                />
                <p className="mr-2">4 min</p>
              </div>
            </div>
            <div>
              <p className="font-bold ml-2 mt-4 sm:mt-10 sm:text-2xl">
                Pastaflora es mejor que jesuitas
              </p>
              <p className="ml-2 mt-6 sm:mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                quas similique voluptas temporibus beatae ipsa voluptatibus quod
                repellendus.
              </p>
            </div>
            <div className="flex w-full items-center justify-end sm:mt-12">
              <i className="fa-solid fa-arrow-right"></i>
              <p className="underline ml-2 mr-4">ver mas</p>
            </div>
          </div>
          {/* <!--cuarta noticia--> */}
          <div className=" hidden sm:flex sm:flex-col bg-white h-[480px] mx-3 rounded-lg mt-4 sm:w-[400px] sm:h-[590px] sm:mx-4 sm:mt-10">
            <div>
              <div className="absolute flex mt-[190px] ml-3 bg-[#5227CC] text-white rounded-full w-[90px] justify-center sm:mt-[220px]">
                <p>mascota</p>
              </div>
              <img
                className="rounded-lg w-[400px] h-[265px]"
                src="https://www.infobae.com/new-resizer/dZXU2DYcutJcSYrQybriQzTVZgY=/1200x900/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/MJ7WLFDBIBDATHKJGSJQI6N5XE.jpg"
                alt=""
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <img
                  src="../assets/icons/icono-calendario.png"
                  className="ml-2"
                  alt=""
                />
                <p className="ml-2">16/08/2022</p>
              </div>
              <div className="flex items-center">
                <img
                  src="../assets/icons/icono-reloj.png"
                  className="mr-2"
                  alt=""
                />
                <p className="mr-2">4 min</p>
              </div>
            </div>
            <div>
              <p className="font-bold ml-2 mt-4 sm:mt-10 sm:text-2xl">
                Consejos para cuidar tu mascota
              </p>
              <p className="ml-2 mt-6 sm:mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                quas similique voluptas temporibus beatae ipsa voluptatibus quod
                repellendus.
              </p>
            </div>
            <div className="flex w-full items-center justify-end sm:mt-12">
              <i className="fa-solid fa-arrow-right"></i>
              <p className="underline ml-2 mr-4">ver mas</p>
            </div>
          </div>
        </div>
        {/* <!--contenedor de los puntitos--> */}
        <div className="flex w-full items-center justify-center mt-4">
          <div>
            <i className="fa-solid fa-circle  text-[#c1c5c1] text-3xl"></i>
          </div>
          <div className="mx-3">
            <i className="fa-solid fa-circle text-[#c1c5c1] text-3xl"></i>
          </div>
          <div>
            <i className="fa-solid fa-circle text-[#c1c5c1] text-3xl"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
