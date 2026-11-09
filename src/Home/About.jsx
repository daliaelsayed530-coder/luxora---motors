import React from 'react';
import { Link } from 'react-router-dom';

const GOLD = '#dfb15b';

const css = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap');

.abt-page {
  background: #07080a;
  color: #fff;
  width: 100%;
  min-height: 100vh;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  direction: ltr;
  padding-bottom: 90px;
  box-sizing: border-box;
  overflow-x: hidden;
}
.abt-page *, .abt-page *::before, .abt-page *::after { box-sizing: border-box; }

/* ---------- Brand ---------- */
.abt-top {
  height: auto;
  text-align: center;
  padding: 140px 20px 0;
  background: radial-gradient(ellipse 60% 100% at 50% 0%, rgba(223,177,91,0.14), transparent 70%);
}
.abt-rise { animation: abtRise .8s cubic-bezier(.2,.7,.2,1) both; }
@keyframes abtRise {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: none; }
}
.abt-brand-name {
  display: block;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 8px;
  padding-inline-start: 8px;
  color: #fff;
}
.abt-brand-sub {
  display: block;
  margin-top: 6px;
  font-size: 11px;
  letter-spacing: 4px;
  padding-inline-start: 4px;
  color: ${GOLD};
}
.abt-rule {
  width: 70px;
  height: 1px;
  margin: 28px auto 0;
  background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
}

/* ---------- Hero: headline + story ---------- */
.abt-hero {
  max-width: 1040px;
  margin: 0 auto;
  padding: 80px 24px 70px;
}
.abt-eyebrow {
  color: ${GOLD};
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 22px;
}
.abt-hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 56px;
  align-items: start;
}
.abt-h1 {
  font-size: clamp(32px, 5vw, 54px);
  font-weight: 800;
  line-height: 1.15;
  margin: 0;
  color: #fff;
}
.abt-story {
  border-left: 1px solid rgba(223,177,91,0.5);
  padding-left: 28px;
}
.abt-story p {
  color: #a3a6b0;
  font-size: 16px;
  line-height: 1.9;
  margin: 0 0 18px;
}
.abt-story p:last-child { margin-bottom: 0; }

/* ---------- Stats ---------- */
.abt-stats {
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 24px;
}
.abt-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid #20222b;
  border-bottom: 1px solid #20222b;
}
.abt-stat {
  padding: 46px 24px;
  border-right: 1px solid #20222b;
}
.abt-stat:last-child { border-right: none; }
.abt-stat-num {
  font-size: clamp(34px, 4.4vw, 48px);
  font-weight: 800;
  line-height: 1;
  color: ${GOLD};
  margin: 0 0 12px;
}
.abt-stat-label {
  color: #8d909b;
  font-size: 13px;
  line-height: 1.6;
  margin: 0;
  max-width: 20ch;
}

/* ---------- Pillars ---------- */
.abt-pillars {
  max-width: 1040px;
  margin: 0 auto;
  padding: 100px 24px 0;
}
.abt-pillars-title {
  font-size: clamp(24px, 3.4vw, 34px);
  font-weight: 800;
  line-height: 1.25;
  margin: 0 0 54px;
  color: #fff;
  max-width: 560px;
}
.abt-pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}
.abt-pillar {
  position: relative;
  padding: 34px 32px 10px 0;
  margin-right: 32px;
  border-top: 1px solid #20222b;
  transition: border-color .3s;
}
.abt-pillar:last-child { margin-right: 0; padding-right: 0; }
.abt-pillar::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 0;
  width: 44px;
  height: 2px;
  background: ${GOLD};
  transition: width .35s ease;
}
.abt-pillar:hover::before { width: 100%; }

.abt-pillar-num {
  font-size: 54px;
  font-weight: 800;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px rgba(223,177,91,0.55);
  margin-bottom: 22px;
}
.abt-pillar-name {
  font-size: 20px;
  font-weight: 800;
  line-height: 1.35;
  margin: 0 0 12px;
  color: #fff;
}
.abt-pillar-desc {
  color: #a3a6b0;
  font-size: 15px;
  line-height: 1.85;
  margin: 0;
}

