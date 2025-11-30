// components/templates/home-hero.tsx
import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import { GridTileImage } from 'components/grid/tile';
import Footer from 'components/layout/footer';
import { primaryButtonStyle } from 'components/ui/theme-button-style';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

type HomeHeroTemplateProps = {
  products: Product[];
};

export function HomeHeroTemplate({ products }: HomeHeroTemplateProps) {
  const featured = products && products.length > 0 ? products[0] : null;

  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      {/* HERO */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              tienda online
            </p>
            <h1 className="text-3xl md:text-4xl tracking-tight">
              Tu producto, en el centro de todo.
            </h1>
            <p className="text-sm md:text-base text-[var(--muted)]">
              Una experiencia de compra optimizada para mobile y desktop, lista para conectar con Shopify y escalar con tu marca.
            </p>

            {featured && (
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  producto destacado
                </p>
                <p className="text-sm font-semibold">
                  {featured.title}
                </p>
                <Link
                  href={`/product/${featured.handle}`}
                  className="inline-flex items-center justify-center 
                             px-5 py-2 text-sm font-semibold
                             bg-[var(--primary)] text-[var(--on-primary)]
                             hover:opacity-90 transition"
                  style={primaryButtonStyle}
                >
                  Ver producto
                </Link>
              </div>
            )}
          </div>

          {featured && featured.featuredImage?.url && (
            <div className="overflow-hidden rounded-3xl bg-[var(--bg)] border border-[var(--border)]">
              <div className="aspect-[4/5]">
                <GridTileImage
                  alt={featured.title}
                  src={featured.featuredImage.url}
                  width={800}
                  height={800}
                  active={false}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECCIONES DE PRODUCTOS */}
      <main className="mx-auto max-w-6xl px-4 py-12 space-y-12">
        <ThreeItemGrid />
        <Carousel />
      </main>

      <Footer />
    </div>
  );
}
