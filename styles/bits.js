import { css } from 'styled-components';
import { colors, breakpoints } from '@/styles/settings';

export const Button = css`
  background-color: ${colors.gray};
  padding: 10px 20px;
  text-decoration: none;
  color: ${colors.black};
  transition-duration: 0.3s;
  box-shadow: 0 0;
  font-size: 0.8em;
  text-align: center;

  &:hover {
    @media screen and (min-width: ${breakpoints.ipadLand}px) {
      background-color: ${colors.gray};
    }
  }
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Shimmer = css`
  @keyframes placeHolderShimmer {
    0% {
      background-position: 0px 0;
    }
    100% {
      background-position: 100vw 0;
    }
  }
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: fff;
  background: linear-gradient(
    90deg,
    ${colors.gray} 0%,
    ${colors.white} 33%,
    ${colors.gray} 100%
  );
  left: 0;
`;
