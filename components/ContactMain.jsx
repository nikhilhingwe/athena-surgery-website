// import { Mail, MapPin, Phone } from "lucide-react";

// const ContactMain = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="custom-container2 px-4">
//         {/* Info Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
//             <Mail className="w-10 h-10 mx-auto mb-4 txt-secondary" />
//             <h3 className="text-[22px] font-semibold mb-2 txt-primary">
//               Email Us
//             </h3>
//             <p className="text-gray-600 text-[18px]">support@example.com</p>
//           </div>

//           <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
//             <MapPin className="w-10 h-10 mx-auto mb-4 txt-secondary" />
//             <h3 className="text-[22px] font-semibold mb-2 txt-primary">
//               Visit Us
//             </h3>
//             <p className="text-gray-600 text-[18px]">123 Main Street, City</p>
//           </div>

//           <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
//             <Phone className="w-10 h-10 mx-auto mb-4 txt-secondary" />
//             <h3 className="text-[22px] font-semibold mb-2 txt-primary">
//               Call Us
//             </h3>
//             <p className="text-gray-600 text-[18px]">+1 234 567 890</p>
//           </div>
//         </div>

//         {/* Main Contact Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//           {/* Map */}
//           <div className="rounded-xl overflow-hidden shadow-lg">
//             <iframe
//               title="Google Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509417!2d144.95565131531887!3d-37.81720997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778e6c1a5c3f0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1691401200000!5m2!1sen!2sus"
//               className="w-full h-[585px] border-0"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white rounded-xl shadow-lg p-8">
//             <h2 className="text-[24px] txt-primary font-bold mb-6">
//               Get In Touch
//             </h2>
//             <form className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:text-[#0F3D88]"
//                   placeholder="Your Name"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:text-[#0F3D88]"
//                   placeholder="Your Email"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Phone
//                 </label>
//                 <input
//                   type="number"
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:text-[#0F3D88]"
//                   placeholder="Your Phone"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Message
//                 </label>
//                 <textarea
//                   rows="4"
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:text-[#0F3D88]"
//                   placeholder="Your Message"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-secondary txt-primary py-3 text-[18px] rounded-[50px] font-medium hover:bg-primary/90 transition cursor-pointer"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactMain;

"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const ContactMain = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="custom-container2 px-4">
        {/* Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          {[
            {
              icon: Mail,
              title: "Email Us",
              text: "support@example.com",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              text: "123 Main Street, City",
            },
            {
              icon: Phone,
              title: "Call Us",
              text: "+1 234 567 890",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              <card.icon className="w-10 h-10 mx-auto mb-4 txt-secondary" />
              <h3 className="text-[22px] font-semibold mb-2 txt-primary">
                {card.title}
              </h3>
              <p className="text-gray-600 text-[18px]">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509417!2d144.95565131531887!3d-37.81720997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778e6c1a5c3f0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1691401200000!5m2!1sen!2sus"
              className="w-full h-[585px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h2 className="text-[24px] txt-primary font-bold mb-6">
              Get In Touch
            </h2>
            <form className="space-y-4">
              {[
                { label: "Name", type: "text", placeholder: "Your Name" },
                { label: "Email", type: "email", placeholder: "Your Email" },
                { label: "Phone", type: "number", placeholder: "Your Phone" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:text-[#0F3D88]"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:text-[#0F3D88]"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary txt-primary py-3 text-[18px] rounded-[50px] font-medium hover:bg-primary/90 transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
