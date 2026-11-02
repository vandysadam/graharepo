
// import backGround from "../../assets/images/background.jpg";
import MenuHeaderSection from "@/assets/menu-header-section";
import logoUrl from '@/assets/images/PT.GRAHA_ESTIMATIKA_PRADANA.png';
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";



export default function Menu1Section() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > window.innerHeight * 0.7);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300); // Delay dikit biar smooth
    }, []);
        const handleLoadedMetadata = (
          e: React.SyntheticEvent<HTMLVideoElement>
        ) => {
          e.currentTarget.playbackRate = 2; // slow motion
        };

return (
    <section className="relative w-screen">
        <header className={`fixed top-0 left-0 w-screen flex items-center justify-between p-3 transition-all duration-300 z-50 ${ scrolled ? "lg:text-black text-white backdrop-blur-md shadow-md" : "text-white"}`}>
            <div className="flex items-start">
                <img src={logoUrl} alt="Logo" className="max-w-[140px] md:max-w-[200px] lg:max-w-[250px] h-auto object-contain" />
            </div>
            <MenuHeaderSection/>
        </header>
        <div className="relative h-screen flex items-center">
            <div className="absolute inset-0 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    onLoadedMetadata={handleLoadedMetadata}
                    className="w-screen h-full object-cover opacity-75">
                    <source src="src/assets/video/vecteezy_construction-and-structure-concept-of-engineer-working_21439639.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30">
                </div>
            </div>
            {/* Content */}
            <div className="z-10 text-white pt-20 text-left md:text-left w-full max-w-5xl mx-20 ">
                <h1
                className={`text-2xl md:text-5xl lg:text-7xl font-extrabold text-white drop-shadow-[3px_5px_2px_rgba(0,0,0,0.9)] transition-all duration-1000 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}>
                    PT. Graha Estimatika Pradana
                </h1>
                <h2
                className={`text-1xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-[3px_5px_2px_rgba(0,0,0,0.9)] transition-all duration-1000 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}>
                    Konsultan Quantity Surveyor, Cost Planning
                    Profesional & Terpercaya
                </h2>
                <h3 className="text-base md:text-lg mt-4 opacity-90 font-bold drop-shadow-[2px_5px_2px_rgba(0,0,0,0.8)]">
                    Spesialis estimasi biaya, tender, dan
                    pengendalian biaya proyek konstruksi
                </h3>
                
                <a className="absolute bottom-3 right-3" href="https://www.vecteezy.com/free-videos/architect">Architect Stock Videos by Vecteezy</a>
                <div className="">
                    <Button size="lg" className="mt-6 mr-10 bg-blue-900/0 border-2 hover:bg-blue-700">
                        Konsultasi Sekarang
                    </Button>
                    <Button size="lg" className="mt-6  bg-blue-900/0 border-2 hover:bg-blue-700">
                        Lihat Layanan
                    </Button>
                </div>
            </div>
        </div>
    </section>
);
}