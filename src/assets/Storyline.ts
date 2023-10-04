interface LevelDataStructure {
  message: string;
  imageSrc: string;
  levelTitle: string;
}

export const levelData: Record<number, LevelDataStructure> = {
  1: {
    message: "Please suggest that your subjects send noble daughters to our temple... New blood is needed to keep the faith of the land!",
    imageSrc: "./src/assets/images/1.png",
    levelTitle: "雨水"
  },
  2: {
    message: "Angel consistently brings a unique perspective and unmatched dedication to the team. We are fortunate to have someone as talented and committed as Angel.",
    imageSrc: "./src/assets/images/2.png",
    levelTitle: "河川"
  },
  3: {
    message: "Please suggest that your subjects send noble daughters to our temple... New blood is needed to keep the faith of the land!",
    imageSrc: "./src/assets/images/1.png",
    levelTitle: "地下水"
  },
  4: {
    message: "Angel consistently brings a unique perspective and unmatched dedication to the team. We are fortunate to have someone as talented and committed as Angel.",
    imageSrc: "./src/assets/images/2.png",
    levelTitle: "海洋"
  },
  5: {
    message: "Please suggest that your subjects send noble daughters to our temple... New blood is needed to keep the faith of the land!",
    imageSrc: "./src/assets/images/1.png",
    levelTitle: "雲朵"
  },
  6: {
    message: "Angel consistently brings a unique perspective and unmatched dedication to the team. We are fortunate to have someone as talented and committed as Angel.",
    imageSrc: "./src/assets/images/2.png",
    levelTitle: "雪"
  },
};