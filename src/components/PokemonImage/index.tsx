import classNames from 'classnames';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  backdrop?: string[];
}

export const PokemonImage: React.FC<Props> = ({
  src,
  alt,
  height = 150,
  width = 150,
  backdrop = [],
  ...props
}) => (
  //   <Image
  //     src={src}
  //     alt={alt}
  //     height={height}
  //     width={width}
  //     className="relative z-1"
  //     {...props}
  //   />
  <span
    className={classNames(
      'relative',
      'flex',
      'items-center',
      'justify-center',
      'z-0',
    )}
  >
    {!!backdrop?.length && (
      <span className="absolute opacity-25 translate-x-2 translate-y-4">
        <span
          className={classNames(
            'flex',
            'items-center',
            'justify-center',
            'absolute',

            'before:absolute',
            'before:bg-white',
            'before:w-52',
            'before:h-52',
            'before:rounded-full',
            'before:z-[-1]',

            'after:absolute',
            'after:w-52',
            'after:h-5',
            backdrop?.at(1),
          )}
        />
        <span
          className={classNames(
            'flex',
            'items-center',
            'justify-center',
            'absolute',

            'before:absolute',
            'before:rounded-full',
            'before:w-24',
            'before:h-24',
            backdrop?.at(0),

            'after:absolute',
            'after:bg-white',
            'after:rounded-full',
            'after:w-14',
            'after:h-14',
          )}
        />
      </span>
    )}
    <span className="flex max-h-32 max-w-32">
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        className="relative z-1"
        {...props}
      />
    </span>
  </span>
);
