import { Option } from '@/types';
import { Amiibo, Game } from '@/types/amiibo';
import { GetAmiibosResponse, GetGameseriesResponse } from './types';

export function mapAmiibos() {
  return (data?: GetAmiibosResponse[]): Amiibo[] => {
    return (
      data?.map((x, i) => ({
        id: i + 1,
        name: x.name || x.character,
        gameName: x.gameSeries,
        amiiboGame: x.amiiboSeries,
        image: x.image
      })) || []
    );
  };
}

export function mapAmiibosOptions() {
  return (data?: GetAmiibosResponse[]): Option<Amiibo>[] => {
    const items = mapAmiibos()(data);
    return items.map((x) => ({
      id: x.id,
      label: x.name,
      value: x
    }));
  };
}

export function mapGameseries() {
  return (data?: GetGameseriesResponse[]): Game[] => {
    return (
      data?.map((x) => ({
        id: x.key,
        name: x.name
      })) || []
    );
  };
}

export function mapGameseriesOptions() {
  return (data?: GetGameseriesResponse[]): Option<Game>[] => {
    const items = mapGameseries()(data);
    return items.map((x) => ({
      id: x.id,
      label: x.name,
      value: x
    }));
  };
}
