import { Link } from 'react-scroll';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            {t.hero.badge}
          </div>
          <p className="hero-greeting">{t.hero.greeting}</p>
          <h1 className="hero-title">
            Layba <span>Oulare</span>
          </h1>
          <p className="hero-description">
            {t.hero.description}
          </p>
          <div className="hero-buttons">
            <Link to="contact" smooth={true} duration={500}>
              <button className="btn btn-primary">
                {t.hero.contactBtn} <FiArrowRight />
              </button>
            </Link>
            <a href="/Layba-Oulare-CV.pdf" download className="btn btn-outline">
              <FiDownload /> {t.hero.cvBtn}
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img src="/photo.jpeg" alt="Layba Oulare" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
