"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";
import ParticlesBackground from "../components/ParticlesBackground";
import Image from 'next/image';
import Head from 'next/head';
import {FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt,} from "react-icons/fa";

export default function Home() {
  const [flipped, setFlipped] = useState(false);

  const github = "https://github.com/rachelanchan";
  const linkedin = "https://linkedin.com/in/rachel-anchan";
  const email = "mailto:rachelanchan11@gmail.com";
  const portfolio = "https://rachelanchan.github.io";
  const qrValue = "https://my-personal-card-lac.vercel.app/";

  const CARD_WIDTH = 448;
  const CARD_HEIGHT = 600;

  return (
     <>
      <Head>
        <title>Rachel Anchan - Software Developer</title>
        <meta name="description" content="Business Card" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Rachel Anchan - Software Developer" />
        <meta property="og:description" content="Business Card" />
        <meta property="og:url" content="https://my-personal-card-lac.vercel.app/" />
        <meta property="og:image" content="https://my-personal-card-lac.vercel.app/preview.png" />
        <meta property="og:type" content="website" />

        {/* Twitter cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rachel Anchan - Software Developer" />
        <meta name="twitter:description" content="Business Card" />
        <meta name="twitter:image" content="https://my-personal-card-lac.vercel.app/preview.png" />

      </Head>

    <main className="relative min-h-screen bg-transparent text-gray-900 flex items-center justify-center px-4 sm:px-6">
      <ParticlesBackground />

      <div
        className="relative z-10 perspective"
        style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
      >
       <motion.div
          className="relative w-full h-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          style={{
            transformStyle: "preserve-3d",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          {/* Front Side */}
          <div
            onClick={() => setFlipped(true)}
            className="absolute top-0 left-0 w-full h-full bg-white rounded-xl shadow-xl p-6 sm:p-8 flex flex-col items-center cursor-pointer"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* Profile Image */}
            <Image
              src="/rachel.png"
              alt="Rachel Anchan"
              width={128}       // 32 * 4 (Tailwind h-32 and w-32 is 8rem = 128px)
              height={128}
              className="rounded-full border-4 border-gray-300 shadow-md mb-6 mt-8 object-cover"
              priority={true}   // loads immediately (no lazy) since it's important
            />

            {/* Name & Role */}
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-1">
              Rachel Anchan
            </h1>
            <p className="text-gray-600 text-base sm:text-lg font-semibold mb-4">
              Software Developer
            </p>

            {/* QR Code */}
            <QRCodeCanvas
              value={qrValue}
              size={160}
              bgColor="#f3f4f6"
              fgColor="#1f2937"
              className="rounded-md shadow-lg w-32 h-32 sm:w-36 sm:h-36 mb-4"
            />

            {/* Description */}
            <p className="text-center text-gray-600 mt-4 mb-6 leading-relaxed max-w-xs">
              Building scalable applications with meaningful user experiences.
            </p>
          </div>

          {/* Rear Side */}
          <div
            onClick={() => setFlipped(false)}
            className="absolute top-0 left-0 w-full h-full bg-gray-100 rounded-xl shadow-xl p-6 sm:p-8 flex flex-col items-center text-center cursor-pointer"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            
            {/* This div will grow and center content vertically */}
            <div className="flex flex-col justify-center flex-grow">
              <h2 className="text-2xl font-bold mb-6">Connect with me</h2>
              <div className="flex justify-center gap-6 flex-wrap mb-6">
                {[
                  { href: github, icon: <FaGithub className="h-8 w-8" /> },
                  { href: portfolio, icon: <FaExternalLinkAlt className="h-8 w-8" /> },
                  { href: email, icon: <FaEnvelope className="h-8 w-8" /> },
                  { href: linkedin, icon: <FaLinkedin className="h-8 w-8" /> },
                ].map(({ href, icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-3 bg-[#0a0b3a] hover:bg-indigo-700 text-white rounded-full transition-all duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Push button to bottom */}
            <button
              onClick={() => setFlipped(false)}
              className="mt-auto mb-4 px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </main>
     </>
  );
}