// app/page.tsx
import { CURRENT_HOME_TEMPLATE } from 'config/template';
import { getCollectionProducts } from 'lib/shopify';

import { HomeBoutiqueTemplate } from 'components/templates/home-boutique';
import { HomeGridTemplate } from 'components/templates/home-grid';
import { HomeHeroTemplate } from 'components/templates/home-hero';
import { HomeMagazineTemplate } from 'components/templates/home-magazine';
import { HomeSidebarTemplate } from 'components/templates/home-sidebar';

import { HomeBigMediaTemplate } from 'components/templates/home-big-media';
import { HomeBrandStoryTemplate } from 'components/templates/home-brand-history';
import { HomeCategoryTilesTemplate } from 'components/templates/home-categories';
import { HomeGiftShopTemplate } from 'components/templates/home-gift-shop';
import { HomeOnePageTemplate } from 'components/templates/home-one-page';

export const metadata = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify.'
};

export default async function HomePage() {
  const products =
    (await getCollectionProducts({
      collection: 'hidden-homepage-featured-items'
    })) || [];

  switch (CURRENT_HOME_TEMPLATE) {
    case 'hero':
      return <HomeHeroTemplate products={products} />;
    case 'grid':
      return <HomeGridTemplate products={products} />;
    case 'boutique':
      return <HomeBoutiqueTemplate products={products} />;
    case 'magazine':
      return <HomeMagazineTemplate products={products} />;
    case 'sidebar':
      return <HomeSidebarTemplate products={products} />;

    case 'onePage':
      return <HomeOnePageTemplate products={products} />;

    case 'brandStory':
      return <HomeBrandStoryTemplate products={products} />;

    case 'categoryTiles':
      return <HomeCategoryTilesTemplate products={products} />;

    case 'bigMedia':
      return <HomeBigMediaTemplate products={products} />;

    case 'giftShop':
      return <HomeGiftShopTemplate products={products} />;

    case 'heroGrid':
    default:
      return (
        <>
          <HomeHeroTemplate products={products} />
          <HomeGridTemplate products={products} />
        </>
      );
  }
}
