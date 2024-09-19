import { IconButton } from '@/atoms';
import { CardColorsItem } from '@/types';
import { Bars3Icon } from '@heroicons/react/16/solid';
import classNames from 'classnames';

interface Props {
  colors: CardColorsItem;
  light?: boolean;
}

export const MenuButton: React.FC<Props> = ({ colors, light }) => (
  <span
    className={classNames(
      'relative',
      'flex',
      'items-center',
      'justify-center',

      'before:content-[""]',
      'before:absolute',
      'before:h-80',
      'before:w-80',
      'before:rounded-full',
      'before:z-[-1]',
      colors.light.before,
    )}
  >
    <span
      className={classNames(
        'absolute',
        'flex',
        'items-center',
        'justify-center',
        'h-6',
        'w-96',
        'z-[-1]',
        colors.main.root,
      )}
    />
    <IconButton
      className={classNames(
        'flex',
        'items-center',
        'justify-center',
        'relative',
        'z-1',

        'before:content-[""]',
        'before:absolute',
        'before:h-36',
        'before:w-36',
        'before:rounded-full',
        'before:z-[-1]',
        colors.main.before,

        'after:content-[""]',
        'after:absolute',
        'after:h-24',
        'after:w-24',
        'after:rounded-full',
        'after:z-[-1]',
        colors.light.after,
      )}
    >
      <Bars3Icon />
    </IconButton>
  </span>
);
