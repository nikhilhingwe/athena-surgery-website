"use client";
import Logo from "./Logo";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-14">
      <div className="max-w-[1350px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-7">
          <div className="flex items-center gap-2">
            <Logo />
          </div>

          <div className="flex gap-3">
            <Socials />
          </div>

          <p className="text-[17px] text-gray-200">
            © 2025 Athena Surgical Center. <br /> All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[24px] mb-5">Main Navigation</h3>
          <ul className="space-y-3 text-gray-200 text-[18px]">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Surgeries
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[24px] mb-5">Services</h3>
          <ul className="space-y-3 text-gray-200 text-[18px]">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Plastic Surgery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Pain Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Orthopedics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Spine Injuries
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Pediatry Services
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[24px] mb-5">Contact Us</h3>
          <p className="text-[20px] font-semibold">Call Us Today</p>
          <p className="mb-4 text-[18px]">255.666.6977</p>
          <p className="mb-2 text-[20px] font-semibold">Or Visit Us</p>
          <p className="text-gray-200 text-[18px] ">
            790 Generations Drive, <br />
            Suite 405B, New Braunfels, <br />
            TX 78130
          </p>
        </div>
      </div>
    </footer>
  );
}
