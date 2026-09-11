"use client";

import { PlaceholderImage } from "./placeholder-image";
import { RevealLine, Reveal } from "./reveal";
import { socialLinks, contactInfo } from "@/lib/site-data";

export function About() {
  return (
    <section
      id="about"
      className="relative bg-background px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 flex items-end justify-between md:mb-10">
          <span className="text-eyebrow text-muted-foreground">08 — The Big Picture</span>
          <span className="text-eyebrow text-muted-foreground">EST. NEPAL 🇳🇵</span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Heading */}
          <div className="lg:col-span-7">
            <h2 className="font-semibold tracking-tightest text-foreground">
              <RevealLine delay={0}>
                <span className="text-display">We Believe</span>
              </RevealLine>
              <RevealLine delay={0.1}>
                <span className="text-display">Every Idea</span>
              </RevealLine>
              <RevealLine delay={0.2}>
                <span className="text-display">Has A Story<span className="text-accent">.</span></span>
              </RevealLine>
            </h2>
          </div>

          {/* Founder portrait */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative mx-auto max-w-[520px]">
                <PlaceholderImage
                  src="/images/ceo.jpeg"
                  alt="Tek Chataut, founder of Gadget User"
                  tone="ink"
                  seed={20}
                  contain
                  className="aspect-[4/5] w-full overflow-hidden bg-[#f6f6f4]"
                />
                {/* Floating caption */}
                <div className="absolute -bottom-6 -right-6 hidden bg-accent px-5 py-3 text-accent-foreground md:block">
                  <span className="text-eyebrow">FOUNDER LEADERSHIP.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
 
        {/* Founder message */}
        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-border pt-8 md:mt-20 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <span className="text-eyebrow text-muted-foreground">A MESSAGE FROM OUR FOUNDER</span>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.1}>
              <blockquote className="max-w-4xl font-serif text-2xl italic leading-tight text-foreground md:text-4xl">
                “Great brands are built when bold ideas meet thoughtful execution. At BigPicture
                Graphics, we turn your vision into work that connects, inspires and creates real
                impact.”
              </blockquote>
              <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Binay Khanal, Founder — Bigpicture Graphics
              </p>
            </Reveal>
          </div>
        </div>

        {/* Long-form copy */}
        <div className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-8 md:mt-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal delay={0}>
              <p className="text-pretty text-base text-muted-foreground md:text-lg">
                Every business starts with an idea. Our job is to turn that
                idea into something people can see, understand and remember.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <p className="text-pretty text-base text-muted-foreground md:text-lg">
                BigPicture Graphics brings together creativity, strategy and
                technology to help businesses communicate with confidence and
                compete at a bigger level.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.2}>
              <p className="text-pretty text-base text-muted-foreground md:text-lg">
                Through our partnership with Loophole Infotech, small
                businesses can access powerful SaaS and software solutions
                that make the operational strength of a big company more
                affordable and visible.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Quick contact line */}
        <div className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-8 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <span className="text-eyebrow text-muted-foreground">GET IN TOUCH</span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="mt-2 block hover-underline font-serif italic text-foreground"
              style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
            >
              {contactInfo.email}
            </a>
            <div className="mt-3 flex flex-col gap-1 text-muted-foreground">
              {contactInfo.phoneNumbers.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="text-sm transition-colors hover:text-foreground"
                >
                  {phone}
                </a>
              ))}
              {contactInfo.address && (
                <span className="text-sm">{contactInfo.address}</span>
              )}
            </div>
          </div>
          <div className="md:col-span-6 md:text-right">
            <span className="text-eyebrow text-muted-foreground">FOLLOW ALONG</span>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {Object.entries(socialLinks).map(([k, v]) => (
                <a
                  key={k}
                  href={v}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-eyebrow uppercase text-muted-foreground transition-colors hover:text-foreground"
                >
                  {k}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
