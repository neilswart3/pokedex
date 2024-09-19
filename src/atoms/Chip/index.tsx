import { BaseComponentProps } from '@/types';
import classNames from 'classnames';

interface Props extends BaseComponentProps {
  label: string;
  bgLight?: boolean;
  textLight?: boolean;
  onClick?: () => void;
}

export const Chip: React.FC<Props> = ({
  as: Tag = 'div',
  className,
  label,
  bgLight = false,
  textLight = false,
  ...props
}) => (
  <Tag
    className={classNames(
      'Chip',
      'text-sm px-6 py-1 rounded-full',
      bgLight ? 'bg-white/25' : 'bg-black/50',
      textLight ? 'text-white' : 'text-black',
      className,
    )}
    {...props}
  >
    {label}
  </Tag>
);
