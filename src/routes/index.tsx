import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Cursor } from "@/components/portfolio/Cursor";
import { Loader } from "@/components/portfolio/Loader";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khushi Wanve — Full Stack Developer" },
      { name: "description", content: "Khushi Wanve is a Full Stack Developer specializing in React, Java, and REST APIs. Building modern, scalable, user-focused web experiences." },
      { property: "og:title", content: "Khushi Wanve — Full Stack Developer" },
      { property: "og:description", content: "Portfolio of Khushi Wanve — React Developer, MCA student building modern web experiences." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain relative min-h-screen overflow-x-hidden">
      <Loader />
      <Background />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
