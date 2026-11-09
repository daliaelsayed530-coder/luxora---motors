const CARS_DATA = Array.from({ length: 20 }, (_, i) => {
  const id = i + 1;
  const names = [
    'Porsche 918 Spyder', 'Lamborghini Aventador SVJ', 'Ferrari SF90 Stradale', 'Rolls-Royce Phantom VIII',
    'Bentley Continental GT', 'Porsche 911 GT3 RS', 'Lamborghini Huracán', 'Aston Martin DBS',
    'Bugatti Chiron', 'McLaren P1', 'Ferrari LaFerrari', 'Porsche Taycan Cross',
    'Lamborghini Revuelto', 'Rolls-Royce Cullinan', 'Bentley Flying Spur', 'Aston Martin Valkyrie',
    'Mercedes-Maybach S-Class', 'Audi R8 V10', 'Maserati MC20', 'Porsche Carrera GT'
  ];

  return {
    id: id,
    name: names[i] || `Luxury Model ${id}`,
    price: `$${(300000 + id * 85000).toLocaleString()}`,
    hp: `${500 + id * 20} HP`,
    accel: `${(3.5 - (id * 0.05)).toFixed(1)}s`,
    speed: `${300 + id * 2} km/h`,
    image: `/img/${id}.jpeg`
  };
});

export default CARS_DATA;