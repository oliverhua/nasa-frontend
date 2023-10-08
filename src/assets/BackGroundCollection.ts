import bg1 from "/background/bg1.png";
import bg2 from "/background/bg2.png";
import bg3 from "/background/bg3.png";
import bg4 from "/background/bg4.png";
import bg5 from "/background/bg5.png";
import bg6 from "/background/bg6.png";
import bg7 from "/background/bg7.png";
import bg8 from "/background/bg8.png";
import bg9 from "/background/bg9.png";
// /src/assets
export const backgroundDict = {
  bg1: bg1,
  bg2: bg2,
  bg3: bg3,
  bg4: bg4,
  bg5: bg5,
  bg6: bg6,
  bg7: bg7,
  bg8: bg8,
  bg9: bg9,
};

export type BackgroundType = keyof typeof backgroundDict;
