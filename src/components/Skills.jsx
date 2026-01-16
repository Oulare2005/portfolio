import { useRef } from 'react';
import { FiMonitor, FiShield, FiCloud, FiCode, FiTool, FiLock, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useLanguage } from '../LanguageContext';

const Skills = () => {
  const scrollRef = useRef(null);
  const { t } = useLanguage();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const skillsData = [
    {
      icon: <FiMonitor />,
      title: t.skills.categories.systems.title,
      description: t.skills.categories.systems.desc,
      tags: ['Windows Server', 'Linux', 'Active Directory', 'TCP/IP', 'DNS', 'DHCP', 'VMware']
    },
    {
      icon: <FiShield />,
      title: t.skills.categories.cyber.title,
      description: t.skills.categories.cyber.desc,
      tags: ['NIST CSF/RMF', 'MITRE ATT&CK', 'Analyse vulnérabilités', 'Sécurité réseau']
    },
    {
      icon: <FiCloud />,
      title: t.skills.categories.cloud.title,
      description: t.skills.categories.cloud.desc,
      tags: ['Azure', 'Docker', 'Azure DevOps', 'GitHub Actions', 'CI/CD']
    },
    {
      icon: <FiCode />,
      title: t.skills.categories.programming.title,
      description: t.skills.categories.programming.desc,
      tags: ['Java', 'JavaScript', 'Python', 'C/C++', 'HTML/CSS', 'SQL']
    },
    {
      icon: <FiTool />,
      title: t.skills.categories.tools.title,
      description: t.skills.categories.tools.desc,
      tags: ['Git', 'Wireshark', 'Nmap', 'Burp Suite', 'Kali Linux', 'Postman', 'Flutter']
    },
    {
      icon: <FiLock />,
      title: t.skills.categories.techniques.title,
      description: t.skills.categories.techniques.desc,
      tags: ['SQLi', 'XSS', 'CSRF', 'SMB', 'MFA/2FA', 'Durcissement']
    }
  ];

  const certifications = [
    { name: 'CompTIA Security+', status: t.skills.certifications.status.preparation },
    { name: 'Google Cybersecurity Professional', status: t.skills.certifications.status.preparation },
    { name: 'Google IT Support Professional', status: t.skills.certifications.status.inProgress },
    { name: 'Créativité & prototypage rapide - Montréal', status: '2024' },
    { name: 'Réseautage et téléphonie (VoIP / ToIP)', status: '2023' }
  ];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">{t.skills.title}</h2>
        <p className="section-subtitle">
          {t.skills.subtitle}
        </p>

        <div className="skills-wrapper">
          <button className="scroll-btn left" onClick={() => scroll('left')}>
            <FiChevronLeft />
          </button>

          <div className="skills-grid" ref={scrollRef}>
            {skillsData.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <div className="skill-tags">
                  {skill.tags.map((tag, tagIndex) => (
                    <span className="skill-tag" key={tagIndex}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button className="scroll-btn right" onClick={() => scroll('right')}>
            <FiChevronRight />
          </button>
        </div>

        {/* Certifications */}
        <div className="certifications">
          <h3 className="certifications-title">{t.skills.certifications.title}</h3>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div className="certification-item" key={index}>
                <span className="certification-name">{cert.name}</span>
                <span className="certification-status">{cert.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
