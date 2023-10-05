interface LevelDataStructure {
  message: string;
  imageSrc: string;
  levelTitle: string;
  Hint_right: string;
  Hint_left: string;
}

export const levelData: Record<number, LevelDataStructure> = {
  1: {
    message: "Please suggest that your subjects send noble daughters to our temple... New blood is needed to keep the faith of the land!",
    imageSrc: "./src/assets/images/1.png",
    levelTitle: "雨水",
    Hint_right: "yes",
    Hint_left:"ne"
  },
  2: {
    message: "Angel consistently brings a unique perspective and unmatched dedication to the team. We are fortunate to have someone as talented and committed as Angel.",
    imageSrc: "./src/assets/images/2.png",
    levelTitle: "河川",
    Hint_right: "yes",
    Hint_left:"ne"
  },
  3: {
    message: "Please suggest that your subjects send noble daughters to our temple... New blood is needed to keep the faith of the land!",
    imageSrc: "./src/assets/images/1.png",
    levelTitle: "地下水",
    Hint_right: "yes",
    Hint_left:"ne"
  },
  4: {
    message: "Angel consistently brings a unique perspective and unmatched dedication to the team. We are fortunate to have someone as talented and committed as Angel.",
    imageSrc: "./src/assets/images/2.png",
    levelTitle: "海洋",
    Hint_right: "yes",
    Hint_left:"ne"
  },
  5: {
    message: "Please suggest that your subjects send noble daughters to our temple... New blood is needed to keep the faith of the land!",
    imageSrc: "./src/assets/images/1.png",
    levelTitle: "雲朵",
    Hint_right: "yes",
    Hint_left:"ne"
  },
  6: {
    message: "Angel consistently brings a unique perspective and unmatched dedication to the team. We are fortunate to have someone as talented and committed as Angel.",
    imageSrc: "./src/assets/images/2.png",
    levelTitle: "雪",
    Hint_right: "yes",
    Hint_left:"ne"
  },
};