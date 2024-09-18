import { BaseComponentProps } from '@/types';
import classNames from 'classnames';

interface Props extends BaseComponentProps {
  label: string;
  onClick?: () => void;
}

export const Chip: React.FC<Props> = ({
  as: Tag = 'div',
  className,
  label,
  ...props
}) => (
  <Tag
    className={classNames(
      'Chip',
      'bg-white/25 text-sm text-white px-6 py-1 rounded-full',
      className,
    )}
    {...props}
  >
    {label}
  </Tag>
);
