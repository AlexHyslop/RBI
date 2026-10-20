export const company = {
  name: 'RB Interiors (Kent)',
  legalName: 'RB Interiors (Kent) Limited',
  shortName: 'RBI',
  tagline: 'Building and interior contractors, South East England',
  foundedCopy: 'Over twenty years on site',
  companyNumber: '08002496',
  phone: '020 3903 8644',
  phoneHref: 'tel:+442039038644',
  email: 'office@rbi-kent.co.uk',
  address: {
    line1: 'Kemsley',
    line2: 'Sittingbourne',
    county: 'Kent',
    postcode: 'ME10 2TE',
  },
  hours: 'Monday to Friday, 7.30am – 5.30pm',
};

export const nav = [
  { label: 'Services', href: '/services/' },
  { label: 'Sectors', href: '/sectors/' },
  { label: 'How we work', href: '/how-we-work/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export type Service = {
  n: string;
  slug: string;
  title: string;
  summary: string;
  detail: string;
  includes: string[];
};

export const services: Service[] = [
  {
    n: '01',
    slug: 'refurbishment',
    title: 'Refurbishment & fit-out',
    summary:
      'Whole-building strip-out and rebuild, run as one contract with one point of contact.',
    detail:
      'We take on complete refurbishment programmes — strip-out, structural alterations, services, finishes and handover. Because the trades below are all in-house, sequencing is ours to manage rather than yours to chase, which is what keeps a programme honest.',
    includes: [
      'Strip-out and making good',
      'Structural alterations',
      'Cat A and Cat B office fit-out',
      'Phased works in occupied buildings',
      'Handover documentation and snagging',
    ],
  },
  {
    n: '02',
    slug: 'partitioning-and-ceilings',
    title: 'Partitioning & suspended ceilings',
    summary:
      'Metal stud, drylining, acoustic and fire-rated systems, with grid and tile ceilings to match.',
    detail:
      'Dry-lined and glazed partition systems installed to the performance spec — acoustic ratings, fire compartmentation, demountable layouts for spaces that will be reconfigured again. Suspended ceilings are set out with the services coordinated first, not cut around afterwards.',
    includes: [
      'Metal stud and drylining',
      'Acoustic and fire-rated partitions',
      'Demountable and glazed systems',
      'MF and exposed grid ceilings',
      'Bulkheads, risers and access panels',
    ],
  },
  {
    n: '03',
    slug: 'joinery-and-carpentry',
    title: 'Joinery & carpentry',
    summary:
      'Bespoke and second-fix joinery, made to fit the building rather than the catalogue.',
    detail:
      'Reception desks, storage walls, window boards, door sets and ironmongery. Where a space has gone out of square over a century of use, purpose-made joinery is usually cheaper than making the building fit a standard unit.',
    includes: [
      'Bespoke fitted furniture',
      'Reception and counter joinery',
      'Door sets and ironmongery',
      'Skirtings, architraves and trims',
      'Fire door installation and upgrades',
    ],
  },
  {
    n: '04',
    slug: 'flooring',
    title: 'Flooring',
    summary:
      'Screeds, levelling and floor finishes across the full range of commercial and domestic coverings.',
    detail:
      'Preparation decides how a floor lasts, so we take moisture readings and level properly before anything is laid. From there: safety vinyl for kitchens and clinical areas, carpet tile for offices, engineered timber and LVT for homes and front-of-house.',
    includes: [
      'Latex levelling and screeds',
      'Safety vinyl and sheet flooring',
      'Carpet and carpet tile',
      'LVT and engineered timber',
      'Entrance matting and nosings',
    ],
  },
  {
    n: '05',
    slug: 'plumbing-and-heating',
    title: 'Plumbing & heating',
    summary:
      'First and second-fix pipework, heating systems, and the certification to go with them.',
    detail:
      'Gas-safe heating installation and replacement, hot and cold services, above-ground drainage and sanitaryware. Commissioning and certificates are part of the job, handed over with the rest of the file.',
    includes: [
      'Boiler replacement and heating systems',
      'Hot and cold water services',
      'Above-ground drainage',
      'Sanitaryware and brassware',
      'Commissioning and certification',
    ],
  },
  {
    n: '06',
    slug: 'bathrooms-and-washrooms',
    title: 'Bathrooms & washrooms',
    summary:
      'Domestic bathrooms and commercial washroom blocks, tiled, plumbed and finished in-house.',
    detail:
      'Wet rooms and accessible bathrooms for private clients; cubicle systems, IPS panelling and vanity ranges for schools and offices. One team covers the plumbing, tiling and joinery, so there is no gap between trades for a programme to fall into.',
    includes: [
      'Accessible and wet-room installation',
      'Cubicle and IPS systems',
      'Tiling and waterproofing',
      'Vanity units and duct panels',
      'Washroom refurbishment in term time',
    ],
  },
  {
    n: '07',
    slug: 'painting-and-decorating',
    title: 'Painting & decorating',
    summary:
      'Preparation-led decoration, internal and external, in specification-grade systems.',
    detail:
      'Most of a good paint finish is what happened before the first coat. We prepare, make good and prime properly, then work to the specified system — intumescent, anti-graffiti, hygiene coatings or standard trade emulsion as the brief requires.',
    includes: [
      'Internal redecoration',
      'External and protective coatings',
      'Intumescent and hygiene systems',
      'Wall coverings',
      'Line marking and signage painting',
    ],
  },
];

export type Sector = {
  n: string;
  title: string;
  copy: string;
  points: string[];
};

export const sectors: Sector[] = [
  {
    n: '01',
    title: 'Commercial',
    copy:
      'Offices, retail units and workplaces, often refurbished floor by floor while the business carries on around us.',
    points: ['Cat A / Cat B fit-out', 'Out-of-hours working', 'Landlord and tenant works'],
  },
  {
    n: '02',
    title: 'Education',
    copy:
      'Schools, colleges and nurseries, with the majority of work planned into holiday windows and handed back on the date agreed.',
    points: ['Holiday-period programmes', 'Enhanced DBS-checked teams', 'Safeguarding-aware site setup'],
  },
  {
    n: '03',
    title: 'Industrial',
    copy:
      'Warehousing, light industrial and depot buildings — welfare blocks, offices, flooring and protective finishes.',
    points: ['Live-site methodology', 'Heavy-duty floor systems', 'Welfare and office builds'],
  },
  {
    n: '04',
    title: 'Residential',
    copy:
      'Private houses and residential blocks, from a single bathroom through to a full-house refurbishment.',
    points: ['Whole-house refurbishment', 'Bathrooms and kitchens', 'Communal areas and blocks'],
  },
];

export const process = [
  {
    n: '01',
    title: 'Look at the building',
    copy:
      'We visit, measure and ask what the space has to do. Quotes written from a drawing alone are the ones that change later.',
  },
  {
    n: '02',
    title: 'Price it properly',
    copy:
      'A written quotation broken down by trade, with the assumptions and exclusions stated in plain English.',
  },
  {
    n: '03',
    title: 'Programme the work',
    copy:
      'Sequence, access, deliveries and the dates that matter — half term, a lease date, a move-in. Agreed before anyone starts.',
  },
  {
    n: '04',
    title: 'Run the site',
    copy:
      'Our own supervisor on site, one number to call, and a weekly update whether or not there is anything to report.',
  },
  {
    n: '05',
    title: 'Hand it over',
    copy:
      'Snagging closed out, certificates and warranties collated, the space cleaned and ready to use.',
  },
];
