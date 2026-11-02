// components/services/ServiceLayout.jsx
import { useRef, useState } from "react"
import { serviceDataservice } from "./dataServices"
import ServiceSidebar from "./serviceSidebar"
import ServiceDetail from "./serviceDetail"

export default function ServiceLayout() {
  const [activeId, setActiveId] = useState(serviceDataservice[0].id)
  const detailRef = useRef<HTMLDivElement>(null)

  const activeService = serviceDataservice.find(
    (service) => service.id === activeId
  )

  const handleSelect = (id: string) => {
    setActiveId(id)
    // Di HP daftar layanan ada di atas detail: langsung bawa pengguna ke isinya
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="flex flex-col gap-4 p-4 sm:gap-6 sm:p-6 md:flex-row md:gap-6 md:p-20">
      <ServiceSidebar
        serviceSidebar={serviceDataservice}
        activeId={activeId}
        onSelect={handleSelect}
      />
      <div
        ref={detailRef}
        className="min-w-0 flex-1 scroll-mt-4 md:scroll-mt-0"
      >
        <ServiceDetail serviceDetails={activeService} />
      </div>
    </div>
  )
}
