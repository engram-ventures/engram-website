export const featuredLogos = [
  "Aspen Medical",
  "Cathay Pacific",
  "Tricor (Permira)",
  "Athena",
] as const;

export type SectorGroupKey =
  | "groupFinancialServices"
  | "groupPublicSector"
  | "groupEnterprise"
  | "groupVentures";

export const sectorGroups: ReadonlyArray<{
  titleKey: SectorGroupKey;
  logos: ReadonlyArray<string>;
}> = [
  {
    titleKey: "groupFinancialServices",
    logos: [
      "DBS",
      "NAB",
      "HSBC",
      "eftpos",
      "Fidelity",
      "CompareAsia",
      "Tricor (Permira)",
      "Ascentium",
    ],
  },
  {
    titleKey: "groupPublicSector",
    logos: [
      "Australian Government",
      "Transport for NSW",
      "NSW Education",
      "FIAL",
    ],
  },
  {
    titleKey: "groupEnterprise",
    logos: ["Cathay Pacific", "Aspen Medical"],
  },
  {
    titleKey: "groupVentures",
    logos: [
      "Athena",
      "EarlyTrade",
      "Calven",
      "Striver",
      "Tribe",
      "imunis",
      "Pointer",
      "Training Paddock",
    ],
  },
];
