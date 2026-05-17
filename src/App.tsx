import {
  Download,
  Github,
  Heart,
  Shield,
  Zap,
  HardDrive,
  ChevronDown,
  Scissors,
  Send,
  MousePointerClick,
  ArrowRight,
  Play,
  FileVideo,
  Folder,
  Copy,
  Trash2,
  ExternalLink,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import Aurora from "./components/Aurora";

const GITHUB_URL = "https://github.com/LucasHenriqueDiniz/dropcut";
const DOWNLOAD_URL = `${GITHUB_URL}/releases/latest/download/DropCut_0.1.1_x64-setup.exe`;
const SUPPORT_URL = `${GITHUB_URL}/issues`;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <img
            src="/images/icon.png"
            alt="DropCut"
            className="h-8 w-8"
          />
          <span className="text-lg font-bold tracking-tight text-foreground">
            DropCut
          </span>
        </div>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a
            href="#features"
            className="transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#context-menu"
            className="transition-colors hover:text-foreground"
          >
            Quick Access
          </a>
          <a
            href="#how-it-works"
            className="transition-colors hover:text-foreground"
          >
            How it works
          </a>
          <a href="#faq" className="transition-colors hover:text-foreground">
            FAQ
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:flex"
          >
            <Heart className="h-4 w-4" />
            Support
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
          >
            <Download className="h-4 w-4" />
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div className="pointer-events-none absolute inset-0">
        <Aurora
          colorStops={["#0ff0b3", "#7c3aed", "#0ff0b3"]}
          amplitude={1.2}
          blend={0.6}
          speed={0.6}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-background/60" />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
          100% local. Zero telemetry.
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 text-5xl leading-tight font-extrabold tracking-tight text-foreground text-balance md:text-7xl md:leading-tight"
        >
          Compress videos.{" "}
          <span className="text-glow bg-gradient-to-r from-accent via-purple-400 to-accent bg-clip-text text-transparent">
            No hassle.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          DropCut compresses and trims your videos right on your PC. No cloud,
          no account, no waiting. Perfect for Discord, WhatsApp, and social
          media.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer glow-accent group flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-base font-bold text-accent-foreground transition-all hover:scale-105 hover:brightness-110"
          >
            <Download className="h-5 w-5" />
            Download for Windows
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-muted/50 px-8 py-4 text-base font-medium text-foreground transition-all hover:border-accent/30 hover:bg-muted"
          >
            <Github className="h-5 w-5" />
            View on GitHub
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          Free and open source. Windows 10/11.
        </motion.p>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Shield,
    title: "Fully local",
    description:
      "Your videos never leave your computer. No uploads, no cloud, no tracking.",
  },
  {
    icon: Zap,
    title: "Fast compression",
    description:
      "Built-in FFmpeg optimized for speed. Compress videos in seconds, not minutes.",
  },
  {
    icon: Send,
    title: "Discord-ready sizes",
    description:
      "Built-in presets for 10 MB and 50 MB. Perfect for sharing clips and memes.",
  },
  {
    icon: MousePointerClick,
    title: "Context menu",
    description:
      "Right-click any video and compress directly from the Windows Explorer context menu.",
  },
  {
    icon: Scissors,
    title: "Precise trimming",
    description:
      "Select the exact section you want. Trim start and end without re-encoding the entire video.",
  },
  {
    icon: HardDrive,
    title: "Export history",
    description:
      "Quickly access your recent compressions. Background compression without freezing anything.",
  },
];

