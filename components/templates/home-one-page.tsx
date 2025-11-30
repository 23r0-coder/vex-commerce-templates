// components/templates/home-one-page.tsx
import { GridTileImage } from 'components/grid/tile';
import { primaryButtonStyle } from 'components/ui/theme-button-style';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

type Props = { products: Product[] };

export function HomeOnePageTemplate({ products }: Props) {
  const main = products[0];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-12">
      {/* HERO */}
      {main && (
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              curso / infoproducto
            </p>
            <h1 className="text-3xl md:text-4xl tracking-tight leading-tight">
              {main.title}
            </h1>
            <p className="text-sm text-[var(--muted)]">
              {main.description ||
                'Un programa completo diseñado para ayudarte a obtener resultados reales.'}
            </p>
            <p className="text-2xl font-semibold">
              {main.priceRange.minVariantPrice.amount}{' '}
              {main.priceRange.minVariantPrice.currencyCode}
            </p>
            <Link
              href={`/product/${main.handle}`}
              className="inline-flex items-center justify-center 
                         px-6 py-2 text-sm font-semibold
                         bg-[var(--primary)] text-[var(--on-primary)]
                         shadow-lg hover:opacity-90 transition"
              style={primaryButtonStyle}
            >
              Comprar ahora
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
            <div className="aspect-[4/3]">
              <GridTileImage
                alt={main.title}
                src={main.featuredImage?.url}
                width={700}
                height={500}
                active={false}
              />
            </div>
          </div>
        </section>
      )}

      {/* BENEFICIOS */}
      <section className="grid gap-6 md:grid-cols-3">
        {['Aprende paso a paso', 'Acceso 24/7', 'Material descargable'].map(
          (title, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-4 text-sm space-y-2"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                beneficio {i + 1}
              </p>
              <p className="font-semibold">{title}</p>
              <p className="text-[var(--muted)]">
                Explica brevemente el beneficio principal que recibirá tu
                cliente al adquirir este producto.
              </p>
            </div>
          )
        )}
      </section>

      {/* PLANES / VERSIONES */}
      <section className="space-y-4">
        <h2 className="text-xl tracking-tight">
          Elige el plan ideal para ti
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {['Básico', 'Pro', 'Premium'].map((name, idx) => (
            <div
              key={name}
              className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)]/90 p-5 text-sm flex flex-col gap-3"
            >
              {idx === 1 && (
                <span className="absolute right-4 top-4 rounded-full 
                                 bg-[var(--primary)] px-3 py-0.5 
                                 text-[10px] font-semibold uppercase tracking-[0.2em] 
                                 text-[var(--on-primary)]">
                  más popular
                </span>
              )}
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                plan
              </p>
              <p className="text-lg font-semibold">{name}</p>
              <p className="text-[var(--muted)]">
                Lista breve de lo que incluye este plan en comparación con los
                demás.
              </p>
              <p className="mt-auto text-base font-semibold">
                {main
                  ? `${main.priceRange.minVariantPrice.amount} ${main.priceRange.minVariantPrice.currencyCode}`
                  : '—'}
              </p>
              <Link
                href={main ? `/product/${main.handle}` : '#'}
                className="mt-1 inline-flex items-center justify-center 
                           px-4 py-1.5 text-xs font-medium
                           border border-[var(--primary)]
                           text-[var(--primary)]
                           hover:bg-[var(--primary)] hover:text-[var(--on-primary)]
                           transition"
                style={primaryButtonStyle}
              >
                Elegir este plan
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="space-y-4">
        <h2 className="text-xl tracking-tight">Testimonios</h2>
        <div className="grid gap-4 md:grid-cols-3 text-sm">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-4 space-y-2"
            >
              <p className="text-[var(--text)]">
                “Aquí puedes colocar una opinión real de un cliente satisfecho
                que haya tomado tu curso o comprado tu producto.”
              </p>
              <p className="text-xs text-[var(--muted)]">Nombre del cliente</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
