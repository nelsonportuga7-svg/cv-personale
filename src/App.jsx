import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const PROFILE = {
  name: "Nelson Filipe Da Silva Cardoso",
  shortName: "Nelson Silva",
  tagline: "Specialist in Processes: From Hospitality to Engineering, powered by AI.",
  location: "Locarno, Switzerland",
  email: "nelson.nozh@hotmail.com",
  phone: "+41 79 698 08 99",
  bio: `A Swiss-trained professional with Portuguese roots and over 20 years of experience in operational and managerial leadership across international, high-level environments. A career built through golf course management and maintenance in Switzerland, Food & Beverage direction at a 5-star hotel (Grand Hyatt Group), administrative and operational management of multi-site restaurant groups, and the founding of an independent entrepreneurial project in experiential hospitality and dining.\n\nTrained in Switzerland through a technical-professional pathway (AFC), he developed a unique combination of hands-on technical expertise and strategic managerial vision, refined in demanding, multicultural, excellence-driven environments.\n\nRecognized for natural and concrete leadership, the ability to build, train and motivate diverse teams, results-oriented strategic thinking, and a strong sensitivity toward quality, sustainability and innovation. Experienced in managing budgets, controlling costs, monitoring KPIs, and translating strategic objectives into measurable operational results.\n\nBilingual Italian–Portuguese, with strong proficiency in Spanish and French, he operates with natural agility in international and multicultural contexts. Currently focused on studying and applying artificial intelligence to business and operations, with emphasis on AI agents, process automation and Vibe Coding, integrating emerging technologies into his professional evolution.`,
  languages: [
    { lang: "Italiano", level: "Madrelingua" },
    { lang: "Português", level: "Madrelingua" },
    { lang: "Español", level: "C1" },
    { lang: "Français", level: "B2" },
    { lang: "English", level: "B1" },
  ],
};

const PILLARS = [
  {
    id: "operations",
    label: "Process Optimization & Operations Management",
    icon: "📊",
    color: "#6C8EBF",
    colorDim: "rgba(108,142,191,0.12)",
    border: "rgba(108,142,191,0.35)",
    desc: "Designing, structuring, and optimizing operational processes within complex, service-driven and multi-site environments. Budget management, cost control, KPI monitoring, workflow standardization, and continuous improvement.",
    years: "20+ years",
    nav: "Processes",
  },
  {
    id: "engineering",
    label: "Golf Course Maintenance Management",
    icon: "⛳",
    color: "#2D7A3A",
    colorDim: "rgba(45,122,58,0.12)",
    border: "rgba(45,122,58,0.35)",
    desc: "Advanced expertise in full golf course maintenance: agronomic planning, turf quality, machinery maintenance (Toro, John Deere, Jacobsen), TORO SitePro irrigation, GEO / Swisstainable compliance.",
    years: "10+ years",
    nav: "Golf Course",
  },
  {
    id: "hospitality",
    label: "Hospitality & Guest Experience Management",
    icon: "🍽️",
    color: "#C9A84C",
    colorDim: "rgba(201,168,76,0.12)",
    border: "rgba(201,168,76,0.35)",
    desc: "Executive roles in five-star hotel environments and entrepreneurial ventures. Service excellence, guest experience design, team leadership, cost optimization, supplier negotiation, and brand positioning.",
    years: "10+ years",
    nav: "Hospitality",
  },
  {
    id: "ai",
    label: "AI Business Specialist",
    icon: "🤖",
    color: "#FF6B2B",
    colorDim: "rgba(255,107,43,0.12)",
    border: "rgba(255,107,43,0.35)",
    desc: "Strategic application of AI to business and operations. AI agents, workflow automation, decision-support systems, and process optimization. Bridging traditional operations with next-generation digital tools.",
    years: "Active 2024+",
    nav: "AI Business",
  },
];

