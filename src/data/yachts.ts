export interface Yacht {
  id: string;
  name: string;
  tagline: string;
  video: string;
  quickSpecs: string[];
  fullSpecs: {
    category: string;
    specs: { label: string; value: string }[];
  }[];
}

export const yachts: Yacht[] = [
  {
    id: 'ocean-eclipse',
    name: 'OCEAN ECLIPSE',
    tagline: 'REFINED CRUISING FOR THE DISCERNING FEW',
    video: 'White_superyacht_cruising_blue_w…_202605121714.mp4',
    quickSpecs: [
      'LENGTH 28M',
      'BEAM 6.8M',
      'CRUISING SPEED 22 KNOTS',
      'GUESTS UP TO 12',
      'CABINS 4 EN-SUITE',
      'CREW 5'
    ],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'Length Overall', value: '28.0m (91.9ft)' },
          { label: 'Beam', value: '6.8m (22.3ft)' },
          { label: 'Draft', value: '1.9m (6.2ft)' },
          { label: 'Displacement', value: '95 tonnes' }
        ]
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: 'Cruising Speed', value: '22 knots' },
          { label: 'Top Speed', value: '26 knots' },
          { label: 'Range', value: '1,800 nautical miles' },
          { label: 'Fuel Capacity', value: '8,500 litres' }
        ]
      },
      {
        category: 'CONSTRUCTION',
        specs: [
          { label: 'Hull', value: 'GRP composite' },
          { label: 'Superstructure', value: 'Carbon fibre' },
          { label: 'Builder', value: 'YORCH Shipyard' },
          { label: 'Naval Architect', value: 'Dubois Naval Architects' }
        ]
      },
      {
        category: 'ONBOARD COMFORT',
        specs: [
          { label: 'Guest Accommodation', value: '12 in 4 cabins' },
          { label: 'Crew Accommodation', value: '5 in 3 cabins' },
          { label: 'Air Conditioning', value: 'Full climate control' },
          { label: 'Watermaker', value: '2,000 litres/day' }
        ]
      },
      {
        category: 'NAVIGATION & SAFETY',
        specs: [
          { label: 'Navigation System', value: 'Furuno TZtouch3' },
          { label: 'Radar', value: 'Furuno DRS4D-NXT' },
          { label: 'Stabilizers', value: 'ZeroSpeed gyro' },
          { label: 'Life Rafts', value: '2 x 12-person' }
        ]
      }
    ]
  },
  {
    id: 'black-sovereign',
    name: 'BLACK SOVEREIGN',
    tagline: 'POWER AND PRECISION REDEFINED',
    video: 'black-sovereign.mp4',
    quickSpecs: [
      'LENGTH 32M',
      'BEAM 7.4M',
      'TOP SPEED 28 KNOTS',
      'GUESTS UP TO 10',
      'CABINS 5 EN-SUITE',
      'CREW 6'
    ],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'Length Overall', value: '32.0m (105.0ft)' },
          { label: 'Beam', value: '7.4m (24.3ft)' },
          { label: 'Draft', value: '2.1m (6.9ft)' },
          { label: 'Displacement', value: '115 tonnes' }
        ]
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: 'Cruising Speed', value: '24 knots' },
          { label: 'Top Speed', value: '28 knots' },
          { label: 'Range', value: '2,200 nautical miles' },
          { label: 'Fuel Capacity', value: '12,000 litres' }
        ]
      },
      {
        category: 'CONSTRUCTION',
        specs: [
          { label: 'Hull', value: 'Steel & aluminium' },
          { label: 'Superstructure', value: 'Aluminium' },
          { label: 'Builder', value: 'YORCH Shipyard' },
          { label: 'Naval Architect', value: 'Espen Øino International' }
        ]
      },
      {
        category: 'ONBOARD COMFORT',
        specs: [
          { label: 'Guest Accommodation', value: '10 in 5 cabins' },
          { label: 'Crew Accommodation', value: '6 in 4 cabins' },
          { label: 'Air Conditioning', value: 'Full climate control' },
          { label: 'Watermaker', value: '3,000 litres/day' }
        ]
      },
      {
        category: 'NAVIGATION & SAFETY',
        specs: [
          { label: 'Navigation System', value: 'Simrad NSS12 evo3' },
          { label: 'Radar', value: 'Simrad HALO20+ radar' },
          { label: 'Stabilizers', value: 'ZeroSpeed gyro' },
          { label: 'Life Rafts', value: '2 x 12-person' }
        ]
      }
    ]
  },
  {
    id: 'azure-horizon',
    name: 'AZURE HORIZON',
    tagline: 'WHERE THE SEA MEETS THE SKY',
    video: 'azure-horizon.mp4',
    quickSpecs: [
      'LENGTH 25M',
      'BEAM 6.2M',
      'RANGE 4100NM',
      'GUESTS 8+12 CREW',
      'DECK SUN DECK WITH JACUZZI',
      'BUILD 2021'
    ],
    fullSpecs: [
      {
        category: 'DIMENSIONS',
        specs: [
          { label: 'Length Overall', value: '25.0m (82.0ft)' },
          { label: 'Beam', value: '6.2m (20.3ft)' },
          { label: 'Draft', value: '1.7m (5.6ft)' },
          { label: 'Displacement', value: '78 tonnes' }
        ]
      },
      {
        category: 'PERFORMANCE',
        specs: [
          { label: 'Cruising Speed', value: '18 knots' },
          { label: 'Top Speed', value: '22 knots' },
          { label: 'Range', value: '4,100 nautical miles' },
          { label: 'Fuel Capacity', value: '15,000 litres' }
        ]
      },
      {
        category: 'CONSTRUCTION',
        specs: [
          { label: 'Hull', value: 'GRP composite' },
          { label: 'Superstructure', value: 'Carbon fibre' },
          { label: 'Builder', value: 'YORCH Shipyard' },
          { label: 'Naval Architect', value: 'H2 Yacht Design' }
        ]
      },
      {
        category: 'ONBOARD COMFORT',
        specs: [
          { label: 'Guest Accommodation', value: '8 in 4 cabins' },
          { label: 'Crew Accommodation', value: '12 in 6 cabins' },
          { label: 'Air Conditioning', value: 'Full climate control' },
          { label: 'Watermaker', value: '2,500 litres/day' }
        ]
      },
      {
        category: 'NAVIGATION & SAFETY',
        specs: [
          { label: 'Navigation System', value: 'Garmin GPSMAP 8617' },
          { label: 'Radar', value: 'Garmin GMR 18 HD' },
          { label: 'Stabilizers', value: 'ZeroSpeed gyro' },
          { label: 'Life Rafts', value: '2 x 12-person' }
        ]
      }
    ]
  }
];
