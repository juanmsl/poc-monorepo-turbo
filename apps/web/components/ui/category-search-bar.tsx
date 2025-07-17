'use client';

import { MoviesList } from "@studio/movies-api";
import Link from "next/link";
import { Button, Input } from "@studio/ui";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const MovieCategories = [
  {
    label: 'Now Playing',
    key: MoviesList.NOW_PLAYING
  },
  {
    label: 'Upcoming',
    key: MoviesList.UPCOMING
  },
  {
    label: 'Popular',
    key: MoviesList.POPULAR
  },
  {
    label: 'Top Rated',
    key: MoviesList.TOP_RATED
  }
]

export function CategorySearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.get('q') ?? '');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${search}`, {
      scroll: true
    })
  }

  return (
    <nav className="p-4 rounded-full border-solid border-[1px] border-[#FFFFFF22] sticky top-8 backdrop-blur-sm z-50 flex gap-8 items-center justify-between bg-[linear-gradient(45deg,_#88888822,_#CCCCCC22,_#33333322)]">
      <section className="flex gap-4 items-center">
        {MovieCategories.map(({ label, key }) => (
          <Link
            key={key}
            href={{
              pathname: '/',
              query: { search: key }
            }}
          >
            <Button variant={searchParams.get('search') === key ? 'secondary' : 'default'} className="shadow bg-[linear-gradient(45deg,_#88888822,_#CCCCCC22,_#33333322)] border rounded-full">
                {label}
            </Button>
          </Link>
        ))}
      </section>
      <form onSubmit={handleSubmit}>
        <Input
          className="rounded-full w-56 focus:w-96 transition-all border-solid border-[1px] focus:shadow-0 border-[#FFFFFF22]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
      </form>
    </nav>
  );
}