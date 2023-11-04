import React, { useState, useEffect } from 'react';
import './style.scss';

export default function VehicleCard({ vehicle, index }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (window.innerWidth <= 768) {
      // For mobile devices
      setImageUrl(vehicle.media[1].url);
    } else {
      // For tablet and desktop
      setImageUrl(vehicle.media[0].url);
    }

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageUrl(vehicle.media[1].url);
      } else {
        setImageUrl(vehicle.media[0].url);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // Cleanup the event listener
      window.removeEventListener('resize', handleResize);
    };
  }, [vehicle]);
  return (
    <div className="vehicle-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <img src={imageUrl} alt={vehicle.id} className="vehicle-card__image" />
      <div className="vehicle-card__details">
        <h2 className="vehicle-card__name">
          Jaguar
          {' '}
          {vehicle.id}
        </h2>
        <p className="vehicle-card__price">
          From
          {' '}
          { vehicle.price }
        </p>
        <p className="vehicle-card__description">{vehicle.description}</p>
      </div>
    </div>
  );
}
