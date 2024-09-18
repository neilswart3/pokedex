import { Stack } from '@/atoms';
import { BackButton, MenuButton } from '@/components';

export const Header: React.FC = () => (
  <Stack flow="row" className="justify-between px-6 py-14">
    <span>
      <BackButton />
    </span>
    <MenuButton />
  </Stack>
);
