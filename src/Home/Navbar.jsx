import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from './LanguageContext';

const text = {
  en: {
    home: 'HOME',
    inventory: 'INVENTORY',
    services: 'SERVICES',
    about: 'ABOUT US',
    contact: 'CONTACT',
    book: 'BOOK A TEST DRIVE',
  },
  ar: {
    home: 'الرئيسية',
    inventory: 'السيارات',
    services: 'الخدمات',
    about: 'من نحن',
    contact: 'تواصل معنا',
    book: 'احجز تجربة قيادة',
  },
};

function Navbar() {
  const { lang } = useLang();
  const t = text[lang];
  const spacing = (v) => (lang === 'ar' ? '0' : v);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark py-3"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2 text-decoration-none" to="/">
          <div style={{
            width: '28px',
            height: '28px',
            border: '2px solid #fff',
            transform: 'rotate(45deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ transform: 'rotate(-45deg)', fontSize: '10px', fontWeight: 'bold' }}>L</span>
          </div>
          <div>
            <span className="fw-bold fs-5 tracking-widest d-block text-white" style={{ letterSpacing: '2px', lineHeight: '1' }}>LUXORA</span>
            <small style={{ fontSize: '8px', letterSpacing: '3px', color: '#888', display: 'block' }}>MOTORS</small>
          </div>
        </Link>

        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav gap-4" style={{ fontSize: '12px', letterSpacing: spacing('1.5px'), fontWeight: '600' }}>
            <li className="nav-item">
              <Link className="nav-link active" style={{ color: '#fff' }} to="/">{t.home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: '#fff' }} to="/Cars">{t.inventory}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: '#fff' }} to="/services">{t.services}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: '#fff' }} to="/about">{t.about}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: '#fff' }} to="/contact">{t.contact}</Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center gap-2">
          <Link to="/Cars" className="btn btn-outline-light rounded-1 px-3 py-2 text-uppercase text-decoration-none" style={{ fontSize: '11px', letterSpacing: spacing('1px') }}>
            {t.book}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;