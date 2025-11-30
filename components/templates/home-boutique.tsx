// components/templates/home-boutique.tsx
import { GridTileImage } from 'components/grid/tile';
import { primaryButtonStyle } from 'components/ui/theme-button-style';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

type Props = {
  products: Product[];
};

export function HomeBoutiqueTemplate({ products }: Props) {
  if (!products || products.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="mb-4 text-2xl tracking-tight">
          Colección
        </h1>
        <p className="text-sm text-[var(--muted)]">
          Próximamente añadiremos nuestros productos.
        </p>
      </div>
    );
  }

  const featured = products[0]!;
  const rest = products.slice(1);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <header className="text-center space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
          nueva colección
        </p>
        <h1 className="text-3xl tracking-tight">
          Piezas seleccionadas para ti
        </h1>
        <p className="text-sm text-[var(--muted)]">
          Una selección curada de productos con atención al detalle.
        </p>
      </header>

      {/* Destacado */}
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div className="overflow-hidden rounded-3xl bg-[var(--surface)] border border-[var(--border)]">
          <div className="aspect-[4/5]">
            <GridTileImage
              alt={featured.title}
              src={featured.featuredImage?.url}
              width={600}
              height={600}
              active={false}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl tracking-tight">
            {featured.title}
          </h2>
          <p className="text-sm text-[var(--muted)] line-clamp-4">
            {featured.description || 'Descubre los detalles de esta pieza única.'}
          </p>
          <p className="text-lg font-semibold">
            {featured.priceRange.minVariantPrice.amount}{' '}
            {featured.priceRange.minVariantPrice.currencyCode}
          </p>

          <Link
            href={`/product/${featured.handle}`}
            className="inline-flex items-center justify-center 
                       px-5 py-2 text-sm font-semibold
                       bg-[var(--primary)] text-[var(--on-primary)]
                       hover:opacity-90 transition"
            style={primaryButtonStyle}
          >
            Ver detalles
          </Link>
        </div>
      </section>

      {/* Más piezas */}
      {rest.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
            más piezas
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {rest.map((product) => (
              <Link
                key={product.handle}
                href={`/product/${product.handle}`}
                className="group block rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden"
              >
                <div className="aspect-[4/5]">
                  <GridTileImage
                    alt={product.title}
                    src={product.featuredImage?.url}
                    width={400}
                    height={400}
                    active={false}
                  />
                </div>
                <div className="px-3 py-3 text-xs space-y-1">
                  <p className="line-clamp-2 group-hover:text-[var(--accent)] transition">
                    {product.title}
                  </p>
                  <p className="font-semibold">
                    {product.priceRange.minVariantPrice.amount}{' '}
                    {product.priceRange.minVariantPrice.currencyCode}
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
