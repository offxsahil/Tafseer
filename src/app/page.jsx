"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Loader from "../components/Loader";
import AccessGate from "../components/AccessGate";
import WelcomeIntro from "../components/WelcomeIntro";
import FeatureHighlight from "../components/FeatureHighlight";
import AboutMe from "../components/AboutMe";
import PortfolioSite from "../components/PortfolioSite";
import PortfolioGallery from "../components/PortfolioGallery";

export default function PortfolioSiteWrapper() {
  const [currentScreen, setCurrentScreen] = useState("loader");

  const handleScreenChange = (screen) => {
    setCurrentScreen(screen);
  };

  const screenWrapper = (Component, key, props = {}) => (
    <motion.div
      key={key}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0"
    >
      <Component {...props} />
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-950/35 via-black/40 to-fuchsia-950/35 relative overflow-hidden">

      {/* Background Layers */}
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
        {currentScreen === "loader" &&
          screenWrapper(Loader, "loader", {
            onComplete: () => handleScreenChange("accessGate"),
          })}
        {currentScreen === "accessGate" &&
          screenWrapper(AccessGate, "accessGate", {
            onUnlock: () => handleScreenChange("welcomeIntro"),
          })}
        {currentScreen === "welcomeIntro" &&
          screenWrapper(WelcomeIntro, "welcomeIntro", {
            onComplete: () => handleScreenChange("featureHighlight"),
          })}
        {currentScreen === "featureHighlight" &&
          screenWrapper(FeatureHighlight, "featureHighlight", {
            onComplete: () => handleScreenChange("aboutMe"),
          })}
        {currentScreen === "aboutMe" &&
          screenWrapper(AboutMe, "aboutMe", {
            onComplete: () => handleScreenChange("portfolioSite"),
          })}
        {currentScreen === "portfolioSite" &&
          screenWrapper(PortfolioSite, "portfolioSite", {
            onComplete: () => handleScreenChange("portfolioGallery"),
          })}
        {currentScreen === "portfolioGallery" &&
          screenWrapper(PortfolioGallery, "portfolioGallery")}
      </AnimatePresence>

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2.5, delay: 1 }}
        className="fixed bottom-4 right-4 text-[13px] text-white/40 pointer-events-none z-50 font-light"
      >
        @offx.sahil
      </motion.div>
    </div>
  );
}