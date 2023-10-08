export const levelData: Record<number, LevelDataType> = {
  1: {
    message: "(TBD)",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Ocean",
    substanceState: "liquid",
    outdegrees: [
      {
        id: 1,
        isCrisis: false,
        choiceMessage: "Evaporation!",
        informationMessage: "(Ocean Evaporation Information)",
      },
      {
        id: 1,
        isCrisis: false,
        choiceMessage: "Current!",
        informationMessage: "(Current Information)",
      },
      {
        id: 1,
        isCrisis: false,
        choiceMessage: "Current!",
        informationMessage: "(Current Information)",
      },
    ],
  },
  2: {
    message: "(TBD))",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Cloud",
    substanceState: "liquid", // | "liquid" | "solid"
    outdegrees: [
      {
        id: 1,
        isCrisis: true,
        choiceMessage: "Evaporation!",
        informationMessage: "(Cloud Evaporation Information)",
        crisisInformationMessage: "(TBD)",
      },
      {
        id: 4,
        isCrisis: true,
        choiceMessage: "Precipitation(Snow)!",
        informationMessage: "Precipitation(Snow) Information",
        crisisInformationMessage: "(TBD)",
      },
      {
        id: 5,
        isCrisis: true,
        choiceMessage: "Precipitation(Rain)!",
        informationMessage: "Precipitation(Rain) Information",
        crisisInformationMessage: "(TBD)",
      },
    ],
  },
  3: {
    message: "(TBD)",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Water Vapor",
    substanceState: "gas",
    outdegrees: [
      {
        id: 3,
        isCrisis: false,
        choiceMessage: "Transportation!",
        informationMessage: "(Water Vapor Transportation Information)",
      },
      {
        id: 2,
        isCrisis: false,
        choiceMessage: "Condensation!",
        informationMessage: "(Water Vapor Condensation Information)",
      },
    ],
  },
  4: {
    message: "(TBD)",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Mountain Snow",
    substanceState: "solid",
    outdegrees: [
      {
        id: 3,
        isCrisis: true,
        choiceMessage: "Sublimation!",
        informationMessage: "(Information)",
        crisisInformationMessage: "(TBD)",
      },
      {
        id: 4,
        isCrisis: false,
        choiceMessage: "Deposition!",
        informationMessage: "(Information)",
      },
      {
        id: 5,
        isCrisis: false,
        choiceMessage: "Snowmelt Runoff!",
        informationMessage: "(Information)",
      },
    ],
  },
  5: {
    message: "(TBD)",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Lakes & Streams",
    substanceState: "liquid",
    outdegrees: [
      {
        id: 1,
        isCrisis: false,
        choiceMessage: "Discharge!",
        informationMessage: "(Information)",
      },
      {
        id: 6,
        isCrisis: false,
        choiceMessage: "Infiltration and Percolation!",
        informationMessage: "(Information)",
      },
    ],
  },
  6: {
    message: "(TBD)",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Groundwater",
    substanceState: "liquid",
    outdegrees: [
      {
        id: 1,
        isCrisis: false,
        choiceMessage: "Discharge!",
        informationMessage: "(Information)",
      },
      {
        id: 5,
        isCrisis: false,
        choiceMessage: "Seapage!",
        informationMessage: "(Information)",
      },
      {
        id: 7,
        isCrisis: true,
        choiceMessage: "Plant Uptake!",
        informationMessage: "(Information)",
        crisisInformationMessage: "(TBD)",
      },
    ],
  },
  7: {
    message: "(TBD)",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Water in plants",
    substanceState: "liquid",
    outdegrees: [
      {
        id: 6,
        isCrisis: false,
        choiceMessage: "Guttation!",
        informationMessage: "(Information)",
      },
      {
        id: 8,
        isCrisis: true,
        choiceMessage: "Digest!",
        informationMessage: "(Information)",
        crisisInformationMessage: "(TBD)",
      },
      {
        id: 3,
        isCrisis: true,
        choiceMessage: "Transpiration!",
        informationMessage: "(Information)",
        crisisInformationMessage: "(TBD)",
      },
    ],
  },
  8: {
    message: "(TBD)",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Water in animals",
    substanceState: "liquid",
    outdegrees: [
      {
        id: 3,
        isCrisis: false,
        choiceMessage: "Cellular Respiration!",
        informationMessage: "(Information)",
      },
      {
        id: 5,
        isCrisis: false,
        choiceMessage: "Excretion",
        informationMessage: "(Information)",
      },
    ],
  },
  9: {
    message: "(TBD)",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Polar & Glacial Ice",
    substanceState: "liquid",
    outdegrees: [
      {
        id: 3,
        isCrisis: false,
        choiceMessage: "Cellular Respiration!",
        informationMessage: "(Information)",
      },
      {
        id: 5,
        isCrisis: false,
        choiceMessage: "Excretion",
        informationMessage: "(Information)",
      },
    ],
  },
};

export type levelNumType = keyof typeof levelData;

interface BaseOutdegree {
  id: number;
  choiceMessage: string;
  informationMessage: string;
}

interface CrisisOutdegree extends BaseOutdegree {
  isCrisis: true;
  crisisInformationMessage: string;
}

interface NonCrisisOutdegree extends BaseOutdegree {
  isCrisis: false;
}

export type OutdegreeType = CrisisOutdegree | NonCrisisOutdegree;

interface LevelDataType {
  message: string;
  imageSrc: string;
  cardName: string;
  substanceState: "gas" | "liquid" | "solid";
  outdegrees: OutdegreeType[];
}
