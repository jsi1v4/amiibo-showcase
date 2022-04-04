import { HttpProvider } from '@/providers/http';

import { GetAmiibosRequest, GetAmiibosResponse, GetGameseriesResponse } from './types';

export class AmiiboService {
  constructor(private http: HttpProvider) {}

  async getAmiibos(params?: GetAmiibosRequest): Promise<GetAmiibosResponse[]> {
    return this.http.get('/amiibo', { params }).then((res) => res.data.amiibo);
  }

  async getGameseries(): Promise<GetGameseriesResponse[]> {
    return this.http.get('/gameseries').then((res) => res.data.amiibo);
  }
}
