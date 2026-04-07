import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, ArrowDown } from "lucide-react";
import Spline from '@splinetool/react-spline/next';
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex flex-col items-center w-full">
        {/* Spline 3D Background - Fixed behind everything */}
        <div className="fixed inset-0 w-[100vw] h-[100vh] -z-10 pointer-events-none scale-200 opacity-100 mix-blend-multiply dark:mix-blend-lighten">
          <Spline scene="https://prod.spline.design/BI9G90lGSFL8M2yR/scene.splinecode" />
        </div>

        {/* 1. Hero Section */}
        <section className="w-full flex flex-col items-center justify-center min-h-[90vh] px-4 text-center relative pointer-events-none">
          <div className="z-10 flex flex-col items-center w-full max-w-[1400px] px-4 space-y-8 mt-[-5vh]">
            <h1 className="font-heading text-[clamp(2rem,4.5vw,5.5rem)] font-semibold tracking-normal leading-[1.1] drop-shadow-md w-full text-center">
              <span className="block w-full">Simplifying complex SaaS products into</span>
              <span className="block w-full">intuitive, high-converting experiences.</span>
            </h1>

            <p className="max-w-[750px] text-xl md:text-2xl font-medium text-muted-foreground pt-2 pb-8 text-balance drop-shadow-sm">
              Focused on onboarding, reducing cognitive load, and driving user activation.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-4 mt-4 pointer-events-auto">
              <Link href="#contact" className="w-full sm:w-auto group">
                <Button size="lg" className="w-full relative overflow-hidden rounded-full h-[64px] pl-10 pr-10 text-xl font-bold border-[3px] border-[#F1F3F7] bg-white text-black hover:bg-white hover:border-[#E2E6EF] hover:pr-24 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-none">
                  <span className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-x-1">View My Work</span>
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] translate-x-[150%] -rotate-180 opacity-0 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100">
                    <ArrowDown className="h-6 w-6 stroke-[2]" />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Solid background wrapper for all lower sections to slide beautifully over the 3D parallax */}
        <div className="w-full relative z-20 bg-background shadow-[0_-20px_50px_rgba(0,0,0,0.05)] rounded-t-[3rem] border-t border-border/10">

          {/* 2. Selected Work */}
          <section id="work" className="w-full max-w-7xl mx-auto px-4 py-24 sm:py-32">
            <div className="space-y-4 mb-20 text-center md:text-left">
              <h2 className="font-heading text-4xl sm:text-6xl font-semibold tracking-normal">Selected Work</h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl font-medium">
                Proof of skill. Real outcomes from simplifying enterprise software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              {/* Case Study 1 */}
              <Link href="/work/saas-dashboard" className="group rounded-[2rem] border border-border/50 bg-card p-4 sm:p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted mb-8">
                  <Image src="/case-1.png" alt="SaaS Dashboard Design" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="px-2">
                  <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-primary transition-colors">Nexus Analytics SaaS</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                    Redesigned the core data visualization engine, improving daily active usage by 34% through cognitive load reduction.
                  </p>
                </div>
              </Link>

              {/* Case Study 2 */}
              <Link href="/work/fintech-tool" className="group rounded-[2rem] border border-border/50 bg-card p-4 sm:p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 md:translate-y-20">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted mb-8">
                  <Image src="/case-2.png" alt="Fintech App Design" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="px-2">
                  <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-primary transition-colors">ClearFlow Capital</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                    Streamlined the B2B onboarding flow, increasing institutional sign-up conversions by 41% in quarter one.
                  </p>
                </div>
              </Link>

              {/* Case Study 3 */}
              <Link href="/work/b2b-workflow" className="group rounded-[2rem] border border-border/50 bg-card p-4 sm:p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted mb-8">
                  <Image src="/case-3.png" alt="B2B Workflow Design" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="px-2">
                  <h3 className="font-heading text-3xl font-bold mb-3 group-hover:text-primary transition-colors">Sync Kanban Platform</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                    Overhauled task management architecture for enterprise users, decreasing time-to-completion by 22%.
                  </p>
                </div>
              </Link>
            </div>
          </section>

          {/* 3. About */}
          <section id="about" className="w-full bg-accent/5 border-y border-border/50">
            <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="space-y-10">
                <h2 className="font-heading text-4xl sm:text-6xl font-semibold tracking-normal">The Approach</h2>
                <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-medium">
                  <p>
                    I don&apos;t just make things look pretty. I solve complex business problems by deeply understanding user friction and systematically eliminating it.
                  </p>
                  <p>
                    Specializing in SaaS dashboards and B2B workflows, my methodology relies on heavy user research, relentless iteration, and a ruthless pursuit of clarity over cleverness.
                  </p>
                </div>
                <div className="pt-4 flex flex-wrap gap-4">
                  <span className="px-5 py-2.5 rounded-full border border-border/60 bg-background text-sm font-bold tracking-wide shadow-sm">SaaS Platforms</span>
                  <span className="px-5 py-2.5 rounded-full border border-border/60 bg-background text-sm font-bold tracking-wide shadow-sm">B2B Workflows</span>
                  <span className="px-5 py-2.5 rounded-full border border-border/60 bg-background text-sm font-bold tracking-wide shadow-sm">Data Visualization</span>
                  <span className="px-5 py-2.5 rounded-full border border-border/60 bg-background text-sm font-bold tracking-wide shadow-sm">Fintech</span>
                </div>
              </div>
              <div className="relative aspect-square lg:aspect-auto lg:h-[650px] rounded-[2.5rem] overflow-hidden bg-accent flex items-center justify-center p-12 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent opacity-90 border border-white/10 rounded-[2.5rem]" />
                <h3 className="text-4xl md:text-5xl lg:text-6xl text-white font-heading font-semibold z-10 text-center leading-[1.1] tracking-normal text-balance">
                  "Clarity is the ultimate sophisticated interface."
                </h3>
              </div>
            </div>
          </section>

          {/* 4. Contact/Closing */}
          <section id="contact" className="w-full max-w-5xl mx-auto px-4 py-32 sm:py-48 text-center flex flex-col items-center">
            <h2 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-normal mb-8 leading-[1.05]">
              Let&apos;s build something <span className="text-primary italic">impactful.</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl mb-14 text-balance">
              Currently accepting new client projects and exploring opportunities with product-led companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full">
              <a href="mailto:hello@example.com" className="w-full sm:w-auto">
                <Button size="lg" className="rounded-full h-16 px-10 text-lg font-bold w-full sm:w-auto shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
                  <Mail className="mr-3 h-6 w-6" /> Get in touch
                </Button>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="rounded-full h-16 px-10 text-lg font-bold w-full sm:w-auto border-2 hover:bg-secondary hover:-translate-y-1 transition-all duration-300 bg-background">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-6 w-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> Connect on LinkedIn
                </Button>
              </a>
            </div>
          </section>

          {/* Footer inside the solid background wrapper */}
          <footer className="w-full border-t border-border/40 py-12 text-center text-sm font-medium text-muted-foreground">
            <p>© {new Date().getFullYear()} Krishna. All rights reserved.</p>
          </footer>
        </div> {/* End of solid background wrapper */}
      </main>
    </div>
  );
}
