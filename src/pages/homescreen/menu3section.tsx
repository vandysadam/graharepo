import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
// import GalleryCiumbeluit from "../../../src//assets/images/Data Foto Proyek/Proyek-Apartemen-Galeri-Ciumbuleuit-3-Bandung.webp";
// import PacificGardenStyle from "../../../src//assets/images/Data Foto Proyek/Proyek-Apartement-Pacific-Gardeb-Style-Tangerang.webp";
// import ReginaMaris from "../../../src//assets/images/Data Foto Proyek/Proyek-RS-Reginamaris-Medan.webp";
import BudiLestariBekasi from "../../../src/assets/images/Data-Foto-Proyek/proyek-budi-lestari/Proyek-Budi-lestari.webp";
// import Queencity from "../../../src//assets/images/Data Foto Proyek/Proyek-Queen-City-semarang.webp";
import GalleryCiumbeluit from "../../../src/assets/images/Data-Foto-Proyek/proyek-apartmen-gallery-ciumbeluit/Proyek-Gallery-Ciumbeluit.webp";
// import ReginaMaris from "../../../src//assets/images/Data-Foto-Proyek/proyek-rs-regina-mais-medan/Proyek-RS-Reginamaris-Medan.webp";
import TigerMandiri from "../../../src/assets/images/Data-Foto-Proyek/proyek-tiger-mandiri-head-office/Proyek-Tigermandiri-head-office.webp";
import GudangPik from "../../../src/assets/images/Data-Foto-Proyek/proyek-gudang-&-offoce-pik/Proyek-Gudang-Pik--.webp";
import { projek } from "../project/entity/project";


const HoAp = projek.filter(kategoryhoap => kategoryhoap.category === "HAR" );
const factorys = projek.filter(kategoryfaktori => kategoryfaktori.category === 'Factory' );
const Hospitals = projek.filter(kategoryhospital => kategoryhospital.category === "Hospital" );
const offices= projek.filter(kategoryoffice => kategoryoffice.category === "Office" );

const projects = [
    { title: "Hospital", image: BudiLestariBekasi, project: Hospitals },
    { title: "Office", image: TigerMandiri, project: offices  },
    { title: "Hotel, Apartment, and Residence", image: GalleryCiumbeluit, project: HoAp },
    { title: "Factory", image: GudangPik, project: factorys },
];

