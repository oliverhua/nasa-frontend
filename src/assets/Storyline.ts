interface LevelDataStructure {
  message: string;
  imageSrc: string;
  levelTitle: string;
  Hint_right: string;
  Hint_left: string;
  getleftscore: {
    waterVolume: number;
    waterQuality: number;
    temperature: number;
    engineeringBudget: number;
  };
  getrightscore: {
    waterVolume: number;
    waterQuality: number;
    temperature: number;
    engineeringBudget: number;
  };
  nextleftlevel: number;
  nextrightlevel: number;
}

export const levelData: Record<number, LevelDataStructure> = {
  1: {
    message:
      "Please suggest that your subjects send noble daughters to our temple... New blood is needed to keep the faith of the land!",
    imageSrc: "./src/assets/images/1.png",
    levelTitle: "雨水",
    Hint_right: "Jerry is so fat",
    Hint_left: "Jerry is so stupid ",
    getleftscore: {
      waterVolume: 5,
      waterQuality: 5,
      temperature: 5,
      engineeringBudget: 5,
    },
    getrightscore: {
      waterVolume: 7,
      waterQuality: 7,
      temperature: 7,
      engineeringBudget: 7,
    },
    nextleftlevel: 3,
    nextrightlevel: 2,
  },
  2: {
    message:
      "Angel consistently brings a unique perspective and unmatched dedication to the team. We are fortunate to have someone as talented and committed as Angel.",
    imageSrc: "./src/assets/images/2.png",
    levelTitle: "河川",
    Hint_right: "Jerry is so stupid",
    Hint_left: "Jerry is so fat ",
    getleftscore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    getrightscore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    nextleftlevel: 4,
    nextrightlevel: 5,
  },
  3: {
    message:
      "Please suggest that your subjects send noble daughters to our temple... New blood is needed to keep the faith of the land!",
    imageSrc: "./src/assets/images/1.png",
    levelTitle: "地下水",
    Hint_right: "Jerry is so fat",
    Hint_left: "Jerry is so stupid",
    getleftscore: {
      waterVolume: 8,
      waterQuality: 8,
      temperature: 8,
      engineeringBudget: 8,
    },
    getrightscore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    nextleftlevel: 4,
    nextrightlevel: 5,
  },
  4: {
    message:
      "Angel consistently brings a unique perspective and unmatched dedication to the team. We are fortunate to have someone as talented and committed as Angel.",
    imageSrc: "./src/assets/images/2.png",
    levelTitle: "海洋",
    Hint_right: "Jerry is so fat",
    Hint_left: "Jerry is so stupid",
    getleftscore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    getrightscore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    nextleftlevel: 6,
    nextrightlevel: -1,
  },
  5: {
    message:
      "Please suggest that your subjects send noble daughters to our temple... New blood is needed to keep the faith of the land!",
    imageSrc: "./src/assets/images/1.png",
    levelTitle: "雲朵",
    Hint_right: "Jerry is so fat",
    Hint_left: "Jerry is so stupid",
    getleftscore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    getrightscore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    nextleftlevel: -1,
    nextrightlevel: 6,
  },
  6: {
    message:
      "Angel consistently brings a unique perspective and unmatched dedication to the team. We are fortunate to have someone as talented and committed as Angel.",
    imageSrc: "./src/assets/images/2.png",
    levelTitle: "雪",
    Hint_right: "Jerry is a pig",
    Hint_left: "Jerry is so stupid",
    getleftscore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    getrightscore: {
      waterVolume: 0,
      waterQuality: 0,
      temperature: 0,
      engineeringBudget: 0,
    },
    nextleftlevel: -1,
    nextrightlevel: -1,
  },
};
// -1 = end
