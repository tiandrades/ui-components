import { InputHTMLAttributes, PropsWithChildren } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({
  children
}: PropsWithChildren<InputProps>): JSX.Element {
  return <Container>{children}</Container>;
}
