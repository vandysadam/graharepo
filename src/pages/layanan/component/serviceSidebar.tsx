// components/services/ServiceSidebar.jsx

import { Service } from "../type/types"

interface ServiceSidebarProps {
    serviceSidebar: Service[]
    activeId: string
    onSelect: (id: string) => void
  }


export default function ServiceSidebar({ serviceSidebar, activeId, onSelect }: ServiceSidebarProps) {
    return (
      <aside className="w-full md:w-1/3 lg:w-1/4 ">
        <div className="lg:p-10 md:px-4 px-10 pb-4 sticky top-24 border rounded-lg bg-white ">
          <h3 className="py-10 text-2xl font-medium border-b">
            Daftar Layanan
          </h3>
          <ul>
            {serviceSidebar.map((s) => (
              <li
                key={s.id}
                onClick={() => onSelect(s.id)}
                className={`lg:px-4 py-5 text-md sm:text-xl cursor-pointer border-b last:border-none
                  ${
                    activeId === s.id
                      ? "bg-gray-100 font-semibold"
                      : "hover:bg-gray-50"
                  }`}
              >
                {s.title}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    )
  }
  