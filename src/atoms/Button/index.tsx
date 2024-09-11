import { PropsWithChildren } from 'react';

export interface ButtonProps extends PropsWithChildren {}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="text-3xl font-bold underline">{children}</button>;
};
