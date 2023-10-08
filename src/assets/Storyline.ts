export const levelData = {
  1: {
    message: "(TBD)",
    cardName: "Ocean",
    substanceState: "liquid",
    iconImage: "./src/assets/images/IconImages/Frame91.svg",
    outdegrees: [
      {
        edgeID: 2,
        id: 3,
        isCrisis: false,
        choiceMessage: "Evaporation!",
        informationMessage: "(Ocean Evaporation Information)",
        informationVideo: "()",
        informationImage: "()",
      },
      {
        edgeID: 1,
        id: 1,
        isCrisis: false,
        choiceMessage: "Current!",
        informationMessage: "(Current Information)",
        informationVideo: "()",
        informationImage: "()",
      },
      {
        edgeID: 24,
        id: 9,
        isCrisis: true,
        choiceMessage: "Freeze!",
        informationMessage: "(Current Information)",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
      },
    ],
  },
  2: {
    message: "(TBD))",
    cardName: "Cloud",
    substanceState: "liquid",
    iconImage: "./src/assets/images/IconImages/Frame90.svg",
    outdegrees: [
      {
        edgeID: 4,
        id: 3,
        isCrisis: true,
        choiceMessage: "Evaporation!",
        informationMessage: "(Cloud Evaporation Information)",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
      },
      {
        edgeID: 5,
        id: 4,
        isCrisis: true,
        choiceMessage: "Precipitation(Snow)!",
        informationMessage: "Precipitation(Snow) Information",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
      },
      {
        edgeID: 6,
        id: 5,
        isCrisis: true,
        choiceMessage: "Precipitation(Rain)!",
        informationMessage: "Precipitation(Rain) Information",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
      },
      {
        edgeID: 26,
        id: 1,
        isCrisis: true,
        choiceMessage: "Precipitation(Rain)!",
        informationMessage: "Precipitation(Rain) Information",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
      },
      {
        edgeID: 23,
        id: 9,
        isCrisis: true,
        choiceMessage: "Precipitation(Snow)!",
        informationMessage: "Precipitation(Snow) Information",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
      },
    ],
  },
  3: {
    message: "(TBD)",
    cardName: "Water Vapor",
    substanceState: "gas",
    iconImage: "./src/assets/images/IconImages/Frame87.svg",
    outdegrees: [
      {
        edgeID: 28,
        id: 3,
        isCrisis: false,
        choiceMessage: "Transportation!",
        informationMessage: "(Water Vapor Transportation Information)",
        informationVideo: "()",
        informationImage: "()",
      },
      {
        edgeID: 3,
        id: 2,
        isCrisis: false,
        choiceMessage: "Condensation!",
        informationMessage: "(Water Vapor Condensation Information)",
        informationVideo: "()",
        informationImage: "()",
      },
      {
        edgeID: 20,
        id: 4,
        isCrisis: true,
        choiceMessage: "Frost!",
        informationMessage: "Information",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
      },
      {
        edgeID: 22,
        id: 9,
        isCrisis: true,
        choiceMessage: "Frost!",
        informationMessage: "Information",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
      },
    ],
  },
  4: {
    message: "(TBD)",
    cardName: "Mountain Snow",
    substanceState: "solid",
    iconImage: "./src/assets/images/IconImages/Frame89.svg",
    outdegrees: [{
        id: 3,
        isCrisis: true,
        choiceMessage: "Sublimation!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
      },
      {
        edgeID: 8,
        id: 4,
        isCrisis: true,
        choiceMessage: "Deposition!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
      },
      {
        edgeID: 9,
        id: 5,
        isCrisis: false,
        choiceMessage: "Snowmelt Runoff!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
      },
    ],
  },
  5: {
    message: "(TBD)",
    cardName: "Lakes & Streams",
    substanceState: "liquid",
    iconImage: "./src/assets/images/IconImages/Frame94.svg",
    outdegrees: [
      {
        edgeID: 11,
        id: 1,
        isCrisis: false,
        choiceMessage: "Runoff!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
      },
      {
        edgeID: 10,
        id: 6,
        isCrisis: false,
        choiceMessage: "Infiltration and Percolation!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
      },
      {
        edgeID: 27,
        id: 8,
        isCrisis: true,
        choiceMessage: "Comnsumption!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
      },
    ],
  },
  6: {
    message: "(TBD)",
    cardName: "Groundwater",
    substanceState: "liquid",
    iconImage: "./src/assets/images/IconImages/Frame93.svg",
    outdegrees: [
      {
        edgeID: 13,
        id: 1,
        isCrisis: true,
        choiceMessage: "Discharge!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
      },
      {
        edgeID: 12,
        id: 5,
        isCrisis: false,
        choiceMessage: "Seepage!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
      },
      {
        edgeID: 14,
        id: 7,
        isCrisis: true,
        choiceMessage: "Plant Uptake!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
      },
    ],
  },
  7: {
    message: "(TBD)",
    cardName: "Water in plants",
    substanceState: "liquid",
    iconImage: "./src/assets/images/IconImages/Frame86.svg",
    outdegrees: [
      {
        edgeID: 15,
        id: 6,
        isCrisis: true,
        choiceMessage: "Guttation!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
      },
      {
        edgeID: 16,
        id: 8,
        isCrisis: false,
        choiceMessage: "Digestion!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
      },
      {
        edgeID: 18,
        id: 3,
        isCrisis: true,
        choiceMessage: "Transpiration!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
      },
    ],
  },
  8: {
    message: "(TBD)",
    cardName: "Water in animals",
    substanceState: "liquid",
    iconImage: "./src/assets/images/IconImages/Frame88.svg",
    outdegrees: [
      {
        edgeID: 19,
        id: 3,
        isCrisis: false,
        choiceMessage: "Cellular Respiration!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
      },
      {
        edgeID: 17,
        id: 5,
        isCrisis: false,
        choiceMessage: "Excretion",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
      },
    ],
  },
  9: {
    message: "(TBD)",
    cardName: "Polar & Glacial Ice",
    substanceState: "solid",
    iconImage: "./src/assets/images/IconImages/Frame92.svg",
    outdegrees: [
      {
        edgeID: 25,
        id: 1,
        isCrisis: false,
        choiceMessage: "Melting!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
      },
      {
        edgeID: 21,
        id: 3,
        isCrisis: false,
        choiceMessage: "Sublimation",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
      },
    ],
  },
};

export type levelNumType = keyof typeof levelData;

interface BaseOutdegree {
  edgeID: number;
  id: levelNumType;
  choiceMessage: string;
  informationMessage: string;
  informationVideo: string;
  informationImage: string;
}

interface CrisisOutdegree extends BaseOutdegree {
  isCrisis: true;
  crisisInformationMessage: string;
}

interface NonCrisisOutdegree extends BaseOutdegree {
  isCrisis: false;
}

export type OutdegreeType = CrisisOutdegree | NonCrisisOutdegree;

export interface LevelDataType {
  message: string
  cardName: string;
  iconImage: string;
  substanceState: "gas" | "liquid" | "solid";
  outdegrees: OutdegreeType[];
}
