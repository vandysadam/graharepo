// import DashboardLayout from "@/layout/dashboerd-layout";
// import { useState } from "react";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import "./perproject/gallery-styles.css";  

// import GalleryCiumbeluit from "../../../src/assets/images/Data Foto Proyek/Proyek-Apartemen-Galeri-Ciumbuleuit-3-Bandung.webp";
// import PacificGardenStyle from "../../../src/assets/images/Data Foto Proyek/Proyek-Apartement-Pacific-Gardeb-Style-Tangerang.webp";
// import ReginaMaris from "../../../src/assets/images/Data Foto Proyek/Proyek-RS-Reginamaris-Medan.webp";
// import BudiLestariBekasi from "../../../src/assets/images/Data Foto Proyek/Proyek-Budi-lestari-bekasi2.webp";
// import Hegarmanah from "../../../src/assets/images/Data Foto Proyek/Proyek-Hegarmanah-Residence-Bandung.webp";
// import Queencity from "../../../src/assets/images/Data Foto Proyek/Proyek-Queen-City-semarang.webp";
// // import BaliInternasinalHospital from "../../../src/assets/images/Data Foto Proyek/Proyek-Bali-international-Hospital.webp";
// import CordelaJakarta from "../../../src/assets/images/Data Foto Proyek/Proyek-Cordela-1-CROP.webp";
// // import Dannaya from "../../../src/assets/images/Data Foto Proyek/Proyek-D'Anaya.webp";
// import NovotelYogya from "../../../src/assets/images/Data Foto Proyek/Proyek-Novotel-Yogya.webp";
// import Poris88 from "../../../src/assets/images/Data Foto Proyek/Proyek-Poris-88-Apartement-Tangerang.webp";
// // import Princenton from "../../../src/assets/images/Data Foto Proyek/Proyek-Princenton-boutique.webp";
// import RsiaGraciaMaris from "../../../src/assets/images/Data Foto Proyek/Proyek-RSIA-Gracia-Nias.webp";
// // import SheratonYogya from "../../../src/assets/images/Data Foto Proyek/Proyek-Sheraton-Hotel2.webp";
// import TheManhattanMedan from "../../../src/assets/images/Data Foto Proyek/Proyek-The-Manhattan-Mall-&-Condominium-Medan.webp";
// import UniversitasIntBatam from "../../../src/assets/images/Data Foto Proyek/Proyek-UIB-Batam.webp";
// import TigerMandiriHeadOffice from "../../../src/assets/images/Data Foto Proyek/Proyek-Tigermandiri-head-office.webp";
// import HotelKampiBintaro from "../../../src/assets/images/Data Foto Proyek/Proyek-kampi-hotel-bintaro.webp";
// import MercureHotel from "../../../src/assets/images/Data Foto Proyek/Proyek-hotel-mercure-jakarta.webp";
// import RumahTinggalBintaro from "../../../src/assets/images/Data Foto Proyek/Proyek-Rumah-tinggal-Bukit-menteng-Bintaro.webp";
// import RSIAstellaMaris from "../../../src/assets/images/Data Foto Proyek/Proyek-RSIA-Stella-maris-medan.webp";
// import NovotelBatam from "../../../src/assets/images/Data Foto Proyek/Proyek-Novotel-Batam.webp";
// import PasificGardenPuri from "../../../src/assets/images/Data Foto Proyek/Proyek-pasific-garden-puri.webp";
// import GudangPik from "../../../src/assets/images/Data Foto Proyek/Proyek-Gudang-Pik.webp";

