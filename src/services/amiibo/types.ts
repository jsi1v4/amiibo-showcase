export interface GetAmiibosRequest {
  name?: string;
  character?: string;
  showusage?: boolean;
}

export interface GetAmiibosResponse {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  games3DS: {
    amiiboUsage: {
      usage: string;
      write: boolean;
    }[];
    gameID: string[];
    gameName: string;
  }[];
  gamesSwitch: {
    amiiboUsage: {
      usage: string;
      write: boolean;
    }[];
    gameID: string[];
    gameName: string;
  }[];
  gamesWiiU: {
    amiiboUsage: {
      usage: string;
      write: boolean;
    }[];
    gameID: string[];
    gameName: string;
  }[];
  head: string;
  image: string;
  name: string;
  release: {
    au: string;
    eu: string;
    jp: string;
    na: string;
  };
  tail: string;
  type: string;
}

export interface GetGameseriesResponse {
  key: string;
  name: string;
}
