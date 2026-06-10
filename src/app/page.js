"use client";

import { useState } from "react";
import { Terminal, Briefcase, Cpu, Layers, Calendar, ChevronRight, Mail, Loader2, CheckCircle2, X, User } from "lucide-react";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("IDLE");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!email || !message) return;

    setFormStatus("SENDING"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
          email: email,
          message: message,
          subject: "New Portfolio Message from TanzaTaylor.dev",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus("SUCCESS");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setIsFormOpen(false);
          setFormStatus("IDLE");
        }, 3500);
      } else {
        setFormStatus("ERROR");
      }
    } catch (error) {
      setFormStatus("ERROR");
    }
  };

  return (
    return (
  <main className="relative flex min-h-screen flex-col items-center justify-start bg-slate-950 text-white p-6 pt-4 md:pt-6 pb-32 overflow-hidden">
{/* Navigation */}
<nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/70 border-b border-cyan-500/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8">

    <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
      <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
      <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
      <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
      <a href="#hobbies" className="hover:text-cyan-400 transition-colors">Beyond The Projects</a>
    </div>

    <a
      href="/Tanza_Taylor_Resume.pdf"
      download
      className="px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-300 text-sm hover:bg-cyan-500/10 transition"
    >
      Resume
    </a>

  </div>
</nav>
      {/* ATMOSPHERIC BACKGROUND GLOWS */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[150px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <div id="home" className="relative z-10 text-center space-y-4 mb-20 mt-2">
        
        <div className="space-y-2 pt-2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            Tanza Taylor
          </h1>
          <p className="text-2xl md:text-3xl font-medium tracking-tight bg-gradient-to-r from-lime-500 via-stone-300 to-amber-100 bg-clip-text text-transparent font-sans">
            Project Manager & Digital Solutions Builder
          </p>
        </div>
    <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed pt-2">
  Building structure, improving workflows, and turning complex challenges into practical solutions through project management, operations, and digital problem solving.
</p>
</div>

      {/* 2. ABOUT SECTION */}
<div className="relative z-10 w-full max-w-5xl space-y-8 mb-24">
        {/* Section Label */}
        <div className="flex items-center space-x-2 text-cyan-400">
          <User className="w-5 h-5" />
          <h2 className="text-sm font-semibold uppercase tracking-wider">
            About Me
          </h2>
        </div>

        {/* Headline + Intro */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            Built for Systems.<br />
            <span className="bg-gradient-to-r from-lime-500 via-stone-300 to-amber-100 bg-clip-text text-transparent">
              Driven by Solutions.
            </span>
          </h2>

        {/* Professional Story */}
<div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]">

  <p className="text-slate-300 text-sm leading-relaxed">
    Whether coordinating projects, supporting operations, improving workflows, or building systems, I've always been drawn to work that brings structure to moving parts and turns ideas into something practical, organized, and useful.
  </p>

  <p className="text-slate-400 text-sm leading-relaxed">
    Over time, that systems-focused mindset naturally expanded into digital solutions and technology. Long before exploring web applications, much of the work was already centered on organizing information, improving processes, solving operational challenges, and keeping moving pieces aligned. As new tools and technologies emerged, I became increasingly interested in how digital products could simplify workflows, support better decision-making, and create more efficient ways of working.
  </p>

</div>
          {/* Qualities */}
          <div className="pt-2 flex flex-wrap gap-2">
            {["Workflow Design", "Systems Organization", "Process Improvement", "Project Planning", "Research & Analysis", "Digital Solutions"].map((q) => (
              <span
                key={q}
                className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-400 hover:text-lime-400 hover:border-lime-500/30 transition-all duration-200"
              >
                {q}
              </span>
            ))}
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Card 1: Google PM Certificate */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] hover:bg-cyan-500/[0.03]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">Certificate</span>
            </div>
            <h3 className="text-base font-semibold text-white leading-snug">
              Project Management Foundation
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              My project management foundation was built through higher education, professional experience, mentorship programs, independent learning, and formal training. It continues to evolve through hands-on work coordinating initiatives, improving workflows, solving operational challenges, and supporting successful project execution.
            </p>
          </div>

          {/* Card 2: AuraCare Capstone */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:border-teal-400 hover:shadow-[0_0_35px_rgba(45,212,191,0.35)] hover:bg-teal-500/[0.03]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-xs font-mono font-semibold text-teal-400 uppercase tracking-wider">Capstone</span>
            </div>
            <h3 className="text-base font-semibold text-white leading-snug">
              AuraCare | Healthcare Research & Innovation Project
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              AuraCare is an independently conceived personal application project focused on improving support for individuals living with epilepsy through medication tracking, seizure management, emergency preparedness, and health information organization. The project combines research, planning, and digital solution design to address real-world challenges faced by individuals and caregivers.
            </p>
          </div>

          {/* Card 3: Web Apps */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_0_35px_rgba(129,140,248,0.35)] hover:bg-indigo-500/[0.03]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
  Ideas in Action
</span>
            </div>
            <h3 className="text-base font-semibold text-white leading-snug">
              Digital Product Portfolio
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A growing collection of independently conceived projects focused on solving real-world challenges through research, organization, and digital solution design. Current work includes healthcare innovation, knowledge management systems, and workflow-focused applications.
            </p>
          </div>

        </div>
      </div>

      {/* 3. CORE CAPABILITIES */}
      <div id="hobbies" className="relative z-10 w-full max-w-5xl space-y-8 mb-24">
        <div className="flex items-center space-x-2 text-cyan-400">
          <Terminal className="w-5 h-5" />
          <h2 className="text-sm font-semibold uppercase tracking-wider">
            How I Work
          </h2>
        </div>

        {/* Capabilities Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.35)] hover:bg-cyan-500/[0.03]">
            <div className="flex items-center space-x-3 mb-3">
              <Briefcase className="w-6 h-6 text-cyan-400" />
              <h3 className="text-lg font-medium">Workflow Optimization</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Experience across project coordination, operations support, planning, and process improvement has shaped an approach centered on organization, structure, and practical problem solving. Whether improving a workflow, organizing information, or creating systems that support execution, the focus remains the same: making work more efficient and easier to manage.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-teal-400 hover:shadow-[0_0_35px_rgba(45,212,191,0.35)] hover:bg-teal-500/[0.03]">
            <div className="flex items-center space-x-3 mb-3">
              <Cpu className="w-6 h-6 text-teal-400" />
              <h3 className="text-lg font-medium">Digital Solutions Development</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leveraging AI-assisted workflows, project management principles, and modern digital tools to transform ideas into functional solutions. Experience includes managing repositories through GitHub, deploying applications through Vercel, and coordinating development workflows from concept to execution..
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.35)] hover:bg-purple-500/[0.03] md:col-span-2">
            <div className="flex items-center space-x-3 mb-3">
              <Layers className="w-6 h-6 text-purple-400" />
              <h3 className="text-lg font-medium">Featured Project | TheSimFile</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              A centralized platform designed to help simulation players organize households, character histories, family trees, lore, genetics, and world-building information within a single structured workspace.
            </p>
          </div>
        </div>

        {/* MY TECH STACK */}
        <div className="pt-12 border-t border-slate-900 space-y-12">
          <div className="flex items-center space-x-2 text-slate-400 mb-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="text-sm md:text-base font-mono uppercase tracking-wider font-bold text-slate-200">
              Tools Behind The Work
            </h3>
          </div>

          <div className="space-y-12">
            {/* Row 1: Research, Automation & AI → */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 font-mono">Research, Automation & AI →</h4>
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3">
                <div className="aspect-square flex flex-col items-center justify-center bg-white/[0.02] border border-white/5 rounded-xl p-3 text-center transition-all hover:bg-white/[0.06] hover:border-cyan-500/30 group">
                  <div className="w-7 h-7 mb-2 flex items-center justify-center text-[#E68A5C] text-2xl font-serif font-bold tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">✻</div>
                  <span className="text-xs md:text-sm text-slate-300 font-medium tracking-tight">Claude AI</span>
                </div>
                <div className="aspect-square flex flex-col items-center justify-center bg-white/[0.02] border border-white/5 rounded-xl p-3 text-center transition-all hover:bg-white/[0.06] hover:border-cyan-500/30 group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg" className="w-7 h-7 mb-2 opacity-70 group-hover:opacity-100 transition-opacity invert" alt="OpenAI" />
                  <span className="text-xs md:text-sm text-slate-300 font-medium tracking-tight">OpenAI</span>
                </div>
                <div className="aspect-square flex flex-col items-center justify-center bg-white/[0.02] border border-white/5 rounded-xl p-3 text-center transition-all hover:bg-white/[0.06] hover:border-cyan-500/30 group">
                  <div className="w-7 h-7 mb-2 flex items-center justify-center text-cyan-400 font-bold text-xl font-mono">✦</div>
                  <span className="text-xs md:text-sm text-slate-300 font-medium tracking-tight">Gemini</span>
                </div>
                <div className="aspect-square flex flex-col items-center justify-center bg-white/[0.02] border border-white/5 rounded-xl p-3 text-center transition-all hover:bg-white/[0.06] hover:border-cyan-500/30 group">
                  <div className="w-7 h-7 mb-2 flex items-center justify-center text-slate-400 font-bold text-xs border border-slate-700 rounded px-1.5 py-0.5 bg-slate-900">LM</div>
                  <span className="text-xs md:text-sm text-slate-300 font-medium tracking-tight">NotebookLM</span>
                </div>
              </div>
            </div>

            {/* Row 2: Project & Collaboration Tools */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-400 font-mono">Project & Collaboration Tools →</h4>
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3">
                <div className="aspect-square flex flex-col items-center justify-center bg-white/[0.02] border border-white/5 rounded-xl p-3 text-center transition-all hover:bg-white/[0.06] hover:border-teal-500/30 group">
                  <div className="w-7 h-7 mb-2 flex flex-col items-center justify-center scale-90 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 rounded-full bg-[#F06A6A] mb-0.5" />
                    <div className="flex gap-0.5">
                      <div className="w-2 h-2 rounded-full bg-[#F06A6A]" />
                      <div className="w-2 h-2 rounded-full bg-[#F06A6A]" />
                    </div>
                  </div>
                  <span className="text-xs md:text-sm text-slate-300 font-medium tracking-tight">Asana</span>
                </div>
                <div className="aspect-square flex flex-col items-center justify-center bg-white/[0.02] border border-white/5 rounded-xl p-3 text-center transition-all hover:bg-white/[0.06] hover:border-teal-500/30 group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" className="w-7 h-7 mb-2 opacity-70 group-hover:opacity-100 transition-opacity" alt="Google" />
                  <span className="text-xs md:text-sm text-slate-300 font-medium tracking-tight">Workspace</span>
                </div>
                <div className="aspect-square flex flex-col items-center justify-center bg-white/[0.02] border border-white/5 rounded-xl p-3 text-center transition-all hover:bg-white/[0.06] hover:border-teal-500/30 group">
                  <div className="w-7 h-7 mb-2 flex items-center justify-center text-indigo-400 font-extrabold text-lg">T</div>
                  <span className="text-xs md:text-sm text-slate-300 font-medium tracking-tight">Teams</span>
                </div>
                <div className="aspect-square flex flex-col items-center justify-center bg-white/[0.02] border border-white/5 rounded-xl p-3 text-center transition-all hover:bg-white/[0.06] hover:border-teal-500/30 group">
                  <div className="w-6 h-6 mb-2 border-2 border-cyan-400/80 rounded flex p-0.5 gap-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="w-1/2 h-4/5 bg-cyan-400/90 rounded-sm" />
                    <div className="w-1/2 h-1/2 bg-cyan-400/90 rounded-sm" />
                  </div>
                  <span className="text-xs md:text-sm text-slate-300 font-medium tracking-tight">Trello</span>
                </div>
              </div>
            </div>

            {/* Row 3: Deployment Platforms */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-indigo-400 font-mono">Deployment & Platforms →</h4>
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3">
                <div className="aspect-square flex flex-col items-center justify-center bg-white/[0.02] border border-white/5 rounded-xl p-3 text-center transition-all hover:bg-white/[0.06] hover:border-indigo-500/30 group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-7 h-7 mb-2 opacity-70 group-hover:opacity-100 transition-opacity invert" alt="GitHub" />
                  <span className="text-xs md:text-sm text-slate-300 font-medium tracking-tight">GitHub</span>
                </div>
                <div className="aspect-square flex flex-col items-center justify-center bg-white/[0.02] border border-white/5 rounded-xl p-3 text-center transition-all hover:bg-white/[0.06] hover:border-indigo-500/30 group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" className="w-6 h-6 mb-2 opacity-70 group-hover:opacity-100 transition-opacity invert" alt="Vercel" />
                  <span className="text-xs md:text-sm text-slate-300 font-medium tracking-tight">Vercel</span>
                </div>
              </div>
            </div>

            {/* Row 4: Design Tools */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-400 font-mono">Design Tools →</h4>
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3">
                <div className="aspect-square flex flex-col items-center justify-center bg-white/[0.02] border border-white/5 rounded-xl p-3 text-center transition-all hover:bg-white/[0.06] hover:border-purple-500/30 group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" className="w-7 h-7 mb-2 opacity-70 group-hover:opacity-100 transition-opacity" alt="Canva" />
                  <span className="text-xs md:text-sm text-slate-300 font-medium tracking-tight">Canva</span>
                </div>
                <div className="aspect-square flex flex-col items-center justify-center bg-white/[0.02] border border-white/5 rounded-xl p-3 text-center transition-all hover:bg-white/[0.06] hover:border-purple-500/30 group">
                  <div className="w-7 h-7 mb-2 flex items-center justify-center text-amber-500 font-bold text-lg">▤</div>
                  <span className="text-xs md:text-sm text-slate-300 font-medium tracking-tight">Slides</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* 4. FEATURED PROJECTS */}
<div id="projects" className="relative z-10 w-full max-w-5xl space-y-12 mb-28">

  <div className="flex items-center space-x-2 text-cyan-400">
    <h2 className="text-sm font-semibold uppercase tracking-wider">
      Featured Projects
    </h2>
  </div>

  <div className="space-y-10">

    <div className="border-b border-white/10 pb-10">
      <p className="text-sm uppercase tracking-wider text-cyan-400 mb-2">
        Healthcare Innovation
      </p>
      <h3 className="text-3xl font-bold text-white mb-4">
        AuraCare
      </h3>
      <p className="text-slate-300 leading-relaxed max-w-3xl mb-4">
        AuraCare is an independently conceived personal application project focused on improving support for individuals living with epilepsy through medication tracking, seizure management, emergency preparedness, and health information organization.
      </p>
      <p className="text-sm text-slate-400">
        Researcher • Planner • Product Designer
      </p>
    </div>

    <div className="border-b border-white/10 pb-10">
      <p className="text-sm uppercase tracking-wider text-cyan-400 mb-2">
        Knowledge Management
      </p>
      <h3 className="text-3xl font-bold text-white mb-4">
        The Sim File
      </h3>
      <p className="text-slate-300 leading-relaxed max-w-3xl mb-4">
        A centralized platform designed to help simulation players organize characters, relationships, family trees, lore, genetics, and world-building information in a structured and accessible way.
      </p>
      <p className="text-sm text-slate-400">
        Product Creator • Planner • Designer
      </p>
    </div>

    <div>
      <p className="text-sm uppercase tracking-wider text-cyan-400 mb-2">
        Exploration & Research
      </p>
      <h3 className="text-3xl font-bold text-white mb-4">
        What's Next
      </h3>
      <p className="text-slate-300 leading-relaxed max-w-3xl">
        Current areas of exploration include workflow tools, operational dashboards, research systems, AI-assisted productivity solutions, and digital products focused on organization, efficiency, and information management.
      </p>
    </div>

  </div>
</div>
      {/* 4. THE JOURNEY TIMELINE SECTION */}
      <div id="experience" className="relative z-10 w-full max-w-4xl space-y-8 mb-28">
        <div className="flex items-center space-x-2 text-indigo-400">
          <Calendar className="w-5 h-5" />
          <h2 className="text-sm font-semibold uppercase tracking-wider">
            Professional Timeline & Milestones
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-6 pb-4">
          {/* Active Era */}
          <div className="relative pl-8 md:pl-10 group">
            <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950 ring-4 ring-cyan-400/20 group-hover:scale-125 transition-transform duration-300" />
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.3)] hover:bg-cyan-400/[0.01]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">Project Manager & Digital Solutions Builder</h3>
                <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded w-fit">Feb 2026 - Present</span>
              </div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2 flex items-center gap-1">
                The Lab <ChevronRight className="w-3 h-3 text-slate-500" /> Independent Engineering Track
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Combining project management expertise, systems thinking, and digital solution development to create workflow-focused applications and operational tools. Building portfolio projects that showcase process improvement, organization, and technology-driven problem solving.
              </p>
            </div>
          </div>

          {/* Sabbatical */}
          <div className="relative pl-8 md:pl-10 group text-slate-500">
            <div className="absolute left-[-5px] top-4 w-2 h-2 rounded-full bg-slate-800 border border-slate-700" />
            <div className="text-xs font-mono italic pl-2">Feb 2025 - Feb 2026 // Independent Study, Skill Development & Project Exploration</div>
          </div>

          {/* Cracker Barrel Corporate */}
          <div className="relative pl-8 md:pl-10 group">
            <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950 group-hover:scale-125 transition-transform duration-300" />
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:border-emerald-500 hover:shadow-[0_0_35px_rgba(16,185,129,0.3)] hover:bg-emerald-500/[0.01]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                <h3 className="text-lg font-bold text-white">Project Coordinator</h3>
                <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded w-fit">Sept 2022 - Feb 2025</span>
              </div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2 text-emerald-500/90">Cracker Barrel Corporate — Lithia Springs, GA</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Orchestrated complex workflows, timeline dependencies, and cross-functional alignments. Managed communications between execution teams to ensure project criteria were delivered strictly within scope.
              </p>
            </div>
          </div>

          {/* Assurant */}
          <div className="relative pl-8 md:pl-10 group">
            <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 group-hover:scale-125 transition-transform duration-300" />
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.3)] hover:bg-blue-500/[0.01]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                <h3 className="text-lg font-bold text-white">Project Specialist</h3>
                <span className="text-xs font-mono font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded w-fit">Apr 2021 - Apr 2022</span>
              </div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2 text-blue-400/90">Assurant</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tracked critical delivery milestones, coordinated operational logistics, and optimized task management systems for high-stakes corporate execution tracks.
              </p>
            </div>
          </div>

          {/* 1000 Degrees */}
          <div className="relative pl-8 md:pl-10 group">
            <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-orange-500 border-4 border-slate-950 group-hover:scale-125 transition-transform duration-300" />
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:border-orange-500 hover:shadow-[0_0_35px_rgba(249,115,22,0.3)] hover:bg-orange-500/[0.01]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                <h3 className="text-lg font-bold text-white">Operations Manager</h3>
                <span className="text-xs font-mono font-semibold text-orange-400 bg-orange-500/10 px-2 py-1 rounded w-fit">Mar 2019 - Mar 2021</span>
              </div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2 text-orange-400/90">1000 Degrees</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Directing day-to-day business operations, streamlining process workflows, and managing shifting team schedules and high-volume asset logistics.
              </p>
            </div>
          </div>

          {/* Planet Fitness */}
          <div className="relative pl-8 md:pl-10 group">
            <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-950 group-hover:scale-125 transition-transform duration-300" />
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.3)] hover:bg-purple-500/[0.01]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                <h3 className="text-lg font-bold text-white">Team Lead</h3>
                <span className="text-xs font-mono font-semibold text-purple-400 bg-purple-500/10 px-2 py-1 rounded w-fit">Aug 2017 - Aug 2019</span>
              </div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2 text-purple-400/90">Planet Fitness</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Supervising operational shifts, cultivating elite customer experiences, and coordinating team task execution in a fast-paced environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. FOOTER */}
      <footer className="relative z-10 w-full max-w-4xl border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs font-mono">
        <div>© {new Date().getFullYear()} Tanza Taylor.</div>
        <div className="flex items-center space-x-6">

          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className={`flex items-center gap-1 transition-all duration-200 uppercase tracking-wider font-bold px-2 py-1 rounded ${isFormOpen ? "text-cyan-400 bg-cyan-500/10 scale-105" : "hover:text-cyan-400"}`}
          >
            <Mail className="w-3.5 h-3.5" /> Email
          </button>

          <a href="https://www.linkedin.com/in/tanzataylor/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-cyan-400 transition-colors duration-200">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>

          <a href="https://github.com/tanztylr" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-cyan-400 transition-colors duration-200">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>GitHub</span>
          </a>

        </div>
      </footer>

      {/* SLIDE-UP CONTACT DRAWER */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 backdrop-blur-2xl bg-slate-950/95 border-t border-slate-800 p-6 shadow-[0_-15px_40px_rgba(0,0,0,0.6)] transition-all duration-300 transform rounded-t-3xl max-w-2xl mx-auto w-full ${isFormOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`}>

        <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-cyan-400 animate-pulse" />
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-200 font-bold">Secure Contact Pipeline</h4>
          </div>
          <button
            onClick={() => setIsFormOpen(false)}
            className="text-slate-500 hover:text-white p1 hover:bg-slate-900 rounded-lg transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {formStatus === "SUCCESS" ? (
          <div className="flex flex-col items-center justify-center text-center py-8 space-y-3 animate-in fade-in zoom-in-95 duration-200">
            <CheckCircle2 className="w-10 h-10 text-cyan-400" />
            <div>
              <h5 className="text-sm font-semibold text-white">Transmission Received</h5>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                Routed safely directly to my inbox notifications. Closing line link...
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Your Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@domain.com"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-cyan-500/50 transition-all font-sans"
                disabled={formStatus === "SENDING"}
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Message Intent & Details</label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe project criteria, operational goals, or sync timelines..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-cyan-500/50 transition-all font-sans resize-none"
                disabled={formStatus === "SENDING"}
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-4">
              {formStatus === "ERROR" ? (
                <p className="text-[11px] font-mono text-rose-400">System block. Please try LinkedIn connection.</p>
              ) : (
                <p className="text-[10px] font-mono text-slate-500 leading-tight max-w-[240px]">
                  Bypasses mail links entirely to land straight in my active notifications loop.
                </p>
              )}

              <button
                type="submit"
                disabled={formStatus === "SENDING"}
                className="bg-cyan-500 text-slate-950 font-bold px-4 py-1.5 rounded-xl text-xs flex items-center space-x-1.5 hover:bg-cyan-400 active:scale-[0.98] transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              >
                {formStatus === "SENDING" ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Routing...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

    </main>
  );
}
