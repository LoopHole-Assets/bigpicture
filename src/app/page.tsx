"use client";

import { useState, useCallback } from "react";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { AboutIntro } from "@/components/site/about-intro";
import { Portfolio } from "@/components/site/portfolio";
import { Services } from "@/components/site/services";
import { WhyBigPicture } from "@/components/site/why-bigpicture";
import { Process } from "@/components/site/process";
import { Partners } from "@/components/site/partners";
import { ClientLogos } from "@/components/site/client-logos";
import { Testimonials } from "@/components/site/testimonials";
import { CreativeShowcase } from "@/components/site/creative-showcase";
import { About } from "@/components/site/about";
import { CTA } from "@/components/site/cta";
import { ContactForm } from "@/components/site/contact-form";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = useCallback(() => setContactOpen(true), []);

  return (
    <main className="relative min-h-screen bg-background">
      <Navbar onStartProject={openContact} />

      <Hero onStartProject={openContact} />
      <Marquee />
      <AboutIntro />
      <Portfolio />
      <Services />
      <WhyBigPicture />
      <Process />
      <Partners />
      <ClientLogos />
      <Testimonials />
      <CreativeShowcase />
      <About />
      <CTA onStartProject={openContact} />

      <Footer onStartProject={openContact} />

      <ContactForm open={contactOpen} onOpenChange={setContactOpen} />
      <WhatsAppButton />
    </main>
  );
}
