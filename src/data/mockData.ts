import { EquipmentItem, FujiDiagnosticOption, RegionTerritory } from '../types';

export const EQUIPMENT_CATALOG: EquipmentItem[] = [
  {
    id: 'sedecal-radpro-mobile',
    name: 'Sedecal Radpro Digital Mobile X-Ray',
    brand: 'Sedecal / Philips',
    category: 'mobile_xray',
    priceDisplay: 'Call for Purchase / Low Monthly Rental',
    status: 'Refurbished - Ready',
    description: 'High-power 32kW mobile digital X-ray unit engineered for bedside, ICU, urgent care, and veterinary imaging. Fully integrated with iRay wireless DR panel.',
    specs: [
      '32 kW High Frequency Generator',
      'Integrated iRay Wireless 14x17 DR Detector',
      'Motorized Drive & Anti-Collision Sensors',
      'Dual Focal Spot X-Ray Tube (0.6 / 1.2mm)',
      'Touchscreen Acquisition Workstation'
    ],
    warranty: '3-Month System Parts Warranty + 2-Year iRay DR Panel Warranty',
    popular: true
  },
  {
    id: 'philips-diagnost-portable',
    name: 'Philips Diagnost / Agfa DXD-100 Portable',
    brand: 'Philips / Agfa',
    category: 'mobile_xray',
    priceDisplay: 'Available for Buy or Rent',
    status: 'Rental Available',
    description: 'Rugged portable mobile unit with long-life battery operation and fast DR acquisition. Ideal for orthopedic clinics and mobile radiology fleets.',
    specs: [
      'Battery Powered Heavy Duty Capacitor',
      'Fast 2.5-Second DICOM Preview',
      'Integrated PACS Auto-Send Capability',
      'Includes Laptop/Tablet Acquisition Console'
    ],
    warranty: '3-Month Warranty with On-Site Midwest Technical Backing',
    popular: false
  },
  {
    id: 'iray-1417-wireless',
    name: 'New iRay Mars 1417V Wireless DR System',
    brand: 'iRay DR Systems',
    category: 'dr_panels',
    priceDisplay: '$13,000 Complete Package',
    status: 'New Unit',
    description: 'The industry-standard retrofit digital detector package. Upgrade any existing cassette-based X-ray room or portable unit to full instant digital in under 1 hour.',
    specs: [
      '14x17 Csl Wireless Flat Panel Detector',
      'Direct-Deposit CsI Scintillator for ultra-low dose',
      'Auto-Exposure Detection (AED) - No generator interface required',
      'Includes Acquisition PC Workstation + Touch Monitor',
      'Full DICOM 3.0 Store, Print, & Modality Worklist'
    ],
    warranty: 'Full 2-Year Manufacturer Warranty + Local JD Imaging Support',
    popular: true
  },
  {
    id: 'iray-1717-tethered',
    name: 'iRay Mars 1717X DR System (Bucky Panel)',
    brand: 'iRay DR Systems',
    category: 'dr_panels',
    priceDisplay: 'Starting at $13,500',
    status: 'New Unit',
    description: '17x17 full field digital panel designed for permanent installation in wall stands and chest buckys without needing rotation.',
    specs: [
      '17x17 Full-Size Coverage (No Cassette Rotation Needed)',
      'High DQE & 139 μm Pixel Pitch',
      'Includes Image Processing Suite with Bones/Soft Tissue Filters',
      'Instant PACS Integration'
    ],
    warranty: 'Full 2-Year Manufacturer Warranty',
    popular: false
  },
  {
    id: 'fuji-smartcr-reader',
    name: 'Fuji FCR SmartCR & Carbon XL Reader Unit',
    brand: 'Fuji CRs',
    category: 'cr_readers',
    priceDisplay: 'Refurbished $6,500 / Full Board Repair Services',
    status: 'Refurbished - Ready',
    description: 'Compact, reliable computed radiography reader servicing up to 94 plates/hour. We specialize in laser calibration, optics cleaning, and motherboard repair.',
    specs: [
      'Compact Footprint (Under 2.5 Sq Ft)',
      'High Resolution 50 μm Scan Pitch',
      'Supports Standard & Mammography Plates',
      'Full Overhaul & Optical Alignment'
    ],
    warranty: '6-Month Warranty & Field Service Calibration',
    popular: true
  },
  {
    id: 'pacs-imaging-computer',
    name: 'JD Precision Medical Imaging Workstation PC',
    brand: 'Medlink DR / JD Custom',
    category: 'pacs_pc',
    priceDisplay: '$2,450 / OS Re-image Repair $450',
    status: 'In Stock',
    description: 'Medical-grade DICOM computer system built with RAID 1 redundant hard drives, dual 3MP diagnostic monitor graphics, and pre-configured PACS software.',
    specs: [
      'Intel Core i7 / 32GB RAM / Dual 2TB NVMe SSDs (RAID 1)',
      'Medical Grade Dual-Head Display GPU',
      'Pre-loaded Windows 11 Pro Enterprise & DICOM Modality Software',
      'Database Backup & Recovery Utility Included'
    ],
    warranty: '1-Year Advance Replacement Warranty',
    popular: false
  },
  {
    id: 'epson-dicom-cd-burner',
    name: 'Epson Discproducer Medical DICOM CD/DVD Burner',
    brand: 'CD Burners',
    category: 'cd_burners',
    priceDisplay: 'Service & Refurbished Systems Available',
    status: 'In Stock',
    description: 'Automated CD/DVD patient disc publisher with integrated high-resolution color surface printer and DICOM viewer auto-authoring.',
    specs: [
      '100-Disc Capacity Dual Drives',
      'Auto-embeds Patient DICOM Viewer on Disc',
      'MicroPiezo Inkjet Label Printing',
      'Network DICOM Modality Gateway'
    ],
    warranty: '90-Day Parts & Mechanical Repair Support',
    popular: false
  }
];

