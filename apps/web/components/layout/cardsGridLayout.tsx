type CardsGridLayoutProps<T> = {
  data: Array<T>;
  renderItem: (item: T) => React.ReactNode;
}

export function CardsGridLayout<T>({
  data,
  renderItem,
}: CardsGridLayoutProps<T>) {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8">
      {data.map(renderItem)}
    </section>
  );
}