import { RiPhoneFill, RiMapPin2Fill } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Topbar = () => {
  return (
    <section id="home" className="bg-primary">
      <div className="custom-container text-sm">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 pt-3 gap-y-3 sm:gap-y-0">
          <div className="hidden sm:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <RiPhoneFill className="text-[#FFD86F] text-lg" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <RiMapPin2Fill className="text-[#FFD86F] text-lg" />
              <span>New York, NY</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-end w-full sm:w-auto">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary p-2 rounded-full"
            >
              <FaFacebookF className="text-[#0A2655] text-sm" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary p-2 rounded-full"
            >
              <FaInstagram className="text-[#0A2655] text-sm" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary p-2 rounded-full"
            >
              <FaLinkedinIn className="text-[#0A2655] text-sm" />
            </a>
          </div>
        </div>
        <div className="border-b border-[#3D5C3E]"></div>
      </div>
    </section>
  );
};

export default Topbar;
