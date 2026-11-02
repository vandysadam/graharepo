// components/services/ServiceSidebar.jsx

import { Service } from "../type/types"

interface ServiceSidebarProps {
    serviceSidebar: Service[]
    activeId: string
    onSelect: (id: string) => void
  }


export default function ServiceSidebar({ serviceSidebar, activeId, onSelect }: ServiceSidebarProps) {
    return (
      <aside className="w-full md:w-1/3 lg:w-1/4">
        <div className="rounded-lg border border-gray-200 bg-white p-4 md:sticky md:top-24 md:p-6 lg:p-10">
          <h3 className="border-b border-gray-200 pb-3 text-xl font-medium md:pb-5 md:text-2xl">
            Daftar Layanan
          </h3>

          {/*
            HP : chip horizontal yang bisa digeser (ringkas, tidak memakan layar)
            md+: daftar vertikal seperti tampilan awal
          */}
          <ul className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-1 pt-4 md:mx-0 md:block md:overflow-visible md:px-0 md:pb-0 md:pt-5">
            {serviceSidebar.map((s) => {
              const isActive = activeId === s.id
              return (
                <li key={s.id} className="shrink-0 snap-start md:shrink">
                  <button
                    type="button"
                    onClick={() => onSelect(s.id)}
                    aria-pressed={isActive}
                    className={`h-full w-full whitespace-nowrap rounded-full border px-4 py-2.5 text-left text-sm leading-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1 md:w-full md:whitespace-normal md:rounded-none md:border-0 md:border-b md:border-gray-200 md:px-0 md:py-5 md:text-lg md:last:border-b-0 lg:text-xl ${
                      isActive
                        ? "border-gray-900 bg-gray-900 text-white md:border-gray-200 md:bg-gray-100 md:text-black md:font-semibold"
                        : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {s.title}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>
    )
  }
