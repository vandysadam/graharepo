

export default function AboutSec1() {
    return(
    <section className="relative pt-16 pb-16 bg-gray-50 w-screen">
    <h1 className="text-3xl font-medium tracking-tight font-system-ui drop-shadow-xl text-black text-center mb-10">Tentang Kami
    </h1>

    <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center divide-x-4">
      <div className="h-94 p-10">
        <h1 className='text-2xl text-bold mb-3'>Perusahaan</h1>
        <p className='font-extralight text-base font-sans tracking-tight opacity-90 text-black text-justify  mt-3'>
          PT. Graha Estimatika Pradana adalah salah satu perusaahaan swasta nasional yang bergerak di 
          bidang jasa konsultan biaya bangunan atau yang dikenal dengan sebutan Quantity Surveyor, 
          didirikan dengan akte notaris Irma Sri Rahayu, SH, Mkn pada tanggal 12 Juni 2013.
        </p>
        <p className='font-extralight text-base font-sans tracking-tight opacity-90 text-black text-justify mx-auto mt-3'>
          PT. Graha Estimatika Pradana Perusahaan yang didirikan oleh Drs. Didik Dwi Hantoro,MM 
          yang sebelumnya pernah bekerja diperusahaan Quantity Surveyor yang cukup ternama hampir 23 tahun.
        </p>
      </div>
      <div className="w-full place-items-center">
        {/* <div className="h-full mask-x-from-70% mask-x-to-90%"> */}
          <img src={"src/assets/images/perusahaan.jpeg"} alt="Background" className="w-full h-full object-cover rounded-2xl"/>
        {/* </div> */}
      </div>
    </div>
    </section>
    );
}