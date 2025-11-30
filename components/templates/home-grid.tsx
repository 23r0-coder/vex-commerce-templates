// components/templates/home-grid.tsx
import { GridTileImage } from 'components/grid/tile';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

type HomeGridTemplateProps = {
  products: Product[];
};

export function HomeGridTemplate({ products }: HomeGridTemplateProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-2 text-2xl tracking-tight">Productos</h1>

      {products.length === 0 && (
        <p className="text-sm text-[var(--muted)]">
          No hay productos para mostrar.
        </p>
      )}

      {products.length > 0 && (
        <div className="mb-6 text-sm text-[var(--muted)]">
          Explora nuestra colección disponible.
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.handle}
            href={`/product/${product.handle}`}
            className="group block overflow-hidden rounded-xl 
                       border border-[var(--border)] bg-[var(--surface)]
                       hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]
                       transition"
          >
            <div className="aspect-[3/4]">
              <GridTileImage
                alt={product.title}
                src={product.featuredImage?.url}
                width={400}
                height={400}
                active={false}
              />
            </div>

            <div className="flex items-center justify-between px-3 py-3 text-xs sm:text-sm">
              <span className="line-clamp-2 group-hover:text-[var(--accent)] transition">
                {product.title}
              </span>
              <span className="font-semibold whitespace-nowrap">
                {product.priceRange.minVariantPrice.amount}{' '}
                {product.priceRange.minVariantPrice.currencyCode}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
