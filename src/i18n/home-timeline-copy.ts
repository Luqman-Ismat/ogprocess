import type { Locale } from "./types";
import { UI_MESSAGES } from "./ui-messages";

export type CapabilityCap = { title: string; hint: string; href: string };
export type DiffBlock = { title: string; body: string };
export type AudienceBlock = { title: string; body: string };
export type EnergyTileCopy = { name: string; detail: string };

export type TimelineCopy = {
  strategy: string;
  strategyH: string;
  strategyP: string;
  engineering: string;
  indLabel: string;
  indTitle: string;
  indSub: string;
  upstream: string[];
  upstreamDesc: string;
  midstream: string[];
  midstreamDesc: string;
  downstream: string[];
  downstreamDesc: string;
  etLabel: string;
  etTitle: string;
  etSub: string;
  etTiles: EnergyTileCopy[];
  procurement: string;
  capTitle: string;
  capSub: string;
  exploreServices: string;
  caps: CapabilityCap[];
  execution: string;
  whyLabel: string;
  diffTitle: string;
  diffs: DiffBlock[];
  clientsLabel: string;
  whoTitle: string;
  audiences: AudienceBlock[];
  commissioning: string;
  globalLabel: string;
  globalTitle: string;
  globalP: string;
  regions: string[];
  ctaTitle: string;
  ctaSub: string;
  ctaDiscuss: string;
  ctaView: string;
};

export function getTimelineCopy(locale: Locale): TimelineCopy {
  const home = UI_MESSAGES[locale].home as { timeline: TimelineCopy };
  return home.timeline;
}
