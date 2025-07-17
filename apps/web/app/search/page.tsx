import MoviesAPI from "@studio/movies-api";
import { CardsGridLayout } from "../../components/layout/cardsGridLayout";
import { PageProps, renderMovie } from "../page";

export default async function Page({
  searchParams
}: PageProps) {
  const { q } = await searchParams;
  const searchMovies = await MoviesAPI.searchQuery({
    query: q ?? '',
  });

  return (
    <CardsGridLayout
      data={searchMovies.results}
      renderItem={renderMovie}
    />
  );
}