const HOSPITALITY_EXPERIENCE = [
  {
    period: "2017 – 2020",
    role: "Entrepreneur & Owner",
    company: "Ristorante e Bar Lounge NOZH",
    location: "Itaim, São Paulo",
    highlights: [
      "Conception, development and launch of an independent entrepreneurial project integrating dining, art and culture, with strong brand identity and experiential concept",
      "Full business responsibility: operational, financial and strategic management, including budget, cost control, pricing and profitability",
      "Definition of market positioning, gastronomic proposal and customer experience, with focus on service quality and customer loyalty",
      "Development and implementation of marketing, communication and branding strategies, both online and offline",
      "Conception and organization of cultural, artistic and gastronomic events to increase visibility, traffic and audience engagement",
      "Team management and leadership: selection, training, coordination and motivation of staff",
      "Relationships with suppliers, partners and stakeholders, commercial negotiation and supply chain management",
      "Continuous monitoring of economic and operational performance, with an entrepreneurial approach focused on innovation and continuous improvement",
    ],
  },
  {
    period: "2015 – 2017",
    role: "Food & Beverage Director",
    company: "Grand Hyatt São Paulo",
    location: "São Paulo, Brazil",
    highlights: [
      "Strategic and operational direction of the F&B division, with responsibility over three restaurants, bar and room service in a luxury context",
      "Definition and implementation of strategic plans, annual business plans, budgets and forecasts, focused on revenue growth and profitability",
      "Complete operational cost control (food cost, beverage cost, labour cost), purchasing management, supplier negotiation and stock optimization",
      "Monitoring and analysis of performance KPIs (revenue, profitability, customer satisfaction, service quality) and reporting to general management",
      "Leadership, organization and development of F&B teams: recruiting, continuous training, service standards and talent development",
      "Collaboration with Sales & Marketing departments to develop F&B positioning, increase market share and build customer loyalty",
      "Production and organization of high-profile corporate events in collaboration with major international institutions, including Bank of America, JP Morgan Investment, World Economic Forum São Paulo, Deloitte, and Formula 1",
      "Planning and execution of exclusive gastronomic events featuring Michelin-starred guest chefs, offering 360° dining experiences with curated food and wine pairings",
      "Organization of wine club events, tastings and wine fair exhibitions to enhance the hotel's F&B reputation and attract premium clientele",
      "Conception and execution of gastronomic events, culinary experiences and promotional initiatives to strengthen brand identity and attract new market segments",
      "Ensuring operational excellence and compliance with quality, hygiene and food safety standards of a 5-star hotel",
    ],
  },
  {
    period: "2010 – 2015",
    role: "Administrative & Operational Manager",
    company: "Gruppo CIATC – Italian & French Cuisine",
    location: "São Paulo, Brazil",
    highlights: [
      "Administrative and operational management of all group restaurants, ensuring managerial consistency, high quality standards and brand positioning alignment",
      "Strategic planning and management control: annual business plan, budget and forecast, focused on sustainable growth, profitability and cost control",
      "Integrated operational cost control (food cost, beverage cost, labour cost), centralized purchasing management and stock optimization",
      "Monitoring and analysis of operational and financial KPIs (revenue, margins, productivity, service quality), with structured reporting to management and ownership",
      "Coordination, training and development of operational and administrative teams, promoting a culture of performance, efficiency and premium service standards",
      "Standardization of operational processes and implementation of best practices to improve efficiency, control and business model scalability",
      "Development and supervision of marketing, promotion and event strategies to increase visibility, traffic and market share",
      "Management of relationships with suppliers and strategic partners, commercial negotiation and supply chain oversight",
      "Support to management in strategic decisions and restaurant portfolio expansion projects",
    ],
  },
];