export default function Menu3Section() {
    const navigate = useNavigate();
    
    return (
      <section className="relative bg-white h-full pb-10">
        <div className="max-w-6xl mx-auto text-center pt-20">
          <h2 className="text-3xl font-medium tracking-tight font-system-ui drop-shadow-xl text-black text-center mb-5">Proyek Kami</h2>
            <p className="text-base font-sans text-gray-700 max-w-2xl mx-auto mb-5">
              Kami telah menangani berbagai proyek di berbagai sektor, mulai dari perkantoran hingga infrastruktur besar.
            </p>
        </div>
        <div className="flex lg:flex-row min-h-[450px] justify-center flex-col overflow-x-scroll snap-x snap-mandatory scroll-auto gap-4 justify-items-center p-10">
        {projects.map((service, index) => (
          <div key={index} className="group relative lg:w-5/6 w-full inset-0 group-hover:scale-y-100 bg-gray-200 overflow-hidden rounded-lg">
            <img
              src={service.image}
              className="w-full h-full group rounded-xl overflow-hidden"/>
            {/* overlay */}
              <div className="absolute inset-0 bg-gray-200/80 origin-left lg:scale-x-0 scale-x-100 transition-transform duration-300 lg:group-hover:scale-x-100 flex flex-col p-5">
                <h6 className="text-2xl font-semibold text-black mb-4 
                               lg:opacity-0 lg:group-hover:opacity-100 opacity-100 transition">
                  {service.title}
                </h6>
                  {service.project.slice(0, 5).map((p) => (
                <h6 key={p.id} onClick={() => navigate(`/project/${p.id}`)} 
                    className="cursor-pointer mb-3 text-black 
                               lg:opacity-0 lg:group-hover:opacity-100 opacity-100 transition
                               hover:text-blue-800">
                  {p.title}
                </h6>
                  ))}
                  {/* <p className="cursor-pointer text-right font-semibold text-black
                                opacity-0 group-hover:opacity-100 transition
                                hover:text-blue-800"
                    onClick={() => navigate("/project")}>
                    Lihat Selengkapnya ...
                  </p> */}
              </div>
          </div>   
        ))}
        </div>


          
          {/* <div className="flex h-[450px] overflow-x-scroll snap-x snap-mandatory scroll-auto gap-4 justify-items-center">
              <div className="group relative w-[500px]  duration-300 bg-cover bg-center grid 
                bg-[url(src/assets/images/Data-Foto-Proyek/proyek-rs-regina-mais-medan/RGNMRS-1.jpg)] 
                rounded-xl">
              <div className="absolute inset-0 bg-gray-200/80
                    origin-left scale-x-0
                    transition-transform duration-1000 ease-in-out
                    group-hover:scale-x-100">
                  <h6 className="text-2xl text-black transition-all duration-1000 group-hover-bg-gray-200/80 group-hover:opacity-100 opacity-0 font-sans font-extralight m-5 font-semibold rounded-lg">
                    Hospital
                  </h6>
                  <p className="cursor-pointer transition-all duration-1000 group-hover:opacity-100 opacity-0 grid text-right place-self-end font-extralight mb-5 mr-5 h-[20px] w-full font-semibold text-black hover:gap-3 hover:text-blue-800 transition-all" 
                    onClick={() => navigate("/project")}>
                      Lihat Selengkapnya ...
                  </p>
              </div>
            </div>   


          
            <div className="group relative w-[500px]  duration-300 bg-cover bg-center grid bg-[url(src/assets/images/Data-Foto-Proyek/Proyek-Tigermandiri-head-office.webp)] rounded-xl">
              <div className="absolute inset-0 bg-gray-200/80
                    origin-left scale-x-0
                    transition-transform duration-1000 ease-in-out
                    group-hover:scale-x-100">
                  <h6 className="text-2xl text-black transition-all duration-1000 group-hover-bg-gray-200/80 group-hover:opacity-100 opacity-0 font-sans font-extralight m-5 font-semibold rounded-lg">
                    Office
                  </h6>
                  <p className="cursor-pointer transition-all duration-1000 group-hover:opacity-100 opacity-0 grid text-right place-self-end font-extralight mb-5 mr-5 h-[20px] w-full font-semibold text-black hover:gap-3 hover:text-blue-800 transition-all" 
                    onClick={() => navigate("/project")}>
                      Lihat Selengkapnya ...
                  </p>
              </div>
            </div>   


            <div className="group relative w-[500px]  duration-300 bg-cover bg-center grid bg-[url(src/assets/images/Data-Foto-Proyek/proyek-poris-88-apartmen/Proyek-Poris-88-Apartement-Tangerang.webp)] rounded-xl">
              <div className="absolute inset-0 bg-gray-200/80
                    origin-left scale-x-0
                    transition-transform duration-1000 ease-in-out
                    group-hover:scale-x-100">
                  <h6 className="text-2xl text-black transition-all duration-1000 group-hover-bg-gray-200/80 group-hover:opacity-100 opacity-0 font-sans font-extralight m-5 font-semibold rounded-lg">
                    Hotel, Apartment, and Residence
                  </h6>
                  <p className="cursor-pointer transition-all duration-1000 group-hover:opacity-100 opacity-0 grid text-right place-self-end font-extralight mb-5 mr-5 h-[20px] w-full font-semibold text-black hover:gap-3 hover:text-blue-800 transition-all" 
                    onClick={() => navigate("/project")}>
                      Lihat Selengkapnya ...
                  </p>
              </div>
            </div>

            <div className="group relative w-[500px]  duration-300 bg-cover bg-center grid bg-[url(src/assets/images/Data-Foto-Proyek/Proyek-Gudang-Pik.webp)] rounded-xl">
              <div className="absolute inset-0 bg-gray-200/80
                    origin-left scale-x-0
                    transition-transform duration-1000 ease-in-out
                    group-hover:scale-x-100">
                  <h6 className="text-2xl text-black transition-all duration-1000 group-hover:opacity-100 opacity-0 font-sans font-extralight m-5 font-semibold rounded-lg">
                    Factory
                  </h6>
                  <p className="cursor-pointer transition-all duration-1000 group-hover:opacity-100 opacity-0 grid text-right place-self-end font-extralight mb-5 mr-5 h-[20px] w-full font-semibold text-black hover:gap-3 hover:text-blue-800 transition-all" 
                    onClick={() => navigate("/project")}>
                      Lihat Selengkapnya ...
                  </p>
              </div>
            </div>   
          </div> */}
          


            
          <div className="max-w-6xl mx-auto text-center">
            <Button className="mt-10" onClick={() => navigate("/project")}>
              Lihat Semua Proyek
            </Button>
          </div>
        </section>
    );
}



            // <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 w-full mx-auto mt-10">
            //     {projects.slice(0, 6).map((project, index) => (
            //         <Card 
            //         onClick={() => navigate("/project")} 
            //         key={index} 
            //         className="relative w-[300px] h-[200px] lg:w-[500px] lg:h-[400px] sm:h-[200px] sm:w-[300px] overflow-hidden rounded-xl shadow-lg group">
            //             <img 
            //                 src={project.image} 
            //                 alt={project.title} 
            //                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            //             <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
            //                 <h3 className="text-sm sm:text-base font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
            //                     {project.title}
            //                 </h3>
            //             </div>
            //         </Card>
            //     ))}
            // </div>
