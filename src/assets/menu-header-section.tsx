import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const components: { title: string; to: string; }[] = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Tentang Kami",
    to: "/TentangKami",
  },
  {
    title: "Layanan",
    to: "/Layanan",
  },
  {
    title: "Project",
    to: "/project",
  },
  {
    title: "Cost Planning",
    to: "/costplaning",
  },
  {
    title: "Contact",
    to: "/contact",
  },

]
export default function MenuHeaderSection() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Tutup menu jika di mode desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="relative">
      {/* Tombol Burger Menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-black"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu */}
      <ul
        className={cn(
          "flex flex-col w-full md:flex-row gap-2 md:gap-6 p-4 md:p-0 fixed md:static top-16 right-0 text-center left-0 bg-black/90 md:bg-transparent rounded-lg md:rounded-none",
          isOpen ? "block" : "hidden md:flex"
        )}
      >
        {components.map((component) => (
          <ListItem key={component.title} title={component.title} to={component.to} />
        ))}
      </ul>
    </nav>
  );
}



type ListItemProps = React.ComponentPropsWithoutRef<typeof Link> & {
  title: string;
};


const ListItem = React.forwardRef<
HTMLAnchorElement,
  ListItemProps
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
        <Link
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}>
          <div className="text-lg font-light leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
    </li>
  )
})
ListItem.displayName = "ListItem"
