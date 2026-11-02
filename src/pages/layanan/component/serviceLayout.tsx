// components/services/ServiceLayout.jsx
import { useState } from "react"
import { serviceDataservice } from "./dataServices"
import ServiceSidebar from "./serviceSidebar"
import ServiceDetail from "./serviceDetail"

export default function ServiceLayout() {
  const [activeId, setActiveId] = useState(serviceDataservice[0].id)

  const activeService = serviceDataservice.find(
    (service) => service.id === activeId
  )

  return (
    <div className="flex flex-col md:flex-row gap-6 md:p-20">
      <ServiceSidebar
        serviceSidebar={serviceDataservice}
        activeId={activeId}
        onSelect={setActiveId}
      />
      <ServiceDetail serviceDetails={activeService} />
    </div>
  )
}
