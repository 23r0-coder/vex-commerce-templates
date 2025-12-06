import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-sm transition-colors">
      <ShoppingCartIcon
        className={clsx('h-4 transition-all ease-in-out hover:scale-110', className)}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 flex h-5 w-5 items-center justify-center rounded-full border border-[var(--surface)] bg-[var(--primary)] text-[11px] font-semibold text-[var(--on-primary)] shadow-md">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
