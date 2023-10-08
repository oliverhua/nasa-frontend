export const levelData: Record<number, LevelDataType> = {
  1: {
    message: "We're raindrops now!",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "11111111111111111111111111111111111",
    substanceState: "gas", // | "liquid" | "solid"
    outdegrees: [
      {
        id: 2,
        isCrisis: true,
        choiceMessage: "This is the choice for 2",
        informationMessage: "Information 2 to 2",
        crisisInformationMessage: "This is the crisis information of 2",
      },
      {
        id: 2,
        isCrisis: false,
        choiceMessage: "This is the choice for 2",
        informationMessage: "Information 2 to 2",
        crisisInformationMessage: "This is the crisis information of 2",
      },
      {
        id: 2,
        isCrisis: false,
        choiceMessage: "This is the choice for 2",
        informationMessage: "Information 2 to 2",
        crisisInformationMessage: "This is the crisis information of 2",
      },
    ],
  },
  2: {
    message: "We're raindrops now!",
    imageSrc: "./src/assets/images/StageCardImage/originalSize/Rain.png",
    cardName: "222222222222222222222222222222222222222",
    substanceState: "gas", // | "liquid" | "solid"
    outdegrees: [
      {
        id: 1,
        isCrisis: true,
        choiceMessage: "This is the choice for 1",
        informationMessage: "Information 1 to 1",
        crisisInformationMessage: "This is the crisis information of 1",
      },
      {
        id: 1,
        isCrisis: true,
        choiceMessage: "This is the choice for 1",
        informationMessage: "Information 1 to 1",
        crisisInformationMessage: "This is the crisis information of 1",
      },
      {
        id: 1,
        isCrisis: true,
        choiceMessage: "This is the choice for 1",
        informationMessage: "Information 1 to 1",
        crisisInformationMessage: "This is the crisis information of 1",
      },
    ],
  },
};

export type levelNumType = keyof typeof levelData;

type LevelDataType = {
  message: string;
  imageSrc: string;
  cardName: string;
  substanceState: "gas" | "liquid" | "solid";
  outdegrees: OutdegreeType[];
};

export type OutdegreeType = {
  id: number;
  isCrisis: boolean;
  choiceMessage: string;
  informationMessage: string;
  crisisInformationMessage: string;
};
