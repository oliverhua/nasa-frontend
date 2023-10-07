export const levelData: Record<number, LevelDataType> = {
  1: {
    message:
      "We're raindrops now!",
    imageSrc: "./src/assets/images/StageCardImage/Original Size/Rain.png",
    levelTitle: "Rain",
    hintRight: "Got it!",
    hintLeft: "Okay~",
    nextLeftLevel: 2,
    nextRightLevel: 2,
  },
  2: {
    message:
      "Hey there, adorable raindrop!Wanna team up and have an exciting adventure with me?",
    imageSrc: "./src/assets/images/CharacterCardImages/Name=Ms. CO2-1.png",
    levelTitle: "Rain",
    hintRight: "Nope, solo adventure for me!",
    hintLeft: "Yay!Team up time!",
    nextLeftLevel: 4,
    nextRightLevel: 3,
  },
  3: {
    message:
      "You gotta decide: join forces with me or team up with Mr. NO2, the grumpy gas? Who's it gonna be?",
    imageSrc: "./src/assets/images/CharacterCardImages/Name=Ms. CO2-2.png",
    levelTitle: "Rain",
    hintRight: "Mr. NO2",
    hintLeft: "Ms. CO2",
    nextLeftLevel: 4,
    nextRightLevel: 4,
  },
  4: {
    message:
      "We've turned into acid rain!",
    imageSrc: "./src/assets/images/StageCardImage/Original Size/Rain.png",
    levelTitle: "Rain",
    hintRight: "Got it!",
    hintLeft: "Okay~",
    nextLeftLevel: 5,
    nextRightLevel: 5,
  },
  5: {
    message:
      "Ready for a journey, buddy?Where shall we go explore?",
    imageSrc: "./src/assets/images/CharacterCardImages/Name=Mr. Wind.png",
    levelTitle: "Rain",
    hintRight: "Got it!",
    hintLeft: "Okay~",
    nextLeftLevel: 6,
    nextRightLevel: 6,
  },
  6: {
    message:
      "Whee!Paindrops splashed down and voila!We're in river mode now!",
    imageSrc: "./src/assets/images/StageCardImage/Original Size/Rain.png",
    levelTitle: "River",
    hintRight: "Got it!",
    hintLeft: "Okay~",
    nextLeftLevel: -1,
    nextRightLevel: -1,
  },
  7: {
    message:
      "Hi! So happy to meet you, old friend! Where would you like to explore today?I can take you on adventure!",
    imageSrc: "./src/assets/images/CharacterCardImages/Name=Mr. Fish.png",
    levelTitle: "River",
    hintRight: "Up. See the glacier!!",
    hintLeft: "Down. To the lake!",
    nextLeftLevel: -1,
    nextRightLevel: -1,
  },
  8: {
    message:
      "Whee!Paindrops splashed down and voila!We're in river mode now!",
    imageSrc: "./src/assets/images/StageCardImage/Original Size/Rain.png",
    levelTitle: "River",
    hintRight: "Got it!",
    hintLeft: "Okay~",
    nextLeftLevel: -1,
    nextRightLevel: -1,
  },
  9: {
    message:
      "Whee!Paindrops splashed down and voila!We're in river mode now!",
    imageSrc: "./src/assets/images/StageCardImage/Original Size/Rain.png",
    levelTitle: "River",
    hintRight: "Got it!",
    hintLeft: "Okay~",
    nextLeftLevel: -1,
    nextRightLevel: -1,
  },
  10: {
    message:
      "Whee!Paindrops splashed down and voila!We're in river mode now!",
    imageSrc: "./src/assets/images/StageCardImage/Original Size/Rain.png",
    levelTitle: "River",
    hintRight: "Got it!",
    hintLeft: "Okay~",
    nextLeftLevel: -1,
    nextRightLevel: -1,
  },
  11: {
    message:
      "Whee!Paindrops splashed down and voila!We're in river mode now!",
    imageSrc: "./src/assets/images/StageCardImage/Original Size/Rain.png",
    levelTitle: "River",
    hintRight: "Got it!",
    hintLeft: "Okay~",
    nextLeftLevel: -1,
    nextRightLevel: -1,
  },
  12: {
    message:
      "Whee!Paindrops splashed down and voila!We're in river mode now!",
    imageSrc: "./src/assets/images/StageCardImage/Original Size/Rain.png",
    levelTitle: "River",
    hintRight: "Got it!",
    hintLeft: "Okay~",
    nextLeftLevel: -1,
    nextRightLevel: -1,
  },
  13: {
    message:
      "Whee!Paindrops splashed down and voila!We're in river mode now!",
    imageSrc: "./src/assets/images/StageCardImage/Original Size/Rain.png",
    levelTitle: "River",
    hintRight: "Got it!",
    hintLeft: "Okay~",
    nextLeftLevel: -1,
    nextRightLevel: -1,
  },
  14: {
    message:
      "Whee!Paindrops splashed down and voila!We're in river mode now!",
    imageSrc: "./src/assets/images/StageCardImage/Original Size/Rain.png",
    levelTitle: "River",
    hintRight: "Got it!",
    hintLeft: "Okay~",
    nextLeftLevel: -1,
    nextRightLevel: -1,
  },
  15: {
    message:
      "Whee!Paindrops splashed down and voila!We're in river mode now!",
    imageSrc: "./src/assets/images/StageCardImage/Original Size/Rain.png",
    levelTitle: "River",
    hintRight: "Got it!",
    hintLeft: "Okay~",
    nextLeftLevel: -1,
    nextRightLevel: -1,
  },
  16: {
    message:
      "Whee!Paindrops splashed down and voila!We're in river mode now!",
    imageSrc: "./src/assets/images/StageCardImage/Original Size/Rain.png",
    levelTitle: "River",
    hintRight: "Got it!",
    hintLeft: "Okay~",
    nextLeftLevel: -1,
    nextRightLevel: -1,
  },
};

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
}