/* ---------- CTA ---------- */
.abt-cta {
  max-width: 1040px;
  margin: 110px auto 0;
  padding: 0 24px;
}
.abt-cta-box {
  text-align: center;
  padding: 70px 24px;
  border: 1px solid rgba(223,177,91,0.45);
  border-radius: 12px;
  background: radial-gradient(ellipse at 50% 0%, rgba(223,177,91,0.12), transparent 65%), #0b0c11;
}
.abt-cta-text {
  font-size: clamp(22px, 3.4vw, 32px);
  font-weight: 800;
  line-height: 1.3;
  margin: 0 0 28px;
  color: #fff;
}
.abt-cta-btn {
  display: inline-block;
  background: ${GOLD};
  color: #000;
  text-decoration: none;
  padding: 14px 36px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  transition: background .2s, box-shadow .2s;
}
.abt-cta-btn:hover { background: #f0c777; box-shadow: 0 6px 20px rgba(223,177,91,0.3); color: #000; }
.abt-cta-btn:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }

/* ---------- Tablet / Mobile ---------- */
@media (max-width: 860px) {
  .abt-hero-grid { grid-template-columns: 1fr; gap: 32px; }
  .abt-stats-grid { grid-template-columns: repeat(2, 1fr); }
  .abt-stat:nth-child(2) { border-right: none; }
  .abt-stat:nth-child(-n+2) { border-bottom: 1px solid #20222b; }
  .abt-pillars-grid { grid-template-columns: 1fr; gap: 44px; }
  .abt-pillar, .abt-pillar:last-child { margin-right: 0; padding-right: 0; }
}
@media (max-width: 520px) {
  .abt-top { padding-top: 120px; }
  .abt-hero { padding: 60px 18px 50px; }
  .abt-stats, .abt-pillars, .abt-cta { padding-left: 18px; padding-right: 18px; }
  .abt-stat { padding: 34px 14px; }
  .abt-story { padding-left: 20px; }
  .abt-pillars { padding-top: 70px; }
  .abt-cta { margin-top: 80px; }
  .abt-cta-box { padding: 50px 18px; }
  .abt-cta-btn { display: block; }
}

@media (prefers-reduced-motion: reduce) {
  .abt-rise { animation: none; }
  .abt-pillar::before { transition: none; }
}
`;

export default function About() {
  const stats = [
    { number: '15+', label: 'Years of excellence and leadership' },
    { number: '500+', label: 'VIP clients around the world' },
    { number: '100%', label: 'Commitment to quality standards' },
    { number: '24/7', label: 'Dedicated on-site support and service' }
  ];

  const values = [
    {
      id: '01',
      title: 'Engineering & Peak Performance',
      desc: 'We hold ourselves to the highest standards of German precision when caring for Porsche and luxury sports cars, so they perform exceptionally on the road and on the track.'
    },
    {
      id: '02',
      title: 'Absolute Customization',
      desc: 'We believe every car should reflect its owner’s style, so we offer exclusive design and modification options for our most discerning clients.'
    },
    {
      id: '03',
      title: 'Privacy & Complete Safety',
      desc: 'We protect our clients’ privacy and provide fully covered, secure car transport alongside top-tier maintenance services.'
    }
  ];

  return (
    <div className="abt-page">
      <style>{css}</style>

      {/* Brand */}
      <div className="abt-top">
        <div className="abt-rise">
          <span className="abt-brand-name">PORSCHE</span>
          <span className="abt-brand-sub">EXCLUSIVE ATELIER</span>
          <div className="abt-rule" />
        </div>
      </div>

      {/* Hero: headline + story */}
      <div className="abt-hero">
        <div className="abt-rise">
          <p className="abt-eyebrow">— Our Story & Vision —</p>
          <div className="abt-hero-grid">
            <h1 className="abt-h1">
              Redefining Luxury and Performance in Sports Cars
            </h1>
            <div className="abt-story">
              <p>
                Porsche Exclusive Atelier was founded for people who love and live for
                luxury sports cars. We combine proven German engineering with bespoke
                design to deliver an ownership experience you will never forget.
              </p>
              <p>
                From the first consultation to the final delivery, every car is handled
                by specialists who treat it as if it were their own.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="abt-stats">
        <div className="abt-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="abt-stat">
              <p className="abt-stat-num">{stat.number}</p>
              <p className="abt-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pillars */}
      <div className="abt-pillars">
        <h2 className="abt-pillars-title">The Pillars of Excellence at Porsche Atelier</h2>

        <div className="abt-pillars-grid">
          {values.map((val) => (
            <div key={val.id} className="abt-pillar">
              <div className="abt-pillar-num">{val.id}.</div>
              <h3 className="abt-pillar-name">{val.title}</h3>
              <p className="abt-pillar-desc">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="abt-cta">
        <div className="abt-cta-box">
          <p className="abt-cta-text">Ready for a service worthy of your car?</p>
          <Link to="/services" className="abt-cta-btn">
            Explore Our VIP Services
          </Link>
        </div>
      </div>
    </div>
  );
}



