
export default function Menu2Section() {
    return (
        <section className="relative w-screen ">
            <div className="relative z-10 pt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="relative z-10 text-center text-white lg:p-0 p-5">
                    <img src={"src/assets/images/dirut.jpeg"} alt="Background" className="lg:w-full lg:h-full object-cover" />
                </div>
                <div className="relative z-10 text-white p-5">
                    <p className="text-3xl font-medium tracking-tight font-system-ui drop-shadow-xl text-black">
                        Pt. Graha Estimatika Pradana
                    </p>
                    <h3 className="text-base font-sans tracking-tight pt-7 opacity-90 text-black text-justify max-w-4xl ">
                        Kami adalah konsultan Quantity Surveyor yang berfokus pada
                        perencanaan biaya, pengendalian anggaran, dan dokumen tender
                        proyek konstruksi.
                    </h3>
{/* 
                    <h4 className="text-lg pt-7 opacity-90 text-black text-justify max-w-4xl mx-auto">
                        PT. Graha Estimatika Pradana Perusahaan yang didirikan oleh Drs. Didik Dwi Hantoro,MM 
                        yang sebelumnya pernah bekerja diperusahaan Quantity Surveyor yang cukup ternama hampir 23 tahun.

                    </h4> */}
                </div>
            </div>        
        </section>
    )
}