import styled from 'styled-components';

import {
  background,
  BackgroundProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from 'styled-system';

type InputProps = BackgroundProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  TypographyProps;

export const Container = styled.input<InputProps>`
  ${background}
  ${color}
  ${flexbox}
  ${layout}
  ${space}
  ${typography}
`;
