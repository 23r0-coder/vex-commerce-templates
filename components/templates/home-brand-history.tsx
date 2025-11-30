// components/templates/home-brand-story.tsx
import { GridTileImage } from 'components/grid/tile';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

type Props = { products: Product[] };

export function HomeBrandStoryTemplate({ products }: Props) {
  const hero = products[0];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-12">
      {/* HERO MARCA */}
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            nuestra marca
          </p>
          <h1 className="text-3xl tracking-tight">
            Crea una historia que conecte.
          </h1>
          <p className="text-sm text-[var(--muted)]">
            Aquí puedes contar quién eres, por qué comenzaste este proyecto y
            qué hace especial lo que vendes.
          </p>
        </div>

        {hero && (
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
            <div className="aspect-[4/3]">
              <GridTileImage
                alt={hero.title}
                src={hero.featuredImage?.url}
                width={700}
                height={500}
                active={false}
              />
            </div>
          </div>
        )}
      </section>

      {/* NUESTRA HISTORIA */}
      <section className="space-y-3">
        <h2 className="text-xl tracking-tight">
          Nuestra historia
        </h2>
        <p className="text-sm text-[var(--muted)] leading-relaxed">
          Cuenta cómo empezó el proyecto, qué problema viste en el mercado y
          cómo tus productos ayudan a resolverlo. Usa este espacio para
          conectar emocionalmente con tus clientes y reforzar tus valores.
        </p>
      </section>

      {/* PROCESO / HECHO A MANO */}
      <section className="grid gap-6 md:grid-cols-3 text-sm">
        {['Diseñamos', 'Creamos', 'Enviamos'].map((title) => (
          <div
            key={title}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-4 space-y-2"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              {title}
            </p>
            <p className="text-[var(--muted)]">
              Describe brevemente una parte importante de tu proceso: materiales
              que utilizas, técnicas, o filosofía de trabajo.
            </p>
          </div>
        ))}
      </section>

      {/* GRID DE PRODUCTOS PEQUEÑO */}
      {products.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl tracking-tight">
            Nuestra colección
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.handle}
                href={`/product/${product.handle}`}
                className="group block rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden 
                           hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)] transition"
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
