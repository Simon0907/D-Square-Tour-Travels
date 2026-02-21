import React from 'react';
import { useNavigate } from "react-router-dom";   // ✅ ADD THIS
import '../css/OurVehicles.css';


const TariffPackages = () => {
    const navigate = useNavigate();  
  const vehicles = [
    {
      name: 'Mini',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400',
      belowKm: 250,
      aboveKm: 250,
      rentPerDay: '₹1300/-',
      fuelChargeBelowKm: '₹8/-',
      perDayKm: '₹11/-',
      driverBetta: '₹200/-'
    },
    {
      name: 'Sedan',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
      belowKm: 250,
      aboveKm: 250,
      rentPerDay: '₹1500/-',
      fuelChargeBelowKm: '₹9/-',
      perDayKm: '₹12/-',
      driverBetta: '₹200/-'
    },
    {
      name: 'Etios',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400',
      belowKm: 250,
      aboveKm: 250,
      rentPerDay: '₹1600/-',
      fuelChargeBelowKm: '₹10/-',
      perDayKm: '₹13/-',
      driverBetta: '₹300/-'
    },
    {
      name: 'SUV (Tavera A/C)',
      image: 'https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=400',
      belowKm: 300,
      aboveKm: 300,
      rentPerDay: '₹1800/-',
      fuelChargeBelowKm: '₹11/-',
      perDayKm: '₹16/-',
      driverBetta: '₹400/-'
    },
    {
      name: 'SUV (Tavera Non A/C)',
      image: 'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=400',
      belowKm: 300,
      aboveKm: 300,
      rentPerDay: '₹1800/-',
      fuelChargeBelowKm: '₹10/-',
      perDayKm: '₹16/-',
      driverBetta: '₹400/-'
    },
    {
      name: 'SUV (Innova A/C)',
      image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=400',
      belowKm: 300,
      aboveKm: 300,
      rentPerDay: '₹2200/-',
      fuelChargeBelowKm: '₹12/-',
      perDayKm: '₹16/-',
      driverBetta: '₹400/-'
    },
    {
      name: 'SUV (Innova Crysta)',
      image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=400',
      belowKm: 300,
      aboveKm: 300,
      rentPerDay: '₹2600/-',
      fuelChargeBelowKm: '₹17/-',
      perDayKm: '₹21/-',
      driverBetta: '₹400/-'
    },
    {
      name: 'Tempo',
      image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=400',
      belowKm: 350,
      aboveKm: 350,
      rentPerDay: '₹2600/-',
      fuelChargeBelowKm: '₹16/-',
      perDayKm: '₹21/-',
      driverBetta: '₹500/-'
    },
    {
      name: '21 Seater Coach A/C',
      image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=400',
      belowKm: 350,
      aboveKm: 350,
      rentPerDay: '₹5500/-',
      fuelChargeBelowKm: '₹25/-',
      perDayKm: '₹31/-',
      driverBetta: '₹600/-'
    },
    {
      name: '21 Seater Coach Non A/C',
      image: 'https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=400',
      belowKm: 350,
      aboveKm: 350,
      rentPerDay: '₹3600/-',
      fuelChargeBelowKm: '₹17/-',
      perDayKm: '₹24/-',
      driverBetta: '₹500/-'
    }
  ];
 const handleBookNow = (vehicle) => {
    navigate("/vehiclesbooking", {   // ✅ MATCH ROUTE NAME
      state: { vehicle }
    });
  };

  return (
    <div className="tariff-packages">
      <div className="header-section">
        <div className="section-label">
          <span className="label-line"></span>
          <span className="label-text">OUR VEHICLE</span>
        </div>
        <h1 className="main-title">Tariff Packages</h1>
        <p className="description">
          Vismi Cabs offers competitive and transparent tariff plans for local, outstation, and tour packages across South India. Choose from a range of vehicles like Sedans, SUVs, and Tempo Travellers to suit your travel needs and budget.
        </p>
        <div className="extra-charges-badge">
          Extra : Tollgate, Parking, Hills Charges
        </div>
      </div>

      <div className="vehicles-grid">
        {vehicles.map((vehicle, index) => (
          <div className="vehicle-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="vehicle-image-container">
              <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
            </div>

            <h3 className="vehicle-name">{vehicle.name}</h3>

            <div className="pricing-section">
              <h4 className="pricing-tier">Below {vehicle.belowKm} km (Per Day)</h4>
              <div className="price-row">
                <span className="price-label">Rent Per Day:</span>
                <span className="price-value">{vehicle.rentPerDay}</span>
              </div>
              <div className="price-row">
                <span className="price-label">Fuel Charge Per km:</span>
                <span className="price-value">{vehicle.fuelChargeBelowKm}</span>
              </div>

              <h4 className="pricing-tier">Above {vehicle.aboveKm} km (Per Day)</h4>
              <div className="price-row">
                <span className="price-label">Per Day km:</span>
                <span className="price-value">{vehicle.perDayKm}</span>
              </div>
              <div className="price-row">
                <span className="price-label">Driver Betta :</span>
                <span className="price-value">{vehicle.driverBetta}</span>
              </div>
            </div>

             <button
              className="book-now-btn"
              onClick={() => handleBookNow(vehicle)}  // ✅ THIS WAS MISSING
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TariffPackages;
