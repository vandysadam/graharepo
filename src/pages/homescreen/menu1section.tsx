
// import backGround from "../../assets/images/background.jpg";
import MenuHeaderSection from "@/assets/menu-header-section";
import logoUrl from '@/assets/images/PT.GRAHA_ESTIMATIKA_PRADANA.png';
import { useEffect, useState } from "react";



export default function Menu1Section() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 40);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 2000); // Delay dikit biar smooth
    }, []);

    return (
        <section className="relative w-screen h-screen ">
            {/* Header */}
            <header className={`fixed top-0 left-0 w-full flex items-center  justify-between p-3 transition-all duration-300 z-50 ${ scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent bg-white/10 backdrop-blur-md shadow-md"}`}>
                <div className="flex items-start">
                    <img src={logoUrl} alt="Logo" className="max-w-[140px] md:max-w-[200px] lg:max-w-[250px] h-auto object-contain" />
                </div>
                <MenuHeaderSection />
            </header>

            {/* Background Section */}
            <div className="relative h-full flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0 bg-stone-400">
                    {/* <img src={} alt="Background" className="w-full h-full object-cover" /> */}
                    <div className="absolute inset-0  "></div>
                </div>

                {/* Content */}
                <div className="pl-10 z-10 text-white px-4 pt-20 md:px-4 text-left md:text-left w-full max-w-5xl mx-20 ">
                <h1
                className={`text-4xl md:text-5xl lg:text-7xl font-extrabold text-white drop-shadow-[3px_5px_2px_rgba(0,0,0,0.9)] transition-all duration-1000 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                >
                PT. Graha Estimatika Pradana
                </h1>
                <h2
                className={`text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-[3px_5px_2px_rgba(0,0,0,0.9)] transition-all duration-1000 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                >
                Quantity Surveyor
                </h2>
                    <h3 className="text-base md:text-lg mt-4 opacity-90 font-bold drop-shadow-[2px_5px_2px_rgba(0,0,0,0.8)]">
                        Your Expert in Project Cost Planning and Control.
                    </h3>
                    {/* <Button size="lg" className="mt-6  hover:bg-blue-950">
                        View Our Catalog
                    </Button> */}
                </div>
            </div>
        </section>
    );
}