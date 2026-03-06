import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



const EXPERIENCES = [
  { company: "Chanfood JSC", role: "Marketing Intern", time: "2025 - present" },
  { company: "Dinopanda Channel", role: "Co-founder", time: "2025 - present" },
  { company: "STK Agency", role: "Content Social freelance", time: "2024 - 2025" },
];

const EDUCATION = [
  { 
    school: "University Of Economics and Law", 
    detail: "Major: Digital Marketing", 
    time: "2023 - 2027" 
  },
  { 
    school: "F.Studio Uni Ambassadors Competition", 
    detail: "Top 10 Finalist", 
    time: "2025" 
  },
];

const SKILL_TAGS = [
  "# Video Creator", "# Photo Design", "# Livestream Host", 
  "# Content Creator", "# Communicater", "# Teamwork"
];

const HOBBIES = [
  { icon: "/hb-music.png", label: "Music" },
  { icon: "/hb-video.png", label: "Short video creation" },
  { icon: "/hb-photo.png", label: "Photography" },
  { icon: "/hb-travel.png", label: "Travel" },
];

/* COMPONENT */
const InfoCard = ({ icon, title, children, className = "" }) => (
  <div className={`p-6 border border-gr500 rounded-[28px] bg-white-only relative flex flex-col gap-4 lg:w-full lg:w-[400px] ${className}`}>
    {/* Floating Header */}
    <div className="absolute -top-[18px] left-[32px] px-2 py-1 flex items-center gap-2 bg-gradient-to-b from-cream to-white-only">
      <img src={icon} alt={title} className="w-auto h-auto" />
      <h3 className="font-platypi text-xl text-gr700 font-normal">{title}</h3>
    </div>
    {/* Card Content */}
    <div className="mt-2 w-full space-y-4">
      {children}
    </div>
  </div>
);



export default function AboutMe() {
  return (
    <div className="min-h-screen flex flex-col text-gr700">
      <Navbar />

      <main className="flex-grow">
        <section className="md:max-w-[90%] mx-auto py-10 px-4 space-y-10">
          
          {/* Page Title */}
          <h1 className='text-[40px] font-bold font-platypi'>About Me</h1>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2  lg:grid-cols-[37%_26%_37%] lg:w-full lg:gap-x-2 lg:gap-y-8  gap-x-10 gap-y-8">
            
            {/* 1. Experience Section */}
            <div className='lg:col-start-1 lg:row-start-1 lg:flex lg:items-center ld:justify-end'>

              <InfoCard icon="/about-exp.png" title="Experience">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className=" flex justify-between items-start text-sm">
                    <div>
                      <p className="text-base font-semibold">{exp.company}</p>
                      <p>{exp.role}</p>
                    </div>
                    <p className="font-medium whitespace-nowrap">{exp.time}</p>
                  </div>
                ))}
              </InfoCard>
            </div>
            <div className="hidden lg:flex lg:col-start-2 lg:row-span-2 items-center justify-center">
              <img
                src="/aboutme.png"
                alt="Me"
                className="max-w-[360px] w-full object-contain"
              />
            </div>
            

              {/* 2. Skills Section */}
            <div className='lg:col-start-3 lg:row-start-1 lg:flex lg:items-center lg:justify-center'>

                <InfoCard icon="/about-skill.png" title="Skills">
                  {/* Tools */}
                  <div className="space-y-1">
                    <p className="text-base font-semibold">Software Tools</p>
                    <div className="flex gap-2">
                      <img src="/ICON-CAPCUT.png" alt="Capcut" />
                      <img src="/ICON-CANVA.png" alt="Canva" />
                      <img src="/ICON-PS.png" alt="Photoshop" />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 text-sm">
                    {SKILL_TAGS.map((tag, idx) => (
                      <span key={idx} className="bg-cream px-3 py-1 rounded-[20px]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Languages */}
                  <div className="space-y-2 pt-1">
                    <p className="text-base font-semibold">Languages</p>
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <img src="/us-flag.png" alt="US Flag" />
                        <span>English: Pre-intermediate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src="/vn-flag.png" alt="VN Flag" />
                        <span>Vietnamese: Native</span>
                      </div>
                    </div>
                  </div>
                </InfoCard>
            </div>
            {/* 3. Education Section */}
            <div className='lg:col-start-1 lg:row-start-2 lg:flex lg:items-center lg:justify-center'>
              <InfoCard icon="/about-edu.png" title="Education">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start text-sm">
                    <div className="max-w-[65%]">
                      <p className="text-base font-semibold leading-[23px]">{edu.school}</p>
                      <p>{edu.detail}</p>
                    </div>
                    <p className="font-medium whitespace-nowrap">{edu.time}</p>
                  </div>
                ))}
              </InfoCard>
            </div>

           

            {/* 4. Hobbies Section */}
            <div className='lg:col-start-3 lg:row-start-2 lg:flex lg:items-center lg:justify-center'>
                <InfoCard icon="/about-hob.png" title="Hobbies & Interests">
                  <div className="grid grid-cols-4 gap-2 text-center text-sm pt-4">
                    {HOBBIES.map((hobby, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-2">
                        <img src={hobby.icon} alt={hobby.label} className="h-10 object-contain"/>
                        <p className="font-semibold leading-tight">{hobby.label}</p>
                      </div>
                    ))}
                  </div>
                </InfoCard>
            </div>

          </div>
        </section>

        {/* Section Philosophy (Quote) */}
        <section className=" md:max-w-[660px]  mx-auto px-4 pb-20">
          <div className="bg-white-only border border-gr700 rounded-[20px] py-8 px-10 relative mt-4">
            <img 
              src='/green.png' 
              alt="decoration" 
              className='absolute -top-[16px] right-[7%] w-10 lg:w-auto' // Responsive width
            />
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl italic text-gray-600 font-medium font-platypi">
                "By understanding audience behavior on social platforms, I help brands turn attention into trust and trust into growth."
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}