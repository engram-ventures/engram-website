export type SectorGroupKey =
  | "groupFinancialServices"
  | "groupPublicSector"
  | "groupEnterprise"
  | "groupVentures";

export type EngagementKey =
  | "engagementFs1"
  | "engagementFs2"
  | "engagementFs3"
  | "engagementFs4"
  | "engagementFs5"
  | "engagementFs6"
  | "engagementPs1"
  | "engagementPs2"
  | "engagementPs3"
  | "engagementEnt1"
  | "engagementEnt2"
  | "ventureFintech"
  | "ventureHrTech"
  | "ventureWorkplace";

export const clientSectors: ReadonlyArray<{
  titleKey: SectorGroupKey;
  engagementKeys: ReadonlyArray<EngagementKey>;
}> = [
  {
    titleKey: "groupFinancialServices",
    engagementKeys: [
      "engagementFs1",
      "engagementFs2",
      "engagementFs3",
      "engagementFs4",
      "engagementFs5",
      "engagementFs6",
    ],
  },
  {
    titleKey: "groupPublicSector",
    engagementKeys: ["engagementPs1", "engagementPs2", "engagementPs3"],
  },
  {
    titleKey: "groupEnterprise",
    engagementKeys: ["engagementEnt1", "engagementEnt2"],
  },
  {
    titleKey: "groupVentures",
    engagementKeys: ["ventureFintech", "ventureHrTech", "ventureWorkplace"],
  },
];
