import intro from "@/assets/animation/intro.mp4";
import intro_2 from "@/assets/animation/intro_2.mp4";
import outro_1 from "@/assets/animation/outro_1.mp4";

export const videoDict = {
  intro: intro,
  intro_2: intro_2,
  outro_1: outro_1,
  NotPlaying: "NotPlaying",
};

export type VideoStateType = keyof typeof videoDict;
