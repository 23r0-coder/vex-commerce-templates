import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

type Props = { products: Product[] };

const demoCategories = [
  { name: 'Ropa', description: 'Outfits para todos los días.', query: 'ropa' },
  { name: 'Hogar', description: 'Detalles para tu casa.', query: 'hogar' },
  { name: 'Niños', description: 'Productos para los más pequeños.', query: 'niños' },
  { name: 'Accesorios', description: 'Complementos que marcan la diferencia.', query: 'accesorios' }
];

export function HomeCategoryTilesTemplate({ products }: Props) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      {/* Hero simple */}
      <section className="space-y-3 text-center">
        <h1 className="text-3xl tracking-tight">
          Encuentra lo que necesitas por categoría
        </h1>
        <p className="text-sm text-[var(--muted)]">
          Organiza tu catálogo por áreas claras para que tus clientes lleguen
          más rápido al producto que buscan.
        </p>
      </section>

      {/* Tarjetas de categoría */}
      <section className="grid gap-4 sm:grid-cols-2">
        {demoCategories.map((cat) => (
          <Link
            key={cat.name}
            href={`/search?q=${encodeURIComponent(cat.query)}`}
            className="group relative overflow-hidden rounded-3xl 
                       border border-[var(--border)] bg-[var(--surface)] p-6
                       hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]
                       transition"
          >
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                categoría
              </p>
              <p className="text-xl font-semibold group-hover:text-[var(--accent)] transition">
                {cat.name}
              </p>
              <p className="text-sm text-[var(--muted)]">
                {cat.description}
              </p>
            </div>
          </Link>
        ))}
      </section>

      {/* Opcional: productos destacados pequeños abajo */}
      {products.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg tracking-tight">
            Algunos productos destacados
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {products.slice(0, 4).map((p) => (
              <Link
                key={p.handle}
                href={`/product/${p.handle}`}
                className="block rounded-2xl border border-[var(--border)] bg-[var(--surface)] 
                           px-3 py-3 text-xs hover:-translate-y-1 hover:shadow-md transition"
              >
                <p className="line-clamp-2 group-hover:text-[var(--accent)] text-[var(--text)]">
                  {p.title}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
