"use client"
import { useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Speakers from "./sections/Speakers";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  const [aboutInView, setAboutInView] = useState(false);
  const [speakersInView, setSpeakersInView] = useState(false);
  const [contactInView, setContactInView] = useState(false);

  return (
    <>
      <Header 
        aboutInView={aboutInView}
        speakersInView={speakersInView}
        contactInView={contactInView}
      />
      <Hero />
      <About setAboutInView={setAboutInView} />
      <Speakers setSpeakersInView={setSpeakersInView}/>
      <Contact setContactInView={setContactInView}/>
      <Footer />
    </>
  );
}
