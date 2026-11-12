import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowUpRight, Mail, Menu, X, Code2,
  Layers3, Users, Lightbulb, MapPin, ExternalLink, Sparkles, Globe2,
  CloudSun, Clapperboard, Building2, CheckCircle2
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Hamina Hannan',
  role: 'Web Developer',
  email: 'hamina172002@gmail.com',
  github: 'https://github.com/haminahannanarpita',
  linkedin: 'https://www.linkedin.com/in/hamina-hannan-24530b343/',
};

const projects = [
  {
    number: '01',
    title: 'BDProperties',
    type: 'Final Year Project · SaaS Product',
    description: 'A property-focused SaaS product designed to bring property-related services and information into one organized digital experience.',
    stack: ['React', 'JavaScript', 'Node.js', 'Web Development'],
    icon: Building2,
    featured: true,
    link: 'https://bdproperties.site/',
    linkLabel: 'Ask about project',
  },
  {
    number: '02',
    title: 'Weather App',
    type: 'Frontend Project',
    description: 'A weather application focused on presenting weather information through a clean, easy-to-use interface.',
    stack: ['React', 'JavaScript', 'API Integration'],
    icon: CloudSun,
    link: 'https://next-level-weather-app-ten.vercel.app/',
    linkLabel: 'View project',
  },
  {
    number: '03',
    title: 'Movie Explorer',
    type: 'Frontend Project',
    description: 'A movie discovery interface built to make browsing and exploring movie information simple and engaging.',
    stack: ['React', 'JavaScript', 'Frontend'],
    icon: Clapperboard,
    link: 'https://movie-explorer-theta-seven.vercel.app/',
    linkLabel: 'View project',
  },
];

const skills = [
  { name: 'HTML5', level: 'Frontend' }, { name: 'CSS3', level: 'Frontend' },
  { name: 'Tailwind CSS', level: 'Styling' }, { name: 'JavaScript', level: 'Language' },
  { name: 'React', level: 'Frontend' }, { name: 'Node.js', level: 'Backend' },
];

