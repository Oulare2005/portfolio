import { useRef } from 'react';
import { FiGithub, FiDownload, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaShieldAlt, FaLink, FaMobileAlt, FaSearch, FaUserLock, FaBus } from 'react-icons/fa';
import { useLanguage } from '../LanguageContext';

const Projects = () => {
  const scrollRef = useRef(null);
  const { t } = useLanguage();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const projectsData = [
    {
      icon: <FaShieldAlt />,
      title: 'Analyse de risques techniques (Projet Red Team)',
      year: '2025',
      context: 'UQAC',
      description: 'Analyse et exploitation d\'un environnement simulé : Windows Server, AD, client Windows.',
      tech: ['Kali Linux', 'Nmap', 'Docker', 'DVWA', 'MITRE ATT&CK'],
      category: 'Cybersécurité',
      report: '/Rapport_RedTeam_Layba_Oulare.docx',
      reportLabel: 'Rapport (DOCX)'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Développement d\'un système 2FA',
      year: '2025',
      context: 'UQAC - Sujet spécial',
      description: 'Application mobile Flutter jouant le rôle de jeton logiciel 2FA.',
      tech: ['Flutter', 'Mobile Security', '2FA/MFA'],
      category: 'Mobile / Sécurité',
      report: null
    },
    {
      icon: <FaLink />,
      title: 'Projet Blockchain Monarc',
      year: '2025',
      context: 'Collaboration entreprise',
      description: 'Développement front-end pour une solution de traçabilité blockchain.',
      tech: ['Front-end', 'Git', 'Sécurité applicative', 'Blockchain'],
      category: 'Web / Sécurité',
      report: '/Rapport-Monarc.pdf',
      reportLabel: 'Rapport (PDF)'
    },
    {
      icon: <FaSearch />,
      title: 'Analyse de vulnérabilités - Nessus',
      year: '2025',
      context: 'UQAC',
      description: 'Analyse de vulnérabilités à l\'aide de Nessus sur des environnements Windows.',
      tech: ['Nessus', 'CVSS', 'NVD', 'Windows', 'Patch Management'],
      category: 'Cybersécurité',
      report: '/Rapport_TP_Nessus.docx',
      reportLabel: 'Rapport (DOCX)'
    },
    {
      icon: <FaUserLock />,
      title: 'Contrôle d\'accès RBAC - Application Android',
      year: '2025',
      context: 'UQAC',
      description: 'Application Android intégrant un contrôle d\'accès basé sur les rôles (RBAC).',
      tech: ['Android', 'Java', 'Firebase Auth', 'RBAC'],
      category: 'Mobile / Sécurité',
      report: null
    },
    {
      icon: <FaBus />,
      title: 'Application Transport Collectifs',
      year: '2024',
      context: 'UQAC - Développement Mobile',
      description: 'Application Android permettant de rechercher, annoncer et réserver des trajets.',
      tech: ['Android', 'Java', 'UI/UX', 'Mobile'],
      category: 'Mobile',
      report: null
    }
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">{t.projects.title}</h2>
        <p className="section-subtitle">
          {t.projects.subtitle}
        </p>

        <div className="projects-wrapper">
          <button className="scroll-btn left" onClick={() => scroll('left')}>
            <FiChevronLeft />
          </button>

          <div className="projects-grid" ref={scrollRef}>
            {projectsData.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image">
                  {project.icon}
                  <span className="project-category">{project.category}</span>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <span className="project-context">{project.context}</span>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/Oulare2005" target="_blank" rel="noreferrer" className="project-link">
                      <FiGithub /> {t.projects.viewGithub}
                    </a>
                    {project.report && (
                      <a href={project.report} download className="project-link project-download">
                        <FiDownload /> {t.projects.downloadReport}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="scroll-btn right" onClick={() => scroll('right')}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
