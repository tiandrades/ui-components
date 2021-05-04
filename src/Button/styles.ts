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

type ButtonProps = BackgroundProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  TypographyProps & {
    isLoading?: boolean;
  };

export const Container = styled.button<ButtonProps>`
  ${background}
  ${color}
  ${flexbox}
  ${layout}
  ${space}
  ${typography}

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.6;
  }

  padding: 4px 16px;

  height: 36px;
  width: 64px;
  min-height: 36px;
  min-width: 64px;

  opacity: ${({ isLoading }) => isLoading && '0.6'};
`;
