import Container from "@/components/Container";
import Header from "@/components/Header";
import { MainNav } from "@/components/main-nav";
import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface Job {
  title: string
  duration: string
  location?: string
  skills: string
}

interface Experience {
  company: string
  duration: string
  jobs: Job[]
}

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

const experience: Experience = {
  company: "Typof",
  duration: "Full-time · 2 yrs 3 mos",
  jobs: [
    {
      title: "Software developer executive",
      duration: "Sep 2022 - Present · 2 yrs 2 mos",
      location: "Bhubaneswar, Odisha, India · On-site",
      skills: "Next.js, Node.js and +9 skills"
    }
  ]
}

export default async function AboutPage() {
  return (
    <>
      <div className="">
        <Container>
          <MainNav />
          <Header>
            <h1 className="title font-semibold text-2xl tracking-tighter mt-4 capitalize">
              About Me
            </h1>
          </Header>
        </Container>
      </div>
      <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="min-w-48 max-w-48 flex flex-col items-center gap-4">
            <Image
              src="https://avatars.githubusercontent.com/u/95564961?v=4"
              alt="Profile Picture"
              width={192}
              height={192}
              className="rounded-full border-4 border-gray-200 dark:border-gray-700"
            />
            <h2 className="text-lg font-semibold text-center">Rudra Narayan Boitei</h2>
            <p className="text-muted-foreground text-center break-words">
              Frontend Developer | Next.js || Devops
            </p>
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-base">
              Main ek passionate frontend developer hoon, jise 2 saal se zyada ka tajurba hai React.js aur modern web technologies mein. Mujhe dynamic aur user-friendly applications banana pasand hai jo real-world problems ko solve karti hain. Filhaal main apni problem-solving skills ko aur bhi behtar banane ke liye Data Structures aur Algorithms mein maharat hasil kar raha hoon. Jab main code nahi kar raha hota, tab main naye frameworks explore kar raha hoon ya personal projects par kaam kar raha hoon.
            </p>

            <div className="p-6 bg-white ">
              <h2 className="text-xl font-semibold mb-4">Experience</h2>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-lg">{experience.company[0]}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold">{experience.company}</h3>
                  <p className="text-sm text-gray-500">{experience.duration}</p>
                  <ul className="mt-4 space-y-6">
                    {experience.jobs.map((job, index) => (
                      <li key={index} className="relative pl-6">
                        <div className="absolute left-0 top-1.5 w-2 h-2 bg-gray-300 rounded-full"></div>
                        <h4 className="font-medium">{job.title}</h4>
                        <p className="text-sm text-gray-500">{job.duration}</p>
                        {job.location && <p className="text-sm text-gray-500">{job.location}</p>}
                        <p className="mt-2 text-sm flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.skills}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React.js</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">HTML5</Badge>
                <Badge variant="secondary">CSS3</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Redux</Badge>
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">DevOps</Badge>
                <Badge variant="secondary">CI/CD</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Express.js</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
