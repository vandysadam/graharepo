import { useEffect, useState } from "react";


export default function LayananSec1(){

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Delay dikit biar smooth
}, []);

return(
      <div className="relative flex min-h-[34vh] w-full items-center overflow-hidden sm:min-h-[38vh] lg:h-[350px]">
          {/* Background Image */}
          <div className="absolute inset-0 bg-stone-400">
              <img src={"src/assets/images/jumbotron.jpeg"} alt="Background" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="z-10 max-w-5xl px-6 py-8 text-left text-white sm:px-10 sm:py-10 lg:p-8">
            <h1 className={`text-3xl font-semibold text-white drop-shadow-[3px_5px_2px_rgba(0,0,0,0.9)] transition-all duration-1000 ease-out sm:text-4xl md:text-5xl lg:text-7xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              Lingkup Jasa
            </h1>
            {/* <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-[3px_5px_2px_rgba(0,0,0,0.9)] transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              Quantity Surveyor
            </h2> */}
            <h3 className="mt-4 text-base font-bold opacity-100 drop-shadow-[3px_5px_2px_rgba(0,0,0,0.9)] sm:text-lg">
              Layanan QS untuk pre-contract hingga post-contract
            </h3>
          </div>
      </div>


)
}
