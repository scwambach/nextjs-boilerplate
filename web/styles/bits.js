import { css } from 'styled-components';
import { colors } from './settings';
import { shade } from 'polished';

export const Button = css`
  background-color: ${colors.gray};
  padding: 10px 20px;
  text-decoration: none;
  color: ${colors.black};
  transition-duration: 0.3s;
  box-shadow: 0 0;
  font-size: 0.8em;

  &:hover {
    background-color: ${shade(0.2, colors.gray)};
  }
`;
