
type CardProps = {
  image: string;
  title: string;
  votes: number;
  date: string;
}

export function Card({ image, title, votes, date }: CardProps) {
  return (
    <section className="bg-[linear-gradient(45deg,_#88888822,_#CCCCCC22,_#33333322)] group mt-4 mx-4 rounded-b-xl border-solid border-[1px] border-[#FFFFFF22]">
      <section className="aspect-[16/9] border-solid border-[1px] border-[#FFFFFF22] group-hover:border-[#FFFFFF88] scale-105 group-hover:scale-110 transition rounded-2xl overflow-hidden flex gap-4">
        <img src={image} alt={title} className="w-full object-cover transition-all" />
      </section>
      <section className="p-4 grid gap-2 pt-6">
        <h2 className="text-lg line-clamp-1">{title}</h2>
        <section className="flex justify-between">
          <small>{date}</small>
          <code className="bg-yellow-300 text-gray-900 text-xs py-0.5 px-1 font-bold rounded">
            {Intl.NumberFormat('en-US', { maximumFractionDigits: 1, minimumFractionDigits: 1 }).format(votes)}
          </code>
        </section>
      </section>
    </section>
  );
}