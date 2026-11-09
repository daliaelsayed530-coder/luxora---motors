
import React from 'react';
import { Link } from 'react-router-dom';

const HERO_IMG = '/img/1.jpeg';

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Montserrat:wght@400;500;600&display=swap');

.lx-hero{
  --gold:#c9a36b; --gold-soft:#d8b783; --text:#f4efe8; --muted:#d3cdc4;
  position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;
  background-color:#050505;background-size:cover;background-position:center right;background-repeat:no-repeat;
  padding:120px 5vw 50px;color:var(--text);font-family:'Montserrat',sans-serif;
}
.lx-hero *{box-sizing:border-box}
.lx-hero a{color:inherit;text-decoration:none}

.lx-content{display:flex;flex-direction:column;max-width:520px;padding:10px 0}
.lx-kicker{font-size:12px;font-weight:500;letter-spacing:.3em;text-transform:uppercase;color:var(--gold-soft);margin:0 0 16px}
.lx-hero h1{
  font-family:'Playfair Display',serif;font-weight:700;font-size:clamp(44px,6vw,76px);
  line-height:1.04;letter-spacing:-.01em;margin:0;text-shadow:0 4px 30px rgba(0,0,0,.7)
}
.lx-hero h1 span{display:block;color:var(--gold);margin-top:-2px}
.lx-lead{margin:22px 0 0;max-width:400px;font-size:15px;line-height:1.75;color:var(--muted);text-shadow:0 2px 12px rgba(0,0,0,.8)}

.lx-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:32px}
.lx-btn{
  display:inline-flex;align-items:center;gap:10px;font:600 12px 'Montserrat',sans-serif;
  letter-spacing:.06em;text-transform:uppercase;padding:15px 24px;border-radius:3px;cursor:pointer;
  transition:transform .2s,background .2s,border-color .2s
}
.lx-btn-gold{background:var(--gold);color:#17120b!important;border:1px solid var(--gold)}
.lx-btn-gold:hover{background:var(--gold-soft);transform:translateY(-2px)}
.lx-btn-ghost{background:rgba(0,0,0,.45);color:var(--text);border:1px solid rgba(255,255,255,.32)}
.lx-btn-ghost:hover{border-color:var(--gold);transform:translateY(-2px)}
.lx-btn svg{width:14px;height:14px}

.lx-stats{display:flex;flex-wrap:wrap;gap:56px;margin-top:52px;padding-top:28px;border-top:1px solid rgba(255,255,255,.14)}
.lx-stat small{display:block;font-size:10px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.lx-stat strong{display:flex;align-items:center;gap:8px;margin-top:8px;font-size:28px;font-weight:500}
.lx-stat strong svg{width:12px;height:16px;color:var(--gold);opacity:.85}

@media (max-width:900px){
  .lx-hero{background-position:68% center;padding-top:110px}
  .lx-content{max-width:100%}
}
@media (max-width:560px){
  .lx-hero{min-height:auto;padding-bottom:40px}
  .lx-stats{gap:28px;margin-top:40px}
  .lx-stat strong{font-size:24px}
  .lx-btn{padding:13px 18px}
}
`;

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M2 8h11M9 4l4 4-4 4" />
  </svg>
);

const Play = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="8" cy="8" r="6.5" />
    <path d="M6.5 5.5v5l4-2.5-4-2.5Z" fill="currentColor" />
  </svg>
);

const Chip = () => (
  <svg viewBox="0 0 12 16" fill="currentColor">
    <rect x="1" y="1" width="10" height="14" rx="1.5" />
  </svg>
);

const stats = [
  { label: 'Premium brands', value: '50+' },
  { label: 'Luxury models', value: '100+' },
  { label: 'Happy clients', value: '10K+' },
];

function Header() {
  return (
    <header
      className="lx-hero"
      style={{
        backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.94) 0%,rgba(0,0,0,.78) 32%,rgba(0,0,0,.25) 62%,rgba(0,0,0,0) 80%),linear-gradient(0deg,rgba(0,0,0,.75) 0%,rgba(0,0,0,0) 38%),url(${HERO_IMG})`,
      }}
    >
      <style>{css}</style>

      <div className="lx-content">
        <p className="lx-kicker">Drive the extraordinary</p>
        <h1>
          Luxury
          <span>Redefined.</span>
        </h1>
        <p className="lx-lead">
          Discover elite performance, unmatched comfort, and timeless design. Your dream car awaits.
        </p>

        <div className="lx-actions">
          <Link to="/cars" className="lx-btn lx-btn-gold">
            Explore inventory <Arrow />
          </Link>
          <button type="button" className="lx-btn lx-btn-ghost">
            <Play /> Watch video
          </button>
        </div>

        <div className="lx-stats">
          {stats.map((s) => (
            <div className="lx-stat" key={s.label}>
              <small>{s.label}</small>
              <strong><Chip />{s.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
