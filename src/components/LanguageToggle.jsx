import { useLanguage } from '../LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button className="language-toggle" onClick={toggleLanguage}>
      <span className={language === 'fr' ? 'active' : ''}>FR</span>
      <span className="separator">/</span>
      <span className={language === 'en' ? 'active' : ''}>EN</span>
    </button>
  );
};

export default LanguageToggle;
