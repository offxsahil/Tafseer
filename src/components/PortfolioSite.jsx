"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Loader from "./Loader";
import AccessGate from "./AccessGate";
import WelcomeIntro from "./WelcomeIntro";
import FeatureHighlight from "./FeatureHighlight";
import AboutMe from "./AboutMe";
import PortfolioSite from "./PortfolioSite";
import PortfolioGallery from "./PortfolioGallery";

export default function PortfolioApp() {
  const [screen, setScreen] = useState("loader");

  const handleNext = (next) => setScreen(next);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-950/30 via-black/30 to-fuchsia-950/30 overflow-hidden relative">
      
      {/* Subtle radial backgrounds */}
      <div
        className="fixed inset-0 z-0 blur-xl opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 30%, rgba(236,72,153,0.7), transparent 40%)",
        }}
      />
      <div
        className="fixed inset-0 z-0 blur-xl opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 75% 75%, rgba(99,102,241,0.7), transparent 40%)",
        }}
      />
      <div
        className="fixed inset-0 z-0 blur-2xl opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(228,193,255,0.6), transparent 40%)",
        }}
      />

      {/* Screens */}
      <AnimatePresence mode="wait">
        {screen === "loader" && (
          <Loader key="loader" onComplete={() => handleNext("accessGate")} />
        )}
        {screen === "accessGate" && (
          <AccessGate key="accessGate" onUnlock={() => handleNext("welcomeIntro")} />
        )}
        {screen === "welcomeIntro" && (
          <WelcomeIntro key="welcomeIntro" onComplete={() => handleNext("featureHighlight")} />
        )}
        {screen === "featureHighlight" && (
          <FeatureHighlight key="featureHighlight" onComplete={() => handleNext("aboutMe")} />
        )}
        {screen === "aboutMe" && (
          <AboutMe key="aboutMe" onComplete={() => handleNext("portfolioSite")} />
        )}
        {screen === "portfolioSite" && (
          <PortfolioSite key="portfolioSite" onComplete={() => handleNext("portfolioGallery")} />
        )}
        {screen === "portfolioGallery" && <PortfolioGallery key="portfolioGallery" />}
      </AnimatePresence>

      {/* Branding watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="fixed bottom-4 right-4 text-[13px] text-white/40 pointer-events-none z-50 font-light"
      >
        @offx.sahil
      </motion.div>
    </div>
  );
}