
import React from 'react';
import { Link } from 'react-router-dom';

const t = {
  eyebrow: 'DRIVE THE EXTRAORDINARY',
  title1: 'Luxury',
  title2: 'Redefined.',
  desc: 'Discover elite performance, unmatched comfort, and timeless design. Your dream car awaits.',
  explore: 'EXPLORE INVENTORY →',
  watch: '▶ WATCH VIDEO',
  brands: 'PREMIUM BRANDS',
  models: 'LUXURY MODELS',
  clients: 'HAPPY CLIENTS',
};

const stats = [
  { label: t.brands, value: '50+' },
  { label: t.models, value: '100+' },
  { label: t.clients, value: '10K+' },
];

const css = `
.ap-hero {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("/img/1.jpeg");
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow: hidden;
  z-index: 999;
}
.ap-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(90deg, rgba(0,0,0,.94) 0%, rgba(0,0,0,.78) 32%, rgba(0,0,0,.25) 62%, rgba(0,0,0,0) 80%),
    linear-gradient(0deg, rgba(0,0,0,.75) 0%, rgba(0,0,0,0) 38%);
}
.ap-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  direction: ltr;
}
.ap-content {
  padding: clamp(130px, 22vh, 230px) 50px 0;
  max-width: 600px;
}
.ap-eyebrow {
  color: #d4af37;
  font-size: 12px;
  letter-spacing: 4px;
  margin: 0 0 14px;
  font-weight: bold;
}
.ap-title {
  color: #fff;
  font-size: clamp(44px, 6vw, 70px);
  font-family: serif;
  line-height: 1.05;
  margin: 0 0 18px;
  font-weight: normal;
  text-shadow: 0 4px 30px rgba(0,0,0,.7);
}
.ap-desc {
  color: #ddd;
  font-size: 15px;
  line-height: 1.7;
  margin: 0 0 28px;
  max-width: 430px;
  text-shadow: 0 2px 12px rgba(0,0,0,.8);
}
.ap-actions { display: flex; flex-wrap: wrap; gap: 14px; }
.ap-btn-gold {
  background: #d4af37;
  color: #000;
  border: none;
  padding: 15px 28px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 3px;
  text-decoration: none;
  display: inline-block;
  transition: transform .2s, background .2s;
}
.ap-btn-gold:hover { background: #e6c35c; transform: translateY(-2px); }
.ap-btn-ghost {
  background: rgba(0,0,0,.45);
  color: #fff;
  border: 1px solid rgba(255,255,255,.4);
  padding: 15px 28px;
  font-size: 12px;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 3px;
  transition: transform .2s, border-color .2s;
}
.ap-btn-ghost:hover { border-color: #d4af37; transform: translateY(-2px); }

.ap-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  margin: 0 50px 40px;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,.16);
  box-sizing: border-box;
}
.ap-stat-label { color: #bbb; font-size: 11px; letter-spacing: 2px; margin-bottom: 8px; }
.ap-stat-value { color: #fff; font-size: 32px; font-family: serif; }

@media (max-width: 900px) {
  .ap-hero { background-position: 68% center; }
  .ap-content { padding-left: 24px; padding-right: 24px; max-width: 100%; }
  .ap-stats { margin-left: 24px; margin-right: 24px; gap: 30px; }
}
@media (max-width: 560px) {
  .ap-content { padding-top: 110px; }
  .ap-btn-gold, .ap-btn-ghost { padding: 13px 18px; }
  .ap-stat-value { font-size: 26px; }
  .ap-stats { margin-bottom: 24px; gap: 22px; }
}
`;

export default function Apped() {
  return (
    <div className="ap-hero">
      <style>{css}</style>

      <div className="ap-overlay"></div>

      <div className="ap-inner">
        {/* Hero Section */}
        <div className="ap-content">
          <p className="ap-eyebrow">{t.eyebrow}</p>

          <h1 className="ap-title">
            {t.title1} <br />
            <span>{t.title2}</span>
          </h1>

          <p className="ap-desc">{t.desc}</p>

          <div className="ap-actions">
            <Link to="/cars" className="ap-btn-gold">
              {t.explore}
            </Link>
            <button type="button" className="ap-btn-ghost">
              {t.watch}
            </button>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="ap-stats">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="ap-stat-label">🛡️ {s.label}</div>
              <div className="ap-stat-value">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
