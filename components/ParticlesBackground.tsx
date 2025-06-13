"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine, Container } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Init particles engine:", engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles.js loaded", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true },
        background: { color: { value: "#0a0b3a" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: false, mode: "push" },
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: { distance: 150, links: { opacity: 1 } },
            push: { quantity: 4 },
            remove: { quantity: 2 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1.5,
            straight: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
          number: { value: 80, density: { enable: true, area: 1000 } },
          opacity: {
            value: 0.3,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
          },
          size: {
            value: 2,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-10"
    />
  );
}
