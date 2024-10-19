import Container from "@/components/Container";
import Header from "@/components/Header";
import { MainNav } from "@/components/main-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
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
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="min-w-48 max-w-48 flex flex-col gap-2">
            <p className="text-muted-foreground text-center break-words">
              Software Developer
            </p>
          </div>
          <p className="text-muted-foreground text-lg py-4">
          Frontend Developer | React.js & JavaScript Enthusiast

I am a passionate frontend developer with over 2 years of experience specializing in React.js and modern web technologies. I love building dynamic, user-friendly applications that solve real-world problems. My current focus is on mastering Data Structures and Algorithms to enhance my problem-solving skills and stay ahead in the ever-evolving tech landscape. When I'm not coding, you’ll find me exploring new frameworks or working on personal projects to expand my skills.
          </p>
        </div>
      </div>
    </>
  );
}
