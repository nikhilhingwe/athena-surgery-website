import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-3">
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
  );
};

export default Socials;
