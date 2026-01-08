import { Link } from "react-router-dom"
import { Home, Briefcase, Folder, Mail, Phone, MapPin } from "lucide-react"

const SectionFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center  md:text-left">
          
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-2">PT. Graha Estimatika Pradana</h3>
            <p className="text-sm opacity-80">
              Your trusted partner in quantity surveying and cost management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="flex items-center gap-3 text-white hover:underline">
                  <Home />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/project" className="flex items-center gap-3 text-white hover:underline">
                  <Briefcase />
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/costplaning" className="flex items-center gap-3 text-white hover:underline">
                  <Folder />
                  Cost Planning
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-3 text-white hover:underline">
                  <Mail />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div >
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-white" />
                <h4 className="text-white"><strong>Phone:</strong> (021) 731-7611</h4>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-white" />
                <h5 className="text-white"><strong>Email:</strong> gep_qs@yahoo.co.id</h5>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-white" />
                <h6 className="text-white">
                  <strong>Address:</strong> <br />
                  Ruko Aden Residence No. 4 <br />
                  Jl. Raya Wisma, Tajur Ciledug <br />
                  Tangerang, Banten 15152, Indonesia
                </h6>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default SectionFooter
