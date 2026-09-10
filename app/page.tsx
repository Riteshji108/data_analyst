"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, BarChart3, BriefcaseBusiness, Database, Mail, Menu, Moon, PieChart, Send, Sun, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const skills = {
  Programming: ["Python", "R", "SQL"],
  "Data Analysis": ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Statistics"],
  "BI & Visualization": ["Power BI", "Tableau", "Excel", "Microsoft Fabric", "DAX", "Power Query"],
  Databases: ["MySQL", "PostgreSQL", "SQL"],
  "Developer Tools": ["Git", "GitHub", "Linux", "VS Code"],
  "Business Analytics": ["KPI analysis", "EDA", "Market research", "Customer insights"],
};

const projects = [
  { n: "01", title: "Sales Performance & KPI Dashboard", desc: "Executive analysis of revenue, orders, AOV, regional performance and category trends using a reproducible analytics workflow.", tags: ["Power BI", "SQL", "Excel", "DAX"], icon: BarChart3, href: "https://github.com/Riteshji108/data_analyst/tree/main/projects/sales-performance-kpi-dashboard" },
  { n: "02", title: "Customer Churn & Retention Analysis", desc: "Customer-level analysis designed to uncover churn patterns, retention behavior and revenue exposure without inventing business results.", tags: ["Python", "Pandas", "NumPy", "Seaborn"], icon: PieChart, href: "https://github.com/Riteshji108/data_analyst/tree/main/projects/customer-churn-retention-analysis" },
  { n: "03", title: "Expense Tracker & Financial Analytics", desc: "Python and SQL workflow for structured expense records, category analysis and monthly financial summaries.", tags: ["Python", "SQL", "Git", "File handling"], icon: Database, href: "https://github.com/Riteshji108/data_analyst/tree/main/projects/expense-tracker-financial-analytics" },
  { n: "04", title: "BFSI Transaction Intelligence", desc: "A portfolio case study focused on transaction-level analysis, anomaly exploration and financial-services reporting.", tags: ["Python", "SQL", "Power BI"], icon: BriefcaseBusiness, href: "https://github.com/Riteshji108/data_analyst" },
];

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function Home() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const theme = dark ? "site dark" : "site light";

  return (
    <main className={theme}>
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#home" className="brand"><span>RP</span> / Ritesh Pandey</a>
          <div className="nav-links">
            <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
            <a className="nav-resume" href="/resume">Resume</a>
            <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle colour theme">{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          </div>
          <button className="mobile-menu icon-button" onClick={() => setMenu(!menu)} aria-label="Open navigation">{menu ? <X /> : <Menu />}</button>
        </div>
        {menu && <div className="mobile-nav">{["about", "skills", "projects", "experience", "contact"].map(id => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{id[0].toUpperCase() + id.slice(1)}</a>)}<a href="/resume">Resume</a></div>}
      </nav>

      <section id="home" className="hero grid-bg">
        <div className="glow" />
        <div className="container hero-grid">
          <motion.div initial="hidden" animate="show" variants={fade}>
            <p className="eyebrow">AVAILABLE FOR OPPORTUNITIES · DELHI, INDIA</p>
            <h1>Turning raw data into <span>clear decisions.</span></h1>
            <p className="lead">I’m Ritesh Pandey, a Data Analyst and Python Developer building practical analytics solutions with Python, SQL, Excel and Power BI — while growing toward Data Engineering.</p>
            <div className="actions"><a className="button primary" href="#projects">View projects <ArrowDown size={17} /></a><a className="button secondary" href="/resume">View resume <ArrowUpRight size={17} /></a></div>
            <div className="socials"><a href="https://github.com/Riteshji108/data_analyst" aria-label="GitHub"><GithubIcon /></a><a href="https://linkedin.com/in/ritesh-pandey-46a64528" aria-label="LinkedIn"><LinkedinIcon /></a><a href="mailto:riteshji289@gmail.com" aria-label="Email"><Mail /></a></div>
          </motion.div>
          <motion.div className="analytics-card" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
            <div className="card-top"><span>analytics_workspace</span><i /></div>
            <div className="metric-grid"><Metric label="Revenue" value="—" /><Metric label="Customers" value="—" /><Metric label="Growth" value="—" /><Metric label="AOV" value="—" /></div>
            <div className="mini-chart"><div className="chart-heading"><b>Monthly performance</b><span>SQL → BI</span></div><div className="bars">{[30,46,39,63,54,76,69,88,72,94,83,100].map((h, i) => <motion.i key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.04 }} />)}</div></div>
            <p className="card-foot">Python · SQL · Power BI · Statistics</p>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section container"><Section eyebrow="01 / ABOUT" title="Analytical thinking, practical execution." text="I’m pursuing a B.Sc. at Bhaskaracharya College of Applied Sciences, University of Delhi, while building a practical portfolio in analytics, Python and business intelligence." /><div className="info-grid"><Info title="Education" value="B.Sc. Polymer Science" sub="University of Delhi · 2027" /><Info title="Based in" value="New Delhi" sub="South West Delhi, India" /><Info title="Current focus" value="Data Analytics" sub="Python · SQL · BI" /><Info title="Next direction" value="Data Engineering" sub="Long-term career goal" /></div></section>

      <section id="skills" className="section band"><div className="container"><Section eyebrow="02 / TOOLKIT" title="A stack built for the analytics workflow." text="From data cleaning and SQL to dashboards and business interpretation." /><div className="skill-grid">{Object.entries(skills).map(([group, items]) => <div className="card" key={group}><h3>{group}</h3><div className="chips">{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>

      <section id="projects" className="section container"><Section eyebrow="03 / SELECTED WORK" title="Projects that show how I work with data." text="Each project is built around a business question, a reproducible workflow and a clear analytical output." /><div className="project-grid">{projects.map(p => { const Icon = p.icon; return <motion.a whileHover={{ y: -5 }} transition={{ duration: 0.2 }} href={p.href} target="_blank" rel="noreferrer" key={p.n} className="project card"><div className="project-head"><span>{p.n}</span><Icon size={21} /></div><h3>{p.title}</h3><p>{p.desc}</p><div className="chips">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div><strong>View project <ArrowUpRight size={15} /></strong></motion.a> })}</div></section>

      <section id="experience" className="section band"><div className="container"><Section eyebrow="04 / EXPERIENCE & EDUCATION" title="Learning by building and doing." /><div className="timeline"><Timeline title="Power BI Intern" org="CodeAlpha · Delhi" date="20 Aug 2026 — 20 Sep 2026" text="Hands-on work across Power BI, data analysis, visualization and practical analytical applications." /><Timeline title="Associate, Operations" org="Globiva · Delhi" date="Professional experience" text="Workflow coordination, stakeholder communication, service-quality execution and structured use of client and market feedback." /><Timeline title="Data Analytics Job Simulation" org="Deloitte" date="Aug 2026" text="Practical tasks across data analysis and forensic technology, strengthening structured analysis and problem-solving." /><Timeline title="B.Sc. Polymer Science" org="Bhaskaracharya College of Applied Sciences · University of Delhi" date="Expected 2027" text="Undergraduate study while developing a parallel portfolio in analytics and Python." /></div></div></section>

      <section id="contact" className="section container"><div className="contact-grid"><div><Section eyebrow="05 / CONTACT" title="Let’s talk about data." text="Open to entry-level Data Analyst, Business Analyst and Python opportunities." /><div className="contact-links"><a href="mailto:riteshji289@gmail.com"><Mail size={17} /> riteshji289@gmail.com</a><a href="https://github.com/Riteshji108/data_analyst"><GithubIcon width={17} height={17} /> GitHub</a><a href="https://linkedin.com/in/ritesh-pandey-46a64528"><LinkedinIcon width={17} height={17} /> LinkedIn</a></div></div><form className="card form" onSubmit={e => { e.preventDefault(); setSent(true); }}><div className="form-grid"><Field label="Name" /><Field label="Email" type="email" /></div><label>Message<textarea required rows={6} /></label><button className="button primary" type="submit">{sent ? "Message details validated" : "Prepare email"} <Send size={16} /></button><p className="form-note">Your mail client can be used to send the message; no server credentials are stored in this site.</p></form></div></section>

      <footer><div className="container footer-inner"><span>© {new Date().getFullYear()} Ritesh Pandey</span><span>DATA → INSIGHT → DECISION</span></div></footer>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) { return <div className="metric"><small>{label}</small><b>{value}</b></div>; }
function Info({ title, value, sub }: { title: string; value: string; sub: string }) { return <div className="card info"><small>{title}</small><b>{value}</b><span>{sub}</span></div>; }
function Section({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) { return <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-70px" }} variants={fade}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="section-text">{text}</p>}</motion.div>; }
function Timeline({ title, org, date, text }: { title: string; org: string; date: string; text: string }) { return <article className="timeline-item"><i /><div className="timeline-top"><div><h3>{title}</h3><b>{org}</b></div><span>{date}</span></div><p>{text}</p></article>; }
function Field({ label, type = "text" }: { label: string; type?: string }) { return <label>{label}<input required type={type} /></label>; }
