import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import DashboardLayout from "@/layout/dashboerd-layout"
import { CalendarClock, FileText, LineChart, Scale, ShieldCheck } from "lucide-react";
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import { useEffect } from "react";


const services = [
  { desc: "Menyajikan estimasi biaya awal proyek yang akurat untuk memastikan proses perencanaan berjalan efisien, terarah, dan sesuai kapasitas finansial klien.", icon: FileText },
  { desc: "Memperoleh suatu nilai/angka Penawaran (Tender Price) dari Peserta Tender yang wajar dan dapat dipertanggung jawabkan.", icon: Scale },
  { desc: "Mengendalikan dan memantau biaya akibat perubahan pelaksanaan pekerjaan, serta menilai dan mengevaluasi klaim pembayaran yang diajukan oleh Pemborong terkait perubahan pekerjaan dan progres pelaksanaan.", icon: LineChart },
  { desc: "Melakukan kontrol biaya dan Monitoring pada tahap perencanaan dan pelaksanaan agar total biaya yang sudah direncanakan tidak terganggu.", icon: CalendarClock },
  { desc: "Melindungi kepentingan Owner (Pemberi Tugas ) dari segi financial selama tahap Pra – design hingga Pelaksanaan sehingga biaya-biaya yang semestinya tidak perlu dikeluarkan oleh Owner dapat dihindarkan.", icon: ShieldCheck },
];


