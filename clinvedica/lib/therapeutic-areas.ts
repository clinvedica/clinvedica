export type TherapeuticAreaContent = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  samples: string[];
  color: string;
  heroTitle: string;
  heroDescription: string;
  indicationsTitle: string;
  indicationsIntro: string;
  indications: string[];
  sampleTypesIntro: string;
  sampleTypes: string[];
  highlights: string[];
  dataSupport: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
};

export const therapeuticAreas: TherapeuticAreaContent[] = [
  {
    slug: 'oncology',
    title: 'Oncology',
    shortTitle: 'Oncology',
    description:
      'Comprehensive biospecimen solutions for cancer research, including tumor tissues, matched normal samples, and associated biofluids.',
    samples: ['Tumor Tissues', 'Matched Normal', 'Blood Samples', 'Biofluids'],
    color: 'from-red-500 to-pink-500',
    heroTitle: 'Oncology Biospecimens for Translational Research',
    heroDescription:
      'At Clin Vedica Life Sciences, we provide high-quality, ethically sourced oncology biospecimens through our network of hospitals and collection centers. We support both prospective and retrospective collections tailored to your study protocol.',
    indicationsTitle: 'Common Oncology Indications Worked on in the Past',
    indicationsIntro:
      'We support a broad spectrum of solid and hematologic malignancies for biomarker discovery, companion diagnostics, and translational research.',
    indications: [
      'Lung',
      'Breast',
      'Stomach',
      'Kidney',
      'Liver',
      'Ovary',
      'Lymphoma',
      'Head and Neck',
      'Esophagus',
      'Cervical',
      'Leukemia',
      'Uterine',
    ],
    sampleTypesIntro:
      'Oncology-focused biospecimens collected under controlled pre-analytical conditions to support multi-omics, biomarker discovery, and diagnostic development.',
    sampleTypes: [
      'FFPE and Frozen Tumor Tissue',
      'Matched Normal Tissue',
      'Whole Blood, Serum, Plasma',
      'PBMCs and Buffy Coat',
      'Extracted DNA / RNA',
      'Matched healthy controls where feasible',
    ],
    highlights: [
      'Access to solid and hematologic malignancy cohorts.',
      'Support for retrospective inventory and prospective recruitment.',
      'De-identified clinical and pathological data aligned to your endpoints.',
      'Matched sets across tissue and blood where feasible.',
    ],
    dataSupport: [
      'Diagnosis, staging, and pathology fields where available.',
      'Treatment history and key clinical annotations when permitted.',
      'Temperature-controlled logistics and global shipment support.',
      'Documentation aligned with audit and regulatory expectations.',
    ],
    ctaTitle: 'Plan Your Oncology Biospecimen Program',
    ctaDescription:
      'Share your oncology cohort requirements and receive a tailored feasibility assessment from our expert team.',
    ctaLabel: 'Discuss Your Oncology Study',
  },
  {
    slug: 'autoimmune',
    title: 'Autoimmune Disorders',
    shortTitle: 'Autoimmune',
    description:
      'Samples for autoimmune disease research including synovial fluid, blood, and tissue samples.',
    samples: ['Synovial Fluid', 'Blood Samples', 'Tissue Samples', 'PBMC'],
    color: 'from-blue-500 to-cyan-500',
    heroTitle: 'Autoimmune Biospecimens for Translational Research',
    heroDescription:
      'We provide ethically sourced biospecimens to support autoimmune and inflammatory disease research across our partner hospital and clinic network.',
    indicationsTitle: 'Common Autoimmune Indications Worked on in the Past',
    indicationsIntro:
      'Our collections support immune profiling, target validation, and precision medicine programs across key autoimmune disorders.',
    indications: [
      'Rheumatoid Arthritis',
      'SLE (Systemic Lupus Erythematosus)',
      "Sjögren's Syndrome",
      'Lupus Nephritis',
      'Polymyositis',
      'Dermatomyositis',
      'Systemic Sclerosis',
      'CREST Syndrome',
      'Mixed Connective Tissue Disease (MCTD)',
    ],
    sampleTypesIntro:
      'Autoimmune-focused matrices collected to support immunology, serology, and multi-omics workflows.',
    sampleTypes: [
      'Whole Blood, Serum, Plasma',
      'PBMCs',
      'Synovial Fluid',
      'Tissue Samples where available',
      'Extracted DNA / RNA',
      'Matched controls where feasible',
    ],
    highlights: [
      'Access to clinically characterized autoimmune cohorts.',
      'Support for longitudinal and cross-sectional designs.',
      'De-identified clinical data aligned to your endpoints.',
      'Prospective recruitment aligned to inclusion/exclusion criteria.',
    ],
    dataSupport: [
      'Relevant clinical and serology-related data fields.',
      'Clearly defined timepoints where applicable.',
      'Temperature-controlled logistics and global shipment support.',
      'Documentation aligned with audit and regulatory expectations.',
    ],
    ctaTitle: 'Plan Your Autoimmune Biospecimen Program',
    ctaDescription:
      'Tell us your autoimmune indication and sample needs for a rapid feasibility assessment.',
    ctaLabel: 'Discuss Your Autoimmune Study',
  },
  {
    slug: 'urology',
    title: 'Urology',
    shortTitle: 'Urology',
    description:
      'Biospecimen solutions supporting urological research across key indications and sample matrices.',
    samples: ['Tissue Samples', 'Blood Samples', 'Urine', 'Matched Sets'],
    color: 'from-sky-500 to-blue-600',
    heroTitle: 'Urology Biospecimens for Translational Research',
    heroDescription:
      'Clin Vedica supports urology-focused collections with ethically sourced biospecimens and associated clinical data through our partner network.',
    indicationsTitle: 'Common Urology Indications Worked on in the Past',
    indicationsIntro:
      'We support urology and related study needs with retrospective access and prospective recruitment options.',
    indications: [
      'Benign Prostatic Hyperplasia (BPH)',
      'Urinary Tract Infections (UTIs)',
      'Endometriosis',
    ],
    sampleTypesIntro:
      'Urology-relevant biospecimens collected under controlled pre-analytical conditions.',
    sampleTypes: [
      'Tissue Samples',
      'Whole Blood, Serum, Plasma',
      'Urine and related biofluids',
      'Extracted DNA / RNA',
      'Matched sets where feasible',
      'Additional matrices per protocol',
    ],
    highlights: [
      'Access to indication-specific cohorts.',
      'Support for retrospective and prospective designs.',
      'De-identified clinical data aligned to study needs.',
      'Protocol-aligned logistics and documentation.',
    ],
    dataSupport: [
      'Relevant clinical annotations where available.',
      'Defined collection timepoints when required.',
      'Temperature-controlled logistics and shipment support.',
      'Audit-ready documentation practices.',
    ],
    ctaTitle: 'Plan Your Urology Biospecimen Program',
    ctaDescription:
      'Share your urology study requirements and receive a tailored feasibility assessment.',
    ctaLabel: 'Discuss Your Urology Study',
  },
  {
    slug: 'dermatology',
    title: 'Dermatology',
    shortTitle: 'Dermatology',
    description:
      'Specialized biospecimens for dermatology research across inflammatory and autoimmune skin conditions.',
    samples: ['Tissue Samples', 'Blood Samples', 'Biofluids', 'PBMC'],
    color: 'from-amber-500 to-orange-500',
    heroTitle: 'Dermatology Biospecimens for Translational Research',
    heroDescription:
      'We provide high-quality dermatology biospecimens for inflammatory, autoimmune, and related skin disease research programs.',
    indicationsTitle: 'Common Dermatology Indications Worked on in the Past',
    indicationsIntro:
      'Our dermatology experience spans key inflammatory and autoimmune skin conditions for discovery and validation studies.',
    indications: [
      'Hidradenitis Suppurativa',
      'Psoriasis',
      'Atopic Dermatitis',
      'Scleroderma',
      'Vitiligo',
      'Alopecia',
      'Eczema',
    ],
    sampleTypesIntro:
      'Dermatology-focused biospecimens to support histology, immunology, and molecular research.',
    sampleTypes: [
      'Skin / Tissue Samples',
      'Whole Blood, Serum, Plasma',
      'PBMCs',
      'Extracted DNA / RNA',
      'Matched controls where feasible',
      'Additional matrices per protocol',
    ],
    highlights: [
      'Access to dermatology disease cohorts.',
      'Support for retrospective and prospective collections.',
      'De-identified clinical annotations aligned to endpoints.',
      'Quality-controlled handling and documentation.',
    ],
    dataSupport: [
      'Relevant clinical and disease-activity fields where available.',
      'Defined timepoints for longitudinal designs.',
      'Temperature-controlled logistics support.',
      'Documentation aligned with regulatory expectations.',
    ],
    ctaTitle: 'Plan Your Dermatology Biospecimen Program',
    ctaDescription:
      'Share your dermatology indication and matrix requirements for a rapid feasibility review.',
    ctaLabel: 'Discuss Your Dermatology Study',
  },
  {
    slug: 'infectious-diseases',
    title: 'Infectious Diseases',
    shortTitle: 'Infectious Diseases',
    description:
      'Samples for infectious disease research with comprehensive clinical data and pathogen information.',
    samples: ['Blood Samples', 'Tissue Samples', 'Biofluids', 'PBMC'],
    color: 'from-orange-500 to-amber-500',
    heroTitle: 'Infectious Disease Biospecimens for Translational Research',
    heroDescription:
      'Clin Vedica supports infectious disease research with ethically sourced biospecimens and associated clinical context across viral and bacterial indications.',
    indicationsTitle: 'Common Infectious Disease Indications Worked on in the Past',
    indicationsIntro:
      'We support vaccine research, diagnostic assay development, and immune monitoring across a wide range of infectious disease indications.',
    indications: [
      'HIV-1',
      'HIV-2',
      'Hepatitis B',
      'Hepatitis C',
      'Bacterial and Viral Infections',
      'Syphilis',
      'Gonorrhea',
      'Respiratory Syncytial Virus (RSV)',
      'Influenza A & B',
      'Pseudomonas',
      'Salmonella',
      'Bordetella',
    ],
    sampleTypesIntro:
      'Infectious disease biospecimens collected under controlled handling conditions to protect sample integrity and biosafety.',
    sampleTypes: [
      'Whole Blood, Serum, Plasma',
      'PBMCs',
      'Tissue Samples where available',
      'Biofluids',
      'Extracted DNA / RNA',
      'Additional matrices based on protocol needs',
    ],
    highlights: [
      'Access to viral and bacterial infection cohorts.',
      'Support for retrospective and prospective designs.',
      'De-identified clinical and pathogen-related data fields.',
      'Biosafety-aware logistics and documentation.',
    ],
    dataSupport: [
      'Relevant clinical and testing annotations where available.',
      'Defined collection timepoints when required.',
      'Temperature-controlled logistics and global shipment support.',
      'Documentation aligned with audit expectations.',
    ],
    ctaTitle: 'Plan Your Infectious Disease Biospecimen Program',
    ctaDescription:
      'Tell us your pathogen focus and sample needs to receive a tailored feasibility assessment.',
    ctaLabel: 'Discuss Your Infectious Disease Study',
  },
  {
    slug: 'cardiology',
    title: 'Cardiology',
    shortTitle: 'Cardiology',
    description:
      'Specialized samples for cardiovascular disease research, including blood and its derivatives.',
    samples: ['Blood Samples', 'Serum & Plasma', 'PBMC', 'Buffy Coat'],
    color: 'from-red-600 to-rose-600',
    heroTitle: 'Cardiovascular Biospecimens for Translational Research',
    heroDescription:
      'At Clin Vedica Life Sciences, we provide high-quality, ethically sourced biospecimens to support cardiovascular research through our network of hospitals and collection centers. We offer both prospective and retrospective sample collection tailored to your study protocol.',
    indicationsTitle: 'Common Cardiology Indications Worked on in the Past',
    indicationsIntro:
      'We support a broad spectrum of cardiovascular and cerebrovascular conditions, enabling both exploratory and late-stage studies.',
    indications: [
      'Heart Attack (Myocardial Infarction)',
      'Stroke',
      'Heart Failure',
      'Dilated Cardiomyopathy',
      'Cardiac Amyloidosis (Amyloid Cardiomyopathy)',
      'Coronary Heart Disease',
      'Arrhythmia',
    ],
    sampleTypesIntro:
      'We provide cardiovascular-focused biospecimens collected under controlled pre-analytical conditions to support multi-omics, biomarker discovery, and diagnostic development.',
    sampleTypes: [
      'Whole Blood, Serum, Plasma',
      'PBMCs and Buffy Coat',
      'Isolated DNA / RNA',
      'FFPE and Fresh Frozen Cardiac Tissue (Subject to availability and routine clinical practice)',
      'Matched healthy controls where feasible',
      'Additional biospecimen types based on protocol needs',
    ],
    highlights: [
      'Access to acute and chronic cardiovascular cohorts.',
      'Support for longitudinal and cross-sectional study designs.',
      'De-identified clinical data aligned to your endpoints.',
      'Prospective recruitment aligned to inclusion/exclusion criteria.',
    ],
    dataSupport: [
      'Relevant clinical, imaging, and risk-factor data fields.',
      'Clearly defined timepoints and visit schedules where applicable.',
      'Temperature-controlled logistics and global shipment support.',
      'Documentation aligned with audit and regulatory expectations.',
    ],
    ctaTitle: 'Plan Your Cardiovascular Biospecimen Program',
    ctaDescription:
      'We provide matched controls, detailed clinical data, and global logistics support to help you execute reliable, compliant cardiovascular research—from early discovery through late-stage validation.',
    ctaLabel: 'Discuss Your Cardiovascular Study',
  },
  {
    slug: 'respiratory',
    title: 'Respiratory Disorders',
    shortTitle: 'Respiratory',
    description:
      'Specialized biospecimens for respiratory disease research including lung tissues and related samples.',
    samples: ['Lung Tissues', 'Blood Samples', 'BAL Fluid', 'Serum'],
    color: 'from-teal-600 to-teal-400',
    heroTitle: 'Respiratory Biospecimens for Translational Research',
    heroDescription:
      'Clin Vedica supports respiratory research with ethically sourced lung-related biospecimens and associated clinical data across key pulmonary indications.',
    indicationsTitle: 'Common Respiratory Indications Worked on in the Past',
    indicationsIntro:
      'We support respiratory and pulmonary programs spanning fibrotic, inflammatory, and infectious respiratory conditions.',
    indications: [
      'Idiopathic Pulmonary Fibrosis (IPF)',
      'Asthma',
      'Tuberculosis (TB)',
      'Interstitial Lung Disease (ILD)',
      'Bronchitis',
    ],
    sampleTypesIntro:
      'Respiratory-focused biospecimens collected under controlled conditions to support biomarker and multi-omics research.',
    sampleTypes: [
      'Lung Tissue (where available)',
      'Whole Blood, Serum, Plasma',
      'BAL Fluid and related biofluids',
      'Sputum',
      'Extracted DNA / RNA',
      'Matched controls where feasible',
    ],
    highlights: [
      'Access to key respiratory disease cohorts.',
      'Support for retrospective and prospective collections.',
      'De-identified clinical annotations aligned to endpoints.',
      'Quality-controlled logistics and documentation.',
    ],
    dataSupport: [
      'Relevant clinical and pulmonary data fields where available.',
      'Defined timepoints for longitudinal designs.',
      'Temperature-controlled logistics and shipment support.',
      'Documentation aligned with regulatory expectations.',
    ],
    ctaTitle: 'Plan Your Respiratory Biospecimen Program',
    ctaDescription:
      'Share your respiratory indication and sample requirements for a tailored feasibility assessment.',
    ctaLabel: 'Discuss Your Respiratory Study',
  },
  {
    slug: 'nephrology',
    title: 'Nephrology',
    shortTitle: 'Nephrology',
    description:
      'Kidney-focused biospecimen solutions supporting nephrology research across chronic and rare kidney indications.',
    samples: ['Tissue Samples', 'Blood Samples', 'Urine', 'Matched Sets'],
    color: 'from-indigo-500 to-purple-500',
    heroTitle: 'Nephrology Biospecimens for Translational Research',
    heroDescription:
      'We provide high-quality nephrology biospecimens for chronic kidney disease, glomerular disorders, and related renal research programs.',
    indicationsTitle: 'Common Nephrology Indications Worked on in the Past',
    indicationsIntro:
      'Our nephrology experience covers a wide range of kidney indications for discovery, validation, and translational studies.',
    indications: [
      'Lupus Nephritis',
      'Nephrotic Syndrome',
      'Kidney Failure',
      'Kidney Stones',
      'Chronic Kidney Disease (CKD)',
      'IgA Nephropathy (IgAN)',
      'ADPKD (Autosomal Dominant Polycystic Kidney Disease)',
      'PKD (Polycystic Kidney Disease)',
      'PMN (Primary Membranous Nephropathy)',
      'DKD (Diabetic Kidney Disease)',
      'C3G (C3 Glomerulopathy)',
      'CAMR (Chronic Antibody-Mediated Rejection)',
    ],
    sampleTypesIntro:
      'Nephrology-focused biospecimens collected to support biomarker discovery, multi-omics, and clinical research workflows.',
    sampleTypes: [
      'Kidney Tissue (where available)',
      'Whole Blood, Serum, Plasma',
      'Urine',
      'PBMCs',
      'Extracted DNA / RNA',
      'Matched sets and controls where feasible',
    ],
    highlights: [
      'Access to chronic and specialty kidney disease cohorts.',
      'Support for retrospective inventory and prospective recruitment.',
      'De-identified clinical data aligned to renal endpoints.',
      'Protocol-aligned logistics and documentation.',
    ],
    dataSupport: [
      'Relevant clinical and laboratory annotations where available.',
      'Defined collection timepoints for longitudinal studies.',
      'Temperature-controlled logistics and global shipment support.',
      'Documentation aligned with audit and regulatory expectations.',
    ],
    ctaTitle: 'Plan Your Nephrology Biospecimen Program',
    ctaDescription:
      'Share your nephrology indication and matrix needs for a rapid feasibility assessment.',
    ctaLabel: 'Discuss Your Nephrology Study',
  },
];

export function getTherapeuticAreaBySlug(slug: string) {
  return therapeuticAreas.find((area) => area.slug === slug);
}
