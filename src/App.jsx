import { useEffect, useMemo, useState } from 'react'
import {
  Accessibility,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Building2,
  Camera,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  Clock,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileText,
  Globe2,
  GraduationCap,
  Landmark,
  Languages,
  Layers3,
  LineChart,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  MonitorSmartphone,
  Mountain,
  Network,
  Phone,
  Radar,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react'

import heroImage from './assets/ai-theme-hero.png'
import citizenDemoImage from './assets/citizen-services-demo.png'
import trainingRoomImage from './assets/training-room.png'
import applicationsImage from './assets/FSP.png'
import operationsImage from './assets/ai-operations-wall.png'
import aiOnWheelsImage from './assets/AIOWP.jpeg'
import aiOnWheelsLaunch from './assets/AIOW.jpeg'
import schoolAwarness from './assets/AIOW2.jpeg'
import aiThemeRoomImage from './assets/AIR.jpeg'
import techWorkshopImage from './assets/ST.jpeg'
import appImage from './assets/APP.png'
import publicWelfareImage from './assets/K.jpeg'
import trainingImage from './assets/AIOW1.jpeg'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'AI on Wheels', href: '#ai-on-wheels' },
  { label: 'Applications', href: '#applications' },
  { label: 'Photos', href: '#photos' },
  { label: 'Team', href: '#team' },
  { label: 'Contact Us', href: '#contact' },
]

const updates = [
  'AI Theme Room is a government initiative focused on public welfare, student learning, and practical AI adoption.',
  'AI on Wheels is a moving AI lab for schools, colleges, districts, and public awareness programmes.',
  'The AI Room develops AI applications, analytics dashboards, and digital initiatives for governance and citizens.',
]

const quickLinks = [
  { label: 'Visitor Request', icon: FileText, href: '#contact' },
  { label: 'AI on Wheels', icon: MonitorSmartphone, href: '#ai-on-wheels' },
  { label: 'AI Applications', icon: Bot, href: '#applications' },
  { label: 'Photo Gallery', icon: Camera, href: '#photos' },
]

const capabilities = [
  {
    title: 'Public Welfare AI',
    icon: BrainCircuit,
    text: 'AI applications for citizen services, education, awareness, public information, accessibility, and department workflows.',
  },
  {
    title: 'Student and Youth Awareness',
    icon: Landmark,
    text: 'Hands-on learning sessions that introduce students to responsible AI, data, robotics, automation, and future skills.',
  },
  {
    title: 'Analytics and Decision Support',
    icon: LineChart,
    text: 'Dashboards and visual analytics for reviews, planning, outreach monitoring, service tracking, and policy insight.',
  },
  {
    title: 'AI on Wheels Outreach',
    icon: MonitorSmartphone,
    text: 'A moving AI lab that takes demonstrations and learning experiences beyond Lok Bhawan to institutions and communities.',
  },
]

const wheelsHighlights = [
  {
    title: 'Moving AI Lab',
    icon: MonitorSmartphone,
    text: 'A mobile demonstration vehicle equipped for AI awareness, live demos, student learning, and outreach events.',
  },
  {
    title: 'Schools and Colleges',
    icon: GraduationCap,
    text: 'Visits educational institutions to introduce practical AI use cases, safe technology practices, and future skills.',
  },
  {
    title: 'District Outreach',
    icon: MapPin,
    text: 'Supports awareness programmes across different locations so AI learning is not limited to one building.',
  },
  {
    title: 'Hands-on Sessions',
    icon: Users,
    text: 'Students and visitors can experience AI assistants, analytics, computer vision demos, and public-service prototypes.',
  },
]

