import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { GithubHighlights } from "@/components/sections/GithubHighlights";
import { Credentials } from "@/components/sections/Credentials";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GithubHighlights />
      <Credentials />
    </main>
  );
}
