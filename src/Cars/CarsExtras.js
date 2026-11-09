
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../Home/LanguageContext';


const GOLD = '#dfb15b';


const extrasText = {
  en: {
    stats: [
      { n: 1200, suffix: '+', label: 'Cars delivered' },
      { n: 15, suffix: '', label: 'Years of experience' },
      { n: 98, suffix: '%', label: 'Happy clients' },
      { n: 24, suffix: '/7', label: 'Concierge support' },
    ],
    ctaTitle: 'Feel it before you own it',
    ctaBody: 'Book a private test drive and our concierge will arrange everything around your schedule.',
    ctaBtn: 'Book a test drive',
    perks: [
      { t: 'Full inspection', d: 'Every car passes a 200-point check before it reaches the showroom.' },
      { t: 'Warranty included', d: 'Factory-backed coverage with free first-year servicing.' },
      { t: 'Flexible financing', d: 'Plans built around your budget, approved in 48 hours.' },
    ],
    about: 'Luxury and performance cars, handpicked and delivered with care.',
    links: 'Explore',
    nav: ['Home', 'Inventory', 'Services', 'About us', 'Contact'],
    visit: 'Visit us',
    address: 'Showroom address, City, Country',
    hours: 'Daily 10:00 AM – 10:00 PM',
    rights: '© 2026 Luxora Motors. All rights reserved.',
  },
  ar: {
    stats: [
      { n: 1200, suffix: '+', label: 'سيارة تم تسليمها' },
      { n: 15, suffix: '', label: 'سنة خبرة' },
      { n: 98, suffix: '%', label: 'عملاء راضين' },
      { n: 24, suffix: '/7', label: 'دعم متواصل' },
    ],
    ctaTitle: 'جرّبها قبل ما تمتلكها',
    ctaBody: 'احجز تجربة قيادة خاصة وفريقنا هيرتب كل حاجة على مواعيدك.',
    ctaBtn: 'احجز تجربة قيادة',
    perks: [
      { t: 'فحص شامل', d: 'كل سيارة بتعدي فحص من 200 نقطة قبل ما توصل المعرض.' },
      { t: 'ضمان مشمول', d: 'ضمان من المصنع مع صيانة السنة الأولى مجانًا.' },
      { t: 'تمويل مرن', d: 'خطط على قد ميزانيتك والموافقة في 48 ساعة.' },
    ],
    about: 'سيارات فخمة وعالية الأداء، مختارة بعناية وبتتسلم باهتمام.',
    links: 'روابط',
    nav: ['الرئيسية', 'السيارات', 'الخدمات', 'من نحن', 'تواصل معنا'],
    visit: 'زورنا',
    address: 'عنوان المعرض، المدينة، الدولة',
    hours: 'يوميًا من 10 ص إلى 10 م',
    rights: '© 2026 لوكسورا موتورز. جميع الحقوق محفوظة.',
  },
};

const extrasRoutes = ['/', '/Cars', '/services', '/about', '/contact'];

function CountUp({ to, suffix }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / 1400, 1);
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function CarsExtras( { onBook } ) {
  const { lang } = useLang();
  const t = extrasText[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <div dir={dir} style={{ marginTop: '70px' }}>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          borderTop: '1px solid #222',
          borderBottom: '1px solid #222',
        }}
      >
        {t.stats.map((s, i) => (
          <div
            key={i}
            style={{
              padding: '56px 16px',
              textAlign: 'center',
              borderInlineEnd: i < t.stats.length - 1 ? '1px solid #1d1d1d' : 'none',
            }}
          >
            <div style={{ fontSize: '40px', fontWeight: 700, color: GOLD, lineHeight: 1 }}>
              <CountUp to={s.n} suffix={s.suffix} />
            </div>
            <div style={{ marginTop: '10px', fontSize: '13px', color: '#999' }}>{s.label}</div>
          </div>
        ))}
      </section>

      <section
        style={{
          margin: '60px 0',
          padding: '100px 28px',
          borderRadius: '14px',
          border: `1px solid ${GOLD}`,
          background:
            'radial-gradient(ellipse at 20% 0%, rgba(223,177,91,0.18), transparent 60%), #141414',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '32px', margin: 0, fontWeight: 700 }}>{t.ctaTitle}</h2>
        <p style={{ maxWidth: '520px', margin: '14px auto 28px', color: '#bbb', lineHeight: 1.7 }}>
          {t.ctaBody}
        </p>
       <button
  onClick={onBook}
  style={{
    padding: '14px 34px',
    background: GOLD,
    color: '#000',
    fontWeight: 700,
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
  }}
>
  {t.ctaBtn}
</button>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '0px',
        }}
      >
        {t.perks.map((p, i) => (
          <div
            key={i}
            style={{
              padding: '44px 32px',
              background: '#141414',
              border: '1px solid #222',
              borderTop: `2px solid ${GOLD}`,
              borderRadius: '8px',
            }}
          >
            <h3 style={{ fontSize: '17px', margin: '0 0 8px' }}>{p.t}</h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#999', lineHeight: 1.7 }}>{p.d}</p>
          </div>
        ))}
      </section>
    </div>
  );
}