const applications = [
  // {
  //   title: 'AI Citizen Welfare Helpdesk',
  //   icon: MessageSquareText,
  //   status: 'Demo Ready',
  //   text: 'A guided assistant for public welfare information, government services, frequently asked questions, and visitor support.',
  //   points: ['Citizen support', 'Scheme guidance', 'Multilingual help'],
  // },
  {
    title: 'Student AI Learning Assistant',
    icon: GraduationCap,
    status: 'Prototype',
    text: 'Learning modules and AI demos for schools, colleges, and awareness workshops conducted through the AI Room and AI on Wheels.',
    points: ['AI basics', 'Workshop content', 'Career awareness'],
  },
  {
    title: 'Smart Document and Office Assistant',
    icon: FileText,
    status: 'Prototype',
    text: 'Document summarization, classification, search, and draft-note support for structured administrative review.',
    points: ['Fast summaries', 'Keyword extraction', 'Decision briefs'],
  },
  {
    title: 'Disaster Insight Console',
    icon: Radar,
    status: 'Concept',
    text: 'Terrain, weather, incident, and resource views for better situational awareness during critical events.',
    points: ['Map layers', 'Priority alerts', 'Resource overview'],
  },
  {
    title: 'Public Service Analytics Dashboard',
    icon: LineChart,
    status: 'Build Phase',
    text: 'Analytics views for outreach, application usage, awareness events, public requests, and department-level outcomes.',
    points: ['Live metrics', 'Event reports', 'Impact tracking'],
  },
  {
    title: 'Tourism and Heritage AI Guide',
    icon: Mountain,
    status: 'Demo Ready',
    text: 'AI-assisted discovery for destinations, local heritage, district information, cultural archives, and visitor routes.',
    points: ['Route ideas', 'Heritage search', 'District discovery'],
  },
  {
    title: 'AI on Wheels Event Tracker',
    icon: Database,
    status: 'Pilot',
    text: 'Tracks school visits, college sessions, public demos, participant feedback, and awareness programme outcomes.',
    points: ['Visit records', 'Feedback trends', 'Learning metrics'],
  },
]

// Replace these demo image references with real event photo paths when available.
const gallery = [
  {
    title: 'AI on Wheels Launch',
    image: aiOnWheelsLaunch,
    tag: 'Mobile AI Lab',
    text: 'The moving AI lab initiative designed to take AI awareness beyond Lok Bhawan.',
  },
  {
    title: 'School Awareness Session',
    image: schoolAwarness,
    tag: 'Student Outreach',
    text: 'AI demonstrations for students with practical examples and future-skills orientation.',
  },
  {
    title: 'College Technology Workshop',
    image: techWorkshopImage,
    tag: 'AI Education',
    text: 'Hands-on workshops for young learners, faculty, and technology clubs.',
  },
  // {
  //   title: 'Citizen-Service Demonstration',
  //   image: citizenDemoImage,
  //   tag: 'Public Service AI',
  //   text: 'Interactive demos for assisted service journeys and multilingual citizen support.',
  // },
  {
    title: 'AI Theme Room Visit',
    image: aiThemeRoomImage,
    tag: 'Capacity Building',
    text: 'Workshop-ready room for demos, training, and department orientation sessions.',
  },
  {
    title: 'Application Dashboard',
    image: appImage,
    tag: 'Built Applications',
    text: 'AI tools for document intelligence, tourism, archives, and governance workflows.',
  },
  // {
  //   title: 'Operations Intelligence Wall',
  //   image: operationsImage,
  //   tag: 'Decision Support',
  //   text: 'Visual analytics for maps, trends, response planning, and executive reviews.',
  // },
  {
    title: 'Public Welfare AI Demo',
    image: publicWelfareImage,
    tag: 'Citizen Welfare',
    text: 'Application walkthroughs focused on citizen access and public benefit.',
  },
  {
    title: 'Student Hands-on AI Lab',
    image: trainingImage,
    tag: 'Learning Session',
    text: 'Demo stations for AI assistants, analytics, and safe technology awareness.',
  },
  // {
  //   title: 'Analytics Review Meeting',
  //   image: operationsImage,
  //   tag: 'Analytics',
  //   text: 'Dashboards for outreach progress, service monitoring, and decision support.',
  // },
  {
    title: 'Mobile Lab Demonstration',
    image: aiOnWheelsImage,
    tag: 'AI on Wheels',
    text: 'AI learning and demonstration programmes delivered through the mobile lab.',
  },
  // {
  //   title: 'Innovation Exhibition',
  //   image: applicationsImage,
  //   tag: 'Initiatives',
  //   text: 'Showcase of applications, AI initiatives, prototypes, and future project ideas.',
  // },
]

