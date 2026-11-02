import LoremIpsum from "react-lorem-ipsum";

export default function AboutSec4(){
    return(
        <section className="relative py-16 w-screen">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center w-full justify-center gap-6 text-center">
            <h1 className="text-2xl text-bold mb-3">
              Legalitas dan Client
            </h1>
      
            <img
              src="src/assets/images/ourpatner.jpeg"
              alt="Our Partner"
              className="w-full max-w-3xl h-96 object-cover rounded-2xl"
            />
      
            <p className="font-extralight text-base font-sans tracking-tight opacity-90 text-black text-justify mx-auto mt-3">
              <LoremIpsum p={1} />
            </p>
          </div>
        </div>
      </section>
      
    );
}