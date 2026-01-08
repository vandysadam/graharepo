import { useNavigate, useParams } from "react-router-dom";
import { projek } from "../project/entity/project";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DashboardLayout from "@/layout/dashboerd-layout";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const ProjectSlider = () => {
  const { id } = useParams<{ id: string }>();
  const data = projek.find((item) => item.id === id);
  const sliderRef = useRef<Slider | null>(null);
  const navigate = useNavigate();

  if (!data) return <div>Proyek tidak ditemukan</div>;

  return (
    <DashboardLayout>
      <section className="lg:min-h-screen w-screen py-10 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-indigo-900 ">{data.title}</h2>   
        </div>

        <div className="p-6">
          {data.images.length > 0 && (
            <div className="">
              {/* <h2 className="text-lg font-semibold mb-2">Galeri Foto</h2> */}
              <div className="grid grid-cols-4 ">
                <div>
                  <p className="mb-1"><strong>Gross Area:</strong> {data.grossArea}</p>
                  <p className="mb-1"><strong>Tanggal SPK:</strong> {data.tanggalSpk}</p>
                </div>
                <div className="col-span-3 text-right" >
                  <Button  
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center text-sm text-black-500 hover:text-blue-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 "
                  >Kembali
                  </Button>
                </div>
              </div>
              <p className="text-sm text-gray-500 ">Klik gambar untuk ke slide berikutnya</p>
              
                <div className="col-start-2 col-span-4">
                  <Slider
                    ref={(slider) => (sliderRef.current = slider)}
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={3000} // ganti delay kalau mau
                  >
                    {data.images.map((img, index) => (
                      <div key={img}>
                        <div
                          className="flex justify-center items-center"
                          onClick={() => sliderRef.current?.slickNext()}
                        >
                          <img
                            src={img}
                            alt={`Gambar ${index + 1}`}
                            className="object-cover w-[350px] h-[300px] lg:w-[700px] lg:h-[550px] sm:h-[300px] sm:w-[400px] bg-white rounded"
                          />
                        </div>
                      </div>
                    ))}               
                  </Slider>
                </div>
              
            </div>
          )}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default ProjectSlider;