const teamStructure = [
  'Chief Technical Officer',
  'Chief Operations Officer',
  'Senior Technical Lead',
  'Functional Managers and Deputed Specialists',
]

const leadershipTeam = [
  {
    name: 'Siddharth Madhav',
    designation: 'Chief Technical Officer',
    group: 'Executive Authority',
    badge: 'CTO',
    icon: ShieldCheck,
    accent: 'saffron',
    text: 'Provides strategic and technical direction for the AI Theme Room, Governor\'s Digital Hub, AI on Wheels, Operation Saathi, and digital innovation initiatives.',
    focus: ['Technical strategy', 'Project approvals', 'Innovation oversight'],
  },
  {
    name: 'Yash Singh',
    designation: 'Chief Operations Officer',
    group: 'Operational Authority',
    badge: 'COO',
    icon: Users,
    accent: 'green',
    text: 'Manages daily operations, internal coordination, workforce planning, project schedules, event readiness, and implementation of approved directives.',
    focus: ['Daily coordination', 'Task monitoring', 'Operational execution'],
  },
  {
    name: 'Mayank Bisht',
    designation: 'Senior Technical Lead',
    group: 'Technical Implementation',
    badge: 'STL',
    icon: Cpu,
    accent: 'cyan',
    text: 'Leads architecture, maintenance, integration, security, deployment, and performance of websites, applications, dashboards, portals, APIs, and databases.',
    focus: ['Application architecture', 'Secure deployment', 'Technical reporting'],
  },
]

const operationsTeam = [
  {
    name: 'Karan Singh',
    designation: 'Logistics and Field Operations Manager',
    group: 'Operations and Outreach',
    badge: 'Ops',
    icon: MonitorSmartphone,
    accent: 'maroon',
    text: 'Handles logistics, field operations, asset readiness, transport coordination, venue setup, and AI on Wheels deployment support.',
    focus: ['Asset readiness', 'Field deployment', 'AI on Wheels support'],
  },
  {
    name: 'Meena Tariyal',
    designation: 'Records and Administration Officer',
    group: 'Records and Administration',
    badge: 'Admin',
    icon: FileText,
    accent: 'green',
    text: 'Manages official records, registers, document numbering, filing systems, correspondence tracking, digital archives, and administrative documentation.',
    focus: ['Official registers', 'Record control', 'Digital archive'],
  },
  {
    name: 'Kartikeya Joshi',
    designation: 'Lead Graphic and Media Designer',
    group: 'Brand and Media',
    badge: 'Media',
    icon: Camera,
    accent: 'saffron',
    text: 'Leads visual identity, branding standards, graphics, templates, media presentation, and approved public communication assets.',
    focus: ['Visual identity', 'Media templates', 'Brand consistency'],
  },
  {
    name: 'Rajat Singh Bisht',
    designation: 'Web Developer',
    group: 'Development Support',
    badge: 'Web',
    icon: Globe2,
    accent: 'cyan',
    text: 'Develops website and Office Management System modules, responsive interfaces, integration work, testing, maintenance, and deployment support.',
    focus: ['Website development', 'Module support', 'Testing and fixes'],
  },
  {
    name: 'Mohit Bisht',
    designation: 'Graphic Designer - Ad Hoc Support',
    group: 'Creative Support',
    badge: 'Design',
    icon: Sparkles,
    accent: 'maroon',
    text: 'Provides ad hoc visual editing, event design, presentation graphics, social-media creatives, and urgent design support.',
    focus: ['Event visuals', 'Presentation graphics', 'Creative assistance'],
  },
]

