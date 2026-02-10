/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { notFound } from "next/navigation";

// Same hotspots array එක import කරගන්න (හරි separate data file එකකින්)
const hotspots: any[] = [
  /* your array */
];

export default function DestinationPage({
  params,
}: {
  params: { id: string };
}) {
  const spot = hotspots.find((s) => s.id === params.id);
  if (!spot) notFound();

  return (
    <main className="bg-black min-h-screen py-32">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-5xl md:text-7xl font-medium text-[var(--gold)] text-center mb-12">
          {spot.label}
        </h1>

        {spot.image && (
          <div className="relative h-96 w-full rounded-3xl overflow-hidden mb-12">
            {/* <Image src={spot.image} alt={spot.label} fill className="object-cover" /> */}
          </div>
        )}

        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto text-center">
          {spot.fullDesc || spot.description} {/* full details */}
        </p>

        {/* Add more: map embed, booking CTA, photos gallery, etc. */}

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block rounded-full border-2 border-[var(--gold)] px-10 py-5 text-xl text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition"
          >
            Plan Your Visit
          </Link>
        </div>
      </div>
    </main>
  );
}
