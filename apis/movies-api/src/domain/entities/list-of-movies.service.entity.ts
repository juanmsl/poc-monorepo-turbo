import { SearchQueryResponse } from "./search-query.service.entity";

export type ListOfMoviesPayload = Partial<{
  page: number;
  sort_by: string;
  include_video: boolean;
  include_adult: boolean;
  language: string;
  'release_date.gte': string;
  'release_date.lte': string;
}>;

export enum MoviesList {
  NOW_PLAYING = 'now_playing',
  POPULAR = 'popular',
  TOP_RATED = 'top_rated',
  UPCOMING = 'upcoming',
}

export type ListOfMoviesResponse = SearchQueryResponse & {
  dates: {
    maximum: string;
    minimum: string;
  };
};
