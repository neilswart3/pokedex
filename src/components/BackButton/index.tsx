'use client';

import { IconButton } from '@/atoms';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const BackButton: React.FC = () => {
  const pathName = usePathname();

  if (pathName === '/') return null;

  return (
    <Link href="/">
      <IconButton>
        <ArrowLeftIcon />
      </IconButton>
    </Link>
  );
};
