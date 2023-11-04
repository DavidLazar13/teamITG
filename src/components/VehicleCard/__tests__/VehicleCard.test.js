import React from 'react';
import { render } from '@testing-library/react';
import VehicleCard from '../index';
import {mockVehicles } from '../../../__mocks__/vehiclesData';

describe('<VehicleCard /> Tests', () => {
  it('Should render vehicle details correctly', () => {
    const { getByText, getByAltText } = render(<VehicleCard vehicle={mockVehicles[0]} index={0} />);
    expect(getByText('Jaguar fpace')).toBeTruthy();
    expect(getByText('From £40,000')).toBeTruthy();
    expect(getByText("Jaguar's luxury performance SUV.")).toBeTruthy();
    expect(getByAltText('fpace')).toBeTruthy();
  });
});
