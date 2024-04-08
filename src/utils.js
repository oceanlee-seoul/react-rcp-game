const HANDS = ["rock", "scissor", "paper"];

const WINS = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};

export const compareHand = (a, b) => {
  if (WINS[a] === b) return 1; // a 승리
  if (WINS[b] === a) return -1; // b 승리
  return 0;
};

const random = (n) => {
  return Math.floor(Math.random() * n);
};

export const generateRandomHand = () => {
  const index = random(HANDS.length);
  return HANDS[index];
};