export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  
    return (
      <DashboardLayout>
        <section className="relative w-full py-16 bg-gray-50 overflow-hidden">
        <h1 className="text-2xl sm:text-4xl text-center font-extrabold text-indigo-900 mb-10">About Us</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-4 max-w-screen-xl mx-auto text-center px-4" >
          <div className="col-span-3 p-5 " data-aos="fade-down">
            <p className="text-base sm:text-lg leading-relaxed text-justify mb-8" >
            Konsultan Quantity Surveyor (QS) merupakan konsultan yang bergerak di bidang konstruksi yang bertanggung jawab 
            dalam mengelola biaya dan anggaran biaya proyek, konsultan QS juga mengerjakan administrasi kontrak (kebutuhan tender) 
            dari mulai awal proyek sampai dengan selesainya proyek (perhitungan biaya akhir proyek). 
            Lingkup tugas utama Konsultan QS membantu para Klien (Pemberi Tugas) dalam merencanakan dan mengendalikan biaya 
            pelaksanaan proyek, memastikan bahwa proyek berjalan sesuai dengan anggaran yang ditetapkan, mulai dari tahap perencanaan 
            hingga selesainya pembangunan, serta memastikan kualitas dan kepatuhan terhadap kontrak.

            </p>
            <p className="text-base sm:text-lg leading-relaxed text-justify mb-8">
            Konsultan QS memiliki peran penting dalam perencanaan anggaran biaya (menghitung dan memperkirakan biaya proyek) ; 

            Manajemen kontrak (mengelola kontrak antara pemberi tugas, kontraktor, dan subkontraktor) ; 
            
            Pengendalian biaya (memantau dan mengendalikan biaya proyek selama pelaksanaan untuk menghindari pembengkakan anggaran proyek) ; 
            
            Penilaian kualitas (memastikan bahwa proyek memenuhi standar kualitas yang ditetapkan) ; 
            
            Penyelesaian sengketa (memberikan analisis dan pendapat dalam kasus sengketa terkait biaya atau kontrak) ; 
            
            Penyusunan dokumen tender dan dokumen kontrak (menyiapkan dokumen tender dan kontrak untuk proyek)
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-justify mb-8">
              Pada umumnya Konsultan Quantity Surveyor merupakan salah satu anggota dari Tim Konsultan yang dikoordinir 
              oleh Konsultan Arsitek maupun tim manajmenen konstruksi, yang didalam 
              menjalankan profesinya Quantity Surveyor tetap berada dalam posisi yang independen.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-justify mb-8">
              Pelatihan-pelatihan khusus disamping pengalaman dan pengetahuan yang luas tentang sistim pengendalian
              dan perencanaan biaya, merupakan salah satu faktor didalam meningkatkan 
              pengetahuan dan kinerja profesi Quantity Surveyor. Pengalaman dan pengetahuan akan hal ini jarang
              dimiliki oleh seorang Arsitek, Engineer, Owner (Developer) dan Contractor’s.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-justify mb-8">
              <strong>Arsitek</strong> lebih menekankan kepada perancangan dan perencanaan bentuk dan estetika suatu bangunan sedemikian 
              rupa, sehingga diperoleh suatu bangunan yang fungsional dan estetik dan sesuai dengan lingkungan disekitarnya.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-justify mb-8">
              <strong><i>Structural Engineer</i></strong> merupakan Konsultan yang merencanakan dan menghitung dimensi elemen suatu bangunan seekonomis 
              dan seefisien mungkin, tanpa mengorbankan faktor keamanan dan kekuatan Struktur itu sendiri didalam memikul beban, 
              dan tetap dipertimbangkan pula dari segi Perencanaan Arsitek.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-justify mb-8">
              <strong><i>Mechanical, Electrical dan Plumbing (MEP) Engineer</i></strong> adalah sebagai Konsultan yang merancang dan merencanakan seluruh 
              sistim MEP, sehingga dapat berfungsi dan memenuhi syarat sebagai mana mestinya.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-justify mb-8">
              Selain profesi diatas masih ada Konsultan lainnya seperti <i>Interior Designer, Landscape, Architect, Lighting Consultant, 
              Acoustic Consultant, Kitchen/Laundry Consultant</i>, yang kesemuanya merupakan suatu Team yang terpadu didalam penanganan 
              suatu Proyek khususnya hotel, apartemen, restaurant dan lain-lain.
            </p>
          </div>
          <div className="relative border-4 col-span-2 px-5 mt-20 border-stone-400" data-aos="fade-left">
              <h3 className="absolute font-bold text-5xl sm:text-6xl lg:text-7xl py-2 -mt-8 ml-27 px-5 sm:py-4 sm:-mt-12 sm:ml-[400px] sm:px-5 md:ml-[450px] lg:py-8 lg:-mt-20 lg:ml-[90px] lg:px-5 text-stone-400 bg-neutral-50"> TUJUAN </h3>
                {services.map((service, index) => (
                  <Card key={index} className="group p-5 m-4 mt-10 text-center transition duration-300 transform md:hover:scale-105 md:hover:bg-zinc-500 md:hover:text-white shadow-lg rounded-xl flex flex-col items-center ">
                  <service.icon className="w-12 h-12 text-indigo-700  mb-3 transition duration-300 md:group-hover:text-white"/>
                  <CardContent>
                  <p className="text-base opacity-90 mt-2">{service.desc}</p>
                  </CardContent>
                  </Card>
                ))}  
          </div> 
        </div>
        <div className="bg-neutral-50 h-20"></div>
        

        <div className="relative border-8 border-stone-400 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 max-w-7xl mx-auto px-auto sm:px-4 lg:px-6 mt-20 pt-16 py-10" data-aos="fade-up">

        <div className="absolute font-bold text-[40px] sm:text-[90px] lg:text-[124px] text-stone-400 font-arial px-5 -mt-10 sm:-mt-[100px] lg:-mt-[115px] bg-neutral-50" data-aos="fade-right"><h2>LINGKUP QS</h2></div>

        <div className="block sm:hidden px-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="post">
              <AccordionTrigger>Post Contract</AccordionTrigger>
              <AccordionContent>
              <p className="py-10 px-10">
                Menghadiri rapat dilapangan (bila mana diperlukan) maksimum 1 minggu sekali atau 1 ( satu ) bulan sekali jika proyek diluar kota Jakarta.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10">
                Mengevaluasi dan menilai klaim pembayaran prestasi pekerjaan yang diajukan pemborong, dengan mengadakan peninjauan kelapangan untuk dilakukan pengecekan bersama antara Pemborong, Quantity Surveyor dan Management Konstruksi (MK). Hasil evaluasi tersebut diatas selanjutnya dilampirkan pada Penilaian Pembayaran/Sertifikat Pembayaran.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10"> 
                Mengevaluasi, menilai dan menyusun perhitungan pekerjaan tambah/kurang (Variation Order) berdasarkan perubahan-perubahan yang terjadi selama masa pelaksanaan, baik perubahan dalam hal desain maupun spesifikasi, dimana perubahan ini didasarkan dari instruksi tertulis dari MK dan adanya perbedaan antara gambar kontrak (Contract Drawing) dengan gambar pelaksanaan (Construction Drawing). Hasil evaluasi dan penilaian tersebut dituangkan pada Sertifikat Pekerjaan Tambah/Kurang untuk disetujui oleh MK, Pemborong dan Pemberi Tugas.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10"> 
                Memberikan informasi-informasi disertai usulan-usulan kepada Pemberi Tugas atau Konsultan Perencana dalam hal Rencana Anggaran Biaya selama berlangsungnya pelaksanaan proyek, terhadap pengaruh adanya disain-disain alternatif pada struktur, arsitektur atau mekanikal/elektrikal, termasuk pula pemilihan-pemilihan material alternatif.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10">
                Menyusun Laporan Posisi Keuangan terhadap Biaya Konstruksi (Financial Statement Report) setiap periode tertentu (minimum 3 bulan sekali).
                Laporan Posisi Keuangan ini menggambarkan Nilai Proyek berdasarkan perubahan-perubahan yang terjadi sampai saat disusunnya laporan tersebut, termasuk estimasi biaya-biaya lainnya untuk perubahan-perubahan yang diantisipasi.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10">
                Menyusun dan membuat Perhitungan Akhir Biaya Proyek (Final Account) berdasarkan Nilai Proyek Awal termasuk nilai-nilai pekerjaan tambah/kurang.
                Perhitungan Akhir Biaya Proyek tersebut menggambarkan Nilai Proyek Akhir secara keseluruhan (biaya konstruksi), jumlah pembayaran yang telah diterima pemborong, dan sisa pembayaran yang harus diterima oleh Pemborong.
              </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="pre">
              <AccordionTrigger>Pre Contract</AccordionTrigger>
              <AccordionContent>
              <p className="py-10 px-10"> 
                  Menyusun dan menyiapkan Rencana Anggaran Biaya Sementara (Preliminary Cost Plan) pada tahap awal perencanaan disusul kemudian dengan Rencana Anggaran Biaya Dasar (Detailed Elemental Cost Plan), berdasarkan gambar-gambar rencana yang telah dikembangkan.
                  Lingkup ini termasuk juga Evaluasi Rencana Anggaran Biaya terhadap perubahan-perubahan desain dan/atau spesifikasi selama tahap Pengembangan Rencana (Design Development).
                </p>
                  <hr className="border-stone-300" />
                <p className="pt-10 px-10"> 
                  Menyusun dan menyiapkan Rencana Anggaran Biaya Sementara (Preliminary Cost Plan) pada tahap awal perencanaan disusul kemudian dengan Rencana Anggaran Biaya Dasar (Detailed Elemental Cost Plan), berdasarkan gambar-gambar rencana yang telah dikembangkan.
                  Lingkup ini termasuk juga Evaluasi Rencana Anggaran Biaya terhadap perubahan-perubahan desain dan/atau spesifikasi selama tahap Pengembangan Rencana (Design Development).
                </p>
                <hr className="border-stone-300" />
                <p className="pt-10 px-10">
                  Memberikan informasi-informasi dan saran-saran didalam penyusunan Rencana Anggaran Biaya baik kepada Pemberi Tugas maupun Konsultan Perencana lainnya mengenai pengaruhnya terhadap desain-desain atau material-material alternatif.
                </p>
                  <hr className="border-stone-300" />
                <p className="pt-10 px-10"> 
                  Memonitor Rencana Anggaran Biaya serta melakukan optimasi-optimasi terhadap biaya konstruksi dan lain-lain guna mendapatkan anggaran biaya yang ekonomis dan realistis.
                </p>
                  <hr className="border-stone-300" />
                <p className="pt-10 px-10">
                  Menghadiri rapat (jika diperlukan) konsultan, khususnya  mengenai hal yang berhubungan dengan Rencana Biaya dan masalah-masalah yang berhubungan dengan Administrasi (kontrak).
                </p>
                  <hr className="border-stone-300" />
                <p className="pt-10 px-10"> 
                  Menyusun dan menyiapkan Dokumen Tender dan Bill of Quantity sebagai pedoman untuk peserta tender didalam pengajuan penawaran.
                </p>
                  <hr className="border-stone-300" />
                <p className="pt-10 px-10">
                  Menyusun dan membuat Rencana Anggaran Biaya berdasarkan item pekerjaan dan kuantitas yang tercantum didalam BQ (Pre Tender Estimate), sebagai pedoman didalam melakukan evaluasi terhadap penawaran-penawaran yang diajukan peserta tender.
                </p>
                  <hr className="border-stone-300" />
                <p className="pt-10 px-10">
                  Mengevaluasi dan mengkaji penawaran-penawaran yang diajukan Peserta Tender khususnya dari segi biaya dan administrasi yang dituangkan dalam bentuk Laporan Evaluasi Tender.
                </p>
                  <hr className="border-stone-300" />
                <p className="pt-10 px-10">
                  Ikut membantu pihak Pemberi Tugas atau Project Management didalam melakukan klarifikasi dan negosiasi dengan Peserta Tender.
                </p>
                  <hr className="border-stone-300" />
                <p className="pt-10 pb-10 px-10"> 
                  Menyusun dan menyiapkan Dokumen Kontrak untuk ditanda tangani oleh Pihak Pemberi Tugas dan Pemborong.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="hidden sm:block lg:hidden px-4 space-y-4">
          <div className="bg-stone-400 text-center py-4 mt-5">
          <h3 className="text-2xl font-bold border-b border-stone-300 px-6 pt-10 pb-4">Pre Contract</h3>
              <div className="space-y-4 px-6 py-6 text-[15px] leading-relaxed text-justify">
                <p className="py-10 px-10"> 
                  Menyusun dan menyiapkan Rencana Anggaran Biaya Sementara (Preliminary Cost Plan) pada tahap awal perencanaan disusul kemudian dengan Rencana Anggaran Biaya Dasar (Detailed Elemental Cost Plan), berdasarkan gambar-gambar rencana yang telah dikembangkan.
                  Lingkup ini termasuk juga Evaluasi Rencana Anggaran Biaya terhadap perubahan-perubahan desain dan/atau spesifikasi selama tahap Pengembangan Rencana (Design Development).
                </p>
                  <hr className="border-stone-300" />
                <p className="pt-10 px-10"> 
                  Menyusun dan menyiapkan Rencana Anggaran Biaya Sementara (Preliminary Cost Plan) pada tahap awal perencanaan disusul kemudian dengan Rencana Anggaran Biaya Dasar (Detailed Elemental Cost Plan), berdasarkan gambar-gambar rencana yang telah dikembangkan.
                  Lingkup ini termasuk juga Evaluasi Rencana Anggaran Biaya terhadap perubahan-perubahan desain dan/atau spesifikasi selama tahap Pengembangan Rencana (Design Development).
                </p>
                <hr className="border-stone-300" />
                <p className="pt-10 px-10">
                  Memberikan informasi-informasi dan saran-saran didalam penyusunan Rencana Anggaran Biaya baik kepada Pemberi Tugas maupun Konsultan Perencana lainnya mengenai pengaruhnya terhadap desain-desain atau material-material alternatif.
                </p>
                  <hr className="border-stone-300" />
                <p className="pt-10 px-10"> 
                  Memonitor Rencana Anggaran Biaya serta melakukan optimasi-optimasi terhadap biaya konstruksi dan lain-lain guna mendapatkan anggaran biaya yang ekonomis dan realistis.
                </p>
                  <hr className="border-stone-300" />
                <p className="pt-10 px-10">
                  Menghadiri rapat (jika diperlukan) konsultan, khususnya  mengenai hal yang berhubungan dengan Rencana Biaya dan masalah-masalah yang berhubungan dengan Administrasi (kontrak).
                </p>
                  <hr className="border-stone-300" />
                <p className="pt-10 px-10"> 
                  Menyusun dan menyiapkan Dokumen Tender dan Bill of Quantity sebagai pedoman untuk peserta tender didalam pengajuan penawaran.
                </p>
                  <hr className="border-stone-300" />
                <p className="pt-10 px-10">
                  Menyusun dan membuat Rencana Anggaran Biaya berdasarkan item pekerjaan dan kuantitas yang tercantum didalam BQ (Pre Tender Estimate), sebagai pedoman didalam melakukan evaluasi terhadap penawaran-penawaran yang diajukan peserta tender.
                </p>
                  <hr className="border-stone-300" />
                <p className="pt-10 px-10">
                  Mengevaluasi dan mengkaji penawaran-penawaran yang diajukan Peserta Tender khususnya dari segi biaya dan administrasi yang dituangkan dalam bentuk Laporan Evaluasi Tender.
                </p>
                  <hr className="border-stone-300" />
                <p className="pt-10 px-10">
                  Ikut membantu pihak Pemberi Tugas atau Project Management didalam melakukan klarifikasi dan negosiasi dengan Peserta Tender.
                </p>
                  <hr className="border-stone-300" />
                <p className="pt-10 pb-10 px-10"> 
                  Menyusun dan menyiapkan Dokumen Kontrak untuk ditanda tangani oleh Pihak Pemberi Tugas dan Pemborong.
                </p>
              </div>
          </div>


          <div className="bg-stone-400 text-center py-4">
            <h3 className="text-2xl font-bold border-b border-stone-300 px-6 pt-10 pb-4">Post Contract</h3>
            <div className="space-y-4 px-6 py-6 text-[15px] leading-relaxed text-justify">
              <p className="py-10 px-10">
                Menghadiri rapat dilapangan (bila mana diperlukan) maksimum 1 minggu sekali atau 1 ( satu ) bulan sekali jika proyek diluar kota Jakarta.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10">
                Mengevaluasi dan menilai klaim pembayaran prestasi pekerjaan yang diajukan pemborong, dengan mengadakan peninjauan kelapangan untuk dilakukan pengecekan bersama antara Pemborong, Quantity Surveyor dan Management Konstruksi (MK). Hasil evaluasi tersebut diatas selanjutnya dilampirkan pada Penilaian Pembayaran/Sertifikat Pembayaran.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10"> 
                Mengevaluasi, menilai dan menyusun perhitungan pekerjaan tambah/kurang (Variation Order) berdasarkan perubahan-perubahan yang terjadi selama masa pelaksanaan, baik perubahan dalam hal desain maupun spesifikasi, dimana perubahan ini didasarkan dari instruksi tertulis dari MK dan adanya perbedaan antara gambar kontrak (Contract Drawing) dengan gambar pelaksanaan (Construction Drawing). Hasil evaluasi dan penilaian tersebut dituangkan pada Sertifikat Pekerjaan Tambah/Kurang untuk disetujui oleh MK, Pemborong dan Pemberi Tugas.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10"> 
                Memberikan informasi-informasi disertai usulan-usulan kepada Pemberi Tugas atau Konsultan Perencana dalam hal Rencana Anggaran Biaya selama berlangsungnya pelaksanaan proyek, terhadap pengaruh adanya disain-disain alternatif pada struktur, arsitektur atau mekanikal/elektrikal, termasuk pula pemilihan-pemilihan material alternatif.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10">
                Menyusun Laporan Posisi Keuangan terhadap Biaya Konstruksi (Financial Statement Report) setiap periode tertentu (minimum 3 bulan sekali).
                Laporan Posisi Keuangan ini menggambarkan Nilai Proyek berdasarkan perubahan-perubahan yang terjadi sampai saat disusunnya laporan tersebut, termasuk estimasi biaya-biaya lainnya untuk perubahan-perubahan yang diantisipasi.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10">
                Menyusun dan membuat Perhitungan Akhir Biaya Proyek (Final Account) berdasarkan Nilai Proyek Awal termasuk nilai-nilai pekerjaan tambah/kurang.
                Perhitungan Akhir Biaya Proyek tersebut menggambarkan Nilai Proyek Akhir secara keseluruhan (biaya konstruksi), jumlah pembayaran yang telah diterima pemborong, dan sisa pembayaran yang harus diterima oleh Pemborong.
              </p>
            </div> 
          </div>
        </div>

        <div className="hidden lg:grid z-10 col-start-1 col-end-3 bg-white text-stone-700 text-left rounded-xl shadow-lg overflow-y-auto max-h-[80vh]">
          <h3 className="text-2xl font-bold border-b border-stone-300 px-6 pt-10 pb-4">Post Contract</h3>
            <div className="space-y-4 px-6 py-6 text-[15px] leading-relaxed text-justify">
              <p className="py-10 px-10">
                Menghadiri rapat dilapangan (bila mana diperlukan) maksimum 1 minggu sekali atau 1 ( satu ) bulan sekali jika proyek diluar kota Jakarta.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10">
                Mengevaluasi dan menilai klaim pembayaran prestasi pekerjaan yang diajukan pemborong, dengan mengadakan peninjauan kelapangan untuk dilakukan pengecekan bersama antara Pemborong, Quantity Surveyor dan Management Konstruksi (MK). Hasil evaluasi tersebut diatas selanjutnya dilampirkan pada Penilaian Pembayaran/Sertifikat Pembayaran.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10"> 
                Mengevaluasi, menilai dan menyusun perhitungan pekerjaan tambah/kurang (Variation Order) berdasarkan perubahan-perubahan yang terjadi selama masa pelaksanaan, baik perubahan dalam hal desain maupun spesifikasi, dimana perubahan ini didasarkan dari instruksi tertulis dari MK dan adanya perbedaan antara gambar kontrak (Contract Drawing) dengan gambar pelaksanaan (Construction Drawing). Hasil evaluasi dan penilaian tersebut dituangkan pada Sertifikat Pekerjaan Tambah/Kurang untuk disetujui oleh MK, Pemborong dan Pemberi Tugas.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10"> 
                Memberikan informasi-informasi disertai usulan-usulan kepada Pemberi Tugas atau Konsultan Perencana dalam hal Rencana Anggaran Biaya selama berlangsungnya pelaksanaan proyek, terhadap pengaruh adanya disain-disain alternatif pada struktur, arsitektur atau mekanikal/elektrikal, termasuk pula pemilihan-pemilihan material alternatif.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10">
                Menyusun Laporan Posisi Keuangan terhadap Biaya Konstruksi (Financial Statement Report) setiap periode tertentu (minimum 3 bulan sekali).
                Laporan Posisi Keuangan ini menggambarkan Nilai Proyek berdasarkan perubahan-perubahan yang terjadi sampai saat disusunnya laporan tersebut, termasuk estimasi biaya-biaya lainnya untuk perubahan-perubahan yang diantisipasi.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10">
                Menyusun dan membuat Perhitungan Akhir Biaya Proyek (Final Account) berdasarkan Nilai Proyek Awal termasuk nilai-nilai pekerjaan tambah/kurang.
                Perhitungan Akhir Biaya Proyek tersebut menggambarkan Nilai Proyek Akhir secara keseluruhan (biaya konstruksi), jumlah pembayaran yang telah diterima pemborong, dan sisa pembayaran yang harus diterima oleh Pemborong.
              </p>
            </div> 
        </div>
        <div className="hidden lg:grid z-10 col-start-3 col-end-5 bg-white text-stone-700 text-left rounded-xl shadow-lg overflow-y-auto max-h-[80vh]">
          <h3 className="text-2xl font-bold border-b border-stone-300 px-6 pt-10 pb-4">Pre Contract</h3>
            <div className="space-y-4 px-6 py-6 text-[15px] leading-relaxed text-justify">
              <p className="py-10 px-10"> 
                Menyusun dan menyiapkan Rencana Anggaran Biaya Sementara (Preliminary Cost Plan) pada tahap awal perencanaan disusul kemudian dengan Rencana Anggaran Biaya Dasar (Detailed Elemental Cost Plan), berdasarkan gambar-gambar rencana yang telah dikembangkan.
                Lingkup ini termasuk juga Evaluasi Rencana Anggaran Biaya terhadap perubahan-perubahan desain dan/atau spesifikasi selama tahap Pengembangan Rencana (Design Development).
              </p>
                <hr className="border-stone-300" />
              <p className="pt-10 px-10"> 
                Menyusun dan menyiapkan Rencana Anggaran Biaya Sementara (Preliminary Cost Plan) pada tahap awal perencanaan disusul kemudian dengan Rencana Anggaran Biaya Dasar (Detailed Elemental Cost Plan), berdasarkan gambar-gambar rencana yang telah dikembangkan.
                Lingkup ini termasuk juga Evaluasi Rencana Anggaran Biaya terhadap perubahan-perubahan desain dan/atau spesifikasi selama tahap Pengembangan Rencana (Design Development).
              </p>
               <hr className="border-stone-300" />
              <p className="pt-10 px-10">
                Memberikan informasi-informasi dan saran-saran didalam penyusunan Rencana Anggaran Biaya baik kepada Pemberi Tugas maupun Konsultan Perencana lainnya mengenai pengaruhnya terhadap desain-desain atau material-material alternatif.
              </p>
                <hr className="border-stone-300" />
              <p className="pt-10 px-10"> 
                Memonitor Rencana Anggaran Biaya serta melakukan optimasi-optimasi terhadap biaya konstruksi dan lain-lain guna mendapatkan anggaran biaya yang ekonomis dan realistis.
              </p>
                <hr className="border-stone-300" />
              <p className="pt-10 px-10">
                Menghadiri rapat (jika diperlukan) konsultan, khususnya  mengenai hal yang berhubungan dengan Rencana Biaya dan masalah-masalah yang berhubungan dengan Administrasi (kontrak).
              </p>
                <hr className="border-stone-300" />
              <p className="pt-10 px-10"> 
                Menyusun dan menyiapkan Dokumen Tender dan Bill of Quantity sebagai pedoman untuk peserta tender didalam pengajuan penawaran.
              </p>
                <hr className="border-stone-300" />
              <p className="pt-10 px-10">
                Menyusun dan membuat Rencana Anggaran Biaya berdasarkan item pekerjaan dan kuantitas yang tercantum didalam BQ (Pre Tender Estimate), sebagai pedoman didalam melakukan evaluasi terhadap penawaran-penawaran yang diajukan peserta tender.
              </p>
                <hr className="border-stone-300" />
              <p className="pt-10 px-10">
                Mengevaluasi dan mengkaji penawaran-penawaran yang diajukan Peserta Tender khususnya dari segi biaya dan administrasi yang dituangkan dalam bentuk Laporan Evaluasi Tender.
              </p>
                <hr className="border-stone-300" />
              <p className="pt-10 px-10">
                Ikut membantu pihak Pemberi Tugas atau Project Management didalam melakukan klarifikasi dan negosiasi dengan Peserta Tender.
              </p>
                <hr className="border-stone-300" />
              <p className="pt-10 pb-10 px-10"> 
                Menyusun dan menyiapkan Dokumen Kontrak untuk ditanda tangani oleh Pihak Pemberi Tugas dan Pemborong.
              </p>
            </div>
        </div>              
        <div className=" z-10 col-start-1 col-end-6 bg-white text-stone-700 text-left rounded-xl shadow-lg overflow-y-auto max-h-[80vh] mt-10">
          <h3 className="text-2xl font-bold border-b border-stone-300 px-6 pt-10 pb-4">Catatan :</h3>
            <div className="space-y-4 px-6 py-6 text-[15px] leading-relaxed text-justify">
              <p className="py-10 px-10">
                Lingkup Jasa Konsultan Quantity Surveyor pada tahap Pre Contract maupun Post Contract adalah didasarkan atas suatu proyek yang ditenderkan dengan system “Lump Sum Fixed Price Contract”, bukan Remeasurement.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10">
                Sistim tender adalah berdasarkan Bill of Quantity yang dibuat oleh Quantity Surveyor.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10">
                Pengertian Biaya Proyek adalah Biaya Konstruksi tidak termasuk harga tanah, jasa konsultan, supervisi dan bunga bank.
              </p>
                <hr className="border-stone-300" />
              <p className="py-10 px-10">
                Sistim tender adalah berdasarkan gambar design dan spesifikasi yang dibuat oleh Konsultan Perencana.
              </p>     
            </div>
        </div>
        </div>
        </section>
      </DashboardLayout>
    );
  }
  