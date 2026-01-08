import { Link } from "react-router-dom"
import { Home, Briefcase, Folder, Mail, Phone, MapPin } from "lucide-react"

const SectionFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-2">PT. Graha Estimatika Pradana</h3>
            <p className="text-sm opacity-80">
              Your trusted partner in quantity surveying and cost management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Home size={18} />
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Briefcase size={18} />
                <Link to="/project" className="hover:underline">Projects</Link>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Folder size={18} />
                <Link to="/costplaning" className="hover:underline">Cost Planning</Link>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={18} />
                <Link to="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={18} /> (021) 731-7611
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={18} /> gep_qs@yahoo.co.id
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={30} /> Ruko Aden Residence No. 4 
              Jl. Raya Wisma , Tajur Ciledug Tangerang Banten 
              15152, Indonesia 
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default SectionFooter
