"use client";

import poppins from "@/font/font";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Image.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";

type ResourceLink = {
  label: string;
  href: string;
};

const experience = [
  {
    company: "ComplyAI",
    role: "Founder",
    location: "Caldwell, NJ",
    period: "Oct 2025 - Present",
    highlights: [
      "Built an agentic compliance copilot that turns AML/sanctions alerts into examiner-ready case files with grounded evidence citations.",
      "Engaged mid-sized banks across NJ/NY for 90-day pilots with a commercial pipeline targeting $50K-$70K per bank annually.",
      "Partnered with BSA/AML officers and ACAMS NJ Chapter members to define evidence standards and success metrics.",
    ],
    links: [
      { label: "Website", href: "https://www.complyai.dev/" },
      { label: "GitHub", href: "https://github.com/rishikeshydv/complyai_agentic_system" },
    ] as ResourceLink[],
  },
  {
    company: "NexBrick",
    role: "Founder & CTO",
    location: "Caldwell, NJ",
    period: "Jan 2024 - May 2025",
    highlights: [
      "Worked with homeowners and agents to identify high-value workflows and shipped a paid subscription product.",
      "Selected for LAUNCH Founder University and raised $25K pre-seed with 50+ paid homeowner subscriptions and 10+ annual agent subscriptions.",
      "Productionized an API-first backend with analytics pipelines and improved report relevance through usage-driven iteration.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/rishikeshydv/nexbrick" }] as ResourceLink[],
  },
  {
    company: "Tapdrop",
    role: "AI Engineer",
    location: "Dublin, TX",
    period: "Aug 2022 - Feb 2024",
    highlights: [
      "Deployed RL-based NPC behavior and difficulty scaling with p95 inference latency <= 12ms while maintaining 60 FPS.",
      "Reduced model size from 120MB to 45MB (-62%), improved load time by ~30%, and cut runtime memory usage by ~25%.",
      "Built an evaluation harness for NPC quality and reduced unfair-difficulty incidents by ~35%.",
    ],
    links: [
      { label: "Company", href: "https://www.linkedin.com/company/tapdrop/posts/?feedView=all" },
    ] as ResourceLink[],
  },
  {
    company: "CogAI Lab & STEM Advance Program, Caldwell University",
    role: "AI/ML Researcher",
    location: "Caldwell, NJ",
    period: "May 2023 - Aug 2023",
    highlights: [
      "Implemented 10+ CNN image detection models in Python/TensorFlow/Keras and improved non-backprop performance to 98% accuracy.",
      "Built an activation-based filter update/pruning workflow and improved CNN accuracy by 5.67% while reducing training time by ~30.5 seconds.",
    ],
    links: [{ label: "Lab", href: "https://sites.google.com/caldwell.edu/cogai" }] as ResourceLink[],
  },
  {
    company: "Caldwell University",
    role: "Software Engineering Intern",
    location: "Caldwell, NJ",
    period: "Jan 2023 - May 2023",
    highlights: [
      "Shipped backend features for a production web platform with API-first services and technical documentation.",
      "Implemented 20+ automated test cases across unit, integration, and e2e suites.",
      "Delivered a responsive database management web app used by 8,000+ users with Firebase-backed REST APIs.",
    ],
    links: [] as ResourceLink[],
  },
];

const projects = [
  {
    name: "Intent - Cursor for Product Managers",
    points: [
      "Built a product-decision copilot that synthesizes feedback into ranked priorities and scoped execution plans with approval gates.",
      "Reached early traction with 2 paying customers and iterated weekly from usage data and customer feedback.",
      "Tech: Python, FastAPI, PostgreSQL, OAuth2, OpenRouter, Embeddings/RAG, Docker, pytest, Google APIs.",
    ],
    links: [
      { label: "Website", href: "https://www.tryintent.dev/" },
      { label: "GitHub", href: "https://github.com/rishikeshydv/intent" },
      { label: "Demo", href: "https://www.tryintent.dev/" },
    ] as ResourceLink[],
  },
  {
    name: "cdo.ai - AI Chief Design Officer",
    points: [
      "Research proposal on retraining open-source coding LLMs to reason like a chief design officer for strategic, brand-aligned web design.",
      "Tech: Python, Azure OpenAI, PyTorch, Hugging Face, LoRA/QLoRA (PEFT).",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/rishikeshydv/cdo.ai" },
      {
        label: "Research Proposal",
        href: "https://docs.google.com/document/d/1VpEq4aZeLlwnHyknhfrGVK20YgoLdO9C-sjkjmjsiS4/edit?usp=sharing",
      },
    ] as ResourceLink[],
  },
];

const skills = {
  generativeAI: [
    "LangChain",
    "Agent workflows",
    "Prompt iteration",
    "RAG with citations",
    "Structured outputs",
  ],
  engineeringML: [
    "Python",
    "Go",
    "Node.js",
    "REST APIs",
    "Firebase",
    "Vercel",
    "TensorFlow / Keras",
    "Unit / integration / e2e testing",
  ],
};

type TabKey = "education" | "experience" | "skills" | "projects" | "publication";

const tabs: { key: TabKey; label: string }[] = [
  { key: "experience", label: "Experience" },
  { key: "education", label: "Education" },
  { key: "skills", label: "Skills" },
  { key: "projects", label: "Projects" },
  { key: "publication", label: "Publication" },
];

