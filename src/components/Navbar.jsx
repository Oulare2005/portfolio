import { useState } from 'react';
import { Link } from 'react-scroll';
import { FiHome, FiUser, FiCode, FiFolder, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { to: 'hero', icon: <FiHome />, label: t.nav.home },
    { to: 'about', icon: <FiUser />, label: t.nav.about },
    { to: 'skills', icon: <FiCode />, label: t.nav.skills },
    { to: 'projects', icon: <FiFolder />, label: t.nav.projects },
    { to: 'contact', icon: <FiMail />, label: t.nav.contact },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button className="sidebar-toggle" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Sidebar */}
      <nav className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-logo">
          <span>LO</span>
        </div>

        <ul className="sidebar-menu">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="sidebar-link"
                onClick={closeMenu}
                spy={true}
                activeClass="active"
              >
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
