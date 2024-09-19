import { Stack } from '@/atoms';
import { BackButton, MenuButton } from '@/components';
import { CardColorsItem } from '@/types';
import classNames from 'classnames';

interface Props {
  colors: CardColorsItem;
  light?: boolean;
}

export const Header: React.FC<Props> = ({ colors, light }) => (
  <Stack
    flow="row"
    className={classNames('justify-between px-6 py-14', light && 'text-white')}
  >
    <span>
      <BackButton />
    </span>
    <MenuButton colors={colors} />
  </Stack>
);
