import type { EnergyTile, IndustryCol, Locale, ServicePillar } from "./types";

const IMAGES = {
  advisory: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Preemraff_Lysekil%27s_Processing_Plant.jpg",
  engineering: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Oil_refinery_004.JPG",
  execution: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Preemraff_Lysekil%27s_Processing_Plant.jpg",
  optimization: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Oil_refinery_004.JPG",
} as const;

export function pillarImage(id: string): string {
  return IMAGES[id as keyof typeof IMAGES] ?? IMAGES.engineering;
}

const pillarsEn: ServicePillar[] = [
  {
    id: "advisory",
    title: "Strategic, Technical & Safety Advisory",
    intro:
      "Feasibility, technology selection, process optimization, and process safety — the decisions that shape project economics, compliance, and risk before and during engineering.",
    imageAlt: "Preemraff Lysekil oil processing plant",
    items: [
      {
        name: "Feasibility Studies",
        detail:
          "Process-basis definition, yields, utilities, and capex/opex framing for early-stage investment decisions.",
      },
      {
        name: "Technology Evaluation",
        detail: "Comparative assessment of licensed and open-art process routes with licensor interface management.",
      },
      {
        name: "Process Optimization",
        detail: "Debottlenecking, sensitivity analysis, and operating case development aligned to production targets.",
      },
      {
        name: "Licensor Selection Support",
        detail: "Technical evaluation, bid review, and process performance guarantee assessment.",
      },
      {
        name: "Process Safety Review",
        detail: "HAZOP preparation, safeguarding review, and relief system verification support.",
      },
      {
        name: "Reliability & Operability Studies",
        detail: "Failure mode analysis and operating procedure development for improved asset reliability.",
      },
    ],
  },
  {
    id: "engineering",
    title: "Engineering & Design",
    intro:
      "Rigorous process engineering from conceptual design through detail — heat and material balances, simulation, FEED, and construction-ready deliverables.",
    imageAlt: "Irving Oil Refinery",
    items: [
      {
        name: "Conceptual & Pre-FEED Engineering",
        detail: "Block flow diagrams, process descriptions, and basis-of-design documents that frame capital scope.",
      },
      {
        name: "Process Simulation",
        detail: "Steady-state and dynamic simulation supporting design, safety, and optimization objectives.",
      },
      {
        name: "Front-End Engineering Design (FEED)",
        detail: "PIDs, equipment datasheets, utility balances, and interface documentation for sanction packages.",
      },
      {
        name: "Detail Engineering",
        detail:
          "Construction-ready process engineering deliverables coordinated with mechanical, civil, and instrumentation disciplines.",
      },
    ],
  },
  {
    id: "execution",
    title: "Project Execution Support",
    intro:
      "Procurement review, commissioning assistance, and construction advisory — keeping process intent intact through the build phase.",
    imageAlt: "Process plant construction",
    items: [
      {
        name: "Technical Procurement Support",
        detail: "Equipment specification review, vendor technical bid evaluation, and material requisition alignment.",
      },
      {
        name: "Construction Engineering Support",
        detail: "RFI response, field query resolution, and process tie-in review during construction.",
      },
      {
        name: "Pre-Commissioning & Commissioning",
        detail: "System completion review, punch list support, and startup readiness verification.",
      },
      {
        name: "Startup & Operational Readiness",
        detail: "Operating procedure development, operator training support, and initial startup advisory.",
      },
    ],
  },
  {
    id: "optimization",
    title: "Optimization & Performance",
    intro:
      "Debottlenecking, yield improvement, and production optimization for operating assets — maximizing value from existing infrastructure.",
    imageAlt: "Oil refinery processing units",
    items: [
      {
        name: "Debottlenecking Studies",
        detail: "Constraint identification, hydraulic analysis, and capital-efficient upgrade options for capacity expansion.",
      },
      {
        name: "Production Optimization",
        detail: "Operating envelope definition, yield improvement, and energy efficiency analysis.",
      },
    ],
  },
];

