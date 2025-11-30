// components/templates/home-sidebar.tsx
import { GridTileImage } from 'components/grid/tile';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

type Props = { products: Product[] };

export function HomeSidebarTemplate({ products }: Props) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-2xl tracking-tight">
        Productos
      </h1>

      <div className="flex gap-8">
        <aside className="hidden w-56 shrink-0 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-4 text-sm md:block">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            filtros
          </h2>
          {/* UI estática de filtros por ahora */}
          <div className="space-y-4 text-xs text-[var(--muted)]">
            <div>
              <p className="mb-1 text-[var(--text)]/80">Categorías</p>
              <button className="block w-full text-left hover:text-[var(--accent)] transition">
                Todo
              </button>
              <button className="block w-full text-left hover:text-[var(--accent)] transition">
                Novedades
              </button>
              <button className="block w-full text-left hover:text-[var(--accent)] transition">
                Más vendidos
              </button>
            </div>
            <div>
              <p className="mb-1 text-[var(--text)]/80">Ordenar por</p>
              <select
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-xs outline-none"
              >
                <option>Relevancia</option>
                <option>Precio: menor a mayor</option>
                <option>Precio: mayor a menor</option>
                <option>Novedades</option>
              </select>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          {products.length === 0 ? (
            <p className="text-sm text-[var(--muted)]">
              No hay productos para mostrar.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.handle}
                  href={`/product/${product.handle}`}
                  className="group block overflow-hidden rounded-2xl 
                             border border-[var(--border)] bg-[var(--surface)]
                             hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]
                             transition"
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
          )}
        </main>
      </div>
    </div>
  );
}
