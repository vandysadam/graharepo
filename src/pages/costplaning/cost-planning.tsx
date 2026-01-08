import DashboardLayout from "@/layout/dashboerd-layout";
import { useEffect } from "react";
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';
// import gambar1 from '@/assets/svg/undraw_qa-engineers_kgp8.svg';
// import gambar2 from '@/assets/svg/undraw_investing_kncz.svg';

export default function CostPlanningScreen() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <DashboardLayout>
      <section className="w-full py-16 bg-gray-50 overflow-hidden px-8 md:px-16 lg:px-80">
        <h1 className="text-2xl sm:text-4xl text-center font-extrabold text-indigo-900 mb-5">
          Cost Planning
        </h1>
        <div className="text-2xl font-bold mb-16 text-gray-800 text-center" data-aos="fade-down">
          <h2><i>economic cost targets</i></h2>
        </div>  
          <img src="src/assets/svg/undraw_investing_kncz.svg" className="h-[300px] w-[800px] object-contain rounded-xl shadow-md mb-10" data-aos="fade-up"></img>
        <div className="grid grid-cols-1 gap-4 max-w-screen-xl mx-auto text-center px-4 text-justify text-sm md:text-base lg:text-lg" data-aos="fade-up">
          <p>Hal-hal yang paling utama dan prinsip didalam rencana pembangunan suatu proyek seyogyanya diputuskan pada tahap perencanaan konsep (<i>Concept Design Stage</i>).
          Alokasi dana dan biaya proyek pada umumnya ditentukan pada tahap Awal Desain, oleh karenanya sangat penting sekali bahwa perencanaan estimasi biaya dimulai dan diterapkan pada tahap Awal desain, agar sasaran dan target pelaksanaan dan penyelesaian proyek dari segi biaya konstruksi, desain, mutu dan waktu dapat terpenuhi.
          Jasa yang diberikan oleh Quantity Surveyor seharusnya melalui pendekatan-pendekatan secara komperhensif, menyajikan informasi mengenai biaya secara detail
          Agar Owner ( Pemberi Tugas ) memperoleh suatu gambaran mengenai Biaya Proyek secara jelas dan realistis hingga fungsi perencanaan biaya ( <i>Elemental Cost Estimate</i> ) didalam tahap design awal menjadi efektif.
          </p>
        </div>     
        <div className="grid grid-cols-1 gap-4 max-w-screen-xl mx-auto text-center px-4 text-justify text-sm md:text-base lg:text-lg pt-5" data-aos="fade-right">
          <p>Sebagai Konsultan Quantity surveyor seyogyanya selalu memenuhi komitmennya, terutama didalam menerapkan sistim Perencanaan biaya, modelling, dan management services yang inovatif didalam merencanakan suatu budget estimate yang realistis, serta memberikan kajian-kajian yang komparatif dari berbagai sudut pandang desain (misal, faktor bentuk, ketinggian, efisien, kualitas suatu desain).</p>
        </div>

        <div className="grid grid-cols-1 gap-4 max-w-screen-xl mx-auto text-center px-4 text-justify text-sm md:text-base lg:text-lg pt-5" data-aos="fade-right">
          <p>Melalui program penelitian dan pengembangan (<i>research and development</i>) dan ditunjang dengan sistim komputerisasi, maka pelayanan kami terhadap klien lebih ditingkatkan terutama didalam memberikan tanggapan yang cepat terhadap masalah desain dan alternatifnya, menyusun <i>bill of quantity</i> yang cukup komprehensif, dan melakukan kajian dan penilaian atas penawaran yang diajukan Peserta Tender secara sistimatis.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 max-w-screen-xl mx-auto text-center px-4 text-justify text-sm md:text-base lg:text-lg pt-5" data-aos="fade-right">
          <p>Penerapan <i>system cost planning</i>, modelling dan management pada tahap konsep desain diharapkan akan dapat mencapai target budget yang realistis, sehingga baik Klien maupun Arsitek/Engineer akan merasa yakin atas keberhasilan Proyek tersebut.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 max-w-screen-xl mx-auto text-center px-4 text-justify text-sm md:text-base lg:text-lg pt-5" data-aos="fade-right">
          <p>Dengan dilakukan perencanaan biaya (<i>cost planning</i>) pada tahap konsep desain, serta melakukan prosedur pengendalian biaya pada setiap tahap perencanaan, maka diharapkan bahwa biaya yang dikeluarkan untuk pembangunan suatu Proyek masih berada dalam Budget Ekonomis seperti yang direncanakan.</p>
        </div>
      </section>
    </DashboardLayout>
  );
}
