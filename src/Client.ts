const HOST = "http://192.168.0.164:5000";
// const HOST = "http://localhost:5000";
const PLACE_URL = `${HOST}/finish_place`;
const ANSWER_URL = `${HOST}/answer`;
const TIMEOUT_URL = `${HOST}/timeout`;

const classes = {
  1: "Trash",
  2: "Paper",
  3: "Plastic",
  4: "Metal",
  5: "ElectronicInvoice",
  6: "BubbleWrap",
  7: "ThinPlasticBag",
  8: "FruitMeshBag",
  9: "ThinFilmPaperCup",
};

type ClassKeys = keyof typeof classes;
type ClassValues = (typeof classes)[ClassKeys];

type PlaceResponse = {
  answer: ClassValues;
};

type AnswerResponse = {
  is_correct: boolean;
  answer: ClassValues;
};

export const fetchAnswerData = async (
  selection: "left" | "right"
): Promise<AnswerResponse | null> => {
  try {
    const response = await fetch(`${ANSWER_URL}?select=${selection}`);
    if (!response.ok) throw new Error("Network error");

    return await response.json();
  } catch (error) {
    console.error(`Error fetching answer data:`, error);
    return null;
  }
};

export const fetchPlaceData = async (): Promise<PlaceResponse | null> => {
  try {
    const response = await fetch(PLACE_URL);
    if (!response.ok) throw new Error("Network error");

    return await response.json();
  } catch (error) {
    console.error("Error fetching Place data:", error);
    return null;
  }
};

export const sendTimeoutSignal = async (): Promise<void> => {
  try {
    console.log("sendTimeoutSignal");
    const response = await fetch(TIMEOUT_URL);
    if (!response.ok) throw new Error("Network error");
  } catch (error) {
    console.error("Error fetching Timeout Signal data:", error);
  }
};
