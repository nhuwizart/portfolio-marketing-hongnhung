


"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';


const SLIDE_ITEMS = [1]; 

const EXPERIENCES = [
  { img: '/exp1.png', role: "Marketing Intern - Chanfood JSC", time: "2025-Present" },
  { img: '/exp2.png', role: "Marketing Intern - Chanfood JSC", time: "2025-Present" },
  { img: '/exp3.png', role: "Marketing Intern - Chanfood JSC", time: "2025-Present" },
];

const PLATFORMS = ['/tiktok.png', '/fb.png', '/ig.png'];
const STATS = Array(4).fill("100+ Viral Contents"); 
const ExperienceCard = ({ data, isActive, index }) => (
  <div 
    className="px-[12px] pt-3 pb-6 md:pb-3 border rounded-[28px] w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-9 mb-5 transition-all duration-300 cursor-pointer"
    style={{
      backgroundColor: isActive ? 'rgba(199, 217, 181, 0.3)' : 'transparent',
      borderColor: isActive ? '#A4F825' : '#E5E7EB' 
    }}
  >
    <img src={data.img} alt="Experience" className="object-cover w-full md:w-auto" />
    <div className='w-full flex flex-col justify-start items-start gap-3'>
      {/* Header Card */}
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center mb-1">
        <p className="text-lg md:text-base font-bold text-gr700">{data.role}</p>
        <p className="text-sm text-gr700">{data.time}</p>
      </div>

      {/* Stats List */}
      <div className="flex flex-wrap gap-2"> {/* Bọc div để các tag không bị tràn */}
        {STATS.map((text, idx) => (
          <div key={idx} className="size-auto max-h-[25px] px-2 py-1 flex flex-row justify-start items-center gap-1 border border-gr300 rounded-[16px] bg-white-only"
            style={{
      borderColor: isActive ? '#A4F825' : '#E5E7EB' 
    }}
          >
            <img src='/up.png' alt="icon" />
            <p className="text-sm text-gr700">{text}</p>
          </div>
        ))}
      </div>

      {/* Footer Card */}
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <div className="flex flex-row justify-start items-center gap-1">
          <p className="text-sm text-gr700">Platforms: </p>
          <div className="flex flex-row justify-center items-center gap-1">
            {PLATFORMS.map((icon, idx) => (
              <img key={idx} src={icon} alt="platform" />
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-1">
            <Link href={`/work-${index + 1}`} className="text-lg md:text-base font-semibold text-gr700 "
            style={{
            textDecorationLine: isActive ? 'underline' : 'none' 
    }}
            >Learn More</Link>

          <img src='/arrow.png' alt="arrow" />
        </div>
      </div>
    </div>
  </div>
);

// const ExperienceCard = ({ data }) => (
//   <div className="px-[12px] pt-3 pb-6 md:pb-3 border border-gr500 rounded-[28px] w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-9 mb-5">
//     <img src={data.img} alt="Experience" className="object-cover w-full md:w-auto" />
//     <div className='w-full flex flex-col justify-start items-start gap-3'>
//       <div className="w-full flex flex-col  md:flex-row md:justify-between md:items-center mb-1">
//         <p className="text-lg md:text-base font-bold text-gr700">{data.role}</p>
//         <p className="text-sm text-gr700">{data.time}</p>
//       </div>

//       {STATS.map((text, idx) => (
//         <div key={idx} className="size-auto max-h-[25px] px-2 py-1 flex flex-row justify-start items-center gap-1 border border-gr300 rounded-[16px] bg-white-only">
//           <img src='/up.png' alt="icon" />
//           <p className="text-sm text-gr700">{text}</p>
//         </div>
//       ))}

//       <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-6">
//         <div className="flex flex-row justify-start items-center gap-1">
//           <p className="text-sm text-gr700">Platforms: </p>
//           <div className="flex flex-row justify-center items-center gap-1">
//             {PLATFORMS.map((icon, idx) => (
//               <img key={idx} src={icon} alt="platform" />
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-row justify-center items-center gap-1">
//           <p className="text-lg  md:text-base font-semibold text-gr700 underline">Learn More</p>
//           <img src='/arrow.png' alt="arrow" />
//         </div>
//       </div>
//     </div>
//   </div>
// );

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const btnClass = "font-mont font-semibold border-1 w-full border-gr700 text-lg px-4 py-3 rounded-[40px] hover:text-white-only hover:bg-gr700 transition-colors";

  return (
    <div>
      <Navbar />

      {/* Section G Intro*/}
      <section className=" flex flex-col md:flex-row justify-between items-start bg-cream text-center px-4 w-full max-w-[982px] mx-auto py-10 space-y-10 md:gap-4">
        <div className="md:max-w-[350px] lg:max-w-[440px] flex flex-col justify-start items-start space-y-4">
          <h1 className="text-left text-5xl/[64px] font-extrabold">
            <span className="block">Hello,</span>I’m Nhung!
          </h1>
          <p className="text-left text-xl font-mont font-medium">
            I help brands tell better stories on social media to attract attention and turn viewers into customers.
          </p>
          <div className="flex flex-row gap-2 w-full">
            <Link href="#exp" className={`${btnClass}  text-gr700`}>View Projects</Link>
            <Link href="/about" className={`${btnClass} text-gr700`}>About Me</Link>
          </div>
        </div>
        <div>
          <img src='/me.png' alt="Me" />
        </div>
      </section>

      {/* Section Slides */}
      <section id="exp" className="overflow-hidden bg-white-only border-y border-gray-100">
        <div className="flex w-max">
          {/* Khối nội dung 1 */}
          <div className="flex flex-row items-center space-x-10 animate-slide-right px-5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-row items-center space-x-10 shrink-0">
                <img src='/port-logo.png' alt="logo" className="h-6" />
                <p className="text-sm/[48px] font-semibold whitespace-nowrap">Marketing Portfolio</p>
                <img src='/port-logo.png' alt="logo" className="h-6" />
                <p className="text-sm/[48px] font-semibold whitespace-nowrap">Hong Nhung</p>
              </div>
            ))}
          </div>

          <div className="flex flex-row items-center space-x-10 animate-slide-right px-5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-row items-center space-x-10 shrink-0">
                <img src='/port-logo.png' alt="logo" className="h-6" />
                <p className="text-sm/[48px] font-semibold whitespace-nowrap">Marketing Portfolio</p>
                <img src='/port-logo.png' alt="logo" className="h-6" />
                <p className="text-sm/[48px] font-semibold whitespace-nowrap">Hong Nhung</p>
              </div>
            ))}
          </div>
        </div>

        
      </section>
      {/* <section>
        <div className='flex flex-row justify-between items-center bg-white-only py-0 px-[20px]'>
          {SLIDE_ITEMS.map((item) => (
            <div key={item} className="contents">
              <img src='/port-logo.png' alt="logo" />
              <p className="text-center text-sm/[48px] font-semibold">Marketing Portfolio</p>
              <img src='/port-logo.png' alt="logo" />
              <p className="text-center text-sm/[48px] font-semibold">Hong Nhung</p>
              <img className='hidden md:block ' src='/port-logo.png' alt="logo" />
              <p className="hidden md:block text-center text-sm/[48px] font-semibold">Marketing Portfolio</p>
              <img className='hidden md:block ' src='/port-logo.png' alt="logo" />
              <p className="hidden md:block text-center text-sm/[48px] font-semibold">Hong Nhung</p>
            </div>
          ))}
          
          <img src='/port-logo.png' alt="logo" />
        </div>
      </section> */}

      {/* Section Hands-on Experience */}
      {/* <section  className="py-10 px-4 space-y-10">
        <h2 className="text-[40px] font-extrabold text-center">Hands-on Experience</h2>
        <div className="w-full max-w-[820px] flex flex-col justify-between items-center mx-auto">
          {EXPERIENCES.map((item, index) => (
            <ExperienceCard key={index} data={item} />
          ))}
        </div>
      </section> */}
      <section className="py-10 px-4 space-y-10">
        <h2 className="text-[40px] font-extrabold text-center">Hands-on Experience</h2>
        <div className="w-full max-w-[820px] flex flex-col justify-between items-center mx-auto">
          {EXPERIENCES.map((item, index) => (
            <div 
              key={index} 
              className="w-full" 
              onClick={() => setActiveIndex(index)} // Cập nhật index khi click
            >
              <ExperienceCard 
                data={item} 
                isActive={activeIndex === index} 
                index={index} 
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}