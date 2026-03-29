import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Award, Briefcase, Mail, Phone, MapPin, ExternalLink, Star, TerminalSquare, Bug, Smartphone, Brain, Lock } from "lucide-react";

const stats = [
  { label: "VAPT Assessments", value: 200, suffix: "+" },
  { label: "Security Findings", value: "High-Impact" },
  { label: "Domains", value: "Web • API • Android • LLM" },
  { label: "Recognition", value: "NCIIPC + Global Orgs" },
];

const skills = [
  "Web & API Penetration Testing",
  "Manual Vulnerability Assessment",
  "Business Logic Testing",
  "OWASP Top 10 & API Top 10",
  "Authentication & Authorization Testing",
  "Access Control Testing",
  "Session Management",
  "Input Validation",
  "File Upload Testing",
  "Security Misconfiguration",
  "API Fuzzing",
  "Rate Limiting Bypass",
  "Reconnaissance & Enumeration",
  "Android Penetration Testing",
  "Reverse Engineering (Basic)",
  "Static & Dynamic Analysis",
  "Insecure Data Storage",
  "WebView Exploitation",
  "SSL Pinning Bypass",
  "Intent Vulnerabilities",
  "LLM Security Testing",
  "Prompt Injection",
  "Jailbreak Techniques",
  "Data Leakage",
  "Output Manipulation",
  "SentinelOne EDR",
  "Alert Triage",
  "Misconfiguration Alerts Analysis",
  "Workflow Automation",
  "Jira Ticket Automation",
  "Alert-to-Ticket Mapping",
  "Hyperautomation",
  "Python Scripting",
  "Burp Suite Pro",
  "Postman",
  "Nmap",
  "Nessus",
  "Metasploit",
  "SQLMap",
  "JIRA"
];

const certifications = [
  "C|PENT — EC-Council",
  "Licensed Penetration Tester (Master) — EC-Council",
  "Certified in Cybersecurity (CC) — ISC2",
  "AWS Certified Cloud Practitioner (CLF-C02) — AWS",
  "Security Operations Analyst Associate (SC-200) — Microsoft",
];

const experience = [
  {
    role: "Security Engineer Intern",
    company: "Apna",
    period: "Feb 2026 – Current",
    points: [
      "Conducted manual and automated Web & API penetration testing, identifying vulnerabilities such as Broken Access Control, Security Misconfiguration, and authentication flaws.",
      "Performed Android security testing including basic reverse engineering, static and dynamic analysis, and identification of insecure data storage issues.",
      "Executed LLM security testing focusing on prompt injection, jailbreak techniques, and data leakage scenarios.",
      "Utilized SentinelOne EDR for alert triage and analysis of misconfigurations and security alerts, and built hyperautomation workflows for efficient alert handling.",
      "Managed Reblaze WAF by creating and tuning rules to block attacks such as SQL Injection, XSS, RCE, and Command Injection.",
      "Developed Python scripts to automate SSL certificate renewal, reducing manual effort and improving operational efficiency.",
      "Automated Jira-based ticketing workflows for alert management, tracking, and SLA compliance."
    ]
  },
  {
    role: "Information Security Associate",
    company: "Policybazaar",
    period: "Nov 2024 – Apr 2025",
    points: [
      "Conducted 100+ manual and automated Web & API penetration tests using Burp Suite Pro, OWASP ZAP, Postman, and Noname (Akamai), uncovering critical vulnerabilities in production systems.",
      "Identified and validated high-severity OWASP Top 10 and API Top 10 issues including SQL Injection, XSS, IDOR, and Broken Authentication, significantly reducing exploitable risk.",
      "Performed advanced reconnaissance, fuzzing, and input validation testing by crafting custom payloads to simulate real-world attack scenarios and expand coverage.",
      "Authored detailed technical reports with proof-of-concepts (PoCs), risk ratings, and remediation guidance, accelerating vulnerability resolution.",
      "Collaborated with development and QA teams to prioritize and remediate security issues, integrating security testing into CI/CD workflows.",
      "Managed vulnerability tracking and validation through JIRA and Confluence, ensuring timely closure and adherence to internal SLA."
    ]
  },
];

const achievements = [
  "Recognized by NCIIPC (Govt. of India) for responsibly disclosing a critical vulnerability.",
  "Acknowledged by HackTheBox for identifying and reporting critical security issues.",
  "Reported valid vulnerabilities in platforms including Uber, OLA, Zomato, Acronis, Hivelocity, and Sprinklr.",
  "Produced detailed technical reports with PoCs, remediation guidance, and risk prioritization.",
];

