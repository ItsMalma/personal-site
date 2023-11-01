import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ProjectProps = {
  title: string;
  imgSrc: string;
};

function Project({ title, imgSrc }: ProjectProps) {
  return (
    <div
      className={cn(
        "bg-slate-950 text-white",
        "p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 2xl:p-9",
        "rounded-3xl",
        "shadow",
        "flex flex-col gap-2 md:gap-3 xl:gap-4"
      )}
    >
      <h1 className="font-bold text-3xl">{title}</h1>
      <hr />
      <Image
        src={imgSrc}
        alt={`${title}'s Image`}
        width={640}
        height={640}
        className="w-full h-48 rounded-xl object-cover object-bottom"
      />
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <Header />
      <div
        className={cn(
          "grow relative",
          "grid grid-cols-1 lg:grid-cols-2 justify-center items-center",
          "px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40",
          "py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 2xl:py-12",
          "gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12"
        )}
      >
        <Project title="FIEMS" imgSrc="/fiems.png" />
        <Project title="Minecraft Animation" imgSrc="/animation.png" />
        <Project
          title="Indonesia Independence Day Banner"
          imgSrc="/banner.png"
        />
      </div>
    </>
  );
}
