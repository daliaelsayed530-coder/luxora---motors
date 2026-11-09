
import React, { useState } from 'react';

const GOLD = '#dfb15b';

// ====== CONTACT SETTINGS (replace with the real values before launch) ======
// WhatsApp number with country code, digits only (no + and no leading 0)
// Example: Egyptian number 01012345678 becomes 201012345678
const WHATSAPP_NUMBER = '01000000000';
const PHONE_DISPLAY = '+20 1000000000';
const EMAIL = 'contact@luxoramotors.com';
// ===========================================================================

const INQUIRY_TYPES = [
  'Available cars',
  'Test drive booking',
  'Customization request',
  'Maintenance & service',
  'Other'
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap');

.ct-page {
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
.ct-page *, .ct-page *::before, .ct-page *::after { box-sizing: border-box; }

/* ---------- Hero ---------- */
.ct-top {
  text-align: center;
  padding: 140px 20px 50px;
  background: radial-gradient(ellipse 60% 100% at 50% 0%, rgba(223,177,91,0.14), transparent 70%);
}
.ct-top-inner { animation: ctRise .8s cubic-bezier(.2,.7,.2,1) both; }
@keyframes ctRise {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: none; }
}
.ct-brand-name {
  display: block;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 8px;
  padding-inline-start: 8px;
}
.ct-brand-sub {
  display: block;
  margin-top: 6px;
  font-size: 11px;
  letter-spacing: 4px;
  padding-inline-start: 4px;
  color: ${GOLD};
}
.ct-rule {
  width: 70px;
  height: 1px;
  margin: 28px auto 40px;
  background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
}
.ct-eyebrow { color: ${GOLD}; font-size: 15px; font-weight: 600; margin: 0 0 14px; }
.ct-h1 {
  font-size: clamp(28px, 5.5vw, 46px);
  font-weight: 800;
  line-height: 1.2;
  margin: 0 auto 18px;
  max-width: 760px;
}
.ct-lead {
  color: #a3a6b0;
  font-size: 15px;
  line-height: 1.85;
  max-width: 620px;
  margin: 0 auto;
}

/* ---------- Layout ---------- */
.ct-grid {
  max-width: 1020px;
  margin: 20px auto 0;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 28px;
  align-items: start;
}

.ct-card {
  background: #0e0f14;
  border: 1px solid #20222b;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.45);
}
.ct-card-title { font-size: 20px; font-weight: 800; margin: 0 0 24px; }
.ct-card-title.gold { color: ${GOLD}; }

/* ---------- Info rows ---------- */
.ct-info { display: flex; flex-direction: column; gap: 4px; }
.ct-row {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 16px 0;
  border-bottom: 1px solid #1a1c24;
}
.ct-row:last-child { border-bottom: none; }
.ct-icon {
  flex: 0 0 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(223,177,91,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${GOLD};
}
.ct-row-label { font-size: 12px; color: #8d909b; margin: 0 0 4px; }
.ct-row-value { font-size: 15px; font-weight: 600; margin: 0; color: #fff; word-break: break-word; }
.ct-row-value a { color: #fff; text-decoration: none; transition: color .2s; }
.ct-row-value a:hover { color: ${GOLD}; }

.ct-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 22px; }
.ct-btn-gold, .ct-btn-ghost {
  flex: 1;
  min-width: 150px;
  text-align: center;
  padding: 13px 18px;
  border-radius: 6px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background .2s, color .2s, box-shadow .2s;
}
.ct-btn-gold { background: ${GOLD}; color: #000; border: 1px solid ${GOLD}; }
.ct-btn-gold:hover { background: #f0c777; box-shadow: 0 6px 20px rgba(223,177,91,0.3); }
.ct-btn-ghost { background: transparent; color: ${GOLD}; border: 1px solid ${GOLD}; }
.ct-btn-ghost:hover { background: ${GOLD}; color: #000; }

.ct-hours {
  margin-top: 22px;
  padding-top: 18px;
  border-top: 1px solid #1a1c24;
  color: ${GOLD};
  font-size: 13px;
  font-weight: 600;
}

/* ---------- Form ---------- */
.ct-form { display: flex; flex-direction: column; gap: 16px; }
.ct-two { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.ct-label { display: block; font-size: 12px; color: #aaa; margin-bottom: 6px; }
.ct-field {
  width: 100%;
  padding: 12px;
  background: #161821;
  border: 1px solid #2a2c37;
  color: #fff;
  border-radius: 6px;
  font-family: inherit;
  font-size: 14px;
  outline: none;
  transition: border-color .2s;
}
.ct-field:focus { border-color: ${GOLD}; }
.ct-field::placeholder { color: #5f636f; }
textarea.ct-field { resize: vertical; min-height: 110px; }
.ct-submit {
  background: ${GOLD};
  color: #000;
  border: none;
  padding: 14px;
  border-radius: 6px;
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  margin-top: 4px;
  transition: background .2s, box-shadow .2s;
}
.ct-submit:hover { background: #f0c777; box-shadow: 0 6px 20px rgba(223,177,91,0.3); }
.ct-note { font-size: 12px; color: #6f7280; text-align: center; margin: 0; }

.ct-success {
  background: #161821;
  border: 1px solid ${GOLD};
  color: ${GOLD};
  padding: 34px 20px;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.7;
}
.ct-success span { display: block; margin-top: 8px; font-size: 13px; font-weight: 400; color: #a3a6b0; }

.ct-btn-gold:focus-visible, .ct-btn-ghost:focus-visible, .ct-submit:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 3px;
}

/* ---------- Mobile ---------- */
@media (max-width: 860px) {
  .ct-grid { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .ct-top { padding: 120px 16px 40px; }
  .ct-grid { padding: 0 16px; }
  .ct-card { padding: 24px 20px; }
  .ct-two { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) {
  .ct-top-inner { animation: none; }
}
`;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: INQUIRY_TYPES[0],
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // On phones: opens the dialer. On a laptop: copies the number.
  const handleCall = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `tel:${PHONE_DISPLAY.replace(/\s/g, '')}`;
    } else {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(PHONE_DISPLAY);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = [
      'New message - Luxora Motors',
      `Inquiry: ${formData.type}`,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || '-'}`,
      `Message: ${formData.message}`
    ].join('\n');

    // Opens WhatsApp with the message ready to send
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', type: INQUIRY_TYPES[0], message: '' });
    }, 4000);
  };

  return (
    <div className="ct-page">
      <style>{css}</style>

      {/* Hero */}
      <div className="ct-top">
        <div className="ct-top-inner">
          <span className="ct-brand-name">PORSCHE</span>
          <span className="ct-brand-sub">EXCLUSIVE ATELIER</span>
          <div className="ct-rule" />

          <p className="ct-eyebrow">— Contact Us —</p>
          <h1 className="ct-h1">Our Team Is Ready to Answer Every Question</h1>
          <p className="ct-lead">
            Ask us about available cars, book a test drive, or request a custom build
            or private maintenance service.
          </p>
        </div>
      </div>

      <div className="ct-grid">
        {/* Contact info */}
        <div className="ct-card">
          <h2 className="ct-card-title gold">Get in Touch</h2>

          <div className="ct-info">
            <div className="ct-row">
              <div className="ct-icon">📍</div>
              <div>
                <p className="ct-row-label">Main Showroom</p>
                <p className="ct-row-value">Main Branch – Zagazig / Cairo</p>
              </div>
            </div>

            <div className="ct-row">
              <div className="ct-icon">📞</div>
              <div>
                <p className="ct-row-label">VIP Hotline</p>
                <p className="ct-row-value">
                  <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}>{PHONE_DISPLAY}</a>
                </p>
              </div>
            </div>

            <div className="ct-row">
              <div className="ct-icon">✉</div>
              <div>
                <p className="ct-row-label">Email</p>
                <p className="ct-row-value">
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
              </div>
            </div>
          </div>

          <div className="ct-actions">
            <a
              className="ct-btn-gold"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
            <button type="button" className="ct-btn-ghost" onClick={handleCall}>
              {copied ? 'Number copied ✓' : 'Call Now'}
            </button>
          </div>

          <p className="ct-hours">✦ Open daily from 9:00 AM to 10:00 PM</p>
        </div>

        {/* Message form */}
        <div className="ct-card">
          <h2 className="ct-card-title">Send Us a Message</h2>

          {submitted ? (
            <div className="ct-success">
              ✓ Your message is ready!
              <span>Please press Send in WhatsApp to complete it. Our advisor will reply shortly.</span>
            </div>
          ) : (
            <form className="ct-form" onSubmit={handleSubmit}>
              <div className="ct-two">
                <div>
                  <label className="ct-label">Full Name</label>
                  <input
                    className="ct-field"
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name..."
                  />
                </div>
                <div>
                  <label className="ct-label">Phone / WhatsApp</label>
                  <input
                    className="ct-field"
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+20..."
                  />
                </div>
              </div>

              <div className="ct-two">
                <div>
                  <label className="ct-label">Email (optional)</label>
                  <input
                    className="ct-field"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label className="ct-label">Inquiry Type</label>
                  <select
                    className="ct-field"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    {INQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="ct-label">Message</label>
                <textarea
                  className="ct-field"
                  required
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you today?"
                />
              </div>

              <button type="submit" className="ct-submit">Send Message</button>
              <p className="ct-note">Your message opens in WhatsApp so you can review it before sending.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
