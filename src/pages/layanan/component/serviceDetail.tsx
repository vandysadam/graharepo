// components/services/ServiceDetail.jsx

import { Service } from "../type/types"

interface ServiceDetailProps {
    serviceDetails?: Service
  }


export default function ServiceDetail({ serviceDetails }: ServiceDetailProps) {
    if (!serviceDetails) return null

    return (
      <div className="flex-1 rounded-lg border border-gray-200 bg-white p-5 sm:p-6 md:p-10 lg:p-20">
        <h2 className="mb-3 text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl">
          {serviceDetails.title}
        </h2>

        <span className="mb-3 inline-block rounded-full bg-gray-100 px-3 py-1 text-base text-gray-700 sm:text-lg">
          {serviceDetails.phase}
        </span>

        <p className="mb-6 pt-2 text-base leading-relaxed text-gray-600 sm:text-lg">
          {serviceDetails.description}
        </p>

        <h4 className="mb-3 text-lg font-semibold sm:text-xl">
          Apa yang kami kerjakan
        </h4>

        <ul className="mb-8 space-y-2 text-base sm:text-lg">
          {serviceDetails.points.map((p, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700 sm:gap-3">
              <span className="shrink-0">✓</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <div className="bg-stone-400">
              <img src={"src/assets/images/jumbotron.jpeg"} alt="Background" className="w-full h-full object-cover" />
        </div>


{/*
        <div className="border-t pt-6">
          <p className="mb-3 font-medium">
            Diskusikan kebutuhan proyek Anda
          </p>
          <button className="px-6 py-2 rounded bg-black text-white">
            Hubungi Kami
          </button>
        </div>*/}
      </div>
    )
  }
