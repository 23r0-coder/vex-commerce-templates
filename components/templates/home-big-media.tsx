// components/templates/home-big-media.tsx
import { GridTileImage } from 'components/grid/tile';
import { primaryButtonStyle } from 'components/ui/theme-button-style';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

type Props = { products: Product[] };

export function HomeBigMediaTemplate({ products }: Props) {
  const main = products[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      {/* HERO FULL-WIDTH */}
      {main && (
        <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
          <div className="aspect-[16/7]">
            <GridTileImage
              alt={main.title}
              src={main.featuredImage?.url}
              width={1400}
              height={600}
              active={false}
            />
          </div>
          {/* El degradado puede seguir siendo negro para legibilidad sobre la imagen */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex items-center px-8 md:px-12">
            <div className="max-w-md space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                nueva colección
              </p>
              <h1 className="text-3xl md:text-4xl tracking-tight">
                {main.title}
              </h1>
              <p className="text-sm text-[var(--text)]/90 line-clamp-3">
                {main.description ||
                  'Presenta tu producto estrella con una imagen grande y llamativa.'}
              </p>
              <Link
                href={`/product/${main.handle}`}
                className="inline-flex items-center justify-center 
                           px-6 py-2 text-sm font-semibold
                           bg-[var(--primary)] text-[var(--on-primary)]
                           hover:opacity-90 transition"
                style={primaryButtonStyle}
              >
                Ver más
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* BANNERS / SECCIONES GRANDES ENTRE MEDIO */}
      <section className="grid gap-4 md:grid-cols-3 text-sm">
        {['Nuevas llegadas', 'Colección limitada', 'Favoritos del mes'].map(
          (title) => (
            <div
              key={title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-4 space-y-1"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                destacado
              </p>
              <p className="font-semibold">{title}</p>
              <p className="text-[var(--muted)]">
                Usa este espacio para resaltar colecciones específicas o
                campañas temporales.
              </p>
            </div>
          )
        )}
      </section>

      {/* CARRUSEL HORIZONTAL */}
      {products.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg tracking-tight">
            Productos destacados
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {products.map((p) => (
              <Link
                key={p.handle}
                href={`/product/${p.handle}`}
                className="group min-w-[220px] max-w-[240px] rounded-2xl 
                           border border-[var(--border)] bg-[var(--surface)] overflow-hidden
                           hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]
                           transition"
              >
                <div className="aspect-[3/4]">
                  <GridTileImage
                    alt={p.title}
                    src={p.featuredImage?.url}
                    width={300}
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
    </div>
  );
}
