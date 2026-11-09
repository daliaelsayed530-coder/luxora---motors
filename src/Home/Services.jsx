import React, { useState } from 'react';

const GOLD = '#dfb15b';

// ====== CONTACT SETTINGS (replace with the real values before launch) ======
// WhatsApp number with country code, digits only (no + and no leading 0)
const WHATSAPP_NUMBER = '201000000000';
// Your Formspree form URL (email is skipped until you replace this)
const FORMSPREE_URL = 'https://formspree.io/f/your_form_id';
// ===========================================================================

const css = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap');

.svc-page {
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
.svc-page *, .svc-page *::before, .svc-page *::after { box-sizing: border-box; }

/* ---------- Top: brand + hero ---------- */
.svc-top {
  height: auto;
  text-align: center;
  padding: 140px 20px 70px;
  background: radial-gradient(ellipse 60% 100% at 50% 0%, rgba(223,177,91,0.14), transparent 70%);
}
.svc-top-inner { animation: svcRise .8s cubic-bezier(.2,.7,.2,1) both; }
@keyframes svcRise {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: none; }
}
.svc-brand-name {
  display: block;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 8px;
  padding-inline-start: 8px;
  color: #fff;
}
.svc-brand-sub {
  display: block;
  margin-top: 6px;
  font-size: 11px;
  letter-spacing: 4px;
  padding-inline-start: 4px;
  color: ${GOLD};
}
.svc-rule {
  width: 70px;
  height: 1px;
  margin: 28px auto 44px;
  background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
}
.svc-eyebrow {
  color: ${GOLD};
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 14px;
}
.svc-h1 {
  font-size: clamp(30px, 6vw, 52px);
  font-weight: 800;
  line-height: 1.2;
  margin: 0 auto 34px;
  max-width: 780px;
  color: #fff;
}
.svc-ghost {
  background: transparent;
  border: 1px solid ${GOLD};
  color: ${GOLD};
  padding: 12px 32px;
  border-radius: 4px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background .25s, color .25s;
}
.svc-ghost:hover { background: ${GOLD}; color: #000; }

/* ---------- Services list ---------- */
.svc-list { max-width: 920px; margin: 0 auto; padding: 0 24px; }
.svc-row {
  position: relative;
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 10px 30px;
  padding: 46px 10px;
  border-top: 1px solid #20222b;
  transition: background .3s;
}
.svc-row:last-child { border-bottom: 1px solid #20222b; }
.svc-row:hover { background: linear-gradient(to right, rgba(223,177,91,0.07), transparent 75%); }

.svc-num {
  text-align: left;
  font-size: 76px;
  font-weight: 800;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px rgba(223,177,91,0.55);
  transition: -webkit-text-stroke-color .3s;
}
.svc-row:hover .svc-num { -webkit-text-stroke-color: ${GOLD}; }

.svc-star { position: absolute; top: 46px; right: 10px; color: ${GOLD}; font-size: 16px; }

.svc-sub  { color: ${GOLD}; font-size: 14px; font-weight: 600; margin: 0 0 6px; }
.svc-name { font-size: clamp(21px, 3.4vw, 27px); font-weight: 800; margin: 0 0 12px; line-height: 1.35; color: #fff; }
.svc-desc { color: #a3a6b0; font-size: 15px; line-height: 1.85; margin: 0; max-width: 62ch; }

.svc-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 26px;
}
.svc-badge { color: #8d909b; font-size: 13px; }
.svc-book {
  background: ${GOLD};
  color: #000;
  border: none;
  padding: 11px 28px;
  border-radius: 5px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: background .2s, box-shadow .2s;
}
.svc-book:hover { background: #f0c777; box-shadow: 0 6px 20px rgba(223,177,91,0.3); }

.svc-ghost:focus-visible, .svc-book:focus-visible, .svc-submit:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 3px;
}

/* ---------- Modals ---------- */
.svc-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.82);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000000000; /* above the fixed navbar */
  padding: 20px;
}
.svc-modal {
  position: relative;
  width: 100%;
  background: #0e0f14;
  border: 1px solid ${GOLD};
  border-radius: 12px;
  padding: 30px;
  color: #fff;
  box-shadow: 0 20px 60px rgba(0,0,0,0.7);
  animation: svcPop .22s ease;
}
@keyframes svcPop {
  from { opacity: 0; transform: scale(.96); }
  to   { opacity: 1; transform: none; }
}
.svc-close {
  position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
  color: #aaa;
  font-size: 18px;
  cursor: pointer;
  transition: color .2s;
}
.svc-close:hover { color: #fff; }
.svc-modal-title { font-size: 18px; font-weight: 800; text-align: center; margin: 0 0 20px; }
.svc-modal-service { text-align: center; color: ${GOLD}; font-size: 13px; font-weight: 600; margin: -8px 0 20px; }
.svc-form { display: flex; flex-direction: column; gap: 14px; }
.svc-label { display: block; font-size: 12px; color: #aaa; margin-bottom: 5px; }
.svc-field {
  width: 100%;
  padding: 11px 12px;
  background: #161821;
  border: 1px solid #2a2c37;
  color: #fff;
  border-radius: 6px;
  font-family: inherit;
  font-size: 13px;
  outline: none;
  transition: border-color .2s;
}
.svc-field:focus { border-color: ${GOLD}; }
.svc-submit {
  background: ${GOLD};
  color: #000;
  border: none;
  padding: 13px;
  border-radius: 6px;
  font-family: inherit;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  margin-top: 6px;
  transition: background .2s;
}
.svc-submit:hover { background: #f0c777; }
.svc-success { text-align: center; padding: 22px 0; color: ${GOLD}; font-size: 15px; font-weight: 700; }
.svc-success-note { display: block; margin-top: 10px; font-size: 12.5px; font-weight: 400; color: #a3a6b0; }
.svc-phone {
  background: #161821;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #2a2c37;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 18px;
}

/* ---------- Mobile ---------- */
@media (max-width: 640px) {
  .svc-top { padding: 120px 16px 50px; }
  .svc-list { padding: 0 18px; }
  .svc-row { grid-template-columns: 1fr; padding: 34px 4px; }
  .svc-num { font-size: 54px; }
  .svc-star { top: 38px; }
  .svc-foot { flex-direction: column; align-items: stretch; text-align: center; }
  .svc-book { width: 100%; }
  .svc-modal { padding: 24px 20px; }
}

@media (prefers-reduced-motion: reduce) {
  .svc-top-inner, .svc-modal { animation: none; }
}
`;

export default function Services() {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedService, setSelectedService] = useState('');
  const [selectedCar, setSelectedCar] = useState('Porsche 911 GT3 RS');

  // Booking form
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // VIP consultation form
  const [vipName, setVipName] = useState('');
  const [vipPhone, setVipPhone] = useState('');
  const [vipEmail, setVipEmail] = useState('');
  const [vipSuccess, setVipSuccess] = useState(false);

  const sendRequest = (lines, payload) => {
    // 1) WhatsApp: opens with the message ready to send
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
      'noopener,noreferrer'
    );

    // 2) Email through Formspree (skipped until a real form URL is set)
    if (!FORMSPREE_URL.includes('your_form_id')) {
      fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    sendRequest(
      [
        'New booking request - Luxora Motors',
        `Service: ${selectedService}`,
        `Car: ${selectedCar}`,
        `Name: ${clientName}`,
        `Phone: ${clientPhone}`,
        `Email: ${clientEmail}`,
        `Preferred date: ${preferredDate}`,
        `Preferred time: ${preferredTime}`
      ],
      {
        _subject: 'New booking request - Luxora Motors',
        service: selectedService,
        car: selectedCar,
        name: clientName,
        phone: clientPhone,
        email: clientEmail,
        date: preferredDate,
        time: preferredTime
      }
    );

    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setActiveModal(null);
      setClientName('');
      setClientPhone('');
      setClientEmail('');
      setPreferredDate('');
      setPreferredTime('10:00');
    }, 3500);
  };

  const handleVipSubmit = (e) => {
    e.preventDefault();

    sendRequest(
      [
        'New VIP consultation request - Luxora Motors',
        `Full name: ${vipName}`,
        `Phone: ${vipPhone}`,
        `Email: ${vipEmail}`
      ],
      {
        _subject: 'New VIP consultation request - Luxora Motors',
        name: vipName,
        phone: vipPhone,
        email: vipEmail
      }
    );

    setVipSuccess(true);
    setTimeout(() => {
      setVipSuccess(false);
      setActiveModal(null);
      setVipName('');
      setVipPhone('');
      setVipEmail('');
    }, 3500);
  };

  const servicesList = [
    {
      id: '01',
      subtitle: 'Made to Order',
      title: 'Exclusive Porsche Customization',
      desc: 'Turn your Porsche into a one-of-a-kind work of art with custom paint, hand-stitched leather, and exceptional carbon-fiber touches tailored to your personal taste.',
      footerBadge: 'Original Stuttgart standards'
    },
    {
      id: '02',
      subtitle: 'Exclusive Driving Experience',
      title: 'VIP Track & Circuit Booking',
      desc: 'Experience the ultimate performance and full power of Porsche sports cars on private, closed circuits under the supervision of professional driving instructors.',
      footerBadge: 'A complete experience with a specialist team'
    },
    {
      id: '03',
      subtitle: 'VIP Maintenance & Transport Services',
      title: 'Car Care & On-Site Service',
      desc: 'We provide fully insured, enclosed-trailer car transport for comprehensive scheduled maintenance, while preserving your car’s original value.',
      footerBadge: 'Full quality and safety guarantee'
    }
  ];

  return (
    <div className="svc-page">
      <style>{css}</style>

      {/* Brand + Hero */}
      <div className="svc-top">
        <div className="svc-top-inner">
          <span className="svc-brand-name">PORSCHE</span>
          <span className="svc-brand-sub">EXCLUSIVE ATELIER</span>
          <div className="svc-rule" />

          <p className="svc-eyebrow">— Elite Services —</p>
          <h1 className="svc-h1">Exceptional Care Beyond Expectations</h1>

          <button className="svc-ghost" onClick={() => setActiveModal('vip')}>
            Request a VIP Consultation
          </button>
        </div>
      </div>

      {/* Services List */}
      <div className="svc-list">
        {servicesList.map((service) => (
          <div key={service.id} className="svc-row">
            <span className="svc-star">✦</span>
            <div className="svc-num">{service.id}.</div>

            <div>
              <p className="svc-sub">{service.subtitle}</p>
              <h3 className="svc-name">{service.title}</h3>
              <p className="svc-desc">{service.desc}</p>

              <div className="svc-foot">
                <span className="svc-badge">✦ {service.footerBadge}</span>
                <button
                  className="svc-book"
                  onClick={() => {
                    setSelectedService(service.title);
                    setActiveModal('testDrive');
                  }}
                >
                  Book Service
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {activeModal === 'testDrive' && (
        <div className="svc-overlay" onClick={() => setActiveModal(null)}>
          <div
            className="svc-modal"
            style={{ maxWidth: '440px', maxHeight: '90vh', overflowY: 'auto' }}
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="svc-close" onClick={() => setActiveModal(null)} aria-label="Close">
              ✕
            </button>

            <h2 className="svc-modal-title">Book a Private Test Drive</h2>
            {selectedService && <p className="svc-modal-service">{selectedService}</p>}

            {bookingSuccess ? (
              <div className="svc-success">
                ✓ Your request has been received successfully!
                <span className="svc-success-note">
                  Please press Send in WhatsApp to complete your booking.
                </span>
              </div>
            ) : (
              <form className="svc-form" onSubmit={handleBookingSubmit}>
                <div>
                  <label className="svc-label">Car</label>
                  <select
                    className="svc-field"
                    value={selectedCar}
                    onChange={(e) => setSelectedCar(e.target.value)}
                  >
                    <option>Porsche 911 GT3 RS</option>
                    <option>Porsche Taycan Turbo S</option>
                  </select>
                </div>

                <div>
                  <label className="svc-label">Full Name</label>
                  <input
                    className="svc-field"
                    type="text"
                    required
                    placeholder="Your full name..."
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="svc-label">Phone / WhatsApp</label>
                  <input
                    className="svc-field"
                    type="tel"
                    required
                    placeholder="+20..."
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                  />
                </div>

                <div>
                  <label className="svc-label">Email</label>
                  <input
                    className="svc-field"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label className="svc-label">Preferred Date</label>
                    <input
                      className="svc-field"
                      style={{ colorScheme: 'dark' }}
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="svc-label">Preferred Time</label>
                    <input
                      className="svc-field"
                      style={{ colorScheme: 'dark' }}
                      type="time"
                      required
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                    />
                  </div>
                </div>

                <button type="submit" className="svc-submit">
                  Confirm Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* VIP Consultation Modal */}
      {activeModal === 'vip' && (
        <div className="svc-overlay" onClick={() => setActiveModal(null)}>
          <div
            className="svc-modal"
            style={{ maxWidth: '400px', maxHeight: '90vh', overflowY: 'auto' }}
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="svc-close" onClick={() => setActiveModal(null)} aria-label="Close">
              ✕
            </button>
            <h2 className="svc-modal-title" style={{ color: GOLD }}>Private VIP Consultation</h2>
            <div className="svc-phone" style={{ textAlign: 'center' }}>📞 +966 9200 VIP CARS</div>

            {vipSuccess ? (
              <div className="svc-success">
                ✓ Your request has been received successfully!
                <span className="svc-success-note">
                  Please press Send in WhatsApp to complete your request.
                </span>
              </div>
            ) : (
              <form className="svc-form" onSubmit={handleVipSubmit}>
                <div>
                  <label className="svc-label">Full Name</label>
                  <input
                    className="svc-field"
                    type="text"
                    required
                    placeholder="Your full name..."
                    value={vipName}
                    onChange={(e) => setVipName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="svc-label">Phone / WhatsApp</label>
                  <input
                    className="svc-field"
                    type="tel"
                    required
                    placeholder="+20..."
                    value={vipPhone}
                    onChange={(e) => setVipPhone(e.target.value)}
                  />
                </div>

                <div>
                  <label className="svc-label">Email</label>
                  <input
                    className="svc-field"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={vipEmail}
                    onChange={(e) => setVipEmail(e.target.value)}
                  />
                </div>

                <button type="submit" className="svc-submit">
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}