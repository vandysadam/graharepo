import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Headers = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          QS Company
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/legalization" className="hover:underline">
                Legalization
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:underline">
                Team
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Button asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </header>
  )
}

export default Headers