const commandLines = [
  "Initializing security profile...",
  "Enumerating attack surface (Web/API/Android/LLM)...",
  "Testing authentication & authorization controls...",
  "Probing business logic and access control flaws...",
  "Fuzzing endpoints and validating input handling...",
  "Simulating SQLi, XSS, IDOR scenarios...",
  "Assessing rate limits and abuse cases...",
  "Analyzing mobile storage and WebView risks...",
  "Executing prompt injection & jailbreak tests...",
  "Correlating findings with real exploit paths...",
  "Generating PoCs and remediation guidance...",
  "Finalizing high-impact vulnerability report...",
];



function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-300">{subtitle}</p>}
    </div>
  );
}

function Glow() {
  return (
    <>
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
    </>
  );
}

function TypewriterTerminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const currentLine = commandLines[lineIndex];
    if (!currentLine) return;

    if (typed.length < currentLine.length) {
      const timeout = setTimeout(() => {
        setTyped(currentLine.slice(0, typed.length + 1));
      }, 35);
      return () => clearTimeout(timeout);
    }

    const pause = setTimeout(() => {
      setTyped("");
      setLineIndex((prev) => (prev + 1) % commandLines.length);
    }, 1400);

    return () => clearTimeout(pause);
  }, [typed, lineIndex]);

  return (
    <div className="rounded-[1.75rem] border border-emerald-400/20 bg-black/70 p-5 shadow-2xl shadow-emerald-500/10">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 text-xs uppercase tracking-[0.28em] text-emerald-300/70">Live Signal Console</span>
      </div>
      <div className="font-mono text-sm leading-7 text-emerald-300">
        <p>$ {typed}<span className="animate-pulse">▋</span></p>
      </div>
    </div>
  );
}

