export const levelData: Record<number, LevelDataType> = {
  1: {
    message: "(TBD)",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Ocean",
    substanceState: "liquid",
    outdegrees: [{
      id: 3,
      isCrisis: false,
      choiceMessage: "Evaporation!",
      informationMessage: "(Ocean Evaporation Information)",
      informationVideo: "()",
      informationImage: "()",
    }, {
      id: 1,
      isCrisis: false,
      choiceMessage: "Current!",
      informationMessage: "(Current Information)",
      informationVideo: "()",
      informationImage: "()",
    }, {
        id: 9,
        isCrisis: true,
        choiceMessage: "Freeze!",
        informationMessage: "(Current Information)",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
    }]
  },
  2: {
    message: "(TBD))",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Cloud",
    substanceState: "liquid", // | "liquid" | "solid"
    outdegrees: [{
      id: 3,
      isCrisis: true,
      choiceMessage: "Evaporation!",
      informationMessage: "(Cloud Evaporation Information)",
      informationVideo: "()",
      informationImage: "()",
      crisisInformationMessage: "(TBD)",
    }, {
      id: 4,
      isCrisis: true,
      choiceMessage: "Precipitation(Snow)!",
      informationMessage: "Precipitation(Snow) Information",
      informationVideo: "()",
      informationImage: "()",
      crisisInformationMessage: "(TBD)",
    }, {
      id: 5,
      isCrisis: true,
      choiceMessage: "Precipitation(Rain)!",
      informationMessage: "Precipitation(Rain) Information",
      informationVideo: "()",
      informationImage: "()",
      crisisInformationMessage: "(TBD)",
    }, {
        id: 1,
        isCrisis: true,
        choiceMessage: "Precipitation(Rain)!",
        informationMessage: "Precipitation(Rain) Information",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
      }, {
        id: 9,
        isCrisis: true,
        choiceMessage: "Precipitation(Snow)!",
        informationMessage: "Precipitation(Snow) Information",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
    }]
  },
  3: {
    message: "(TBD)",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Water Vapor",
    substanceState: "gas",
    outdegrees: [{
      id: 3,
      isCrisis: false,
      choiceMessage: "Transportation!",
      informationMessage: "(Water Vapor Transportation Information)",
      informationVideo: "()",
      informationImage: "()",
    }, {
      id: 2,
      isCrisis: false,
      choiceMessage: "Condensation!",
      informationMessage: "(Water Vapor Condensation Information)",
      informationVideo: "()",
      informationImage: "()",
    }, {
        id: 4,
        isCrisis: true,
        choiceMessage: "Frost!",
        informationMessage: "Information",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
      }, {
        id: 9,
        isCrisis: true,
        choiceMessage: "Frost!",
        informationMessage: "Information",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
    }]
  },
  4: {
    message: "(TBD)",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Mountain Snow",
    substanceState: "solid",
    outdegrees: [{
        id: 3,
        isCrisis: true,
        choiceMessage: "Sublimation!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
    }, {
        id: 4,
        isCrisis: true,
        choiceMessage: "Deposition!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
    }, {
      id: 5,
        isCrisis: false,
        choiceMessage: "Snowmelt Runoff!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
    }]
  },
  5: {
    message: "(TBD)",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Lakes & Streams",
    substanceState: "liquid",
    outdegrees: [{
        id: 1,
        isCrisis: false,
        choiceMessage: "Runoff!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
    }, {
      id: 6,
      isCrisis: false,
      choiceMessage: "Infiltration and Percolation!",
      informationMessage: "(Information)",
      informationVideo: "()",
      informationImage: "()",
    }, {
        id: 8,
        isCrisis: true,
        choiceMessage: "Comnsumption!",
        informationMessage: "(Information)",
        informationVideo: "()",
        informationImage: "()",
        crisisInformationMessage: "(TBD)",
    }]
  },
  6: {
    message: "(TBD)",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Groundwater",
    substanceState: "liquid",
    outdegrees: [{
      id: 1,
      isCrisis: true,
      choiceMessage: "Discharge!",
      informationMessage: "(Information)",
      informationVideo: "()",
      informationImage: "()",
      crisisInformationMessage: "(TBD)",
    }, {
      id: 5,
      isCrisis: false,
      choiceMessage: "Seepage!",
      informationMessage: "(Information)",
      informationVideo: "()",
      informationImage: "()",
    }, {
      id: 7,
      isCrisis: true,
      choiceMessage: "Plant Uptake!",
      informationMessage: "(Information)",
      informationVideo: "()",
      informationImage: "()",
      crisisInformationMessage: "(TBD)",
    }]
  },
  7: {
    message: "(TBD)",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Water in plants",
    substanceState: "liquid",
    outdegrees: [{
      id: 6,
      isCrisis: true,
      choiceMessage: "Guttation!",
      informationMessage: "(Information)",
      informationVideo: "()",
      informationImage: "()",
      crisisInformationMessage: "(TBD)",
    }, {
      id: 8,
      isCrisis: false,
      choiceMessage: "Digestion!",
      informationMessage: "(Information)",
      informationVideo: "()",
      informationImage: "()",
    }, {
      id: 3,
      isCrisis: true,
      choiceMessage: "Transpiration!",
      informationMessage: "(Information)",
      informationVideo: "()",
      informationImage: "()",
      crisisInformationMessage: "(TBD)",
    }]
  },
  8: {
    message: "(TBD)",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Water in animals",
    substanceState: "liquid",
    outdegrees: [{
      id: 3,
      isCrisis: false,
      choiceMessage: "Cellular Respiration!",
      informationMessage: "(Information)",
      informationVideo: "()",
      informationImage: "()",
    }, {
      id: 5,
      isCrisis: false,
      choiceMessage: "Excretion",
      informationMessage: "(Information)",
      informationVideo: "()",
      informationImage: "()",
    }]
  },
  9: {
    message: "(TBD)",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "Polar & Glacial Ice",
    substanceState: "solid",
    outdegrees: [{
      id: 1,
      isCrisis: false,
      choiceMessage: "Melting!",
      informationMessage: "(Information)",
      informationVideo: "()",
      informationImage: "()",
    }, {
      id: 3,
      isCrisis: false,
      choiceMessage: "Sublimation",
      informationMessage: "(Information)",
      informationVideo: "()",
      informationImage: "()",
    }]
  },
};

export type levelNumType = keyof typeof levelData;

interface BaseOutdegree {
  id: number;
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

interface LevelDataType {
  message: string;
  imageSrc: string;
  cardName: string;
  substanceState: "gas" | "liquid" | "solid";
  outdegrees: OutdegreeType[];
}