const pillarsEs: ServicePillar[] = [
  {
    id: "advisory",
    title: "Asesoría estratégica, técnica y de seguridad de proceso",
    intro:
      "Factibilidad, selección de tecnología, optimización de proceso y seguridad de proceso — las decisiones que definen la economía del proyecto, el cumplimiento y el riesgo antes y durante la ingeniería.",
    imageAlt: "Planta de procesamiento de petróleo Preemraff Lysekil",
    items: [
      {
        name: "Estudios de factibilidad",
        detail:
          "Definición de bases de proceso, rendimientos, servicios y marco capex/opex para decisiones de inversión tempranas.",
      },
      {
        name: "Evaluación de tecnología",
        detail:
          "Evaluación comparativa de rutas de proceso licenciadas y de arte abierto con gestión de interfaz con licenciantes.",
      },
      {
        name: "Optimización de proceso",
        detail: "Eliminación de cuellos de botella, análisis de sensibilidad y desarrollo de casos operativos alineados a objetivos de producción.",
      },
      {
        name: "Apoyo en selección de licenciante",
        detail: "Evaluación técnica, revisión de ofertas y evaluación de garantías de desempeño de proceso.",
      },
      {
        name: "Revisión de seguridad de proceso",
        detail: "Preparación de HAZOP, revisión de salvaguardas y apoyo en verificación de sistemas de alivio.",
      },
      {
        name: "Estudios de confiabilidad y operabilidad",
        detail: "Análisis de modos de falla y desarrollo de procedimientos operativos para mejorar la confiabilidad del activo.",
      },
    ],
  },
  {
    id: "engineering",
    title: "Ingeniería y diseño",
    intro:
      "Ingeniería de proceso rigurosa desde diseño conceptual hasta detalle — balances de materia y energía, simulación, FEED y entregables listos para construcción.",
    imageAlt: "Refinería Irving Oil",
    items: [
      {
        name: "Ingeniería conceptual y pre-FEED",
        detail: "Diagramas de bloque, descripciones de proceso y documentos de bases de diseño que enmarcan el alcance de capital.",
      },
      {
        name: "Simulación de proceso",
        detail: "Simulación en estado estacionario y dinámica que apoya diseño, seguridad y objetivos de optimización.",
      },
      {
        name: "Ingeniería básica (FEED)",
        detail: "P&IDs, hojas de datos de equipos, balances de servicios y documentación de interfaz para paquetes de sanción.",
      },
      {
        name: "Ingeniería de detalle",
        detail:
          "Entregables de ingeniería de proceso listos para construcción, coordinados con disciplinas mecánica, civil e instrumentación.",
      },
    ],
  },
  {
    id: "execution",
    title: "Apoyo a la ejecución de proyectos",
    intro:
      "Revisión de adquisiciones, asistencia en puesta en marcha y asesoría en construcción — manteniendo el intento de proceso durante la fase de obra.",
    imageAlt: "Construcción de planta de proceso",
    items: [
      {
        name: "Apoyo técnico a adquisiciones",
        detail: "Revisión de especificaciones de equipos, evaluación técnica de ofertas de proveedores y alineación de requisiciones de materiales.",
      },
      {
        name: "Apoyo de ingeniería en construcción",
        detail: "Respuesta a RFI, resolución de consultas de campo y revisión de empalmes de proceso durante la construcción.",
      },
      {
        name: "Precomisionamiento y comisionamiento",
        detail: "Revisión de completitud de sistemas, apoyo en listas de pendientes y verificación de preparación para arranque.",
      },
      {
        name: "Arranque y preparación operativa",
        detail: "Desarrollo de procedimientos operativos, apoyo a capacitación de operadores y asesoría en arranque inicial.",
      },
    ],
  },
  {
    id: "optimization",
    title: "Optimización y desempeño",
    intro:
      "Eliminación de cuellos de botella, mejora de rendimiento y optimización de producción para activos en operación — maximizando el valor de la infraestructura existente.",
    imageAlt: "Unidades de procesamiento en refinería",
    items: [
      {
        name: "Estudios de eliminación de cuellos de botella",
        detail: "Identificación de restricciones, análisis hidráulico y opciones de ampliación eficientes en capital.",
      },
      {
        name: "Optimización de producción",
        detail: "Definición de envolvente operativa, mejora de rendimiento y análisis de eficiencia energética.",
      },
    ],
  },
];

