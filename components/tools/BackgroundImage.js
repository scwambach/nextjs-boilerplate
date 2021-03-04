import React, { useContext } from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/settings';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { getClient } from '@/utils/sanity';
import { LayoutContext } from '@/components/Layout';

const BackgroundImage = ({
  children,
  id,
  src,
  height,
  width,
  quality,
  overlay,
  video,
}) => {
  const imageProps = useNextSanityImage(getClient(), src);
  const { placeholders } = useContext(LayoutContext);
  const ph = placeholders.find((o) => o._id === src.asset._ref).lqip;

  return (
    <ScBackgroundImage
      overlay={overlay}
      height={height}
      width={width}
      image={src}
      placeholder={ph}
    >
      <Image
        layout={height || width ? 'responsive' : 'fill'}
        objectFit={height || (width && 'cover')}
        src={imageProps.src}
        height={height}
        width={width}
        quality={quality || 100}
        alt={id && `bg_${id}`}
      />

      {children}
      {video && (
        <div className="video-wrapper">
          <iframe
            title={`videobg-${video}`}
            src={`https://player.vimeo.com/video/${video}?background=1&autoplay=1&loop=1&byline=0&title=0`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
    </ScBackgroundImage>
  );
};

export default BackgroundImage;

export const Inner = styled.div`
  > div {
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%;
    height: 100%;
  }
`;

export const ScBackgroundImage = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${({ placeholder }) => placeholder});
  background-size: cover;
  background-position: center;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    pointer-events: none;
    object-fit: cover;
    object-position: center;
  }

  > * {
    position: relative;
  }

  div {
    &:first-child {
      position: absolute !important;
      top: 50% !important;
      left: 50% !important;
      transform: translateX(-50%) translateY(-50%);
      width: 100%;
      height: 100%;
    }
  }

  ${({ height }) => height && `height: ${height}`};
  ${({ width }) => width && `width: 100%; max-width:${width};`};
  ${({ overlay }) =>
    overlay &&
    `
    position: relative;

    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${colors.black};
      z-index: 0;
      opacity: 0.2;
    }

    > * {
      position: relative;
    }
  `}
`;
