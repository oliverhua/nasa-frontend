export const levelData: Record<number, LevelDataType> = {
  1: {
    message:
      "Please suggest that your subjects send noble daughters to our temple... New blood is needed to keep the faith of the land!",
    imageSrc: "./src/assets/images/1.png",
    levelTitle: "Rain",
    hintRight: "Jerry is so fat",
    hintLeft: "Jerry is so stupid ",
    leftScore: {
      waterVolume: 5,
      waterQuality: 5,
      temperature: 5,
      engineeringBudget: 5,
    },
    rightScore: {
      waterVolume: 7,
      waterQuality: 7,
      temperature: 7,
      engineeringBudget: 7,
    },
    nextLeftLevel: 3,
    nextRightLevel: 2,
  },
  2: {
    message:
      "Angel consistently brings a unique perspective and unmatched dedication to the team. We are fortunate to have someone as talented and committed as Angel.",
    imageSrc: "./src/assets/images/2.png",
    levelTitle: "River",
    hintRight: "Jerry is so stupid",
    hintLeft: "Jerry is so fat ",
    leftScore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    rightScore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    nextLeftLevel: 4,
    nextRightLevel: 5,
  },
  3: {
    message:
      "Please suggest that your subjects send noble daughters to our temple... New blood is needed to keep the faith of the land!",
    imageSrc: "./src/assets/images/1.png",
    levelTitle: "Ground Water",
    hintRight: "Jerry is so fat",
    hintLeft: "Jerry is so stupid",
    leftScore: {
      waterVolume: 8,
      waterQuality: 8,
      temperature: 8,
      engineeringBudget: 8,
    },
    rightScore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    nextLeftLevel: 4,
    nextRightLevel: 5,
  },
  4: {
    message:
      "Angel consistently brings a unique perspective and unmatched dedication to the team. We are fortunate to have someone as talented and committed as Angel.",
    imageSrc: "./src/assets/images/2.png",
    levelTitle: "Ocean",
    hintRight: "Jerry is so fat",
    hintLeft: "Jerry is so stupid",
    leftScore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    rightScore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    nextLeftLevel: 6,
    nextRightLevel: -1,
  },
  5: {
    message:
      "Please suggest that your subjects send noble daughters to our temple... New blood is needed to keep the faith of the land!",
    imageSrc: "./src/assets/images/1.png",
    levelTitle: "Cloud",
    hintRight: "Jerry is so fat",
    hintLeft: "Jerry is so stupid",
    leftScore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    rightScore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    nextLeftLevel: -1,
    nextRightLevel: 6,
  },
  6: {
    message:
      "Angel consistently brings a unique perspective and unmatched dedication to the team. We are fortunate to have someone as talented and committed as Angel.",
    imageSrc: "./src/assets/images/2.png",
    levelTitle: "Snow",
    hintRight: "Jerry is a pig",
    hintLeft: "Jerry is so stupid",
    leftScore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    rightScore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    nextLeftLevel: -1,
    nextRightLevel: -1,
  },
};

// -1 = end
export type levelNumType = keyof typeof levelData;

export type ScoreType = {
  waterVolume: number;
  waterQuality: number;
  temperature: number;
  engineeringBudget: number;
};

export type ScoreAttribute = keyof ScoreType;
interface LevelDirections {
  hintRight: string;
  hintLeft: string;
  nextLeftLevel: number;
  nextRightLevel: number;
}

interface LevelDataType extends LevelDirections {
  message: string;
  imageSrc: string;
  levelTitle: string;
  leftScore: ScoreType;
  rightScore: ScoreType;
}
