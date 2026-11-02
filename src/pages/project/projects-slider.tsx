import { useNavigate, useParams } from "react-router-dom";
import { projek } from "../project/entity/project";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DashboardLayout from "@/layout/dashboerd-layout";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Images,
  MapPin,
  Maximize2,
} from "lucide-react";

const CATEGORY_LABEL: Record<string, string> = {
  HAR: "Hotel, Apartment & Residence",
  Hospital: "Hospital",
  Office: "Office",
  Factory: "Factory",
};

/** Ukuran gambar seragam untuk semua breakpoint (tanpa lebar tetap agar tidak overflow di HP). */
const IMAGE_CLASS =
  "h-[240px] w-full select-none object-cover object-center bg-white sm:h-[360px] lg:h-[500px]";

const NAV_BUTTON_CLASS =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-100 active:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1 disabled:opacity-40";

const ProjectSlider = () => {
  const { id } = useParams<{ id: string }>();
  const data = projek.find((item) => item.id === id);
  const sliderRef = useRef<Slider | null>(null);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Proyek tidak ditemukan: tampilkan halaman "tidak ditemukan" yang tetap memakai layout
  if (!data) {
    return (
      <DashboardLayout>
        <section className="flex w-full items-center justify-center px-4 py-16 sm:py-24">
          <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-200">
            <Images className="mx-auto mb-3 h-10 w-10 text-gray-400" aria-hidden="true" />
            <h2 className="text-lg font-semibold text-black">Proyek tidak ditemukan</h2>
            <p className="mt-1 text-sm text-gray-500">
              Proyek yang Anda cari mungkin sudah dipindahkan atau tautannya tidak valid.
            </p>
            <Button className="mt-5 w-full sm:w-auto" onClick={() => navigate("/project")}>
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Galeri Proyek
            </Button>
          </div>
        </section>
      </DashboardLayout>
    );
  }

  // Semua foto pada proyek ditampilkan sebagai slide (seperti perilaku awal)
  const images = data.images;
  const total = images.length;
  const hasSlider = total > 1;

  const info = [
    { icon: MapPin, label: "Lokasi", value: data.location },
    { icon: Maximize2, label: "Gross Area", value: data.grossArea },
    { icon: CalendarDays, label: "Tanggal SPK", value: data.tanggalSpk },
  ].filter((item) => item.value);

  return (
    <DashboardLayout>
      <section className="w-full overflow-x-hidden bg-gray-50 py-6 sm:py-10 lg:min-h-screen">
        {/* Judul + lokasi + kategori */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold leading-tight text-indigo-900 sm:text-4xl">
            {data.title}
          </h2>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {data.location && (
              <span className="inline-flex items-center gap-1 text-sm text-gray-600">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                {data.location}
              </span>
            )}
            {data.category && (
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200">
                {CATEGORY_LABEL[data.category] ?? data.category}
              </span>
            )}
          </div>
        </div>

        {/* Informasi proyek + tombol kembali (menumpuk di HP, sejajar dari sm) */}
        <div className="mx-auto mt-6 max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
            <dl className="grid w-full grid-cols-1 gap-2 sm:w-auto sm:grid-cols-3 sm:gap-3">
              {info.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 ring-1 ring-gray-200"
                >
                  <Icon className="h-4 w-4 shrink-0 text-indigo-800" aria-hidden="true" />
                  <div className="min-w-0">
                    <dt className="text-xs text-gray-500">{label}</dt>
                    <dd className="truncate text-sm font-medium text-black">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <Button
              variant="outline"
              className="h-11 w-full shrink-0 sm:w-auto"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali
            </Button>
          </div>
        </div>

        {/* Galeri foto */}
        <div className="mx-auto mt-6 max-w-4xl px-4 sm:px-6">
          {total === 0 ? (
            <div className="rounded-xl bg-white p-10 text-center ring-1 ring-gray-200">
              <Images className="mx-auto mb-3 h-10 w-10 text-gray-400" aria-hidden="true" />
              <p className="text-sm text-gray-600">Belum ada foto untuk proyek ini.</p>
            </div>
          ) : (
            <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
              {hasSlider ? (
                <Slider
                  ref={(slider) => {
                    sliderRef.current = slider;
                  }}
                  dots={false}
                  arrows={false}
                  infinite
                  speed={400}
                  slidesToShow={1}
                  slidesToScroll={1}
                  autoplay
                  autoplaySpeed={5000}
                  pauseOnHover
                  swipe
                  touchMove
                  beforeChange={(_prev, next) => setCurrent(next)}
                >
                  {images.map((img, index) => (
                    <div key={`${index}-${img}`}>
                      <img
                        src={img}
                        alt={`${data.title} - foto ${index + 1}`}
                        className={IMAGE_CLASS}
                        draggable={false}
                        loading={index === 0 ? "eager" : "lazy"}
                        onClick={() => sliderRef.current?.slickNext()}
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <img src={images[0]} alt={data.title} className={IMAGE_CLASS} />
              )}
            </div>
          )}

          {/* Kontrol slider: target sentuh besar, titik navigasi dapat dibungkus */}
          {hasSlider && (
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => sliderRef.current?.slickPrev()}
                aria-label="Foto sebelumnya"
                className={NAV_BUTTON_CLASS}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex max-w-[60%] flex-wrap items-center justify-center gap-1.5">
                {images.map((img, index) => (
                  <button
                    key={`${index}-${img}`}
                    type="button"
                    onClick={() => sliderRef.current?.slickGoTo(index)}
                    aria-label={`Ke foto ${index + 1}`}
                    aria-current={index === current}
                    className="flex h-6 w-6 items-center justify-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    <span
                      className={`h-2 w-2 rounded-full transition-colors ${
                        index === current ? "bg-indigo-800" : "bg-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => sliderRef.current?.slickNext()}
                aria-label="Foto berikutnya"
                className={NAV_BUTTON_CLASS}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}

          {hasSlider && (
            <p className="mt-3 text-center text-xs text-gray-500 sm:text-sm">
              Foto {current + 1} dari {total} · geser atau klik gambar untuk melanjutkan
            </p>
          )}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default ProjectSlider;
