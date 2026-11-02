import LoremIpsum from "react-lorem-ipsum";

export default function AboutSec2() {
    return(
    <section className="relative pt-16 pb-16 w-screen">
        <div className="relative z-10 pt-20 pb-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center divide-x-4 divide-gray-400">
            <div className="h-94 p-10">
                <p className="text-2xl">
                    Visi
                </p>
                <p className="font-extralight text-base font-sans tracking-tight opacity-90 text-black text-justify mx-auto mt-3">
                    <LoremIpsum p={1}/>
                </p>
            </div>

            <div className="h-94 p-10">
                <p className="text-2xl">
                    Misi
                </p>
                <p className="font-extralight text-base font-sans tracking-tight opacity-90 text-black text-justify mx-auto mt-3">
                    <LoremIpsum p={1}/>
                </p>
            </div>
        </div>
    </section>
    );
}