import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="resume-page">
      <style>{`
        .resume-page{min-height:100vh;background:#f5f6f8;color:#111827;padding:32px 18px;font-family:Arial,Helvetica,sans-serif}
        .resume-shell{max-width:900px;margin:auto;background:#fff;padding:48px 54px;box-shadow:0 15px 50px #00000012}
        .resume-actions{max-width:900px;margin:0 auto 16px;display:flex;gap:10px;justify-content:flex-end}
        .resume-actions a,.resume-actions button{border:1px solid #d8dee7;background:#fff;color:#111827;border-radius:999px;padding:9px 15px;text-decoration:none;cursor:pointer}
        .resume-page h1{font-size:34px;letter-spacing:-.03em;margin:0;color:#111827}.resume-page h2{font-size:14px;text-transform:uppercase;letter-spacing:.14em;border-bottom:1px solid #d9dee7;padding-bottom:7px;margin-top:26px;color:#111827}.resume-page p{font-size:12px;line-height:1.65;margin:7px 0}.resume-meta{color:#526070;font-size:12px;margin-top:6px}.resume-item{margin:13px 0}.resume-item strong{font-size:13px}.resume-item span{color:#526070;font-size:11px;float:right}.resume-page ul{margin:7px 0;padding-left:18px}.resume-page li{font-size:12px;line-height:1.55;margin:3px 0}.resume-contact{display:flex;flex-wrap:wrap;gap:14px;color:#526070;font-size:11px;margin-top:7px}.resume-page .tagline{font-size:14px;color:#0d7655;margin-top:3px;font-weight:600}
        @media(max-width:650px){.resume-shell{padding:30px 22px}.resume-item span{float:none;display:block;margin-top:3px}.resume-actions{justify-content:center}}
        @media print{body{margin:0}.resume-page{background:#fff;padding:0}.resume-shell{box-shadow:none;max-width:none;padding:28px 34px}.resume-actions{display:none}.resume-page h2{break-after:avoid}.resume-item{break-inside:avoid}}
      `}</style>
      <div className="resume-actions"><Link href="/">← Portfolio</Link><button onClick={() => window.print()}>Print / Save PDF</button></div>
      <article className="resume-shell">
        <h1>Ritesh Pandey</h1>
        <div className="tagline">Data Analyst | Python Developer</div>
        <div className="resume-contact"><span>New Delhi, India</span><span>riteshji289@gmail.com</span><span>9354911652</span><span>github.com/Riteshji108/data_analyst</span><span>linkedin.com/in/ritesh-pandey-46a64528</span></div>

        <h2>Profile</h2>
        <p>Data-focused undergraduate building practical analytics solutions with Python, SQL, Excel and Power BI. Interested in Data Analyst and Business Analyst opportunities, with a long-term goal of moving toward Data Engineering.</p>

        <h2>Education</h2>
        <div className="resume-item"><strong>B.Sc. Polymer Science — Bhaskaracharya College of Applied Sciences, University of Delhi</strong><span>Expected 2027</span><p>Undergraduate study with a parallel focus on analytics, Python, SQL and business intelligence.</p></div>

        <h2>Experience</h2>
        <div className="resume-item"><strong>Power BI Intern — CodeAlpha</strong><span>20 Aug 2026 — 20 Sep 2026</span><p>Hands-on exposure to Power BI, data analysis, visualization and practical analytical applications.</p></div>
        <div className="resume-item"><strong>Associate, Operations — Globiva, Delhi</strong><span>Professional experience</span><p>Workflow coordination, stakeholder communication, service-quality execution and structured use of client and market feedback.</p></div>
        <div className="resume-item"><strong>Data Analytics Job Simulation — Deloitte</strong><span>Aug 2026</span><p>Practical tasks across data analysis and forensic technology, strengthening structured analysis and problem-solving.</p></div>

        <h2>Projects</h2>
        <div className="resume-item"><strong>Sales Performance & KPI Dashboard</strong><p>Power BI, SQL, Excel, DAX — designed an executive analytics workflow for revenue, orders, AOV, category and regional analysis using reproducible synthetic data.</p></div>
        <div className="resume-item"><strong>Customer Churn & Retention Analysis</strong><p>Python, Pandas, NumPy, Seaborn — customer-level exploratory workflow for churn patterns, retention behavior and revenue exposure.</p></div>
        <div className="resume-item"><strong>Expense Tracker & Financial Analytics</strong><p>Python, SQL, Git — structured transaction processing with category and monthly financial summaries.</p></div>

        <h2>Technical Skills</h2>
        <p><strong>Programming:</strong> Python, R, SQL</p>
        <p><strong>Analytics:</strong> NumPy, Pandas, Matplotlib, Seaborn, Statistics, EDA</p>
        <p><strong>BI:</strong> Power BI, Tableau, Excel, Microsoft Fabric, DAX, Power Query</p>
        <p><strong>Databases & Tools:</strong> MySQL, PostgreSQL, Git, GitHub, Linux, VS Code</p>
      </article>
    </main>
  );
}
