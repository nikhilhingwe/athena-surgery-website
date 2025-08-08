// import Image from "next/image";
// import { ArrowRight, ExternalLink } from "lucide-react";
// import heroImg from "../public/assets/img/about.png";
// import { Button } from "./ui/button";

// export default function AboutHero() {
//   return (
//     <div className="relative overflow-hidden bg-primary pt-6 pb-25 md:pt-20">
//       {/* Background gradient accent */}
//       <div className="bg-primary/10 absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl" />
//       <div className="bg-primary/5 absolute -right-32 -bottom-32 h-96 w-96 rounded-full blur-3xl" />

//       <div className="relative grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-5 md:gap-12 lg:py-24 xl:gap-16 custom-container">
//         {/* Text column */}
//         <div className="flex flex-col justify-center md:col-span-3 md:pr-6 xl:pr-12 text-center md:text-left">
//           <div className="space-y-6 md:space-y-4">
//             {/* Label */}
//             <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-x-0 md:space-x-2 space-y-2 md:space-y-0">
//               <span className="bg-primary h-1.5 w-1.5 rounded-full"></span>
//               <p className="flex items-center justify-center text-yellow-400 text-sm md:text-[18px] italic">
//                 <span className="w-[20px] md:w-[30px] h-[2px] bg-yellow-400 mr-3"></span>
//                 About ATHENA Surgery Center
//               </p>
//             </div>

//             {/* Main heading */}
//             <h1 className="scroll-m-20 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
//               <span className="block">Creating Brands</span>
//               <span className="text-primary mt-1 block">That Resonate</span>
//             </h1>

//             {/* Description */}
//             <p className="text-muted-foreground max-w-xl mx-auto md:mx-0 text-lg">
//               I specialize in transforming complex ideas into compelling visual
//               narratives. With a decade of experience in branding and visual
//               design, I help businesses build memorable identities that connect
//               with their audience.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//               <Button
//                 size="lg"
//                 className="group bg-secondary txt-primary text-[16px] rounded-full px-8 py-4 hover:bg-primary/90 transition-colors cursor-pointer"
//               >
//                 Our Services
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button>

//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="group border-[#FFD86F] text-[#FFD86F] hover:bg-[#FFD86F] hover:text-primary transition-colors rounded-full px-6 py-3 cursor-pointer text-[16px]"
//               >
//                 Contact Us
//                 <ExternalLink className="ml-2 h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" />
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Image column */}
//         <div className="relative lg:left-[-80px] left-0 flex aspect-[4/5] w-full items-center md:col-span-2 md:aspect-auto md:h-[480px] mt-10 md:mt-2">
//           {/* Decorative element */}
//           <div className="border-[#FFD86F] bg-background/50 absolute -top-6 -right-6 h-20 w-20 rounded-md border-2 backdrop-blur-sm"></div>

//           {/* Main image */}
//           <div className="border-[#FFD86F] bg-muted/10 relative z-10 h-full w-full overflow-hidden rounded-2xl border-2 shadow-xl">
//             <Image
//               src={heroImg}
//               alt="Designer's workspace with contemporary design elements"
//               fill
//               className="object-cover object-center"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
//           </div>

//           {/* Decorative element */}
//           <div className="border-[#FFD86F] bg-background/50 absolute -bottom-6 -left-6 h-24 w-24 rounded-full border-2 backdrop-blur-sm"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import heroImg from "../public/assets/img/service-hero.avif";
import { Button } from "./ui/button";

export default function ServiceHero() {
  return (
    <div className="relative overflow-hidden bg-primary pt-6 pb-25 md:pt-20">
      <div className="bg-primary/10 absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-primary/5 absolute -right-32 -bottom-32 h-96 w-96 rounded-full blur-3xl" />

      <div className="relative grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-5 md:gap-12 lg:py-24 xl:gap-16 custom-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center md:col-span-3 md:pr-6 xl:pr-12 text-center md:text-left"
        >
          <div className="space-y-6 md:space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-x-0 md:space-x-2 space-y-2 md:space-y-0">
              <span className="bg-primary h-1.5 w-1.5 rounded-full"></span>
              <p className="flex items-center justify-center text-yellow-400 text-sm md:text-[18px] italic">
                <span className="w-[20px] md:w-[30px] h-[2px] bg-yellow-400 mr-3"></span>
                Services
              </p>
            </div>

            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="block">Advanced Surgical Care,</span>
              <span className="text-primary mt-1 block">Tailored to You</span>
            </h1>

            <p className="text-muted-foreground max-w-xl mx-auto md:mx-0 text-lg">
              At Athena Surgery Center, we offer a full spectrum of outpatient
              surgical services designed to help you heal faster and feel better
              sooner. From Orthopedic Surgery and Pain Management to General
              Surgery, Hand Surgery, and Total Spine procedures, our
              board-certified surgeons use the latest techniques and technology
              to deliver safe, effective results. Every treatment is performed
              in a welcoming environment where your comfort, safety, and
              recovery come first.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="group bg-secondary txt-primary text-[16px] rounded-full px-8 py-4 hover:bg-primary/90 transition-colors cursor-pointer"
              >
                About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-[#FFD86F] text-[#FFD86F] hover:bg-[#FFD86F] hover:text-[#0F3D88] transition-colors rounded-full px-6 py-3 cursor-pointer text-[16px]"
              >
                Contact Us
                <ExternalLink className="ml-2 h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" />
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative lg:left-[-80px] left-0 flex aspect-[4/5] w-full items-center md:col-span-2 md:aspect-auto md:h-[480px] mt-10 md:mt-2"
        >
          <div className="border-[#FFD86F] bg-background/50 absolute -top-6 -right-6 h-20 w-20 rounded-md border-2 backdrop-blur-sm"></div>

          <div className="border-[#FFD86F] bg-muted/10 relative z-10 h-full w-full overflow-hidden rounded-2xl border-2 shadow-xl">
            <Image
              src={heroImg}
              alt="Designer's workspace with contemporary design elements"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          <div className="border-[#FFD86F] bg-background/50 absolute -bottom-6 -left-6 h-24 w-24 rounded-full border-2 backdrop-blur-sm"></div>
        </motion.div>
      </div>
    </div>
  );
}
