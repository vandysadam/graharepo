import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
// import GalleryCiumbeluit from "../../../src//assets/images/Data Foto Proyek/Proyek-Apartemen-Galeri-Ciumbuleuit-3-Bandung.webp";
// import PacificGardenStyle from "../../../src//assets/images/Data Foto Proyek/Proyek-Apartement-Pacific-Gardeb-Style-Tangerang.webp";
// import ReginaMaris from "../../../src//assets/images/Data Foto Proyek/Proyek-RS-Reginamaris-Medan.webp";
// import BudiLestariBekasi from "../../../src//assets/images/Data Foto Proyek/Proyek-Budi-lestari-bekasi2.webp";
// import Hegarmanah from "../../../src//assets/images/Data Foto Proyek/Proyek-Hegarmanah-Residence-Bandung.webp";
// import Queencity from "../../../src//assets/images/Data Foto Proyek/Proyek-Queen-City-semarang.webp";
import GalleryCiumbeluit from "../../../src//assets/images/Data-Foto-Proyek/proyek-apartmen-gallery-ciumbeluit/Proyek-Apartemen-Galeri-Ciumbuleuit-3-Bandung.webp";
import PacificGardenStyle from "../../../src//assets/images/Data-Foto-Proyek/proyek-apartmen-pacific-garden-style/Proyek-Apartement-Pacific-Gardeb-Style-Tangerang.webp";
import ReginaMaris from "../../../src//assets/images/Data-Foto-Proyek/proyek-rs-regina-mais-medan/Proyek-RS-Reginamaris-Medan.webp";
import BudiLestariBekasi from "../../../src//assets/images/Data-Foto-Proyek/proyek-budi-lestari/BDLSTR-1.webp";
import Hegarmanah from "../../../src//assets/images/Data-Foto-Proyek/proyek-hegarmanah-residence-bandung/Proyek-Hegarmanah-Residence-Bandung.webp";
import Queencity from "../../../src//assets/images/Data-Foto-Proyek/proyek-queen-city-semarang/Proyek-Queen-City-semarang.webp";




const projects = [
    { title: "Proyek Gallery ciumbeluit 3 - Bandung", image: GalleryCiumbeluit },
    { title: "Apartemen Pacific Garden Style - Alam Sutera", image: PacificGardenStyle },
    { title: "Rumah Sakit Regina Maris - Medan", image: ReginaMaris },
    { title: "RSIA Budi Lestari - Bekasi", image: BudiLestariBekasi },
    { title: "Apartemen Hegarmanah Residence - Bandung", image: Hegarmanah },
    { title: "Queen City Mall - Semarang", image: Queencity },
];

export default function Menu3Section() {
    const navigate = useNavigate();
    
    return (
        <section className="relative w-full py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto text-center px-6">
                <h2 className="text-4xl font-extrabold text-indigo-900 mb-6">Proyek Kami</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Kami telah menangani berbagai proyek di berbagai sektor, mulai dari perkantoran hingga infrastruktur besar.
                </p>
            </div>
        {/* Grid Project Cards */}
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 w-full mx-auto mt-10">
                {projects.slice(0, 6).map((project, index) => (
                    <Card 
                    onClick={() => navigate("/project")} 
                    key={index} 
                    className="relative w-[300px] h-[200px] lg:w-[500px] lg:h-[400px] sm:h-[200px] sm:w-[300px] overflow-hidden rounded-xl shadow-lg group">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                            <h3 className="text-sm sm:text-base font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
                                {project.title}
                            </h3>
                        </div>
                    </Card>
                ))}
            </div>
            <div className="max-w-6xl mx-auto text-center px-6">
                <Button className="mt-10" onClick={() => navigate("/project")}>
                    Lihat Semua Proyek
                </Button>
            </div>
        </section>
    );
}
