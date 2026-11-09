
import React, { useState, useMemo } from 'react';
import CarsExtras from './CarsExtras';

// WhatsApp number with country code, digits only (no + and no leading 0). Use the same number as the Services page.
const WHATSAPP_NUMBER = '201000000000';

const CARS_DATA = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  model: i % 3 === 0 ? `Aventador SVJ LP ${770 - i * 5}` : i % 3 === 1 ? `Huracan Evo ${640 - i * 4}` : `911 GT3 RS ${520 + i * 5}`,
  brand: i % 3 === 0 ? 'LAMBORGHINI' : i % 3 === 1 ? 'FERRARI' : 'PORSCHE',
  class: i < 5 ? 'FLAGSHIP' : i < 12 ? 'HYPERCAR' : 'SUPERCAR',
  price: 320000 + (i + 1) * 140000,
  power: `${550 + i * 12} HP`,
  acceleration: `${(3.5 - i * 0.04).toFixed(2)}s`,
  topSpeed: `${320 + (i % 4) * 5} km/h`,
  engine: i % 3 === 0 ? '6.5L V12 Naturally Aspirated' : i % 3 === 1 ? '5.2L V10 Naturally Aspirated' : '4.0L Flat-6 Boxer',
  transmission: '7-Speed Dual-Clutch',
  year: 2024,
  image: `/img/${(i % 12) + 1}.jpeg`
}));

const fieldStyle = {
  padding: '10px',
  background: '#1a1a1a',
  border: '1px solid #333',
  color: '#fff',
  borderRadius: '5px',
  width: '100%',
  boxSizing: 'border-box'
};

