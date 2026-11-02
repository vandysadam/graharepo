// components/services/ServiceDetail.jsx

import { Service } from "../type/types"

interface ServiceDetailProps {
    serviceDetails?: Service
  }


export default function ServiceDetail({ serviceDetails }: ServiceDetailProps) {
    if (!serviceDetails) return null
  
    return (
      <div className="flex-1 border rounded-lg bg-white lg:p-20 md:p-10 p-10">
        <h2 className="lg:text-4xl md:text-3xl sm:text-3xl text-3xl font-semibold mb-3">
          {serviceDetails.title}
        </h2>

        <span className="inline-block mb-2 text-lg px-3 py-1 rounded-full bg-gray-100">
          {serviceDetails.phase}
        </span>
  
        <p className="text-gray-600 text-lg mb-6 pt-2">
          {serviceDetails.description}
        </p>
  
        <h4 className="font-semibold mb-3 text-xl">
          Apa yang kami kerjakan
        </h4>
  
        <ul className="space-y-2 mb-8 text-lg">
          {serviceDetails.points.map((p, i) => (
            <li key={i} className="flex gap-2 text-gray-700">
              <span>✓</span>
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
        </div> */}
      </div>
    )
  }
  