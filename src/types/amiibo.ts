export type AmiiboID = number;
export type GameID = string;

export interface Amiibo {
  id: AmiiboID;
  name: string;
  gameName: string;
  amiiboGame: string;
  image: string;
}

export interface Game {
  id: GameID;
  name: string;
}
