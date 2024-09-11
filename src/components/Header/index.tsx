import { Stack } from '@/atoms';
import classNames from 'classnames';
import Link from 'next/link';

export const Header: React.FC = () => (
  <Stack flow="row" className="items-start">
    <div className="relative h-36 w-36 p-6 bg-red-500 border-b-8 border-r-8 border-red-900 rounded-br-xl z-1">
      <Link href="/">
        <div className="h-full w-full bg-sky-500 border-4 border-red-900 rounded-full">
          <div className="h-full w-full bg-sky-500 border-4 border-white rounded-full shadow-[inset_0_0_30px_0_black]" />
        </div>
      </Link>
    </div>

    <div className="relative flex-1 p-6 bg-red-500 border-b-8 border-red-900">
      <div className="absolute top-0 left-[-0.5rem] bg-red-500 h-full w-4"></div>
      <Stack flow="row" className="gap-3">
        {['bg-red-600', 'bg-yellow-400', 'bg-lime-400'].map((c) => (
          <div
            key={`header-circle-${c}`}
            className={classNames(
              'h-8 w-8 rounded-full border-4 border-red-900',
              c,
            )}
          />
        ))}
      </Stack>
    </div>
  </Stack>
);