// const projects = [
//   { 
//     title: "Proyek Gallery Ciumbeluit 3 - Bandung", 
//     image: GalleryCiumbeluit,
//     images:[], 
//     tanggalSpk:'21/10/2013',
//     grossArea: '31.179 m2' 
//   },
//   { 
//     title: "Apartemen Pacific Garden Style - Alam Sutera", 
//     image: PacificGardenStyle, 
//     images:[],
//     tanggalSpk:'06/03/2017', 
//     grossArea: '150.822 m2' 
//   },
//   { 
//     title: "Rumah Sakit Regina Maris - Medan", 
//     image: ReginaMaris,
//     images:[], 
//     tanggalSpk:'09/12/2019', 
//     grossArea: '42.000 m2' 
//   },
//   { 
//     title: "RSIA Budi Lestari - Bekasi", 
//     image: BudiLestariBekasi,
//     images:[], 
//     tanggalSpk:'11/08/2023', 
//     grossArea: '5.140 m2' 
//   },
//   { 
//     title: "Apartemen Hegarmanah Residence - Bandung", 
//     image: Hegarmanah,
//     images:[], 
//     tanggalSpk:'09/06/2014', 
//     grossArea: '49.812 m2' 
//   },
//   { 
//     title: "Queen City Mall, Hotel & Promenada Apartement - Semarang", 
//     image: Queencity,
//     images:[], 
//     tanggalSpk:'07/10/2019', 
//     grossArea: '80.374 m2' 
//   },
//   { 
//     title: "Proyek-Rumah-tinggal-Bukit-menteng-Bintaro", 
//     image: RumahTinggalBintaro, 
//     images:[],
//     tanggalSpk:'15/01/2024', 
//     grossArea: '1.673 m2' 
//   },
//   { 
//     title: "Hotel Cordela - Jakarta", 
//     image: CordelaJakarta, 
//     images:[],
//     tanggalSpk:'03/12/2014', 
//     grossArea: '6.300 m2' 
//   },
//   { 
//     title: "RSIA Stella Maris - Medan", 
//     image: RSIAstellaMaris, 
//     images:[],
//     tanggalSpk:'07/11/2022', 
//     grossArea: '28.687 m2' 
//   },
//   { 
//     title: "Hotel Novotel - Yogyakarta", 
//     image: NovotelYogya, 
//     images:[],
//     tanggalSpk:'25/06/2018', 
//     grossArea: '626 m2' 
//   },
//   { 
//     title: "Apartemen Poris 88 - Tangerang", 
//     image: Poris88, 
//     images:[],
//     tanggalSpk:'01/07/2014', 
//     grossArea: '16.600 m2' 
//   },
//   { 
//     title: "Novotel - Batam", 
//     image: NovotelBatam, 
//     images:[],
//     tanggalSpk:'23/02/2023', 
//     grossArea: '29.023 m2' 
//   },
//   { 
//     title: "RSU Gracia Maris - Nias", 
//     image: RsiaGraciaMaris, 
//     images:[],
//     tanggalSpk:'30/10/2023', 
//     grossArea: '11.536 m2' 
//   },
//   { 
//     title: "Perumahan Pacific Garden Puri - Jakarta", 
//     image: PasificGardenPuri, 
//     images:[],
//     tanggalSpk:'01/10/2024', 
//     grossArea: '70.000 m2' 
//   },
//   { 
//     title: "The Manhattan Mall - Medan", 
//     image: TheManhattanMedan, 
//     images:[],
//     tanggalSpk:'19/05/2014', 
//     grossArea: '118.995 m2' 
//   },
//   { 
//     title: "Gedung Rektorat Universitas International - Batam", 
//     image: UniversitasIntBatam, 
//     images:[],
//     tanggalSpk:'01/08/2016', 
//     grossArea: '27.857 m2' 
//   },
//   { 
//     title: "Tiger Mandiri Head Office - Jakarta", 
//     image: TigerMandiriHeadOffice, 
//     images:[],
//     tanggalSpk:'08/05/2017', 
//     grossArea: '3.000 m2' 
//   },
//   { 
//     title: "Hotel Kampi - Bintaro", 
//     image: HotelKampiBintaro, 
//     images:[],
//     tanggalSpk:'03/10/2024', 
//     grossArea: '11.000 m2' 
//   },
//   { 
//     title: "Renovasi Hotel Ibis Budged Menjadi Mercure Hotel - Jakarta", 
//     image: MercureHotel, 
//     images:[],
//     tanggalSpk:'27/11/2023', 
//     grossArea: '220 Kamar / 95 Kamar' 
//   },
//   { 
//     title: "Proyek Gudang Tertutup & Office Pik - Jakarta", 
//     image: GudangPik, 
//     images:[],
//     tanggalSpk:'16/06/2022', 
//     grossArea: '5.000 m2' 
//   },
// ];

// export default function ProjectGallery() {
//   const [selectedProject, setSelectedProject] = useState<{ title: string; image: string; tanggalSpk: string; grossArea: string;  } | null>(null);

//   return (
//     <DashboardLayout>
//       <section className="relative w-full py-16 bg-gray-50 overflow-hidden">
//         <div className="max-w-6xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-extrabold text-indigo-900 mb-6">Galeri Proyek</h2>
//           <p className="text-lg text-gray-700 max-w-2xl mx-auto">
//             Lihat berbagai proyek yang telah kami kerjakan di berbagai sektor.
//           </p>
//         </div>

//         <div className="grid gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="relative cursor-pointer overflow-hidden rounded-lg shadow-md group"
//             onClick={() => setSelectedProject(project)}
//           >
//             <img
//             loading="lazy"
//               src={project.image}
//               alt={project.title}
//               className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-center p-4">
//               <h3 className="text-sm sm:text-base font-semibold">{project.title}</h3>
//             </div>
//           </div>
//         ))}
//               </div>


//         {/* Modal Image Preview */}
//         <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
//           <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] overflow-y-auto p-4 rounded-lg">
//             {selectedProject && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//                 <img
//                   loading="lazy"
//                   src={selectedProject.image}
//                   alt="Preview"
//                   className="w-full h-auto object-cover rounded-md"
//                 />
//                 <div className="text-left">
//                   <h3 className="text-lg sm:text-xl font-bold text-gray-800">{selectedProject.title}</h3>
//                   <p className="mt-4 text-gray-600">
//                     <span className="font-semibold">Gross Area:</span> {selectedProject.grossArea}
//                   </p>
//                   <p className="text-gray-600">
//                     <span className="font-semibold">Tanggal SPK:</span> {selectedProject.tanggalSpk}
//                   </p>
//                 </div>
//               </div>
//             )}
//           </DialogContent>
//         </Dialog>

//       </section>
//     </DashboardLayout>
//   );
// }
