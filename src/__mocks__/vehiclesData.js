export const mockVehicles = [
  {
    apiUrl: '/api/vehicle_fpace.json',
    description: "Jaguar's luxury performance SUV.",
    id: 'fpace',
    media: [
      {
        name: 'vehicle',
        url: '/images/16x9/fpace_k17.jpg'
      },
      {
        name: 'vehicle',
        url: '/images/1x1/fpace_k17.jpg'
      }
    ],
    meta: {
      bodystyles: ['SUV'],
      drivetrain: ['AWD', 'RWD'],
      emissions: {
        template: 'CO2 Emissions $value g/km',
        value: 100
      },
      passengers: 5
    },
    modelYear: 'k17',
    price: '£40,000'
  },
  {
    apiUrl: '/api/vehicle_xe.json',
    description: 'The most advanced, efficient and refined sports saloon that Jaguar has ever produced',
    id: 'xe',
    media: [
      {
        name: 'vehicle',
        url: '/images/16x9/xe_k17.jpg'
      },
      {
        name: 'vehicle',
        url: '/images/1x1/xe_k17.jpg'
      }
    ],
    meta: {
      bodystyles: ['saloon'],
      drivetrain: ['AWD', 'RWD'],
      emissions: {
        template: 'CO2 Emissions $value g/km',
        value: 99
      },
      passengers: 5
    },
    modelYear: 'k17',
    price: '£30,000'
  }

];