function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${8 + i * 6}%`,
        delay: i * 0.35,
        duration: 5 + (i % 4),
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: -700, opacity: [0, 0.9, 0] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/70 blur-[1px]"
          style={{ left: particle.left, bottom: -20 }}
        />
      ))}
    </div>
  );
}

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const timer = setInterval(() => {
      current += 1;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 40); // slower increment

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{count >= target ? suffix : ""}</span>;
}

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loaderTimer = setTimeout(() => setIsLoading(false), 2000);

    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      clearTimeout(loaderTimer);
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-cyan-400/20 bg-white/5 px-10 py-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">Loading</p>
              <h1 className="mt-4 text-3xl font-black tracking-[0.18em] text-white md:text-5xl">SECURITY ENGINEER PROFILE</h1>
              <div className="mt-6 flex justify-center gap-2">
                <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-300" />
                <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-300 [animation-delay:200ms]" />
                <span className="h-3 w-3 animate-pulse rounded-full bg-cyan-300 [animation-delay:400ms]" />
              </div>
            </motion.div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-60"
          style={{
            background: `radial-gradient(500px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34,211,238,0.14), transparent 40%)`,
          }}
        />
        <div className="relative overflow-hidden">
          <Glow />
          <FloatingParticles />

          <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
              <div>
                <p className="text-lg font-black tracking-[0.22em] text-white">KHUSHAHAL</p>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Security Engineer</p>
              </div>
              <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
                <a href="#about" className="transition hover:text-white">About</a>
                <a href="#expertise" className="transition hover:text-white">Expertise</a>
                <a href="#experience" className="transition hover:text-white">Experience</a>
                <a href="#certs" className="transition hover:text-white">Certifications</a>
                <a href="#contact" className="transition hover:text-white">Contact</a>
              </nav>
            </div>
          </header>

          <main>
            <section className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-8 lg:pt-24">
              <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="relative z-10"
                >
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.18)]">
                    <Star className="h-4 w-4" />
                    Web • API • Android • LLM Security Testing
                  </div>

                  <h1 className="max-w-4xl text-5xl font-black leading-none tracking-tight text-white md:text-7xl xl:text-8xl">
                    Khushahal Sharma
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                    Security Engineer | Synack Red Team Member
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
                    >
                      Let’s Connect <ChevronRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#experience"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                    >
                      View Experience <TerminalSquare className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative z-10"
                >
                  <TypewriterTerminal />
                </motion.div>
              </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.3, duration: 0.6 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >
                    <div className="text-2xl font-black text-white">
                      {typeof item.value === "number" ? (
                        <AnimatedCounter target={item.value} suffix={item.suffix || ""} />
                      ) : (
                        item.value
                      )}
                    </div>
                    <div className="mt-1 text-sm text-slate-400">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section id="about" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <SectionTitle
                  eyebrow="About"
                  title="Security Engineer specializing in Web, API, Android, and LLM security testing"
                  subtitle="Completed 100+ VAPT assessments, identifying high-impact vulnerabilities across real-world applications."
                />
                <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-900/30">
                  <p className="leading-8 text-slate-300">
                    Security Engineer specializing in Web, API, Android, and LLM security testing with a strong focus on manual exploitation. Completed 100+ VAPT assessments, identifying high-impact vulnerabilities across real-world applications. Experienced in LLM prompt injection testing, Android pentesting, and Python-based automation. Familiar with SentinelOne EDR for endpoint monitoring, alert triage, and basic incident investigation. Recognized by NCIIPC and global organizations such as Uber, OLA, and Zomato for valid security findings.
                  </p>
                </div>
              </div>
            </section>

            <section id="expertise" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
                <SectionTitle
                  eyebrow="Skills & Tools"
                  title="Skills & Tools"

                />
                <div className="mt-8 flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section id="experience" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
              <SectionTitle
                eyebrow="Experience"
                title="Professional Experience"
                subtitle=""
              />

              <div className="mt-10 space-y-6">
                {experience.map((job, i) => (
                  <motion.div
                    key={job.company + job.role}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="grid gap-5 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8 lg:grid-cols-[0.32fr_0.68fr]"
                  >
                    <div>
                      <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                        <Briefcase className="h-5 w-5 text-cyan-300" />
                      </div>
                      <h3 className="mt-4 text-2xl font-black text-white">{job.role}</h3>
                      <p className="mt-1 text-lg text-slate-300">{job.company}</p>
                      <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-500">{job.period}</p>
                    </div>
                    <div className="grid gap-3">
                      {job.points.map((point, pointIndex) => (
                        <motion.div
                          key={point}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: pointIndex * 0.12, duration: 0.45 }}
                          className="flex gap-3 rounded-2xl border border-white/8 bg-slate-950/40 p-4"
                        >
                          <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                          <p className="leading-7 text-slate-200">{point}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section id="certs" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <SectionTitle
                  eyebrow="Certifications"
                  title="Certifications"

                />
                <div className="grid gap-4">
                  {certifications.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <div className="rounded-2xl bg-white/10 p-3">
                        <Award className="h-5 w-5 text-fuchsia-300" />
                      </div>
                      <p className="font-medium leading-7 text-white">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <section id="achievements" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
              <SectionTitle eyebrow="Recognition" title="Recognition" />
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {achievements.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-slate-200"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </section>

            <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 pt-14 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[2.4rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 via-white/5 to-fuchsia-400/10 p-8 md:p-10"
              >
                {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.16),transparent_22%)]" />
                <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">Contact</p>
                    <h2 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">Contact</h2>

                  </div>

                  <div className="grid gap-3 text-sm text-slate-100">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"><MapPin className="h-4 w-4 text-cyan-300" /> Jaipur, Rajasthan</div>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"><Phone className="h-4 w-4 text-cyan-300" /> +91-8875611351</div>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"><Mail className="h-4 w-4 text-cyan-300" /> sharmapckhushal007@gmail.com</div>
                  </div>
                </div>

                <div className="relative mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/khushahalsharma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                  >
                    <ExternalLink className="h-4 w-4" /> LinkedIn
                  </a>
                </div> */}
                <div className="relative mt-16 text-center">

                  {/* Heading */}
                  <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200/80">
                    Contact
                  </p>
                  <h2 className="mt-2 text-4xl font-black text-white">
                    Get In Touch
                  </h2>

                  {/* Buttons */}
                  <div className="mt-8 flex justify-center flex-wrap gap-4">

                    {/* Phone */}
                    <a
                      href="tel:+918875611351"
                      title="Call"
                      className="group flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
                    >
                      <Phone className="h-5 w-5 text-cyan-300 group-hover:scale-110 transition" />
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:sharmapckhushal007@gmail.com"
                      rel="noopener noreferrer"
                      title="Email"
                      className="group flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
                    >
                      <Mail className="h-5 w-5 text-cyan-300 group-hover:scale-110 transition" />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/khushahalsharma"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn"
                      className="group flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
                    >
                      <ExternalLink className="h-5 w-5 text-cyan-300 group-hover:scale-110 transition" />
                    </a>

                  </div>
                </div>
              </motion.div>
            </section>        </main>
        </div>
      </div>
    </>
  );
}
