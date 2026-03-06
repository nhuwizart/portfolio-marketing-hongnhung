import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const STATS_DATA = [
  { icon: '/exp-tiktok.png', text: "100+ Viral Contents" },
  { icon: '/exp-tiktok.png', text: "50k+ Followers Gained" }, 
  { icon: '/exp-tiktok.png', text: "2M+ Total Views" },        
  { icon: '/exp-tiktok.png', text: "20% Conversion Rate" },    
];

const StatCard = ({ icon, text }) => (
  <div className="p-5 w-full border border-gr500 rounded-[16px] shadow-[0_4px_16px_rgba(148,171,113,0.5)] flex flex-col gap-3 items-center justify-start bg-white-only text-center h-full">
    <img src={icon} alt="stat icon" className="w-10 h-10 object-contain" />
    <p className="font-semibold text-lg">{text}</p>
  </div>
);

const InfoBlock = ({ icon, title, description }) => (
  <div className="flex flex-col sm:flex-row items-start gap-8 md:gap-12 lg:gap-20  w-full md:items-center md:justify-center">
    <img src={icon} alt={title} className="w-full h-full md:max-w-[320px] lg:max-w-auto" />
    <div className="flex flex-col gap-2 md:items-start md:justify-center md:h-full md:max-w-[400px]">
      <h3 className=" font-platypi text-[32px] leading-tight font-semibold">{title}</h3>
      <p className="text-base leading-relaxed font-medium">{description}</p>
    </div>
  </div>
);

export default function WorkOne() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow text-gr700">
        <section className="max-w-5xl mx-auto py-14 px-4 space-y-10">
          
          {/* --- Header & Stats --- */}
          <div className="grid grid-cols-1  gap-10 items-start">
            
            <div className="space-y-6 md:grid md:grid-cols-2 md:grid-cols-[30%_70%]">
              <div className='md:flex  md:flex-col md:justify-center md: items-start'>
                <h1 className='text-[40px] leading-tight font-bold font-platypi'>
                  Chanfood JSC 
                  <span className='text-xl block font-normal mt-1'>Marketing Intern</span>
                </h1>
                <div className="flex items-center gap-2 mt-2">
                  <img src='/exp-date.png' alt="date" className="w-5 h-5" />
                  <p className='text-sm font-medium'>2025 - present</p>
                </div>
              </div>
              <img src='exp-result.png' alt="Experience Result" className="w-full h-auto rounded-xl object-cover" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 h-full content-center">
              {STATS_DATA.map((item, index) => (
                <StatCard key={index} icon={item.icon} text={item.text} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-10 pt-10 ">
            <InfoBlock 
              icon="/exp-company.png"
              title="Chanfood"
              description="A newly established TikTok Shop and Shopee store specializing in safe, nutritious food products for babies and young children."
            />
            <InfoBlock 
              icon="/exp-company.png" 
              title="The Problem"
              description="A newly launched TikTok Shop and Shopee store with low brand awareness and no initial traction."
            />
          </div>

          <div>
            <h2 className='text-[40px] leading-tight font-bold border-b border-gr700 inline-block pb-2 md:mt-10 font-platypi'>
              What I Did?
            </h2>
          </div>

        </section>

        {/* --- Section Quote --- */}
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