export const FUJI_DIAGNOSTICS: FujiDiagnosticOption[] = [
  {
    model: 'Fuji FCR Carbon XL / Carbon XL-2',
    symptoms: [
      {
        id: 'err-1044',
        label: 'Error 1044 / Optical Scanner Failure',
        description: 'Machine stops during plate scan, displays red warning light or DICOM error code 1044 / polygon laser mirror sync fault.',
        likelyCause: 'Dust accumulation on optical polygon mirror or degraded laser diode sensor.',
        actionPlan: 'Optical laser clean & alignment or sub-assembly swap. Usually done on-site or mail-in within 48 hours.',
        estimatedSavings: 'Saves $15,000+ vs buying a replacement CR reader.'
      },
      {
        id: 'cassette-jam',
        label: 'Cassette Feed Mechanism / Roller Jamming',
        description: 'IP Cassette gets stuck halfway inside reader or throws cassette ejection error.',
        likelyCause: 'Worn sub-roller rubber, loose drive belt, or damaged optical sensor switches.',
        actionPlan: 'Replacement roller kit, feed belt tensioning, and sensor recalibration.',
        estimatedSavings: 'Fast 1-day turn-around; fraction of OEM service fee.'
      },
      {
        id: 'hd-crash',
        label: 'Workstation PC Won\'t Boot / Hard Drive Click',
        description: 'Imaging computer stays on black screen, blue screen crash, or lost patient database error.',
        likelyCause: 'Mechanical hard drive sector corruption or Windows OS crash.',
        actionPlan: 'Hard drive sector clone, database recovery, and upgrade to high-speed NVMe SSD with PACS re-link.',
        estimatedSavings: 'Preserves 100% of historical patient DICOM records.'
      }
    ]
  },
  {
    model: 'Fuji Prima T2 / Prima II',
    symptoms: [
      {
        id: 'line-artifacts',
        label: 'Vertical Line / White Streak Artifacts on X-Rays',
        description: 'X-ray images display consistent thin white or dark vertical lines across the image field.',
        likelyCause: 'Debris on guide glass, dirty light guide optics, or scratched cassette IP plate.',
        actionPlan: 'Precision optical glass deep cleaning and erased IP plate recalibration.',
        estimatedSavings: 'Restores crystal-clear diagnostic quality immediately.'
      },
      {
        id: 'comm-loss',
        label: 'Loss of Network Connection to PACS / Gateway Error',
        description: 'Images remain queued in local workstation but fail to transmit to clinic PACS or cloud server.',
        likelyCause: 'Corrupted DICOM C-STORE service configuration or network adapter hardware glitch.',
        actionPlan: 'Remote support session to reconfigure DICOM IP ports, IP addresses, and ping diagnostics.',
        estimatedSavings: 'Fixed remotely in under 30 minutes without dispatch fee.'
      }
    ]
  }
];

export const TERRITORY_COVERAGE: RegionTerritory[] = [
  {
    state: 'IL',
    county: 'Lake & McHenry Counties',
    cities: ['Mundelein', 'Libertyville', 'Waukegan', 'Vernon Hills', 'Crystal Lake', 'Highland Park'],
    responseTime: '< 2 Hours Emergency Dispatch',
    primaryTechs: 6
  },
  {
    state: 'IL',
    county: 'Cook & DuPage Counties (Chicago Metro)',
    cities: ['Chicago', 'Arlington Heights', 'Schaumburg', 'Naperville', 'Evanston', 'Oak Brook'],
    responseTime: '< 3 Hours On-Site Response',
    primaryTechs: 8
  },
  {
    state: 'WI',
    county: 'Kenosha & Racine Counties',
    cities: ['Kenosha', 'Racine', 'Pleasant Prairie', 'Burlington'],
    responseTime: '< 2.5 Hours Regional Response',
    primaryTechs: 4
  },
  {
    state: 'WI',
    county: 'Milwaukee & Waukesha Counties',
    cities: ['Milwaukee', 'Waukesha', 'Brookfield', 'West Allis', 'Oak Creek'],
    responseTime: '< 3 Hours On-Site Response',
    primaryTechs: 5
  }
];