const experiences = [
  { role: 'General Secretary', org: 'University IT Club', detail: 'Contributed to student activities, coordination, communication, and team leadership.' },
  { role: 'Campus Ambassador', org: 'ICT Olympiad Bangladesh', detail: 'Represented the initiative on campus and supported student engagement and outreach.' },
  { role: 'Volunteer', org: 'Digital Bangladesh Day', detail: 'Volunteered in an event celebrating digital awareness and technology in Bangladesh.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.18 });
    document.querySelectorAll('section[id], .reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const navItems = [['home','Home'],['about','About'],['skills','Skills'],['projects','Projects'],['experience','Experience'],['contact','Contact']];

  return (
    <>
      <div className="noise" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">H</span><span>hamina<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {navItems.map(([id,label]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href={`mailto:${profile.email}`} onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
            <p className="hello">Hello, I’m</p>
            <h1>Hamina<br/><span>Hannan.</span></h1>
            <div className="role-line"><span className="role-rule" /> <span>Web Developer</span></div>
            <p className="hero-text">I build thoughtful, responsive web experiences with a focus on clean interfaces, useful features, and continuous learning.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="btn btn-ghost" href={`mailto:${profile.email}`}>Get in touch <Mail size={16}/></a>
            </div>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18}/></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><span className="linkedin-mark">in</span></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18}/></a>
              <span className="social-caption">LET’S CONNECT</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract developer illustration">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="art-glow" />
            <div className="code-window">
              <div className="window-top"><span/><span/><span/><small>developer.js</small></div>
              <div className="code-lines">
                <p><i>01</i><b>const</b> developer = {'{'}</p>
                <p><i>02</i>&nbsp;&nbsp;name: <em>'Hamina'</em>,</p>
                <p><i>03</i>&nbsp;&nbsp;role: <em>'Web Developer'</em>,</p>
                <p><i>04</i>&nbsp;&nbsp;skills: [</p>
                <p><i>05</i>&nbsp;&nbsp;&nbsp;&nbsp;<em>'React'</em>, <em>'JavaScript'</em>,</p>
                <p><i>06</i>&nbsp;&nbsp;&nbsp;&nbsp;<em>'Node.js'</em></p>
                <p><i>07</i>&nbsp;&nbsp;],</p>
                <p><i>08</i>&nbsp;&nbsp;mindset: <strong>'Always learning'</strong></p>
                <p><i>09</i>{'}'};</p>
              </div>
              <div className="terminal-line"><span>➜</span> building_the_future<span className="cursor">_</span></div>
            </div>
            <div className="floating-chip chip-react"><Code2 size={16}/> React</div>
            <div className="floating-chip chip-ui"><Layers3 size={16}/> UI / UX</div>
            <div className="art-caption"><Sparkles size={14}/> CURIOUS MIND. CREATIVE BUILDER.</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-heading reveal"><span className="section-kicker">01 / ABOUT ME</span><h2>Turning ideas into<br/><span>digital experiences.</span></h2></div>
          <div className="about-grid">
            <div className="about-main reveal">
              <p className="lead">I’m a CSE student and aspiring web developer who enjoys creating practical, user-friendly web applications.</p>
              <p>My work brings together frontend development, problem-solving, and a willingness to learn new technologies. I’m currently working on <strong>BDProperties</strong>, my final-year SaaS project, while continuing to build and improve frontend projects.</p>
              <p>Beyond coding, I enjoy collaborating with people, taking responsibility, and helping teams move toward a shared goal.</p>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={16}/></a>
            </div>
            <div className="about-facts reveal">
              <div className="fact-card"><span className="fact-icon"><Code2/></span><strong>Web development</strong><small>Building for the web</small></div>
              <div className="fact-card"><span className="fact-icon"><Users/></span><strong>Team player</strong><small>Collaborative mindset</small></div>
              <div className="fact-card"><span className="fact-icon"><Lightbulb/></span><strong>Always learning</strong><small>Growing every day</small></div>
              <div className="fact-card"><span className="fact-icon"><Globe2/></span><strong>Based in</strong><small>Bangladesh</small></div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <div className="section-heading reveal"><span className="section-kicker">02 / MY TOOLKIT</span><h2>Technologies I work<br/><span>with.</span></h2><p className="section-desc">The tools I use to turn concepts into functional web experiences.</p></div>
          <div className="skills-grid reveal">
            {skills.map((skill, i) => <div className="skill-card" key={skill.name}><span className="skill-index">0{i+1}</span><div><h3>{skill.name}</h3><p>{skill.level}</p></div><CheckCircle2 className="skill-check" size={17}/></div>)}
          </div>
          <div className="skill-note reveal"><span className="note-line"/><p>Also developing my understanding of backend development and full-stack application workflows.</p></div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="projects-head reveal"><div className="section-heading"><span className="section-kicker">03 / SELECTED WORK</span><h2>Projects that bring<br/><span>ideas to life.</span></h2></div><p className="section-desc">A selection of academic and personal projects that reflect my learning journey.</p></div>
          <div className="project-list">
            {projects.map((project) => {
              const Icon = project.icon;
              return <article className={`project-card reveal ${project.featured ? 'featured' : ''}`} key={project.number}>
                <div className="project-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span></div>
                <div className="project-content">
                  <div className="project-icon"><Icon size={27}/></div>
                  <div className="project-info"><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                  <a className="project-link" href={project.link} target={project.link.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={project.linkLabel}><ArrowUpRight size={21}/></a>
                </div>
                <div className="project-bottom"><span>{project.featured ? 'IN DEVELOPMENT / ACADEMIC PROJECT' : 'FRONTEND DEVELOPMENT'}</span><a href={project.link} target={project.link.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{project.linkLabel} <ExternalLink size={13}/></a></div>
              </article>
            })}
          </div>
          <p className="project-footnote">Project links currently point to the Vercel project pages you provided. Replace them with public deployment URLs if you want visitors to open the live apps directly.</p>
        </section>

        <section className="experience section-wrap" id="experience">
          <div className="section-heading reveal"><span className="section-kicker">04 / LEADERSHIP & ACTIVITIES</span><h2>Growing beyond<br/><span>the code.</span></h2><p className="section-desc">Experiences that helped me strengthen communication, teamwork, and leadership.</p></div>
          <div className="timeline">
            {experiences.map((item, i) => <div className="timeline-item reveal" key={item.org}><div className="timeline-marker">{String(i+1).padStart(2,'0')}</div><div className="timeline-content"><span className="timeline-label">LEADERSHIP & COMMUNITY</span><h3>{item.role}</h3><h4>{item.org}</h4><p>{item.detail}</p></div></div>)}
          </div>
          <div className="strength-strip reveal"><div><Users/><span>Teamwork</span></div><div><Lightbulb/><span>Leadership</span></div><div><Sparkles/><span>Communication</span></div><div><Layers3/><span>Collaboration</span></div></div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-panel reveal">
            <div className="contact-orb" />
            <span className="section-kicker">05 / CONTACT</span>
            <h2>Have a project<br/>in <span>mind?</span></h2>
            <p>I’m open to opportunities, collaborations, and conversations about web development. Let’s create something meaningful.</p>
            <a className="btn btn-primary contact-btn" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={17}/></a>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}><Mail size={16}/>{profile.email}</a>
              <span><MapPin size={16}/> Bangladesh</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">H</span><span>hamina<span className="brand-dot">.</span></span></a>
        <p>Designed & built with curiosity by Hamina Hannan.</p>
        <div className="footer-social"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={17}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><span className="linkedin-mark small">in</span></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17}/></a></div>
        <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={13}/></a>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
