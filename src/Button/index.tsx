import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { Spinner } from '../Spinner';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading: boolean;
};

export function Button({
  children,
  isLoading,
  ...rest
}: PropsWithChildren<ButtonProps>): JSX.Element {
  return <Container {...rest}>{isLoading ? <Spinner /> : children}</Container>;
}
