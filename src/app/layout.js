// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
import { Platypi, Montserrat } from 'next/font/google'; 
import './globals.css';

const montserrat = Montserrat({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat'
});

const platypi = Platypi({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-platypi'
});
export const metadata = {
  title: "Portfolio Marketing -  Hong Nhung",
  description: "Portfolio Marketing -  Hong Nhung",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={`${montserrat.variable} ${platypi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