const footerLinks = [
  ['Governor Uttarakhand', 'https://governoruk.gov.in/hi/'],
  ['Uttarakhand Government', 'https://uk.gov.in/'],
  ['Digital India', 'https://www.digitalindia.gov.in/'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 },
    )

    revealItems.forEach((item) => revealObserver.observe(item))
    return () => revealObserver.disconnect()
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-24% 0px -58% 0px', threshold: 0.01 },
    )

    sections.forEach((section) => sectionObserver.observe(section))
    return () => sectionObserver.disconnect()
  }, [])

  const onContactSubmit = (event) => {
    event.preventDefault()
    window.alert('Thank you. Your visit request draft has been captured for this website prototype.')
  }

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <TopStrip />

      <header className="site-header">
        <div className="site-shell header-main">
          <a className="brand" href="#home" aria-label="AI Theme Room home">
            <span className="brand-mark">
              <BrainCircuit size={30} aria-hidden="true" />
            </span>
            <span>
              <span className="brand-kicker">Lok Bhawan, Uttarakhand</span>
              <strong>AI Theme Room</strong>
              <span className="brand-subtitle">Governance Innovation and AI Demonstration Centre</span>
            </span>
          </a>

          <form
            className="header-search"
            onSubmit={(event) => event.preventDefault()}
            aria-label="Website search"
          >
            <Search size={18} aria-hidden="true" />
            <input type="search" placeholder="Search website" />
          </form>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <div className="site-shell nav-inner">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              return (
                <a
                  key={item.href}
                  className={activeSection === sectionId ? 'is-active' : ''}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        </nav>
      </header>

      <main id="main">
        <Hero />
        <NoticeBar />
        <QuickAccess />
        <About />
        <CapabilityBand />
        <AIOnWheels />
        <Applications />
        <Gallery />
        <Team />
        <Contact onSubmit={onContactSubmit} />
      </main>

      <Footer currentYear={currentYear} />
    </div>
  )
}

