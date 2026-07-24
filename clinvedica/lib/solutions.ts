export type SolutionService = {
  title: string;
  description: string;
  href: string;
  features: string[];
};

export const humanServices: SolutionService[] = [
  {
    title: 'Tissue Samples',
    description:
      'FFPE, Frozen, Cryopreserved, Healthy, and Diseased Tissues — plus TMA, Extracted DNA and RNA — high-quality, ethically sourced, and ideal for a wide range of research applications.',
    href: '/solutions/tissue-samples',
    features: [
      'FFPE',
      'Frozen',
      'Cryopreserved ',
      'TMA',
      'Healthy Tissues & Healthy Donors',
      'Extracted DNA & RNA',
    ],
  },
  {
    title: 'Blood & Derivatives',
    description:
      'Serum, Plasma, Buffy Coat, Whole Blood, PBMC — handled with precision to ensure maximum sample integrity.',
    href: '/solutions/blood-derivatives',
    features: ['Serum & Plasma', 'Buffy Coat', 'PBMC', 'Whole Blood'],
  },
  {
    title: 'Biofluids',
    description:
      'Urine, Saliva, CSF, Synovial Fluid, Ascites, Aqueous Humour, Bone Marrow, BMMNC, and more — verified and ready to support your specific study needs.',
    href: '/solutions/biofluids',
    features: [
      'Urine & Saliva',
      'CSF',
      'Bone Marrow',
      'BMMNC',
      'Others: sputum, semen, cord blood, tears',
    ],
  },
  {
    title: 'Matched Set Biospecimens',
    description:
      'Obtain tissue, blood, and other biospecimens from the same donor — boosting statistical power and consistency across your research.',
    href: '/solutions/matched-sets',
    features: [
      'Same Donor',
      'Multiple Sample Types',
      'Comprehensive Data',
      'Quality Assured',
      'Research Ready',
    ],
  },
];

export const animalServices: SolutionService[] = [
  {
    title: 'Animal Tissue Samples',
    description:
      'Frozen tissue and FFPE blocks & slides from research species — sourced in accordance with ethical guidelines for histology, toxicology, and translational preclinical studies.',
    href: '/solutions/animal-tissue-samples',
    features: [
      'Frozen Tissue',
      'FFPE Blocks',
      'FFPE Slides',
      'Sourced with ethical guidelines',
    ],
  },
  {
    title: 'Animal Blood',
    description:
      'Plasma and serum from research animals — sourced in accordance with ethical guidelines for biomarker, PK/PD, and assay development work.',
    href: '/solutions/animal-blood-biofluids',
    features: [
      'Plasma',
      'Serum',
      'Sourced with ethical guidelines',
      'Research ready',
    ],
  },
];

export const homeHumanServices: SolutionService[] = [
  {
    title: 'Tissue Samples',
    description:
      'FFPE, frozen, cryopreserved, healthy, and diseased tissues that support histology, IHC, molecular profiling, and biomarker discovery—plus TMA, extracted DNA and RNA. Ideal for translational research, companion diagnostics development, and validation of tissue-based assays.',
    href: '/solutions/tissue-samples',
    features: [
      'FFPE, Frozen & Cryopreserved',
      'TMA',
      'Healthy Tissues & Healthy Donors',
      'Extracted DNA & Extracted RNA',
      'Use cases: IHC, NGS, biomarker validation',
    ],
  },
  {
    title: 'Blood & Derivatives',
    description:
      'Serum, plasma, buffy coat, whole blood, and PBMC collected under controlled pre-analytical conditions. Ideal for biomarker discovery, immunophenotyping, genomics, and longitudinal monitoring studies.',
    href: '/solutions/blood-derivatives',
    features: [
      'Serum & plasma panels',
      'Buffy coat & whole blood',
      'PBMC',
      'Stabilized and fresh collections',
      'Use cases: flow cytometry, NGS, cytokine profiling',
    ],
  },
  {
    title: 'Biofluids',
    description:
      'Urine, saliva, CSF, synovial fluid, ascites, aqueous humour, bone marrow, BMMNC, and other matrices to support non-invasive and specialized studies. Ideal for early detection, pharmacodynamic markers, and multi-omics workflows.',
    href: '/solutions/biofluids',
    features: [
      'Urine & saliva',
      'CSF & synovial fluid',
      'Bone Marrow & BMMNC',
      'Others: sputum, semen, cord blood, tears',
      'Use cases: metabolomics, proteomics, liquid biopsy',
    ],
  },
  {
    title: 'Matched Set Biospecimens',
    description:
      'Integrated access to tissue, blood, and other biospecimens from the same donor, strengthening correlations across modalities. Ideal for longitudinal studies, multi-omics projects, and precision medicine programs.',
    href: '/solutions/matched-sets',
    features: [
      'Same-donor tissue & blood',
      'Multiple timepoints where feasible',
      'Linked clinical & pathological data',
      'Use cases: multi-omics, precision medicine, translational cohorts',
    ],
  },
];

export const homeAnimalServices: SolutionService[] = [
  {
    title: 'Animal Tissue Samples',
    description:
      'Frozen tissue and FFPE blocks & slides from research species for histology, toxicology, and translational preclinical programs — all sourced in accordance with ethical guidelines.',
    href: '/solutions/animal-tissue-samples',
    features: [
      'Frozen Tissue',
      'FFPE Blocks',
      'FFPE Slides',
      'Sourced with ethical guidelines',
    ],
  },
  {
    title: 'Animal Blood',
    description:
      'Plasma and serum from research animals to support biomarker discovery, PK/PD, and diagnostic assay development — all sourced in accordance with ethical guidelines.',
    href: '/solutions/animal-blood-biofluids',
    features: [
      'Plasma',
      'Serum',
      'Sourced with ethical guidelines',
      'Use cases: PK/PD, immunoassays, multi-omics',
    ],
  },
];
