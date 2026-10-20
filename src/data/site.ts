export const company = {
  name: 'RB Interiors (Kent) Limited',
  shortName: 'RB Interiors',
  tradingName: 'Richard Baker Interiors',
  tagline:
    'We provide a comprehensive range of professional building services within the residential, commercial, educational and industrial sectors.',
  years: "We've Been in Business For Over 20 years",
  area: 'South East England',
  phone: '07946 311813',
  phoneHref: 'tel:+447946311813',
  email: 'richard@rbi-kent.co.uk',
  companyNumber: '08002496',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '/our-services/' },
  { label: 'Contact Us', href: '/contact-us/' },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  photo?: string;
};

/* The eight services carried over from the previous site, in its own order. */
export const services: Service[] = [
  {
    slug: 'plumbing-and-heating',
    title: 'Plumbing & Heating',
    summary:
      'First and second-fix pipework, heating systems and the certification that goes with them.',
    body: [
      'Heating installation and replacement, hot and cold water services, above-ground drainage and sanitaryware, for single rooms through to whole buildings.',
      'Commissioning and certificates are part of the job rather than an afterthought, and are handed over with the rest of the paperwork when we finish.',
    ],
  },
  {
    slug: 'painting-and-decorating',
    title: 'Painting & Decorating',
    summary:
      'Preparation-led decoration, internal and external, in specification-grade systems.',
    body: [
      'Most of a good paint finish is what happened before the first coat went on. We prepare, make good and prime properly, then work to whatever system the job calls for.',
      'Internal redecoration, external and protective coatings, wall coverings, and hygiene or intumescent systems where a specification requires them.',
    ],
    photo: '/photos/decorating.jpg',
  },
  {
    slug: 'refurbishment',
    title: 'Refurbishment',
    summary:
      'Whole-building strip-out and rebuild, run as one contract with one point of contact.',
    body: [
      'Complete refurbishment programmes — strip-out, alterations, services, finishes and handover — taking a building that is tired, badly laid out or simply worn through and putting it back into use.',
      'Because the other trades on this page are ours, the sequencing between them is our problem to manage rather than yours to chase.',
    ],
    photo: '/photos/refurbishment.jpg',
  },
  {
    slug: 'bathrooms-and-showers',
    title: 'Bathrooms & Showers',
    summary:
      'Domestic bathrooms and commercial washrooms, plumbed, tiled and finished by one team.',
    body: [
      'Wet rooms, accessible bathrooms and shower installations for private clients; cubicle systems, IPS panelling and vanity ranges for schools, offices and industrial sites.',
      'The plumbing, tiling and joinery are all in-house, so there is no gap between trades for a programme to fall into.',
    ],
    photo: '/photos/bathrooms.jpg',
  },
  {
    slug: 'suspended-ceilings',
    title: 'Suspended Ceilings',
    summary:
      'Grid and tile, MF and exposed systems, set out around the services rather than cut around them.',
    body: [
      'Suspended ceiling systems installed to the performance specification, with bulkheads, access panels and service penetrations coordinated before the grid goes up.',
      'Replacement tiles and localised repair work in occupied buildings as well as full installations.',
    ],
  },
  {
    slug: 'partitioning',
    title: 'Partitioning',
    summary:
      'Metal stud, drylining, acoustic and fire-rated systems, and demountable layouts.',
    body: [
      'Dry-lined and glazed partition systems installed to the performance spec — acoustic ratings, fire compartmentation, and demountable layouts for spaces that will be reconfigured again.',
      'Taping, jointing and skim finishes ready to receive decoration, by the same team that put the walls up.',
    ],
    photo: '/photos/partitioning.jpg',
  },
  {
    slug: 'joinery-and-carpentry',
    title: 'Joinery & Carpentry',
    summary:
      'Bespoke and second-fix joinery, made to fit the building rather than the catalogue.',
    body: [
      'Fitted furniture, reception and counter joinery, storage walls, door sets and ironmongery, skirtings, architraves and trims.',
      'Where a building has gone out of square over a century of use, purpose-made joinery is usually cheaper than making the building fit a standard unit.',
    ],
  },
  {
    slug: 'flooring',
    title: 'Flooring',
    summary:
      'Screeds, levelling and floor finishes across commercial and domestic coverings.',
    body: [
      'Preparation decides how a floor lasts, so we take moisture readings and level properly before anything is laid.',
      'Safety vinyl for kitchens and clinical areas, carpet and carpet tile for offices, LVT and engineered timber for homes and front-of-house, with matting and nosings to finish.',
    ],
  },
];

export type Sector = {
  slug: string;
  title: string;
  copy: string;
  photo: string;
};

export const sectors: Sector[] = [
  {
    slug: 'residential',
    title: 'Residential',
    copy: 'Private houses and residential blocks, from a single bathroom through to a full refurbishment.',
    photo: '/photos/residential.jpg',
  },
  {
    slug: 'commercial',
    title: 'Commercial',
    copy: 'Offices, retail and workplaces, often refurbished floor by floor while the business carries on around us.',
    photo: '/photos/commercial.jpg',
  },
  {
    slug: 'educational',
    title: 'Educational',
    copy: 'Schools, colleges and nurseries, with the work planned into half terms and holidays.',
    photo: '/photos/educational.jpg',
  },
  {
    slug: 'industrial',
    title: 'Industrial',
    copy: 'Warehousing, depots and light industrial units — welfare blocks, offices, flooring and finishes.',
    photo: '/photos/industrial.jpg',
  },
];
