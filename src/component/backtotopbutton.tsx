import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300); // muncul setelah scroll 300px
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 p-3 rounded-full bg-blue-800 text-white shadow-lg hover:bg-blue-600"
      >
        <ArrowUp/>
      </button>
    )
  );
};

export default BackToTopButton;
