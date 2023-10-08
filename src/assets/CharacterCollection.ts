import ch1 from "/character/ch1.png";
import ch2 from "/character/ch2.png";
import ch3 from "/character/ch3.png";
import ch4 from "/character/ch4.png";
import ch5 from "/character/ch5.png";
import ch6 from "/character/ch6.png";
import ch7 from "/character/ch7.png";
import ch8 from "/character/ch8.png";
import ch9 from "/character/ch9.png";

export const characterDict = {
  ch1: ch1,
  ch2: ch2,
  ch3: ch3,
  ch4: ch4,
  ch5: ch5,
  ch6: ch6,
  ch7: ch7,
  ch8: ch8,
  ch9: ch9,
};

export type CharacterType = keyof typeof characterDict;