const activeTabStyles: Record<TabKey, string> = {
  experience: "bg-zinc-500 text-white",
  education: "bg-zinc-500 text-white",
  skills: "bg-zinc-500 text-white",
  projects: "bg-zinc-500 text-white",
  publication: "bg-zinc-500 text-white",
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("experience");

  return (
    <div className={poppins.className}>
      <div className="min-h-[100dvh] bg-gradient-to-b from-zinc-50 via-white to-zinc-100 text-foreground">
        <main className="mx-auto max-w-4xl px-4 py-8 md:py-12">
          <header className="mb-10 flex items-center justify-between border-b border-zinc-200 pb-4">
            <div>
              <p className="text-lg font-semibold tracking-tight">Rishikesh Yadav</p>
              <p className="text-sm text-muted-foreground">Founder & AI Engineer</p>
            </div>
            <nav className="flex items-center gap-3 text-zinc-600">
              <Link
                href="https://www.linkedin.com/in/rishikesh-y-75846420b/"
                className="rounded-md p-2 transition hover:bg-zinc-100"
                prefetch={false}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/rishikeshydv?tab=repositories"
                className="rounded-md p-2 transition hover:bg-zinc-100"
                prefetch={false}
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:ryadav@caldwell.edu"
                className="rounded-md p-2 transition hover:bg-zinc-100"
                prefetch={false}
                aria-label="Email"
              >
                <MdEmail className="h-5 w-5" />
              </Link>
            </nav>
          </header>

          <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  About
                </p>
                <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  Building production AI systems that solve real business problems.
                </h1>
                <p className="max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">
                  I&apos;m pursuing a BS in Computer Science and Mathematics at Caldwell University
                  (Spring 2026, GPA 3.93). My focus is agent workflows, retrieval systems with
                  grounded citations, and reliable backend infrastructure for production.
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-zinc-600">
                  <span className="rounded-full bg-zinc-100 px-3 py-1">Caldwell, NJ</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1">ryadav@caldwell.edu</span>
                  <Link
                    className="rounded-full bg-zinc-100 px-3 py-1 transition hover:bg-zinc-200"
                    href="http://www.rishikeshyadav.me"
                  >
                    rishikeshyadav.me
                  </Link>
                </div>
              </div>
              <Image
                src="/linkedin.jpg"
                width={140}
                height={140}
                alt="Rishikesh Yadav profile photo"
                className={styles.circular}
                priority
              />
            </div>
          </section>

          <section className="mt-10">
            <div className="rounded-xl border border-zinc-200 bg-white p-2 shadow-sm">
              <div role="tablist" aria-label="Portfolio sections" className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    role="tab"
                    type="button"
                    id={`tab-${tab.key}`}
                    aria-selected={activeTab === tab.key}
                    aria-controls={`panel-${tab.key}`}
                    onClick={() => setActiveTab(tab.key)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      activeTab === tab.key
                        ? `${activeTabStyles[tab.key]} shadow-sm`
                        : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div
              id={`panel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
              className="mt-4"
            >
              {activeTab === "experience" ? (
                <div className="space-y-4">
                  {experience.map((item) => (
                    <article
                      key={`${item.company}-${item.role}`}
                      className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
                    >
                      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                        <h2 className="text-base font-semibold">
                          {item.role} · <span className="text-zinc-700">{item.company}</span>
                        </h2>
                        <p className="text-sm text-zinc-500">{item.period}</p>
                      </div>
                      <p className="mb-3 text-sm text-zinc-500">{item.location}</p>
                      {item.links.length > 0 ? (
                        <div className="mb-3 flex flex-wrap gap-2">
                          {item.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 transition hover:bg-zinc-200"
                              prefetch={false}
                            >
                              {link.label}
                              <FiExternalLink className="h-3.5 w-3.5" />
                            </Link>
                          ))}
                        </div>
                      ) : null}
                      <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                        {item.highlights.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              ) : null}

              {activeTab === "education" ? (
                <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="text-base font-semibold">Caldwell University</h2>
                    <p className="text-sm text-zinc-500">Expected Graduation: Spring 2026</p>
                  </div>
                  <p className="text-sm text-zinc-700">BS in Computer Science and Mathematics</p>
                  <p className="mt-2 text-sm text-zinc-600">GPA: 3.93 / 4.00</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Full Stack Web
                    Dev, Artificial Intelligence, Programming Languages, SWE Capstone, Linear Algebra,
                    Probability & Statistics I & II.
                  </p>
                </article>
              ) : null}

              {activeTab === "skills" ? (
                <div className="grid gap-4 md:grid-cols-2">
                  <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
                    <h2 className="text-base font-semibold">Generative AI</h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {skills.generativeAI.map((skill) => (
                        <span key={skill} className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                  <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
                    <h2 className="text-base font-semibold">Engineering / ML</h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {skills.engineeringML.map((skill) => (
                        <span key={skill} className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              ) : null}

              {activeTab === "projects" ? (
                <div className="space-y-4">
                  {projects.map((project) => (
                    <article key={project.name} className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
                      <h2 className="text-base font-semibold">{project.name}</h2>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 transition hover:bg-zinc-200"
                            prefetch={false}
                          >
                            {link.label}
                            <FiExternalLink className="h-3.5 w-3.5" />
                          </Link>
                        ))}
                      </div>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                        {project.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              ) : null}

              {activeTab === "publication" ? (
                <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <p className="text-sm leading-7 text-zinc-700">
                    Veksler, V.D., Gedenidze, N., & Yadav, R. (2023). Visual Cortex Doesn&apos;t
                    Change, Why Should Convolutional Layers? The 16th International Conference on
                    Brain Informatics, Hoboken, NJ, USA.{" "}
                    <Link
                      href="https://wi-consortium.org/conferences/bi2023/pdf/BI%202023%20Abstract%20Notes.pdf"
                      className="inline-flex items-center gap-1 underline underline-offset-4"
                      prefetch={false}
                    >
                      Link <FiExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </p>
                </article>
              ) : null}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
