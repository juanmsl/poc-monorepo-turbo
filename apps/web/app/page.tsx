import MoviesAPI, { MovieEntity, MoviesList } from "@studio/movies-api";
import { Card } from "../components";
import { CardsGridLayout } from "../components/layout/cardsGridLayout";

export type PageSearchParams = {
  search: MoviesList;
  q: string;
};

export type PageProps = {
  searchParams: Promise<PageSearchParams>;
}

export function renderMovie(movie: MovieEntity) {
  return (
    <Card
      key={movie.id}
      title={movie.title}
      image={movie.poster_path}
      votes={movie.vote_average}
      date={movie.release_date}
    />
  );
}

export default async function Page({
  searchParams
}: PageProps) {
  const { search } = await searchParams;
  const movies = await MoviesAPI.listMovies(Object.values(MoviesList).includes(search) ? search : MoviesList.NOW_PLAYING);

  return (
    <CardsGridLayout
      data={movies.results}
      renderItem={renderMovie}
    />
  );
}
