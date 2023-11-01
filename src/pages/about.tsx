import Header from "@/components/Header";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  Css3Original,
  Html5Original,
  JavascriptOriginal,
} from "devicons-react";
import { Mail, PhoneCall } from "lucide-react";
import Image from "next/image";

function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
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
      <div className={className}>{children}</div>
    </div>
  );
}

function Skill({
  name,
  iconButton,
  icon,
  description,
  progress,
}: {
  name: string;
  iconButton: React.ReactNode;
  icon: React.ReactNode;
  description: string;
  progress: number;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer">{iconButton}</span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            {icon}
            <div className="gap-2">
              <h4 className="text-sm font-semibold">{name}</h4>
              <p className="text-sm">{description}</p>
            </div>
          </div>
          <Progress value={progress} />
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

function School({ name, period }: { name: string; period: string }) {
  return (
    <div className="flex flex-col gap-2 pl-4 py-4 border-l-2 border-slate-700">
      <h1 className="font-semibold text-xl">{name}</h1>
      <p className="text-gray-400 text-sm">{period}</p>
    </div>
  );
}

function Work({
  name,
  position,
  period,
}: {
  name: string;
  position: string;
  period: string;
}) {
  return (
    <div className="flex flex-col gap-2 pl-4 py-4 border-l-2 border-slate-700">
      <h1 className="font-semibold text-xl">{name}</h1>
      <h2 className="font-medium">{position}</h2>
      <p className="text-gray-400 text-sm">{period}</p>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Header />
      <div
        className={cn(
          "grow relative",
          "flex flex-col",
          "px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40",
          "py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 2xl:py-12",
          "gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12"
        )}
      >
        <Section
          title="Name and Contact"
          className="flex gap-4 md:gap-5 xl:gap-6"
        >
          <Image
            src="/fotoDiri.png"
            alt="Foto Diri"
            width={256}
            height={256}
            className="rounded-3xl"
          />
          <div className="flex flex-col gap-2 my-2 lg:my-3 xl:my-4 2xl:my-5">
            <h1 className="font-bold text-3xl">Adam Akmal Madani</h1>
            <h2 className="font-bold text-xl">Full Stack Web Developer</h2>
            <div className="flex gap-2 items-center">
              <PhoneCall size={20} />
              <p>+62 882-1427-7094</p>
            </div>
            <div className="flex gap-2 items-center">
              <PhoneCall size={20} />
              <p>+62 852-1860-6125</p>
            </div>
            <div className="flex gap-2 items-center">
              <Mail size={20} />
              <p>adamakmal789@gmail.com</p>
            </div>
          </div>
        </Section>
        <Section title="About" className="flex flex-col gap-4">
          <p>I was born and raised in Tangerang, Indonesia.</p>
          <p>
            When I was in elementary school, I had a knack for maths, this led
            me to learn coding in junior high school, this ended up with me
            deciding to continue my education in a vocational school with a
            major in software engineering.
          </p>
          <p>
            In junior high school, I learnt the basics of programming, web
            application development, desktop and games. Until in vocational
            school, I decided to become a Back End Developer and learnt
            technologies related to web application development such as VCS,
            API, Database, Microservice and currently I am learning about
            Software Architecture and System Design.
          </p>
          <p>
            I am currently working freelance at an open house company as a back
            end developer and have experience in handling a collection of
            application projects.
          </p>
          <p>
            When it comes to things outside of coding, I love reading and
            writing articles, I can also play the violin, and my fantasies are
            endless, leading me to eventually put them into a novel.
          </p>
          <p>
            I love to learn new things and always think of new ideas, often when
            I&apos;m in the middle of making an app, I find a new app idea so I
            have to try hard to stay consistent to keep working on the app that
            I&apos;m still working on.
          </p>
        </Section>
        <Section
          title="Skills"
          className={cn("grid grid-flow-col items-center justify-center gap-4")}
        >
          <Skill
            name="HTML"
            iconButton={<Html5Original size={64} />}
            icon={<Html5Original size={64} />}
            description="Standard markup language for web page creation."
            progress={75}
          />
          <Skill
            name="CSS"
            iconButton={<Css3Original size={64} />}
            icon={<Css3Original size={64} />}
            description="Used to stylize elements written in a markup language such as HTML."
            progress={45}
          />
          <Skill
            name="JavaScript"
            iconButton={<JavascriptOriginal size={64} />}
            icon={<JavascriptOriginal size={64} />}
            description="Create dynamic and interactive web content like applications and browsers."
            progress={75}
          />
        </Section>
        <Section title="Education Journey" className="flex flex-col gap-4">
          <School
            name="Taman Cibodas Public Elementary School"
            period="2013 - 2019"
          />
          <School
            name="Public Junior High School 6 Tangerang"
            period="2019 - 2022"
          />
          <School
            name="Public Vocational High School 4 Tangerang"
            period="2022 - Now"
          />
        </Section>
        <Section title="Work Experience" className="flex flex-col gap-4">
          <Work
            name="Global Technology Adi Perkasa"
            position="Fullstack Web Developer"
            period="2023 - Now"
          />
        </Section>
      </div>
    </>
  );
}