const energyEn: EnergyTile[] = [
  { name: "Renewable Diesel & SAF", detail: "Co-processing and dedicated unit engineering" },
  { name: "Hydrogen Production", detail: "SMR, ATR, and electrolysis process support" },
  { name: "Renewable Natural Gas (RNG)", detail: "Biogas upgrading and interconnect engineering" },
  { name: "Waste-to-Energy", detail: "Thermal and chemical conversion process design" },
  { name: "Tires & Plastics to Fuel", detail: "Pyrolysis and hydrotreatment integration" },
  { name: "Carbon Capture Integration", detail: "Process integration and absorption system support" },
];

const energyEs: EnergyTile[] = [
  { name: "Diésel renovable y SAF", detail: "Ingeniería de coprocesamiento y unidades dedicadas" },
  { name: "Producción de hidrógeno", detail: "Apoyo de proceso en SMR, ATR y electrólisis" },
  { name: "Gas natural renovable (RNG)", detail: "Upgrade de biogás e ingeniería de interconexión" },
  { name: "Residuo a energía", detail: "Diseño de proceso de conversión térmica y química" },
  { name: "Neumáticos y plásticos a combustible", detail: "Integración de pirólisis e hidrotratamiento" },
  { name: "Integración de captura de carbono", detail: "Integración de proceso y apoyo en sistemas de absorción" },
];

const industryEn: IndustryCol[] = [
  {
    sector: "Upstream",
    desc: "Facilities close to the wellhead and early processing — reliability and operability from day one.",
    items: [
      "Crude separation, desalting & stabilization",
      "Gas sweetening & dehydration",
      "Compression & storage",
      "Early production facilities",
    ],
  },
  {
    sector: "Midstream",
    desc: "Pipeline and processing assets that connect production to market.",
    items: [
      "Gas processing & NGL recovery",
      "Pipeline treating",
      "LNG facilities & interfaces",
      "Interconnect & compression engineering",
    ],
  },
  {
    sector: "Downstream",
    desc: "Conversion, treating, and balance-of-plant for refineries and conventional processing facilities.",
    items: ["Oil refining (licensed & open-art)", "Utilities & offsites", "Debottlenecking & yield optimization"],
  },
];

const industryEs: IndustryCol[] = [
  {
    sector: "Upstream",
    desc: "Instalaciones cercanas al pozo y procesamiento inicial — confiabilidad y operabilidad desde el primer día.",
    items: [
      "Separación de crudo, desalado y estabilización",
      "Endulzamiento y deshidratación de gas",
      "Compresión y almacenamiento",
      "Instalaciones de producción temprana",
    ],
  },
  {
    sector: "Midstream",
    desc: "Activos de ductos y procesamiento que conectan la producción con el mercado.",
    items: [
      "Procesamiento de gas y recuperación de NGL",
      "Tratamiento en ductos",
      "Instalaciones e interfaces LNG",
      "Ingeniería de interconexión y compresión",
    ],
  },
  {
    sector: "Downstream",
    desc: "Conversión, tratamiento y balance de planta para refinerías e instalaciones de procesamiento convencional.",
    items: [
      "Refinación de petróleo (licenciada y arte abierto)",
      "Servicios y fuera de planta",
      "Eliminación de cuellos de botella y optimización de rendimiento",
    ],
  },
];

const disciplinesEn = [
  "Process Engineering",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Civil / Structural Engineering",
  "Instrumentation & Controls",
  "Piping Engineering",
];

const disciplinesEs = [
  "Ingeniería de proceso",
  "Ingeniería mecánica",
  "Ingeniería eléctrica",
  "Ingeniería civil / estructural",
  "Instrumentación y control",
  "Ingeniería de tuberías",
];

export const SERVICE_PILLARS: Record<Locale, ServicePillar[]> = {
  en: pillarsEn,
  es: pillarsEs,
};

export const ENERGY_TRANSITION: Record<Locale, EnergyTile[]> = {
  en: energyEn,
  es: energyEs,
};

export const INDUSTRY_COVERAGE: Record<Locale, IndustryCol[]> = {
  en: industryEn,
  es: industryEs,
};

export const DISCIPLINES: Record<Locale, string[]> = {
  en: disciplinesEn,
  es: disciplinesEs,
};
