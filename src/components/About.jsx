import { FiMapPin, FiMail, FiBriefcase, FiAward, FiShield, FiCode } from 'react-icons/fi';
import { useLanguage } from '../LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: <FiShield />,
      title: t.about.highlights.cyber.title,
      description: t.about.highlights.cyber.desc
    },
    {
      icon: <FiCode />,
      title: t.about.highlights.dev.title,
      description: t.about.highlights.dev.desc
    },
    {
      icon: <FiAward />,
      title: t.about.highlights.uqac.title,
      description: t.about.highlights.uqac.desc
    }
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">{t.about.title}</h2>
        <p className="section-subtitle">
          {t.about.subtitle}
        </p>

        {/* Highlights Cards */}
        <div className="about-highlights">
          {highlights.map((item, index) => (
            <div className="about-highlight-card" key={index}>
              <div className="about-highlight-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="about-main">
          <div className="about-description">
            {t.about.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Info Cards */}
          <div className="about-info-cards">
            <div className="about-info-card">
              <FiMapPin className="about-info-icon" />
              <div>
                <span className="about-info-label">{t.about.info.location}</span>
                <span className="about-info-value">{t.about.info.locationValue}</span>
              </div>
            </div>
            <div className="about-info-card">
              <FiMail className="about-info-icon" />
              <div>
                <span className="about-info-label">{t.about.info.email}</span>
                <span className="about-info-value">oularelayba05@gmail.com</span>
              </div>
            </div>
            <div className="about-info-card">
              <FiBriefcase className="about-info-icon" />
              <div>
                <span className="about-info-label">{t.about.info.availability}</span>
                <span className="about-info-value">{t.about.info.availabilityValue}</span>
              </div>
            </div>
            <div className="about-info-card">
              <FiAward className="about-info-icon" />
              <div>
                <span className="about-info-label">{t.about.info.education}</span>
                <span className="about-info-value">{t.about.info.educationValue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
