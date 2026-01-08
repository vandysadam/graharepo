"use client"

import { useEffect } from "react"
import DashboardLayout from "@/layout/dashboerd-layout"
import { Mail, MapPin, Phone } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <DashboardLayout>
      <div className="relative w-full py-16 bg-white overflow-hidden">
        <h2
          className="text-2xl sm:text-4xl font-bold text-center mb-12 text-indigo-900"
          data-aos="fade-down"
        >
          Hubungi Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-16 items-center">
          {/* Informasi Kontak */}
          <div
            className="bg-gray-100 p-8 rounded-2xl shadow-xl space-y-6"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-semibold text-gray-800 border-b pb-4">
              PT. GRAHA ESTIMATIKA PRADANA
            </h3>

            <div className="flex items-start gap-4">
              <Phone className="text-indigo-600 mt-1" />
              <div>
                <p className="text-sm text-gray-600 font-medium">Telepon</p>
                <h4 className="text-lg font-semibold text-gray-800">(021) 731-7611</h4>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-indigo-600 mt-1" />
              <div>
                <p className="text-sm text-gray-600 font-medium">Email</p>
                <h5 className="text-lg font-semibold text-gray-800">gep_qs@yahoo.co.id</h5>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-indigo-600 mt-1" />
              <div>
                <p className="text-sm text-gray-600 font-medium">Alamat</p>
                <h6 className="text-base text-gray-800 leading-relaxed">
                  Ruko Aden Residence No. 4<br />
                  Jl. Raya Wisma, Tajur Ciledug<br />
                  Tangerang, Banten 15152, Indonesia
                </h6>
              </div>
            </div>
          </div>

          {/* Peta */}
          <div className="w-full h-[350px] md:h-[450px]" data-aos="fade-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1591946611748!2d106.68821767442577!3d-6.242740161127689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa479cc57d03%3A0x6a4f7c11ac23337!2sPT.%20Graha%20Estimatika%20Pradana!5e0!3m2!1sen!2sid!4v1739422754599!5m2!1sen!2sid"
              className="w-full h-full rounded-xl shadow-xl border"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Contact
