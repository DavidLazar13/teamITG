import React from 'react';
import useData from './useData';
import './style.scss';
import VehicleCard from '../VehicleCard';

export default function VehicleList() {
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading" aria-busy="true">Loading</div>;
  }

  if (error) {
    return <div data-testid="error" aria-live="polite">{ error }</div>;
  }

  return (
    <div className="VehicleList" data-testid="results">
      {vehicles.map((vehicle, index) => (
        <VehicleCard vehicle={vehicle} index={index} key={vehicle.id} />
      ))}
    </div>
  );
}
