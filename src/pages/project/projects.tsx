import { useNavigate } from "react-router-dom";
import { projek } from "../project/entity/project";
import DashboardLayout from "@/layout/dashboerd-layout";
import { useState } from "react";

const ProjectGallery = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState<{ [key: string]: boolean }>({});

  const handleImageLoad = (id: string) => {
    setLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <DashboardLayout>
      <section className="relative w-full py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center px-6 ">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-indigo-900 mb-6">Galeri Proyek</h2>
          <h3 className="text-lg text-gray-700 max-w-2xl mx-auto">
            Lihat berbagai proyek yang telah kami kerjakan di berbagai sektor.
          </h3>
        </div>
        

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-6 w-full  mt-10">
          {projek.map((p) => (
            <div
              key={p.id}
              onClick={() => navigate(`/project/${p.id}`)}
              className="cursor-pointer hover:scale-105 transition rounded w-[350px] h-[300px] lg:w-[420px] lg:h-[280px] sm:h-[300px] sm:w-[400px] overflow-hidden shadow"
            >
              <div className="relative w-full h-full bg-gray-200">
                {!loaded[p.id] && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse" />
                )}
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  onLoad={() => handleImageLoad(p.id)}
                  className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                    loaded[p.id] ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div className=" absolute bottom-3 left-2 p-2 px-3 text-center font-semibold  text-black bg-gray-200 rounded">
                  <h3 className="md:text-sm sm:text-base text-sm max-w-2xl">{p.title}</h3>
                </div>
              </div>
              
            </div>
            
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default ProjectGallery;