const ENGINEERING_EXPERIENCE = [
  {
    period: "2020 – Present",
    role: "Golf Course Maintenance General",
    company: "Golf Club Gerre Losone",
    location: "Switzerland",
    highlights: [
      "Planning, organization and supervision of all field maintenance activities, focused on playing quality, safety and sustainability",
      "Technical management and preventive/corrective maintenance of professional machinery (Toro, John Deere, Jacobsen)",
      "Full responsibility for the TORO SitePro irrigation system: programming, control, maintenance and water consumption optimization",
      "Technical warehouse and stock management (materials, spare parts, fertilizers, sand, seeds)",
      "Coordination and execution of course construction and improvement projects: drainage, terrain modeling, landscaping, green & tee reconstruction",
      "Planning and execution of major agronomic operations: seeding, coring, aeration and topdressing",
      "Coordination, training and management of the operational team, with seasonal and daily activity planning",
      "Collaboration in budget compliance, definition of operational priorities and continuous improvement of course standards",
      "Active commitment to sustainable course management in line with GEO environmental certification (Golf Environment Organisation), focused on nature protection, environmental impact reduction and responsible resource use, consistent with the Swisstainable program principles",
      "Application of workplace safety regulations and environmental best practices",
    ],
  },
  {
    period: "2005 – 2010",
    role: "Greenkeeper – Irrigation & Mechanics",
    company: "Golf Club Ascona",
    location: "Switzerland",
    highlights: [
      "Execution and supervision of ordinary and extraordinary field maintenance, focused on turf quality, playability and operational continuity",
      "Direct responsibility for the irrigation system: programming, regulation, daily monitoring, fault detection and maintenance interventions, with attention to efficient water resource use",
      "Technical management and preventive/corrective maintenance of the professional machinery fleet (Toro, Jacobsen), including seasonal overhauls and complete winter servicing",
      "Operational and technical support in irrigation decisions based on weather conditions, soil analysis and agronomic requirements",
      "Technical stock management: mechanical spare parts, irrigation materials, fertilizers, sand and seeds",
      "Execution of major seasonal agronomic operations: seeding, aeration, coring, topdressing and daily turf care",
      "Active participation in course construction, renovation and improvement works, particularly on green areas and irrigation infrastructure",
      "Application of environmental best practices and collaboration in maintaining the club's sustainability standards",
      "Close collaboration with the course manager and greenkeeping team for daily and seasonal activity planning",
    ],
  },
  {
    period: "2001 – 2005",
    role: "Mechatronics / Automotive Mechanic (Apprentice AFC Diploma)",
    company: "Auto NEC Ascona",
    location: "Switzerland",
    highlights: [
      "AFC-qualified professional with integrated mechanical, electrical and electronic competencies, specialized in maintenance, diagnostics and repair of light and commercial vehicles",
      "Intervention on traditional engines, hybrid/electric systems, transmissions and safety components, using computerized diagnostic tools",
      "Execution of mechanical and electromechanical repairs in compliance with quality, reliability and safety standards",
      "Fault diagnosis through electronic equipment and analysis of the vehicle's mechanical, electrical and electronic systems",
      "Routine and major maintenance: servicing, brakes, suspensions, transmission and main vehicle systems",
      "Support in fault-finding activities and resolution of technical issues, under the supervision of senior mechanics",
      "Proper use of workshop equipment and strict compliance with operational procedures",
      "Application of workplace safety regulations and environmental directives as required by Swiss legislation",
      "Active collaboration with the workshop team to ensure operational efficiency, service quality and customer satisfaction",
    ],
  },
];

