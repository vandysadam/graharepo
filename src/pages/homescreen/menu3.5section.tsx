import { Calculator, CheckCircle, ClipboardList, CreditCard, FileText, RefreshCcw } from "lucide-react";

const services = [
    { title: "Blok Plan Estimate ( Cost/M2 )", desc: "Perhitungan biaya awal per meter persegi.", icon: ClipboardList },
    { title: "Elemental Cost Estimate", desc: "Estimasi biaya berdasarkan elemen proyek.", icon: Calculator },
    { title: "Dokumen Administrasi Tender / Kontrak", desc: "Penyusunan dokumen kontrak proyek.", icon: FileText },
    { title: "Prepared Sertifikat Of Payment", desc: "Penyusunan sertifikat pembayaran proyek.", icon: CreditCard },
    { title: "Prepared Variation Order", desc: "Penyesuaian biaya untuk pekerjaan tambahan atau pengurangan.", icon: RefreshCcw },
    { title: "Prepared Final Account", desc: "Perhitungan akhir biaya proyek.", icon: CheckCircle },
];

export default function Menu25Section() {
    return (
        <section className="relative bg-gray-100 h-full pb-10">
            <h5 className="text-3xl font-medium tracking-tight font-system-ui drop-shadow-xl text-whte text-center p-10">
                Lingkup Jasa 
            </h5>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 lg:px-40 px-10 inset-0">
                 {services.map((service, index) => (
                <div key={index} className="relative content-center border-4 rounded-xl lg:p-10 p-5 group inset-0">
                        <service.icon className="w-10 h-10 place-self-center" />
                        <h6 className="pt-4 text-sm sm:text-base text-center">{service.title}</h6>
                        {/* <h6 className="text-base font-sans opacity-50 text-center text-balance">{service.desc}</h6> */}
                </div>
                ))}
                </div>
        </section>    
    )
}


                {/* <div className="group m-10 static w-10 h-10">
                  <ClipboardList className="group-hover:scale-150 duration-100 group-hover:opacity-0 transition w-10 h-10" />
                    <div className="group-hover:scale-150 duration-300 transition opacity-0 group-hover:opacity-100 bg-cover bg-gray-100 rounded-2xl w-64 p-5">
                        <ClipboardList className="w-10 h-10 text-right" />
                        <h6 className="pt-5 text-lg font-sans text-balance">Blok Plan Estimate ( Cost/M2 )</h6>
                        <h6 className="text-base font-sans opacity-50 content-end">Perhitungan biaya awal per meter persegi.</h6>
                    </div>
                </div>

                <div className="group m-10 static w-10 h-10">
                  <Calculator className="group-hover:scale-150 duration-100 group-hover:opacity-0 transition w-10 h-10 " />
                    <div  className="group-hover:scale-150 duration-300 transition opacity-0 group-hover:opacity-100 bg-gray-100 rounded-2xl w-64 p-5">
                        <Calculator className="w-10 h-10 text-right" />
                        <h6 className="pt-5 text-lg font-sans text-balance">Elemental Cost Estimate</h6>
                        <h6 className="text-base font-sans opacity-50 content-end">Estimasi biaya berdasarkan elemen proyek.</h6>
                    </div>
                </div>

                <div className="group m-10 static w-10 h-10">
                  <FileText className="group-hover:scale-150 duration-100 group-hover:opacity-0 transition w-10 h-10 " />
                    <div  className="group-hover:scale-150 duration-300 transition opacity-0 group-hover:opacity-100 bg-gray-100 rounded-2xl w-64 p-5">
                        <FileText className="w-10 h-10 text-right" />
                        <h6 className="pt-5 text-lg font-sans text-balance">Dokumen Administrasi Tender / Kontrak</h6>
                        <h6 className="text-base font-sans opacity-50 content-end">Penyusunan dokumen kontrak proyek.</h6>
                    </div>
                </div>

                <div className="group m-10 static w-10 h-10">
                  <CreditCard className="group-hover:scale-150 duration-100 group-hover:opacity-0 transition w-10 h-10 " />
                    <div  className="group-hover:scale-150 duration-300 transition opacity-0 group-hover:opacity-100 bg-gray-100 rounded-2xl w-64 p-5">
                        <CreditCard className="w-10 h-10 text-right" />
                        <h6 className="pt-5 text-lg font-sans text-balance">Prepared Sertifikat Of Payment</h6>
                        <h6 className="text-base font-sans opacity-50 content-end">Penyusunan sertifikat pembayaran proyek.</h6>
                    </div>
                </div>
                
                <div className="group m-10 static w-10 h-10">
                  <RefreshCcw className="group-hover:scale-150 duration-100 group-hover:opacity-0 transition w-10 h-10 " />
                    <div  className="group-hover:scale-150 duration-300 transition opacity-0 group-hover:opacity-100 bg-gray-100 rounded-2xl w-64 p-5">
                        <RefreshCcw className="w-10 h-10 text-right" />
                        <h6 className="pt-5 text-lg font-sans text-balance">Prepared Variation Order</h6>
                        <h6 className="text-base font-sans opacity-50 content-end">Penyesuaian biaya untuk pekerjaan tambahan atau pengurangan.</h6>
                    </div>
                </div>

                <div className="group m-10 static w-10 h-10">
                  <CheckCircle className="group-hover:scale-150 duration-100 group-hover:opacity-0 transition w-10 h-10"/>
                    <div  className="group-hover:scale-150 duration-300 transition opacity-0 group-hover:opacity-100 bg-gray-100 rounded-2xl w-64 p-5">
                        <CheckCircle className="w-10 h-10 text-right" />
                        <h6 className="pt-5 text-lg font-sans text-balance">Prepared Final Account</h6>
                        <h6 className="text-base font-sans opacity-50 content-end">Perhitungan akhir biaya proyek.</h6>
                    </div>
                </div> */}



  {/* <div className="row-start-1 row-end-3 w-80 h-full items-center justify-center bg-[url(src/assets/images/Quantifying-Success.jpeg)] bg-cover rounded-xl">
                <img src={""} alt="Background" className="w-full h-full object-cover rounded-2xl" />
                
                </div>     */}
                

// <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6">
// {services.map((service, index) => (
//     <Card 
//         key={index} 
//         className="group p-5 text-center shadow-lg rounded-xl flex flex-col items-center transition duration-300
//                 md:hover:scale-105 md:hover:bg-indigo-600 md:hover:text-white"
//     >
//         <service.icon className="w-12 h-12 mb-3 md:group-hover:text-white transition duration-300 text-indigo-600" />
//         <CardContent>
//             <h6 className="text-xl font-semibold">{service.title}</h6>
//             <h6 className="text-sm opacity-90 mt-2">{service.desc}</h6>
//         </CardContent>
//     </Card>
// ))}
// </div>