import NormalMission from "@/assets/animation/NormalMission.mp4";
import Initial from "@/assets/animation/Initial.mp4";

export const videoDict = {
  Initial: Initial,
  NormalMission: NormalMission,
  NotPlaying: "NotPlaying",
};

export type VideoStateType = keyof typeof videoDict;
