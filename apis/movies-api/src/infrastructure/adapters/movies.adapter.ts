import axios, { AxiosInstance } from 'axios';

import {
  GetMovieDetailsResponse,
  ListGenreResponse,
  ListOfMoviesPayload,
  ListOfMoviesResponse,
  MovieDetailsEntity,
  MoviesList,
  MoviesPort,
  SearchQueryPayload,
  SearchQueryResponse,
} from '../../domain';

export type MoviesAdapterConfig = {
  apiURL: string;
  accessToken: string;
}

export class MoviesAdapter implements MoviesPort {
  private http: AxiosInstance;

  constructor({ apiURL, accessToken }: MoviesAdapterConfig) {
    this.http = axios.create({
      baseURL: apiURL,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        accept: "application/json",
        "content-type": "application/json",
      },
    });
  }

  async listMovies(
    category: MoviesList,
    payload: ListOfMoviesPayload = {},
  ): Promise<ListOfMoviesResponse> {
    const { data } = await this.http.get<ListOfMoviesResponse>(
      `/movie/${category}`,
      {
        params: payload,
      },
    );

    return data;
  }

  async getMovieDetails(
    movieId: MovieDetailsEntity["id"],
  ): Promise<GetMovieDetailsResponse> {
    const { data } = await this.http.get<GetMovieDetailsResponse>(
      `/movie/${movieId}`,
    );

    return data;
  }

  async listGenres(): Promise<ListGenreResponse> {
    const { data } =
      await this.http.get<ListGenreResponse>("/genre/movie/list");

    return data;
  }

  async searchQuery(payload: SearchQueryPayload): Promise<SearchQueryResponse> {
    const { data } = await this.http.get<SearchQueryResponse>("/search/movie", {
      params: payload,
    });

    return data;
  }
}
