// app/providers.tsx
'use client';

import { CartProvider } from 'components/cart/cart-context';
import type { ReactNode } from 'react';
// Si tienes el tipo Cart, mejor tiparlo bien:
import type { Cart } from 'lib/shopify/types'; // ajusta la ruta si es distinta

type ProvidersProps = {
  children: ReactNode;
  cartPromise: Promise<Cart | undefined>;
};

export function Providers({ children, cartPromise }: ProvidersProps) {
  return (
    <CartProvider cartPromise={cartPromise}>
      {children}
    </CartProvider>
  );
}