const AI_COMPETENCIES = [
  {
    module: "01",
    icon: "🧠",
    title: "Business AI & Foundations",
    desc: "Mastery of Artificial Intelligence fundamentals applied to business, including deep understanding of LLMs (Large Language Models), model architectures and their strategic applications for business optimization.",
    tags: ["Business AI", "LLMs", "AI Strategy", "Language Models"],
  },
  {
    module: "02",
    icon: "⚡",
    title: "Advanced Prompt Engineering",
    desc: "Specialization in creating and optimizing prompts to maximize results with AI models. Advanced techniques including chain-of-thought, few-shot learning, and complex instruction structuring for different use cases.",
    tags: ["Prompt Engineering", "Chain-of-Thought", "Few-shot"],
  },
  {
    module: "03",
    icon: "🚀",
    title: "Vibe Coding, Claude Code & AIOS",
    desc: "Practical implementation of AI-assisted development systems. Advanced setup and use of Claude Code and AIOS for building complete custom projects — from websites and web applications to complex automations, APIs and internal tools. Mastery of Vibe Coding for rapid prototyping and agile development with real-time AI assistance.",
    tags: ["Vibe Coding", "Claude Code", "AIOS", "React / Vite", "DigitalOcean / VPS"],
    highlight: true,
  },
  {
    module: "04",
    icon: "📚",
    title: "Obsidian & AI Knowledge Management",
    desc: "Building an optimized second brain system with Obsidian, transforming scattered information into organized, actionable knowledge. Practical methodologies to accelerate productivity and strategic decision-making with AI support.",
    tags: ["Obsidian", "Second Brain", "PKM", "Knowledge Management"],
  },
  {
    module: "05",
    icon: "🤖",
    title: "Custom GPTs Development",
    desc: "Development of customized GPTs for different business verticals. Advanced configuration of instructions, knowledge base and actions to create specialized assistants that solve real problems.",
    tags: ["Custom GPTs", "OpenAI", "AI Assistants"],
  },
  {
    module: "06",
    icon: "👤",
    title: "AI Clones & Data ETL",
    desc: "Creation of digital clones that replicate expertise and communication style. Mastery of ETL processes (Extract, Transform, Load) to feed AI systems with structured and contextualized data.",
    tags: ["AI Clones", "ETL", "Expertise Replication"],
  },
  {
    module: "07",
    icon: "⚙️",
    title: "Advanced AI Automations",
    desc: "Creation of intelligent automation workflows integrating multiple platforms. Expertise in N8N, Supabase, WhatsApp and Telegram to build workflows that eliminate repetitive tasks and connect business systems with AI layers.",
    tags: ["N8N", "Supabase", "WhatsApp", "Telegram", "Automation"],
  },
  {
    module: "08",
    icon: "🕵️",
    title: "Autonomous AI Agents",
    desc: "Development of autonomous AI agents capable of executing complex tasks with minimal supervision. Implementation of multi-agent systems using Vibe Coding to orchestrate virtual AI teams that collaborate with each other.",
    tags: ["Autonomous Agents", "Vibe Coding", "Multi-Agent"],
  },
  {
    module: "09",
    icon: "🔧",
    title: "AI Applications & RAG Architecture",
    desc: "Design and development of applications based on artificial intelligence and LLM architectures. Implementation of RAG systems (Retrieval-Augmented Generation) for intelligent access to structured and unstructured knowledge bases. Integration with modern databases and backends such as Supabase and Notion for data management and AI pipelines.",
    tags: ["RAG", "Supabase", "Notion", "Chatwoot", "LLM Architecture"],
  },
  {
    module: "10",
    icon: "💬",
    title: "Chatbots & Customer Communication",
    desc: "Creation of customer communication services and advanced chatbots for Instagram, WhatsApp, Facebook and business systems. Integration with AI APIs for intelligent responses, lead qualification, automatic scheduling and conversational sales funnels.",
    tags: ["ManyChat", "Chatbots", "WhatsApp", "Instagram"],
  },
  {
    module: "11",
    icon: "📈",
    title: "AI Copywriting & Sales",
    desc: "Application of AI for persuasive copywriting and authentic content creation. Sales strategies for AI solutions, including pricing, project presentation and building sales funnels for automation and AI services.",
    tags: ["AI Copywriting", "Sales", "AI Funnels"],
  },
  {
    module: "12",
    icon: "🎨",
    title: "AI Generative Design & Visual Content",
    desc: "Creation of professional visual content through generative AI tools such as Midjourney, Nano Banana, Freepik and Kling. Development of visual identities, branding elements and marketing materials with focus on aesthetic quality, visual consistency and brand communication.",
    tags: ["Midjourney", "Nano Banana", "Freepik", "Kling", "Branding"],
  },
  {
    module: "13",
    icon: "🎙️",
    title: "Voice Assistants & NLP",
    desc: "Design and development of voice assistants based on Natural Language Processing (NLP) technologies. Implementation of systems capable of managing phone calls, organizing appointments, sending automatic reminders and providing voice support with natural, contextualized interactions.",
    tags: ["Voice AI", "NLP", "Speech-to-Text"],
  },
  {
    module: "14",
    icon: "🎯",
    title: "Strategic AI Consulting",
    desc: "Ability to perform complete organizational diagnostics to map AI implementation opportunities. Process analysis, bottleneck identification and proposal of solutions that increase efficiency, reduce costs and boost revenue.",
    tags: ["AI Consulting", "Diagnostics", "Optimization", "ROI"],
  },
];

const EDUCATION = [
  { year: "2024–2025", title: "AI Business Specialist Course", org: "Academia Lendaria, Brasil", detail: "AI Agents, Vibe Coding and AI-based systems implementation" },
  { year: "2023", title: "TORO Irrigation Course", org: "PRATOVERDE / TORO, Italy", detail: "System, programming and TORO product maintenance" },
  { year: "2017", title: "Neurocoaching Course", org: "Fellipelli, São Paulo", detail: "Motivation management, communication and neuroscience methodologies" },
  { year: "2015", title: "Craft Beer Sommelier", org: "ABS – São Paulo", detail: "" },
  { year: "2012", title: "Administrative Management", org: "FGV – São Paulo", detail: "Cost control and strategic revenue planning" },
  { year: "2009", title: "TORO Irrigation Course", org: "TORO, Italy", detail: "System, programming and maintenance" },
  { year: "2001–2005", title: "Mechatronics AFC Diploma", org: "SPAI Bellinzona, Switzerland", detail: "Federal Certificate of Competence · ISO 9001" },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  "Home",
  "Processes",
  "Golf Course",
  "Hospitality",
  "AI Business",
  "Education",
  "Contact",
];

