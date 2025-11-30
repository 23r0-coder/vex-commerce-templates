// components/templates/home-magazine.tsx
import { GridTileImage } from 'components/grid/tile';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

type Props = { products: Product[] };

export function HomeMagazineTemplate({ products }: Props) {
  const latest = products.slice(0, 4);
  const more = products.slice(4, 12);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      {/* Hero editorial */}
      <section className="grid gap-8 md:grid-cols-[2fr,3fr] items-stretch">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            editorial
          </p>
          <h1 className="text-3xl md:text-4xl tracking-tight leading-tight">
            Historias que inspiran tu próximo look.
          </h1>
          <p className="text-sm text-[var(--muted)]">
            Combina texturas, colores y formas con nuestra colección.
          </p>
        </div>

        {latest[0] && (
          <Link
            href={`/product/${latest[0].handle}`}
            className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]"
          >
            <div className="aspect-[16/9]">
              <GridTileImage
                alt={latest[0].title}
                src={latest[0].featuredImage?.url}
                width={900}
                height={500}
                active={false}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 space-y-1">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                destacado
              </p>
              <p className="text-lg font-semibold">
                {latest[0].title}
              </p>
            </div>
          </Link>
        )}
      </section>

      {/* Novedades */}
      {latest.length > 1 && (
        <section className="space-y-3">
          <h2 className="text-lg tracking-tight">Novedades</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {latest.slice(1).map((p) => (
              <Link
                key={p.handle}
                href={`/product/${p.handle}`}
                className="group block rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)] transition"
              >
                <div className="aspect-[4/5]">
                  <GridTileImage
                    alt={p.title}
                    src={p.featuredImage?.url}
                    width={400}
                    height={400}
                    active={false}
                  />
                </div>
                <div className="px-3 py-3 text-xs space-y-1">
                  <p className="line-clamp-2 group-hover:text-[var(--accent)] transition">
                    {p.title}
                  </p>
                  <p className="font-semibold">
                    {p.priceRange.minVariantPrice.amount}{' '}
                    {p.priceRange.minVariantPrice.currencyCode}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Explora más */}
      {more.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg tracking-tight">
            Explora más historias
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {more.map((p) => (
              <Link
                key={p.handle}
                href={`/product/${p.handle}`}
                className="group grid grid-rows-[auto,1fr] rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)] transition"
              >
                <div className="aspect-[16/9]">
                  <GridTileImage
                    alt={p.title}
                    src={p.featuredImage?.url}
                    width={500}
                    height={300}
                    active={false}
                  />
                </div>
                <div className="flex flex-col justify-between px-4 py-3 text-xs space-y-2">
                  <p className="line-clamp-2 group-hover:text-[var(--accent)] transition">
                    {p.title}
                  </p>
                  <p className="font-semibold">
                    {p.priceRange.minVariantPrice.amount}{' '}
                    {p.priceRange.minVariantPrice.currencyCode}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
