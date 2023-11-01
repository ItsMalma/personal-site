import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { amongusParticle } from "@/lib/particles";
import { cn } from "@/lib/utils";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

export default function Home() {
  const particlesInit = React.useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Header />
      <div
        className={cn(
          "grow relative",
          "flex justify-center items-center",
          "px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40",
          "py-2 lg:py-3 xl:py-4"
        )}
      >
        <Particles
          id="tsparticles"
          className="-z-10"
          init={particlesInit}
          options={amongusParticle}
        />
        <div
          className={cn(
            "absolute",
            "bg-slate-950 text-white",
            "px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40",
            "py-2 lg:py-3 xl:py-4",
            "rounded-2xl",
            "shadow",
            "flex items-center justify-center",
            "gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8"
          )}
        >
          <Button variant="ghost" size="icon">
            <Link
              href="https://www.linkedin.com/in/adam-akmal-96354a263/"
              target="_blank"
            >
              <Linkedin size={24} />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link href="https://www.github.com/ItsMalma" target="_blank">
              <Github size={24} />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link href="https://www.instagram.com/malma_28" target="_blank">
              <Instagram size={24} />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
