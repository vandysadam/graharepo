// components/Header.tsx

import MenuHeaderSection from "@/assets/menu-header-section";
import logoUrl from '@/assets/images/PT.GRAHA_ESTIMATIKA_PRADANA.png';
import { useEffect, useState } from "react";



export default function Header() {
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 40);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
  return (
    <header className={`top-0 left-0 w-full flex items-center  justify-between p-3 transition-all duration-300 z-50 ${ scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent bg-white/10 backdrop-blur-md shadow-md"}`}>
                <div className="flex items-start">
                    <img src={logoUrl} alt="Logo" className="max-w-[140px] md:max-w-[200px] lg:max-w-[250px] h-auto object-contain" />
                </div>
                <MenuHeaderSection />
            </header>
  
  );
}
