export type HowWeWorkStep = {
  id: number;
  title: string;
  shortLabel?: string;
  description: string;
  image: string;
};

export const howWeWorkSteps: HowWeWorkStep[] = [
  {
    id: 1,
    title: 'Project Initiation & Briefing',
    shortLabel: 'Step 01',
    description:
      'We begin with a detailed discussion of your title list, specifications, schedules and deliverables. Our team reviews sample content, workflows and technology requirements to propose a clear plan of engagement.',
    image: '/images/how-we-work/step-1.svg',
  },
  {
    id: 2,
    title: 'Editorial & Design Planning',
    shortLabel: 'Step 02',
    description:
      'Based on your house style, market and end-use (print and/or digital), we define page designs, style sheets, editorial levels and production workflows. We also map tools and platforms—InDesign, LaTeX, eBook formats, and any proprietary systems.',
    image: '/images/how-we-work/step-2.svg',
  },
  {
    id: 3,
    title: 'Sample Development & Approval',
    shortLabel: 'Step 03',
    description:
      'We create representative sample pages and illustration styles for your review—covering typical text, complex layouts, tables and figures. Once you approve the samples, they become the benchmark for full-scale production.',
    image: '/images/how-we-work/step-3.svg',
  },
  {
    id: 4,
    title: 'Full Production & Composition',
    shortLabel: 'Step 04',
    description:
      'Our composition and art teams take over full production—typesetting, page layout, figure redrawing and digital asset preparation. Work is managed through structured batches with regular status updates and checkpoints.',
    image: '/images/how-we-work/step-4.svg',
  },
  {
    id: 5,
    title: 'Quality Assurance & Corrections',
    shortLabel: 'Step 05',
    description:
      'Every batch passes through multi-level quality checks—proofreading, style consistency, cross-references, figure and table checks and device-level eBook validation. Author and editorial corrections are incorporated systematically to ensure accuracy.',
    image: '/images/how-we-work/step-5.svg',
  },
  {
    id: 6,
    title: 'Final Delivery & Ongoing Support',
    shortLabel: 'Step 06',
    description:
      'We deliver print-ready files, eBook formats and any supporting assets as per your specification. Post-delivery, we remain available for reprints, updates and derivative products such as workbooks, online resources and localized editions.',
    image: '/images/how-we-work/step-6.svg',
  },
];
