const CONTACT_INFO = [
    { icon: "/address.png", text: "Ho Chi Minh City, Viet Nam" },
    { icon: "/email.png", text: "hnhung279.lv@gmail.com" },
  ];

const THANK_YOU_STYLES = ["font-bold", "font-medium", "font-light"];

export default function Footer() {
  
  return (
    <footer id="contact" className="w-full mx-auto p-6 text-gr700 text-left">
      {/* Main Content Container */}
      <div className="py-8 border-y border-gr700 md:flex md:justify-between md:items-center md:max-w-[85%] md:mx-auto">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-4 md:w-1/2">
          <h2  className="font-platypi text-4xl font-bold">GET IN TOUCH</h2>
          <p className="text-base font-medium">
            Let's chat! Your problem, my idea - together we can be unstoppable.
          </p>

          <ul className="space-y-3">
            {CONTACT_INFO.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-base font-medium">
                <img src={item.icon} alt={item.alt} className="w-6 h-6 object-contain" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Decorative Text */}
        <div className="hidden md:flex flex-col text-center font-platypi text-[40px] leading-none select-none">
          {THANK_YOU_STYLES.map((style, idx) => (
            <span key={idx} className={style}>THANK YOU!</span>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center mt-5 text-sm sm:text-base">
        © 2026 Hong Nhung Portfolio. <span className="block sm:inline">All rights reserved.</span>
      </p>
    </footer>
  );
}