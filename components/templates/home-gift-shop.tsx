// components/templates/home-gift-shop.tsx
import { GridTileImage } from 'components/grid/tile';
import { primaryButtonStyle } from 'components/ui/theme-button-style';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

type Props = { products: Product[] };

const occasions = [
  'Cumpleaños',
  'Aniversario',
  'Navidad',
  'Agradecimiento',
  'Amistad'
];

export function HomeGiftShopTemplate({ products }: Props) {
  const kits = products.slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-12">
      {/* HERO REGALOS */}
      <section className="space-y-3 text-center">
        <h1 className="text-3xl tracking-tight">
          Regalos que se sienten especiales
        </h1>
        <p className="text-sm text-[var(--muted)] max-w-2xl mx-auto">
          Diseña cajas, combos y kits para cada ocasión. Haz que regalar sea
          fácil y memorable.
        </p>
      </section>

      {/* FILTROS POR OCASIÓN */}
      <section className="flex flex-wrap justify-center gap-3 text-xs">
        {occasions.map((occ) => (
          <button
            key={occ}
            className="rounded-full border px-4 py-1.5 
                       border-[var(--border)] text-[var(--text)]
                       hover:bg-[var(--primary)] hover:text-[var(--on-primary)]
                       transition"
            style={primaryButtonStyle}
          >
            {occ}
          </button>
        ))}
      </section>

      {/* KITS DESTACADOS */}
      {kits.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg tracking-tight text-center">
            Kits destacados
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {kits.map((p) => (
              <Link
                key={p.handle}
                href={`/product/${p.handle}`}
                className="group block rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden
                           hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)] transition"
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

      {/* ARMA TU CAJA */}
      <section className="space-y-4">
        <h2 className="text-lg tracking-tight text-center">
          Arma tu propia caja
        </h2>
        <p className="text-sm text-[var(--muted)] max-w-2xl mx-auto text-center">
          Explica el proceso: elige productos, añade una nota personalizada y
          nosotros nos encargamos del resto.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-sm">
          {products.slice(0, 6).map((p) => (
            <div
              key={p.handle}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 flex items-center gap-3"
            >
              <div className="h-12 w-12 overflow-hidden rounded-lg border border-[var(--border)]">
                <GridTileImage
                  alt={p.title}
                  src={p.featuredImage?.url}
                  width={80}
                  height={80}
                  active={false}
                />
              </div>
              <div className="flex-1">
                <p className="line-clamp-2 text-xs text-[var(--text)]">
                  {p.title}
                </p>
                <p className="text-[11px] text-[var(--muted)]">
                  {p.priceRange.minVariantPrice.amount}{' '}
                  {p.priceRange.minVariantPrice.currencyCode}
                </p>
              </div>
              {/* En el futuro aquí podrías poner checkbox / cantidad */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