function Features() {
  return (
    <section id="features" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Everything you need. Nothing you don&apos;t.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Built for people who want to compress videos fast and without the
              fluff.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.08}>
              <div className="glass-card group h-full rounded-2xl p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_-10px_rgba(15,240,179,0.15)]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoShowcase() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              See it in action
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Drag, pick a preset, export. Simple as that.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="glow-accent overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative aspect-video w-full overflow-hidden bg-background">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                poster=""
              >
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome-bh4nvNMMd4xXbVWENHJ4VRevwv2Ma5.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="pointer-events-none absolute inset-0 rounded-b-2xl ring-1 ring-inset ring-white/5" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ContextMenuSection() {
  return (
    <section id="context-menu" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[400px] -translate-y-1/2 rounded-full bg-purple-500/5 blur-[120px]" />
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedSection>
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
                Compress from Explorer. Without opening the app.
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                DropCut integrates with the Windows context menu. Right-click
                any video and pick a compression preset. The result shows up in
                the same folder, ready to share.
              </p>
              <ul className="space-y-3">
                {[
                  "Right-click any video file",
                  "Automatic preset based on target size",
                  "No extra windows to open",
                  "Result saved in the same folder",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <ArrowRight className="h-3 w-3 text-accent" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              {/* Fake Windows Explorer */}
              <div className="overflow-hidden rounded-xl border border-border bg-[#1e1e1e] shadow-2xl">
                {/* Title bar */}
                <div className="flex items-center justify-between border-b border-[#333] bg-[#2d2d2d] px-3 py-2">
                  <div className="flex items-center gap-2">
                    <Folder className="h-4 w-4 text-yellow-400/80" />
                    <span className="text-xs text-[#ccc]">
                      {"Videos > Clips"}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-sm bg-[#555]" />
                    <div className="h-3 w-3 rounded-sm bg-[#555]" />
                    <div className="h-3 w-3 rounded-sm bg-red-500/70" />
                  </div>
                </div>

                {/* File list */}
                <div className="p-2">
                  {[
                    {
                      name: "gameplay-clip.mp4",
                      size: "247 MB",
                      selected: false,
                    },
                    {
                      name: "my-video-edit.mp4",
                      size: "89 MB",
                      selected: true,
                    },
                    {
                      name: "highlight-final.mp4",
                      size: "156 MB",
                      selected: false,
                    },
                  ].map((file, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 rounded px-3 py-2 ${
                        file.selected
                          ? "bg-accent/10 ring-1 ring-accent/30"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <FileVideo
                        className={`h-5 w-5 ${
                          file.selected
                            ? "text-accent"
                            : "text-muted-foreground/60"
                        }`}
                      />
                      <span
                        className={`flex-1 text-sm ${
                          file.selected ? "text-foreground" : "text-[#aaa]"
                        }`}
                      >
                        {file.name}
                      </span>
                      <span className="text-xs text-muted-foreground/50">
                        {file.size}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Context menu overlay */}
                <div className="absolute right-4 top-[50%] z-10 w-72 -translate-y-1/2 overflow-hidden rounded-lg border border-[#3a3a3a] bg-[#2c2c2c] shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
                  <div className="py-1">
                    <div className="flex items-center gap-3 px-3 py-1.5 text-[#bbb]">
                      <Play className="h-3.5 w-3.5 text-[#666]" />
                      <span className="text-xs text-[#888]">Open</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-1.5 text-[#bbb]">
                      <ExternalLink className="h-3.5 w-3.5 text-[#666]" />
                      <span className="text-xs text-[#888]">Open with...</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-1.5 text-[#bbb]">
                      <Copy className="h-3.5 w-3.5 text-[#666]" />
                      <span className="text-xs text-[#888]">Copy</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-1.5 text-[#bbb]">
                      <Trash2 className="h-3.5 w-3.5 text-[#666]" />
                      <span className="text-xs text-[#888]">Delete</span>
                    </div>
                  </div>
                  <div className="mx-2 border-t border-[#3a3a3a]" />
                  <div className="p-1.5">
                    <div className="flex items-center gap-3 rounded-md bg-accent/12 px-3 py-2.5 text-accent">
                      <img src="/images/icon.png" alt="" className="h-4 w-4 shrink-0" />
                      <span className="text-sm font-semibold">Compress with DropCut (10 MB)</span>
                    </div>
                    <div className="mt-1 flex items-center gap-3 rounded-md bg-accent/12 px-3 py-2.5 text-accent">
                      <img src="/images/icon.png" alt="" className="h-4 w-4 shrink-0" />
                      <span className="text-sm font-semibold">Compress with DropCut (50 MB)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    step: "01",
    title: "Drop the video",
    description:
      "Drop the file into the DropCut window or use the Windows context menu.",
  },
  {
    step: "02",
    title: "Pick a preset",
    description:
      "Select the target size: 10 MB, 50 MB, or configure it manually.",
  },
  {
    step: "03",
    title: "Export",
    description:
      "Hit compress and you're done. The video is saved to the folder you choose.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Three steps. No fluff.
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From original video to compressed file in seconds.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <AnimatedSection key={item.step} delay={index * 0.15}>
              <div className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-1/2 hidden h-px w-full bg-gradient-to-r from-border via-accent/30 to-border md:block" />
                )}
                <div className="relative z-10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/20 bg-[#0c0c10] font-mono text-2xl font-bold text-accent">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqItems = [
  {
    question: "Is DropCut really free?",
    answer:
      "Yes, 100% free and open source. You can use, modify, and distribute it however you like. If you want to support development, donations are welcome.",
  },
  {
    question: "Does it work on Mac or Linux?",
    answer:
      "Currently DropCut is exclusive to Windows 10 and 11. Versions for other systems may come in the future.",
  },
  {
    question: "Are my videos uploaded to any server?",
    answer:
      "No. Processing is 100% local using the built-in FFmpeg. No data ever leaves your computer.",
  },
  {
    question: "What about quality after compression?",
    answer:
      "DropCut uses optimized algorithms to keep the best possible quality within the target size. You can also manually adjust parameters.",
  },
  {
    question: "Can I trim and compress at the same time?",
    answer:
      "Yes! You can set start and end points before compressing. Trimming is done alongside compression, no extra steps needed.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Frequently asked questions
            </h2>
          </div>
        </AnimatedSection>
        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.06}>
              <div className="rounded-xl border border-border bg-card/50 transition-all duration-200 hover:border-accent/10">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="pr-4 text-base font-medium text-foreground">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-4 text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="download" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/8 blur-[150px]" />
        <div className="absolute bottom-20 left-1/3 h-[300px] w-[400px] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <div className="mx-auto mb-10 inline-flex items-center justify-center rounded-2xl border border-accent/20 bg-accent/5 p-4 shadow-lg shadow-accent/5">
            <img
              src="/images/icon.png"
              alt=""
              className="h-14 w-14"
            />
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Ready to compress?
          </h2>
          <p className="mx-auto mb-4 max-w-xl text-lg text-muted-foreground">
            Download DropCut now. Free, no sign-up, no catch.
          </p>
          <p className="mx-auto mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground/60">
            <Shield className="h-3.5 w-3.5" />
            Open source. No telemetry. Windows 10/11.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer glow-accent group flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-base font-bold text-accent-foreground transition-all hover:scale-105 hover:brightness-110"
            >
              <Download className="h-5 w-5" />
              Download for Windows
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-muted/50 px-8 py-4 text-base font-medium text-foreground transition-all hover:border-accent/30 hover:bg-muted"
            >
              <Heart className="h-5 w-5 text-accent" />
              Support the project
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2.5">
          <img
            src="/images/icon.png"
            alt="DropCut"
            className="h-6 w-6"
          />
          <span className="text-sm font-semibold text-foreground">
            DropCut
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Heart className="h-4 w-4" />
            Support
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          Built with FFmpeg. Open source.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <VideoShowcase />
        <ContextMenuSection />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
