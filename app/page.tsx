"use client";

import { QRCodeCanvas } from "qrcode.react";
import ParticlesBackground from "../components/ParticlesBackground";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'; // import icons

export default function Home() {
  const github = "https://github.com/rachelanchan";
  const linkedin = "https://linkedin.com/in/rachel-anchan";
  const email = "mailto:rachelanchan11@gmail.com";
  const portfolio = "https://rachelanchan.github.io";
  const qrValue = "https://my-personal-card-lac.vercel.app/";

  return (
    <main className="relative min-h-screen bg-transparent text-gray-900 flex items-center justify-center px-4 sm:px-6">
      <ParticlesBackground />

      {/* Card Container */}
      <div className="relative z-10 w-full max-w-md sm:w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white rounded-xl shadow-xl p-6 sm:p-8 flex flex-col items-center">
        {/* Profile Image */}
        <img
          src="/rachel.png"
          alt="Rachel Anchan"
          className="h-32 w-32 rounded-full border-4 border-gray-300 shadow-md mb-6 object-cover"
          loading="lazy"
        />

        {/* Name & Role */}
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-1">Rachel Anchan</h1>
        <p className="text-gray-600 text-base sm:text-lg font-semibold mb-4">Software Developer</p>

        {/* Description */}
        <p className="text-center text-gray-600 mb-8 leading-relaxed max-w-xs">
          Building scalable applications with meaningful user experiences.
        </p>

        {/* Links - Just Icons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {[ 
            { href: github, icon: <FaGithub className="h-6 w-6" /> },
            { href: portfolio, icon: <FaExternalLinkAlt className="h-6 w-6" /> },
            { href: email, icon: <FaEnvelope className="h-6 w-6" /> },
            { href: linkedin, icon: <FaLinkedin className="h-6 w-6" /> }
          ].map(({ href, icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 bg-[#0a0b3a] hover:bg-indigo-700 text-white rounded-full transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* QR Code */}
        <QRCodeCanvas
          value={qrValue}
          size={160}  // Increased the size to make the QR more prominent
          bgColor="#f3f4f6"
          fgColor="#1f2937"
          className="rounded-md shadow-lg w-32 h-32 sm:w-36 sm:h-36"
        />
      </div>
    </main>
  );
}