export type Locale = "en" | "es";

export type ServiceItem = { name: string; detail: string };

export type ServicePillar = {
  id: string;
  title: string;
  intro: string;
  imageAlt: string;
  items: ServiceItem[];
};

export type IndustryCol = {
  sector: string;
  desc: string;
  items: string[];
};

export type EnergyTile = { name: string; detail: string };