export default function AllCars() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('ALL CLASSES');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [sortOrder, setSortOrder] = useState('Featured Curations');
  const [maxPrice, setMaxPrice] = useState(3500000);
  const [favorites, setFavorites] = useState([]);

  // Modal state: 'specs' or 'testDrive'
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  // Test drive booking form fields
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [testDate, setTestDate] = useState('');
  const [testTime, setTestTime] = useState('10:00');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredCars = useMemo(() => {
    return CARS_DATA
      .filter(car => {
        const matchesSearch = car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              car.brand.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesClass = selectedClass === 'ALL CLASSES' || car.class.toUpperCase() === selectedClass.toUpperCase();
        const matchesBrand = selectedBrand === 'All Brands' || car.brand === selectedBrand.toUpperCase();
        const matchesPrice = car.price <= maxPrice;

        return matchesSearch && matchesClass && matchesBrand && matchesPrice;
      })
      .sort((a, b) => {
        if (sortOrder === 'Price: Low to High') return a.price - b.price;
        if (sortOrder === 'Price: High to Low') return b.price - a.price;
        return 0;
      });
  }, [searchTerm, selectedClass, selectedBrand, sortOrder, maxPrice]);

  const handleTestDriveSubmit = (e) => {
    e.preventDefault();

    const message = [
      'New test drive request - Luxora Motors',
      `Vehicle: ${selectedCar.brand} ${selectedCar.model}`,
      `Name: ${clientName}`,
      `Phone: ${clientPhone}`,
      `Email: ${clientEmail}`,
      `Preferred date: ${testDate}`,
      `Preferred time: ${testTime}`
    ].join('\n');

    // Opens WhatsApp with the message ready to send
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );

    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setActiveModal(null);
      setClientName('');
      setClientPhone('');
      setClientEmail('');
      setTestDate('');
      setTestTime('10:00');
    }, 3000);
  };

  return (
    <div className="inventory-page" style={{ padding: '20px', paddingTop: '90px', backgroundColor: '#0c0c0c', color: '#fff', minHeight: '100vh', position: 'relative' }}>
      {/* Specs / test drive booking modal */}
      {activeModal && selectedCar && (
        <div
          onClick={() => setActiveModal(null)}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, backdropFilter: 'blur(5px)', padding: '16px', boxSizing: 'border-box'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: '#141414', border: '1px solid #dfb15b', padding: '30px', borderRadius: '12px', width: '450px', maxWidth: '100%', maxHeight: '90vh', overflowY: 'auto', color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.8)', boxSizing: 'border-box' }}
          >

            {activeModal === 'specs' ? (
              <div>
                <h2 style={{ color: '#dfb15b', marginBottom: '15px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>{selectedCar.brand} {selectedCar.model}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', marginBottom: '20px', color: '#ccc' }}>
                  <p><strong>Engine:</strong> {selectedCar.engine}</p>
                  <p><strong>Horsepower:</strong> {selectedCar.power}</p>
                  <p><strong>Acceleration (0-100):</strong> {selectedCar.acceleration}</p>
                  <p><strong>Top Speed:</strong> {selectedCar.topSpeed}</p>
                  <p><strong>Transmission:</strong> {selectedCar.transmission}</p>
                  <p><strong>Model Year:</strong> {selectedCar.year}</p>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  style={{ width: '100%', padding: '10px', background: '#dfb15b', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', color: '#000' }}
                >
                  Close Specs
                </button>
              </div>
            ) : (
              <div>
                <h2 style={{ color: '#dfb15b', marginBottom: '15px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Test Drive Booking</h2>
                {bookingSuccess ? (
                  <div style={{ textAlign: 'center', padding: '20px', color: '#4BB543', fontWeight: 'bold' }}>
                    ✓ Your request for {selectedCar.brand} {selectedCar.model} has been received!
                    <div style={{ marginTop: '10px', fontSize: '13px', fontWeight: 'normal', color: '#aaa' }}>
                      Please press Send in WhatsApp to complete your booking.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleTestDriveSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <p style={{ fontSize: '13px', color: '#aaa', margin: 0 }}>Vehicle: {selectedCar.brand} {selectedCar.model}</p>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      style={fieldStyle}
                    />
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      style={fieldStyle}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      style={fieldStyle}
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={testDate}
                        onChange={(e) => setTestDate(e.target.value)}
                        style={{ ...fieldStyle, colorScheme: 'dark' }}
                      />
                      <input
                        type="time"
                        required
                        value={testTime}
                        onChange={(e) => setTestTime(e.target.value)}
                        style={{ ...fieldStyle, colorScheme: 'dark' }}
                      />
                    </div>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                      <button type="submit" style={{ flex: 1, padding: '10px', background: '#dfb15b', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', color: '#000' }}>Confirm Booking</button>
                      <button type="button" onClick={() => setActiveModal(null)} style={{ flex: 1, padding: '10px', background: '#333', border: 'none', borderRadius: '5px', color: '#fff', cursor: 'pointer' }}>Cancel</button>
                    </div>
                  </form>
                )}
              </div>
            )}

          </div>
        </div>
      )}

      {/* Filters and search */}
      <div className="filters-section" style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          placeholder="Search by model, brand, or engine"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '12px', background: '#1a1a1a', border: '1px solid #333', color: '#fff', borderRadius: '8px' }}
        />

        <div className="classes-btns" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {['ALL CLASSES', 'HYPERCAR', 'SUPERCAR', 'FLAGSHIP'].map(cls => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              style={{
                padding: '10px 20px',
                background: selectedClass === cls ? '#dfb15b' : '#1a1a1a',
                color: selectedClass === cls ? '#000' : '#fff',
                border: '1px solid #dfb15b',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              {cls}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            style={{ padding: '10px', background: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '5px' }}
          >
            <option value="All Brands">All Brands</option>
            <option value="LAMBORGHINI">Lamborghini</option>
            <option value="FERRARI">Ferrari</option>
            <option value="PORSCHE">Porsche</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{ padding: '10px', background: '#1a1a1a', color: '#fff', border: '1px solid #333', borderRadius: '5px' }}
          >
            <option value="Featured Curations">Featured Curations</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
          </select>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>Max Price: ${maxPrice.toLocaleString()}</span>
            <input
              type="range"
              min="300000"
              max="3500000"
              step="50000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>

          <button
            onClick={() => { setSearchTerm(''); setSelectedClass('ALL CLASSES'); setSelectedBrand('All Brands'); setMaxPrice(3500000); }}
            style={{ padding: '10px 15px', background: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Reset
          </button>
        </div>

        <p>Showing {filteredCars.length} of {CARS_DATA.length} luxury vehicles | Saved: {favorites.length}</p>
      </div>

      {/* Cars grid */}
      <div className="cars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {filteredCars.map(car => {
          const isSaved = favorites.includes(car.id);
          return (
            <div key={car.id} className="car-card" style={{ background: '#141414', border: '1px solid #222', borderRadius: '10px', overflow: 'hidden', padding: '15px' }}>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', top: '10px', left: '10px', background: '#dfb15b', color: '#000', padding: '2px 8px', fontSize: '10px', fontWeight: 'bold', borderRadius: '4px' }}>{car.class}</span>
                <img src={car.image} alt={car.model} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '6px' }} onError={(e)=>{e.target.src='https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=600&q=80'}} />

                <button
                  onClick={() => toggleFavorite(car.id)}
                  style={{
                    position: 'absolute', top: '10px', right: '10px',
                    background: 'rgba(0,0,0,0.7)', border: 'none',
                    color: isSaved ? '#ff3333' : '#fff',
                    fontSize: '16px', borderRadius: '50%', width: '32px', height: '32px',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >
                  {isSaved ? '❤️' : '🤍'}
                </button>
              </div>

              <div style={{ marginTop: '15px' }}>
                <span style={{ fontSize: '11px', color: '#888', letterSpacing: '1px' }}>{car.brand}</span>
                <h3 style={{ fontSize: '16px', margin: '0px' }}>{car.model}</h3>
                <p style={{ color: '#dfb15b', fontWeight: 'bold' }}>${car.price.toLocaleString()} <span style={{ fontSize: '10px', color: '#aaa', fontWeight: 'normal' }}>MSRP excl. taxes</span></p>

                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0', fontSize: '11px', borderTop: '1px solid #222', borderBottom: '1px solid #222', padding: '8px 0', color: '#ccc' }}>
                  <div><span>POWER</span><br/><strong>{car.power}</strong></div>
                  <div><span>0-100</span><br/><strong>{car.acceleration}</strong></div>
                  <div><span>SPEED</span><br/><strong>{car.topSpeed}</strong></div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => { setSelectedCar(car); setActiveModal('specs'); }}
                    style={{ flex: 1, padding: '8px', background: 'transparent', border: '1px solid #444', color: '#fff', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    SPECS
                  </button>
                  <button
                    onClick={() => { setSelectedCar(car); setActiveModal('testDrive'); }}
                    style={{ flex: 1, padding: '8px', background: '#dfb15b', border: 'none', color: '#000', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    TEST DRIVE
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <CarsExtras
        onBook={() => {
          setSelectedCar(filteredCars[0] || CARS_DATA[0]);
          setActiveModal('testDrive');
        }}
      />
    </div>
  );
}
