import { useEffect, useState } from "react";


export default function LayananSec1(){
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Delay dikit biar smooth
}, []);

return(
      <div className="relative w-full min-h-[30vh] lg:h-[350px] flex ">
          {/* Background Image */}
          <div className="absolute inset-0 bg-stone-400">
              <img src={"src/assets/images/jumbotron.jpeg"} alt="Background" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="content-center lg:p-8 md:p-10 p-10 z-10 text-white text-left md:text-left  max-w-5xl  ">
            <h1 className={`text-4xl md:text-5xl lg:text-7xl font-semibold text-white drop-shadow-[3px_5px_2px_rgba(0,0,0,0.9)] transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              Lingkup Jasa
            </h1>
            {/* <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-[3px_5px_2px_rgba(0,0,0,0.9)] transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              Quantity Surveyor
            </h2> */}
            <h3 className="text-base md:text-lg mt-4 opacity-100 font-bold drop-shadow-[3px_5px_2px_rgba(0,0,0,0.9)]">
              Layanan QS untuk pre-contract hingga post-contract
            </h3>
          </div>
      </div>


)
}