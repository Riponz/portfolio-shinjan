import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Shinjan Mitra | Artist & Sculptor",
  description:
    "Portfolio of Shinjan Mitra — showcasing all the innovative illustrations and paintings.",
  keywords: [
    "Shinjan Mitra",
    "Artist",
    "Sculptor",
    "Paintings",
    "Art",
    "Illustrations",
    "Modelling",
  ],
  authors: [{ name: "Shinjan Mitra" }],

  // ✅ Open Graph / Facebook
  openGraph: {
    type: "website",
    url: "https://portfolio-shinjan-zeta.vercel.ap",
    title: "Shinjan Mitra | Artist & Sculptor",
    description:
      "Explore the portfolio of Shinjan Mitra — showcasing all the innovative illustrations and paintings.",
    images: ["https://portfolio-shinjan-zeta.vercel.app/_next/image?url=%2Fimages%2Fimage-shinjan.png&w=1920&q=75"],
  },

  // ✅ Twitter metadata (optional but recommended)
  twitter: {
    card: "summary_large_image",
    title: "Shinjan Mitra | Artist and Sculptor",
    description:
      "Explore the portfolio of Shinjan Mitra — showcasing all the innovative illustrations and paintings.",
    images: ["https://portfolio-shinjan-zeta.vercel.app/_next/image?url=%2Fimages%2Fimage-shinjan.png&w=1920&q=75"],
  },

  // ✅ Favicons (optional if added in `public/`)
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#ECDCC3] overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
