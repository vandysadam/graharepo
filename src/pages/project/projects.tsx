import { useNavigate } from "react-router-dom";
import { projek } from "../project/entity/project";
import DashboardLayout from "@/layout/dashboerd-layout";
import { useMemo, useState } from "react";
import BudiLestariBekasi from "../../../src/assets/images/Data-Foto-Proyek/proyek-budi-lestari/Proyek-Budi-lestari.webp";
import GalleryCiumbeluit from "../../../src/assets/images/Data-Foto-Proyek/proyek-apartmen-gallery-ciumbeluit/Proyek-Gallery-Ciumbeluit.webp";
import TigerMandiri from "../../../src/assets/images/Data-Foto-Proyek/proyek-tiger-mandiri-head-office/Proyek-Tigermandiri-head-office.webp";
import GudangPik from "../../../src/assets/images/Data-Foto-Proyek/proyek-gudang-&-offoce-pik/Proyek-Gudang-Pik--.webp";
import { ChevronDown, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function ProjectGallery (){
  const navigate = useNavigate();
  const [location, setSelectedCity] = useState("Semua Lokasi");
  const [search, setSearch] = useState("");
  const cityOption = useMemo(() => {
    return ["Semua Lokasi", ...new Set(projek.map((p) => p.location))];
  }, []);

  const filteredProject = useMemo(() => {
    return projek
    .filter((p) => (location === "Semua Lokasi" ? true : p.location === location))
    .filter((p) =>
      `${p.title} ${p.location}`.toLowerCase().includes(search.trim().toLowerCase()))
    }, [location, search]);

  const titleProject = useMemo(() => {
    return [
      {
        title: "Hospital",
        image: BudiLestariBekasi,
        project: filteredProject.filter((p) => p.category === "Hospital")
      },
      {
        title: "Office",
        image: TigerMandiri,
        project: filteredProject.filter((p) => p.category === "Office")
      },
      {
        title: "Hotel, Apartment, and Residence",
        image: GalleryCiumbeluit,
        project: filteredProject.filter((p) => p.category === "HAR")
      },
      {
        title: "Factory",
        image: GudangPik,
        project: filteredProject.filter((p) => p.category === "Factory")
      },
    ].filter((group) => group.project.length > 0);
  }, [filteredProject]);

  const hasFilter = location !== "Semua Lokasi" || search.trim() !== "";

  const resetFilter = () => {
    setSelectedCity("Semua Lokasi");
    setSearch("");
  };

  return (
    <DashboardLayout>
      <section className="relative w-full py-10 sm:py-16 bg-gray-50 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight font-system-ui drop-shadow-xl text-black text-center mb-5">Galeri Proyek</h2>
            <h3 className="text-sm sm:text-base font-sans text-gray-700 max-w-2xl mx-auto mb-5">
              Lihat berbagai proyek yang telah kami kerjakan di berbagai sektor.
            </h3>
          </div>

          {/* Filter: menumpuk vertikal di layar kecil, sejajar dari breakpoint sm ke atas */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 px-4 sm:px-6 pt-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto justify-between">
                <span className="truncate">{location}</span>
                <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[var(--radix-dropdown-menu-trigger-width)]">
            {cityOption.map((loc) => (
              <DropdownMenuCheckboxItem
              key={loc}
              checked={location === loc}
              onCheckedChange={() => setSelectedCity(loc)}>
                {loc}
              </DropdownMenuCheckboxItem>
            ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="w-full sm:max-w-xs">
            <Input
              type="search"
              aria-label="Cari proyek"
              placeholder="Cari proyek ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {hasFilter && (
            <Button variant="ghost" onClick={resetFilter} className="w-full sm:w-auto">
              <X className="h-4 w-4" />
              Reset filter
            </Button>
          )}
          </div>

          {filteredProject.length === 0 ? (
            <div className="px-4 sm:px-6 py-16 text-center">
              <p className="text-gray-600">Tidak ada proyek yang cocok dengan pencarian Anda.</p>
              <Button variant="outline" onClick={resetFilter} className="mt-4">
                Reset filter
              </Button>
            </div>
          ) : (
          <div className="flex flex-col lg:flex-row justify-start gap-4 px-4 sm:px-6 lg:px-24 pt-7 lg:min-h-[450px] lg:overflow-x-auto lg:snap-x lg:snap-mandatory">
            {titleProject.map((service) => (
              <div
                key={service.title}
                  className="group relative w-full lg:w-5/6 bg-gray-200 overflow-hidden rounded-lg lg:snap-start">
                <div className="bg-white rounded-xl p-4 sm:p-5 flex flex-col h-full">
                    <div className="flex items-center justify-between gap-3 py-2 border-b border-gray-100">
                      <h6 className="text-base sm:text-xl text-black font-sans font-semibold leading-snug">
                        {service.title}
                      </h6>
                      <span className="shrink-0 text-xs sm:text-sm text-gray-500">
                        {service.project.length} proyek
                      </span>
                    </div>
                    <ul className="mt-2 flex-1">
                      {service.project.map((p) => (
                        <li key={p.id}>
                          <button
                            type="button"
                            onClick={() => navigate(`/project/${p.id}`)}
                            className="w-full rounded-lg px-3 py-3 text-left transition-colors hover:bg-blue-50 active:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
                          >
                            <span className="block font-medium text-black leading-snug">{p.title}</span>
                            <span className="mt-0.5 block text-sm text-gray-500">{p.location}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
              </div>
            ))}
          </div>
          )}
      </section>
    </DashboardLayout>
  );
};
