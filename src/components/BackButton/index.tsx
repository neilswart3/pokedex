'use client';

import { IconButton } from '@/atoms';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import { usePathname, useRouter } from 'next/navigation';

export const BackButton: React.FC = () => {
  const pathName = usePathname();
  const router = useRouter();

  if (pathName === '/') return null;

  return (
    <IconButton onClick={router.back}>
      <ArrowLeftIcon />
    </IconButton>
  );
};