function Navbar({ active, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const NAV_COLORS = {
    "Home": "#D4A017",
    "Processes": "#6C8EBF",
    "Golf Course": "#2D7A3A",
    "Hospitality": "#C9A84C",
    "AI Business": "#FF6B2B",
    "Education": "#8B7FD4",
    "Contact": "#D4A017",
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(8,8,12,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.4s ease",
      padding: "0 1.5rem",
      display: "flex", alignItems: "center", justifyContent: "center",
      height: "56px",
    }}>
      <div style={{ display: "flex", gap: "0.15rem", flexWrap: "nowrap" }}>
        {NAV_ITEMS.map(item => {
          const c = NAV_COLORS[item] || "#D4A017";
          const isActive = active === item;
          return (
            <button key={item} onClick={() => onNav(item)}
              style={{
                background: isActive ? `${c}18` : "transparent",
                border: isActive ? `1px solid ${c}50` : "1px solid transparent",
                color: isActive ? c : "rgba(255,255,255,0.55)",
                padding: "4px 9px", borderRadius: "6px",
                cursor: "pointer", fontSize: "0.72rem", letterSpacing: "0.02em",
                transition: "all 0.2s ease", fontFamily: "inherit", whiteSpace: "nowrap",
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
            >{item}</button>
          );
        })}
      </div>
    </nav>
  );
}

function Tag({ label, color = "#aaa" }) {
  return (
    <span style={{
      display: "inline-block", padding: "3px 10px", borderRadius: "20px",
      fontSize: "0.73rem", fontWeight: 500, letterSpacing: "0.05em",
      border: `1px solid ${color}55`, color: color,
      background: `${color}18`,
    }}>{label}</span>
  );
}

function SectionLabel({ text, color }) {
  return (
    <p style={{ fontFamily: "monospace", fontSize: "0.72rem", letterSpacing: "0.18em", color, textTransform: "uppercase", marginBottom: "0.5rem" }}>
      ◆ {text}
    </p>
  );
}

function ExperienceCard({ item, color }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      border: `1px solid ${color}30`,
      borderRadius: "12px",
      background: `${color}08`,
      padding: "1.25rem 1.5rem",
      marginBottom: "1rem",
      transition: "border-color 0.2s",
      cursor: "pointer",
    }}
    onClick={() => setOpen(!open)}
    onMouseEnter={e => e.currentTarget.style.borderColor = `${color}55`}
    onMouseLeave={e => e.currentTarget.style.borderColor = `${color}30`}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <p style={{ color: color, fontSize: "0.78rem", fontFamily: "monospace", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>
            {item.period}
          </p>
          <h3 style={{ fontSize: "1.05rem", fontFamily: "'DM Serif Display', serif", color: "#fff", marginBottom: "0.2rem" }}>
            {item.role}
          </h3>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>{item.company} · {item.location}</p>
        </div>
        <span style={{ color, fontSize: "1.1rem", userSelect: "none", marginTop: "0.2rem" }}>{open ? "−" : "+"}</span>
      </div>
      {open && (
        <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {item.highlights.map((h, i) => (
            <li key={i} style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", lineHeight: 1.6 }}>{h}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FadeIn({ children, delay = 0 }) {
  const ref = useRef();
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

// ─── PAGES ───────────────────────────────────────────────────────────────────

function HomePage({ onNav }) {
  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        padding: "80px 2rem 4rem",
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,160,23,0.08) 0%, transparent 70%)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Subtle grid */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}/>
        <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <p style={{ fontFamily: "monospace", fontSize: "0.8rem", letterSpacing: "0.2em", color: "#D4A017", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Locarno · Switzerland
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              lineHeight: 1.08,
              color: "#fff",
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}>
              Nelson <span style={{ color: "#D4A017" }}>Silva</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div style={{ marginBottom: "2.5rem" }}>
              <p style={{
                fontFamily: "monospace", fontSize: "0.72rem",
                letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)",
                textTransform: "uppercase", marginBottom: "0.85rem",
              }}>
                Professional Specializations
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center" }}>
                {[
                  { label: "Process Optimization & Operations Management", color: "#6C8EBF" },
                  { label: "Golf Course Maintenance Management", color: "#2D7A3A" },
                  { label: "Hospitality & Guest Experience Management", color: "#C9A84C" },
                  { label: "AI Business Specialist", color: "#FF6B2B" },
                ].map(s => (
                  <span key={s.label} style={{
                    padding: "6px 16px", borderRadius: "24px",
                    fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.03em",
                    border: `1px solid ${s.color}50`,
                    color: s.color,
                    background: `${s.color}12`,
                  }}>{s.label}</span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Three Pillars */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>
            {PILLARS.map((p, i) => (
              <FadeIn key={p.id} delay={0.4 + i * 0.1}>
                <div
                  onClick={() => onNav(p.nav)}
                  style={{
                    background: p.colorDim,
                    border: `1px solid ${p.border}`,
                    borderRadius: "16px",
                    padding: "1.75rem 1.5rem",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "transform 0.2s, border-color 0.2s",
                    height: "100%",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = p.color + "80"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = p.border; }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{p.icon}</div>
                  <p style={{ fontFamily: "monospace", fontSize: "0.7rem", color: p.color, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                    {p.years}
                  </p>
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.1rem", color: "#fff", marginBottom: "0.75rem" }}>
                    {p.label}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.84rem", lineHeight: 1.65 }}>{p.desc}</p>
                  <p style={{ color: p.color, fontSize: "0.8rem", marginTop: "1rem" }}>Explore →</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About + Languages */}
      <section style={{ padding: "4rem 2rem", width: "100%" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          {/* Top row: photo + about me */}
          <div style={{ display: "flex", gap: "2.5rem", alignItems: "flex-start", marginBottom: "2.5rem" }}>
            {/* Left: Photo */}
            <div style={{ flexShrink: 0, width: "350px", paddingTop: "6.5rem" }}>
              <img
                src="/nelson_portrait.jpeg"
                alt="Nelson Silva"
                style={{
                  width: "350px",
                  height: "420px",
                  objectFit: "cover",
                  objectPosition: "top center",
                  borderRadius: "14px",
                  border: "1px solid rgba(212,160,23,0.2)",
                  display: "block",
                }}
              />
            </div>
            {/* Right: About Me */}
            <div style={{ flex: 1, paddingTop: "0.25rem" }}>
              <SectionLabel text="Personal" color="#D4A017" />
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.8rem", color: "#fff" }}>
                  About Me
                </h2>
                <button onClick={() => onNav("Contact")} style={{
                  background: "#D4A017", color: "#000", border: "none",
                  padding: "10px 24px", borderRadius: "8px",
                  fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                  letterSpacing: "0.06em", transition: "opacity 0.2s",
                }}>Contact</button>
              </div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", lineHeight: 1.85, marginBottom: "1.5rem" }}>
  					{PROFILE.bio.split('\n\n').map((para, i) => (
    					<p key={i} style={{ marginBottom: "0.8rem" }}>{para}</p>
  					))}
		</div>
            </div>
          </div>

          {/* Bottom: Languages full width */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "2rem" }}>
            <SectionLabel text="Languages" color="#D4A017" />
            <div style={{ marginTop: "0.75rem" }}>
              {PROFILE.languages.map(l => (
                <div key={l.lang} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>{l.lang}</span>
                  <span style={{ color: "#D4A017", fontSize: "0.8rem", fontFamily: "monospace" }}>{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
        </div>
      </section>
    </div>
  );
}

function ProcessPage() {
  return (
    <div style={{ padding: "100px 2rem 5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <FadeIn>
        <SectionLabel text="Specialization 01 · Process Optimization" color="#6C8EBF" />
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", marginBottom: "0.75rem" }}>
          Process Optimization &<br />Operations Management
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", maxWidth: "680px", lineHeight: 1.8, marginBottom: "2.5rem" }}>
          Specialization in designing, structuring, and optimizing operational processes within complex, service-driven and multi-site environments. Proven experience in budget management, cost control, KPI monitoring, workflow standardization, and continuous improvement. Strong ability to align operations with strategic objectives, ensuring efficiency, scalability, and consistent quality standards across hospitality, food & beverage, and golf operations.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "3rem" }}>
          {["Budget Management", "Cost Control", "KPI Monitoring", "Workflow Standardization", "Continuous Improvement", "Multi-site Operations", "Strategic Alignment", "Scalability"].map(s => (
            <Tag key={s} label={s} color="#6C8EBF" />
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div style={{ background: "rgba(108,142,191,0.07)", border: "1px solid rgba(108,142,191,0.2)", borderRadius: "14px", padding: "2rem", marginBottom: "1.5rem" }}>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", color: "#fff", fontSize: "1.2rem", marginBottom: "1rem" }}>Applied Across All Domains</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", lineHeight: 1.75 }}>
            This cross-domain specialization has been built through leadership roles in restaurant group management (Gruppo CIATC), luxury hotel F&B direction (Grand Hyatt), entrepreneurial ownership (NOZH), and golf course maintenance management in Switzerland. Each context demanded rigorous process design, performance monitoring, and continuous operational refinement.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

function HospitalityPage() {
  return (
    <div style={{ padding: "100px 2rem 5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <FadeIn>
        <SectionLabel text="Module 01 · Hospitality & Entrepreneurship" color="#D4A017" />
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", marginBottom: "0.75rem" }}>
          Luxury Operations &<br />Entrepreneurial Vision
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", maxWidth: "560px", lineHeight: 1.7, marginBottom: "2.5rem" }}>
          From 5-star hotel F&B direction to founding my own experiential restaurant brand — a career built on turning premium service into sustainable business.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "3rem" }}>
          {["People Management", "Luxury Service", "Financial Operations", "Brand Building", "Event Management", "Supplier Negotiation"].map(s => (
            <Tag key={s} label={s} color="#D4A017" />
          ))}
        </div>
      </FadeIn>
      {HOSPITALITY_EXPERIENCE.map((item, i) => (
        <FadeIn key={i} delay={i * 0.1}>
          <ExperienceCard item={item} color="#D4A017" />
        </FadeIn>
      ))}
    </div>
  );
}

function EngineeringPage() {
  return (
    <div style={{ padding: "100px 2rem 5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <FadeIn>
        <SectionLabel text="Module 02 · Engineering & Golf" color="#2ECC71" />
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", marginBottom: "0.75rem" }}>
          Technical Mastery &<br />Precision Maintenance
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", maxWidth: "560px", lineHeight: 1.7, marginBottom: "2.5rem" }}>
          Two decades of hands-on expertise in golf course maintenance management — from daily turf care and machinery fleet preparation to course construction, modernization projects, and the design and management of precision irrigation systems with TORO SitePro technology. Committed to environmental excellence through GEO certification and sustainable resource management.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "3rem" }}>
          {["Preventive Maintenance", "TORO SitePro Irrigation", "John Deere / Jacobsen", "GEO Certification", "Agronomy", "Course Construction & Modernization"].map(s => (
            <Tag key={s} label={s} color="#2ECC71" />
          ))}
        </div>
      </FadeIn>
      {ENGINEERING_EXPERIENCE.map((item, i) => (
        <FadeIn key={i} delay={i * 0.1}>
          <ExperienceCard item={item} color="#2ECC71" />
        </FadeIn>
      ))}
    </div>
  );
}

function AIPage() {
  return (
    <div style={{ padding: "100px 2rem 5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <FadeIn>
        <SectionLabel text="AI Business Specialist · Certified Training" color="#FF6B2B" />
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", marginBottom: "0.75rem" }}>
          From Operations<br />to Intelligence
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", maxWidth: "680px", lineHeight: 1.7, marginBottom: "1.5rem" }}>
          Certified AI specialist trained in prompt engineering, autonomous agents, automation workflows, custom GPTs, AI consulting and Vibe Coding. Transforming 20+ years of hands-on operational leadership into intelligent systems that solve real business problems — from strategy to execution.
        </p>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          padding: "8px 16px", background: "rgba(255,107,43,0.08)",
          border: "1px solid rgba(255,107,43,0.2)", borderRadius: "8px",
          fontFamily: "monospace", fontSize: "0.72rem", color: "#FF6B2B",
          letterSpacing: "0.08em", marginBottom: "2rem",
        }}>
          🎓 LENDÁR[IA] TRAINING — ALAN NICOLAS · ACADEMIA LENDÁRIA
        </div>
      </FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
        {AI_COMPETENCIES.map((p, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div style={{
              background: p.highlight ? "rgba(255,107,43,0.1)" : "rgba(255,107,43,0.06)",
              border: p.highlight ? "1px solid rgba(255,107,43,0.4)" : "1px solid rgba(255,107,43,0.2)",
              borderRadius: "14px", padding: "1.5rem",
              transition: "border-color 0.2s, transform 0.2s",
              height: "100%",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,107,43,0.5)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = p.highlight ? "rgba(255,107,43,0.4)" : "rgba(255,107,43,0.2)"; e.currentTarget.style.transform = "none"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                <div>
                  <p style={{ fontFamily: "monospace", fontSize: "0.65rem", color: "#FF6B2B", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    MODULE {p.module}
                  </p>
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", color: "#fff", fontSize: "1.05rem" }}>
                    {p.title}
                  </h3>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.83rem", lineHeight: 1.65, marginBottom: "1rem" }}>
                {p.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {p.tags.map(t => <Tag key={t} label={t} color="#FF6B2B" />)}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

function EducationPage() {
  return (
    <div style={{ padding: "100px 2rem 5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <FadeIn>
        <SectionLabel text="Education & Certifications" color="#8B7FD4" />
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", marginBottom: "0.75rem" }}>
          Continuous Learning
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", maxWidth: "560px", lineHeight: 1.7, marginBottom: "3rem" }}>
          A career built on constant development — from Swiss vocational diplomas to cutting-edge AI certifications.
        </p>
      </FadeIn>
      {EDUCATION.map((e, i) => (
        <FadeIn key={i} delay={i * 0.07}>
          <div style={{
            display: "flex", gap: "2rem", paddingBottom: "1.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: "1.5rem",
            alignItems: "flex-start",
          }}>
            <span style={{
              fontFamily: "monospace", fontSize: "0.75rem", color: "#8B7FD4",
              minWidth: "80px", paddingTop: "3px", letterSpacing: "0.06em",
            }}>
              {e.year}
            </span>
            <div style={{
              background: "rgba(139,127,212,0.07)", border: "1px solid rgba(139,127,212,0.18)",
              borderRadius: "10px", padding: "1rem 1.25rem", flex: 1,
            }}>
              <p style={{ color: "#fff", fontSize: "0.97rem", fontWeight: 500, marginBottom: "0.25rem" }}>{e.title}</p>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem" }}>
                {e.org}{e.detail ? ` · ${e.detail}` : ""}
              </p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

function ContactPage() {
  return (
    <div style={{ padding: "100px 2rem 5rem", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
      <FadeIn>
        <SectionLabel text="Contact" color="#D4A017" />
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", marginBottom: "1rem" }}>
          Let's Build<br />Something Together
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "3rem" }}>
          If you're looking for a professional with strong operational leadership, process expertise, and a forward-looking mindset, feel free to get in touch — I'll be happy to respond.
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
          {[
            { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
            { label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g,"")}` },
            { label: "Location", value: PROFILE.location, href: null },
          ].map(c => (
            <div key={c.label} style={{
              background: "rgba(212,160,23,0.07)",
              border: "1px solid rgba(212,160,23,0.25)",
              borderRadius: "12px",
              padding: "1.25rem 2rem",
              width: "100%", maxWidth: "420px",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", letterSpacing: "0.1em", fontFamily: "monospace", textTransform: "uppercase" }}>
                {c.label}
              </span>
              {c.href ? (
                <a href={c.href} style={{ color: "#D4A017", fontSize: "0.95rem", textDecoration: "none" }}>{c.value}</a>
              ) : (
                <span style={{ color: "#fff", fontSize: "0.95rem" }}>{c.value}</span>
              )}
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", marginTop: "3rem", fontFamily: "monospace", letterSpacing: "0.08em" }}>
          ITALIANO · PORTUGUÊS · ESPAÑOL · FRANÇAIS · ENGLISH
        </p>
      </FadeIn>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

const PAGE_MAP = {
  "Home": HomePage,
  "Processes": ProcessPage,
  "Golf Course": EngineeringPage,
  "Hospitality": HospitalityPage,
  "AI Business": AIPage,
  "Education": EducationPage,
  "Contact": ContactPage,
};

export default function App() {
  const [page, setPage] = useState("Home");

  const handleNav = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const PageComponent = PAGE_MAP[page];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #08080C; font-family: 'DM Sans', sans-serif; color: #fff; margin: 0; display: flex; flex-direction: column; min-height: 100vh; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #08080C; }
        ::-webkit-scrollbar-thumb { background: #D4A01755; border-radius: 4px; }
        button { font-family: 'DM Sans', sans-serif; }
        #root { display: flex; flex-direction: column; align-items: stretch; width: 100%; max-width: 100%; padding: 0; }
	#root > * { width: 100%; }
      `}</style>
      <Navbar active={page} onNav={handleNav} />
      <main style={{ minHeight: "100vh" }}>
        <PageComponent onNav={handleNav} />
      </main>
      <footer style={{
        textAlign: "center", padding: "2rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        color: "rgba(255,255,255,0.2)", fontSize: "0.78rem", fontFamily: "monospace",
        letterSpacing: "0.1em",
      }}>
        © 2025 NELSON SILVA · LOCARNO, SVIZZERA
      </footer>
    </>
  );
}