function TopStrip() {
  return (
    <div className="top-strip">
      <div className="site-shell top-strip-inner">
        <div className="top-left">
          <span>उत्तराखण्ड शासन</span>
          <span>Government of Uttarakhand</span>
        </div>
        <div className="top-actions" aria-label="Utility links">
          <a href="#contact">
            <Phone size={15} aria-hidden="true" />
            Contact
          </a>
          <a href="#main">
            <Accessibility size={15} aria-hidden="true" />
            Accessibility
          </a>
          <a href="#home">
            <Languages size={15} aria-hidden="true" />
            हिन्दी / English
          </a>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="hero page-section">
      <div className="hero-media" style={{ backgroundImage: `url(${heroImage})` }} aria-hidden="true">
        <div className="hero-tint" />
        <div className="signal-grid" />
      </div>

      <div className="site-shell hero-content">
        <div className="hero-copy" data-reveal>
          <span className="official-tag">
            <Building2 size={18} aria-hidden="true" />
            Government AI Initiative at Lok Bhawan
          </span>
          <h1>AI for Public Welfare, Students, and Digital Governance</h1>
          <p>
            AI Theme Room is a government initiative at Lok Bhawan, Uttarakhand to build public-welfare
            AI applications, analytics dashboards, student awareness programmes, and AI-led digital initiatives.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#applications">
              <Sparkles size={18} aria-hidden="true" />
              Explore Applications
            </a>
            <a className="btn btn-secondary" href="#contact">
              <MapPin size={18} aria-hidden="true" />
              Plan a Visit
            </a>
          </div>
        </div>

        <div className="hero-panel" data-reveal>
          <div className="pulse-node" aria-hidden="true">
            <Network size={30} />
          </div>
          <span className="panel-label">Live Experience Areas</span>
          <ul>
            <li>
              <CheckCircle2 size={18} aria-hidden="true" />
              AI applications for public welfare and citizen support
            </li>
            <li>
              <CheckCircle2 size={18} aria-hidden="true" />
              Analytics dashboards for governance and programme impact
            </li>
            <li>
              <CheckCircle2 size={18} aria-hidden="true" />
              AI on Wheels mobile lab for schools and colleges
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function NoticeBar() {
  return (
    <section className="notice-bar" aria-label="Latest updates">
      <div className="site-shell notice-inner">
        <div className="notice-title">
          <Clock size={18} aria-hidden="true" />
          Latest Updates
        </div>
        <div className="notice-track">
          <div className="notice-items">
            {[...updates, ...updates].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function QuickAccess() {
  return (
    <section className="quick-band" aria-label="Quick access links">
      <div className="site-shell quick-grid">
        {quickLinks.map((item) => {
          const Icon = item.icon
          return (
            <a className="quick-card" href={item.href} key={item.label} data-reveal>
              <Icon size={24} aria-hidden="true" />
              <span>{item.label}</span>
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          )
        })}
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading" data-reveal>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="page-section about-section">
      <div className="site-shell split-layout">
        <div className="about-copy" data-reveal>
          <SectionHeading
            eyebrow="About Us"
            title="A Government Initiative to Bring AI into Public Service and Learning"
            text="The AI Theme Room at Lok Bhawan works as an innovation, demonstration, and development space where AI-based applications are created for public welfare, students, awareness programmes, analytics, and digital governance needs."
          />
          <div className="about-list">
            <div>
              <ShieldCheck size={22} aria-hidden="true" />
              <strong>Public Welfare First</strong>
              <p>Applications are shaped around citizen benefit, service access, awareness, accessibility, and practical administrative value.</p>
            </div>
            <div>
              <CircleGauge size={22} aria-hidden="true" />
              <strong>AI Application Development</strong>
              <p>The room supports prototypes, dashboards, AI assistants, analytics tools, and department-specific digital initiatives.</p>
            </div>
            <div>
              <Globe2 size={22} aria-hidden="true" />
              <strong>Learning and Awareness</strong>
              <p>Students, visitors, and departments can experience AI through demos, workshops, and the AI on Wheels mobile lab.</p>
            </div>
          </div>
        </div>

        <div className="about-visual" data-reveal>
          <img src={trainingRoomImage} alt="AI learning room with training displays and workstations" />
          <div className="metric-strip">
            <div>
              <strong>12</strong>
              <span>event gallery slots</span>
            </div>
            <div>
              <strong>01</strong>
              <span>AI on Wheels mobile lab</span>
            </div>
            <div>
              <strong>360°</strong>
              <span>AI awareness and analytics focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CapabilityBand() {
  return (
    <section className="capability-section">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Initiative Areas"
          title="Public Welfare Applications, Student Outreach, and Analytics in One Place"
          text="The initiative connects AI application development, awareness programmes, mobile lab outreach, and governance analytics through one coordinated platform."
        />
        <div className="capability-grid">
          {capabilities.map((item) => {
            const Icon = item.icon
            return (
              <article className="capability-card" key={item.title} data-reveal>
                <Icon size={28} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function AIOnWheels() {
  return (
    <section id="ai-on-wheels" className="page-section wheels-section">
      <div className="site-shell wheels-layout">
        <div className="wheels-visual" data-reveal>
          <img src={aiOnWheelsImage} alt="AI on Wheels mobile lab vehicle for student outreach" />
          <div className="wheels-badge">
            <MonitorSmartphone size={24} aria-hidden="true" />
            <div>
              <strong>AI on Wheels</strong>
              <span>Moving AI Lab</span>
            </div>
          </div>
        </div>

        <div className="wheels-copy">
          <SectionHeading
            eyebrow="AI on Wheels"
            title="A Moving AI Lab for Schools, Colleges, and Public Awareness"
            text="AI on Wheels is the outreach arm of the AI Theme Room. The vehicle travels to different places including schools, colleges, and public programmes to make students and citizens aware of AI technologies, responsible use, and real-world applications."
          />

          <div className="wheels-grid">
            {wheelsHighlights.map((item) => {
              const Icon = item.icon
              return (
                <article className="wheels-card" key={item.title} data-reveal>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function Applications() {
  return (
    <section id="applications" className="page-section applications-section">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Our Applications"
          title="AI Applications, Analytics, and Initiatives Built for Public Welfare"
          text="The AI Theme Room develops and demonstrates practical AI systems for citizens, students, departments, public awareness, and data-driven governance."
        />

        <div className="application-layout">
          <div className="application-showcase" data-reveal>
            <img src={applicationsImage} alt="AI application dashboards displayed on tablets and screens" />
            <div className="showcase-content">
              <span>Featured Build</span>
              <h3>Integrated Public Welfare AI Dashboard</h3>
              <p>
                Brings AI applications, analytics, outreach data, citizen-service demos, and event impact
                indicators into one review-ready dashboard.
              </p>
            </div>
          </div>

          <div className="app-grid">
            {applications.map((app) => {
              const Icon = app.icon
              return (
                <article className="app-card" key={app.title} data-reveal>
                  <div className="app-card-top">
                    <span className="app-icon">
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <span className="status">{app.status}</span>
                  </div>
                  <h3>{app.title}</h3>
                  <p>{app.text}</p>
                  <ul>
                    {app.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="photos" className="page-section gallery-section">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Photo Gallery"
          title="Events, AI on Wheels Visits, Student Sessions, and Application Demos"
          text="A growing gallery for launch photos, AI awareness events, school and college sessions, public-welfare demos, and AI Theme Room activities."
        />

        <div className="gallery-grid">
          {gallery.map((item) => (
            <article className="gallery-card" key={item.title} data-reveal>
              <img src={item.image} alt={item.title} />
              <div className="gallery-content">
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamCard({ person, variant }) {
  const Icon = person.icon

  return (
    <article className={`team-card is-${person.accent} ${variant === 'leader' ? 'is-leader' : ''}`} data-reveal>
      <div className="team-card-top">
        <div className="team-avatar">
          <Icon size={variant === 'leader' ? 32 : 28} aria-hidden="true" />
        </div>
        <span className="team-badge">{person.badge}</span>
      </div>
      <div className="team-meta">
        <span className="team-group">{person.group}</span>
        <h3>{person.name}</h3>
        <p className="team-role">{person.designation}</p>
      </div>
      <p className="team-summary">{person.text}</p>
      <ul className="team-focus" aria-label={`${person.name} focus areas`}>
        {person.focus.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

function Team() {
  return (
    <section id="team" className="page-section team-section">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Official Team"
          title="Leadership, Operations, Technical Delivery, and Creative Support"
          // text="Team details are based on the official memorandum dated July 14, 2026, with public-safe summaries for governance, development, outreach, records, and media responsibilities."
        />

        {/* <div className="team-command-strip" data-reveal>
          <span>Reporting Structure</span>
          <div className="team-command-flow">
            {teamStructure.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div> */}

        <div className="team-leadership-grid">
          {leadershipTeam.map((person) => (
            <TeamCard key={person.name} person={person} variant="leader" />
          ))}
        </div>

        <div className="team-subheading" data-reveal>
          <span>Operations and Delivery</span>
          <p>Functional managers and deputed specialists supporting assets, records, media, development, and outreach execution.</p>
        </div>

        <div className="team-grid team-support-grid">
          {operationsTeam.map((person) => (
            <TeamCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact({ onSubmit }) {
  return (
    <section id="contact" className="page-section contact-section">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Contact Us"
          title="Visit, Collaborate, Request a Demo, or Invite AI on Wheels"
          text="Use the contact form for AI Theme Room visits, department demonstrations, student awareness sessions, AI on Wheels outreach, application walkthroughs, and training programmes."
        />

        <div className="contact-layout">
          <div className="contact-info" data-reveal>
            <article>
              <MapPin size={24} aria-hidden="true" />
              <div>
                <h3>Address</h3>
                <p>AI Theme Room, Lok Bhawan, Dehradun, Uttarakhand</p>
              </div>
            </article>
            <article>
              <Mail size={24} aria-hidden="true" />
              <div>
                <h3>Email</h3>
                <p>ai.theme.room@uttarakhand.gov.in</p>
              </div>
            </article>
            <article>
              <Phone size={24} aria-hidden="true" />
              <div>
                <h3>Help Desk</h3>
                <p>+91-00000-00000</p>
              </div>
            </article>
            <article>
              <Clock size={24} aria-hidden="true" />
              <div>
                <h3>Visiting Hours</h3>
                <p>Monday to Friday, 10:00 AM to 5:00 PM</p>
              </div>
            </article>
          </div>

          <form className="contact-form" onSubmit={onSubmit} data-reveal>
            <div className="field-grid">
              <label>
                Full Name
                <input type="text" name="name" placeholder="Enter your name" required />
              </label>
              <label>
                Department / Organisation
                <input type="text" name="organization" placeholder="Organisation name" />
              </label>
            </div>
            <div className="field-grid">
              <label>
                Email
                <input type="email" name="email" placeholder="name@example.com" required />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" placeholder="+91" />
              </label>
            </div>
            <label>
              Purpose
              <select name="purpose" defaultValue="demo">
                <option value="demo">Request AI demonstration</option>
                <option value="visit">Plan a visit</option>
                <option value="training">Training or student workshop</option>
                <option value="wheels">Invite AI on Wheels</option>
                <option value="collaboration">Application collaboration</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Share details about your request" />
            </label>
            <button className="btn btn-primary" type="submit">
              <Send size={18} aria-hidden="true" />
              Submit Request
            </button>
          </form>
        </div>
      </div>

      <div id="location" className="map-section" data-reveal>
        <div className="site-shell map-heading">
          <div>
            <span>Location</span>
            <h2>Find AI Theme Room at Lok Bhawan</h2>
          </div>
          <a
            className="map-link"
            href="https://www.google.com/maps/search/?api=1&query=Lok%20Bhawan%20Dehradun%20Uttarakhand"
            target="_blank"
            rel="noreferrer"
          >
            Open in Maps
            <ExternalLink size={18} aria-hidden="true" />
          </a>
        </div>
        <iframe
          title="Map location for Lok Bhawan Uttarakhand"
          src="https://www.google.com/maps?q=Lok%20Bhawan%20Dehradun%20Uttarakhand&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}

function Footer({ currentYear }) {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-top">
        <div className="footer-brand">
          <span className="brand-mark">
            <BrainCircuit size={28} aria-hidden="true" />
          </span>
          <div>
            <strong>AI Theme Room</strong>
            <p>Lok Bhawan, Uttarakhand</p>
          </div>
        </div>
        <div className="footer-columns">
          <div>
            <h3>Website</h3>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <h3>Important Links</h3>
            {footerLinks.map(([label, href]) => (
              <a key={href} href={href} target="_blank" rel="noreferrer">
                {label}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
          <div>
            <h3>Downloads</h3>
            <a href="#applications">
              <Download size={14} aria-hidden="true" />
              Application Brief
            </a>
            <a href="#ai-on-wheels">
              <Download size={14} aria-hidden="true" />
              AI on Wheels Brief
            </a>
            <a href="#photos">
              <Download size={14} aria-hidden="true" />
              Photo Highlights
            </a>
            <a href="#contact">
              <Download size={14} aria-hidden="true" />
              Visit Request
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="site-shell footer-bottom-inner">
          <p>Copyright © {currentYear} AI Theme Room, Lok Bhawan Uttarakhand. All rights reserved.</p>
          <p>Last updated: 18 July 2026</p>
        </div>
      </div>
    </footer>
  )
}

export default App
