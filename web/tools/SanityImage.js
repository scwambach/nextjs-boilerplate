import React, { useEffect, useState, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import newRatio from './newRatio';
import urlFor from '../js/urlFor';
import { LayoutContext } from '../components/Layout';

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};
export const TabletLarge = ({ children }) => {
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1024,
  });
  return isTablet ? children : null;
};
export const TabletSmall = ({ children }) => {
  const isTablet = useMediaQuery({
    minWidth: 480,
    maxWidth: 768,
  });
  return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  return isMobile ? children : null;
};

const SanityImage = ({ src, height, width, alt }) => {
  const { placeholders } = useContext(LayoutContext);

  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const ph = placeholders.find((o) => o._id === src.asset._ref);
  const imageId = ph._id;
  const dimensions = ph.dimensions;
  const lqip = ph.lqip;
  const imageWidth = width || 1200;

  const imageCheck = (imageUrl) => {
    const srcImage = imageUrl;
    const fullImage = global.document.createElement('img');

    fullImage.setAttribute('src', srcImage);

    if (fullImage.complete) {
      setLoaded(true);
    } else {
      fullImage.onload = () => {
        setLoaded(true);
      };
    }
  };

  useEffect(() => {
    imageCheck(
      urlFor(src)
        .width(width || 1200)
        .height(height)
        .quality(90)
        .auto('format')
    );

    const postListing = document.getElementById(`lqip_${imageId}`);

    function handler(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(handler);
      observer.observe(postListing);
    } else {
      setIsVisible(true);
    }
  });

  return (
    <SSanityImage
      style={{
        display: 'block',
        height: 0,
        overflow: 'hidden',
        paddingBottom: `${newRatio(src.crop, dimensions, height, width)}%`,
      }}
    >
      <img
        id={`lqip_${imageId}`}
        className={`placeholder ${loaded && isVisible ? 'ready' : 'loading'}`}
        src={lqip}
        alt={alt || imageId}
      />
      {loaded && isVisible && (
        <>
          <Desktop>
            <img
              id={imageId}
              classes={`image-loaded ${
                loaded && isVisible ? 'ready' : 'loading'
              }`}
              src={urlFor(src)
                .width(imageWidth)
                .height(height)
                .quality(90)
                .auto('format')}
              height={height || null}
              width={imageWidth + 'px'}
              alt={alt || imageId}
            />
          </Desktop>
          <TabletLarge>
            <img
              id={imageId}
              classes={`image-loaded ${
                loaded && isVisible ? 'ready' : 'loading'
              }`}
              src={urlFor(src)
                .width(imageWidth > 1024 ? 1024 : imageWidth)
                .height(height)
                .quality(90)
                .auto('format')}
              height={height || null}
              width={imageWidth > 1024 ? 1024 + 'px' : imageWidth + 'px'}
              alt={alt || imageId}
            />
          </TabletLarge>
          <TabletSmall>
            <img
              id={imageId}
              classes={`image-loaded ${
                loaded && isVisible ? 'ready' : 'loading'
              }`}
              src={urlFor(src)
                .width(imageWidth > 768 ? 768 : imageWidth)
                .height(height)
                .quality(90)
                .auto('format')}
              height={height || null}
              width={imageWidth > 768 ? 768 + 'px' : imageWidth + 'px'}
              alt={alt || imageId}
            />
          </TabletSmall>
          <Mobile>
            <img
              id={imageId}
              classes={`image-loaded ${
                loaded && isVisible ? 'ready' : 'loading'
              }`}
              src={urlFor(src)
                .width(imageWidth > 480 ? 480 : imageWidth)
                .height(height)
                .quality(90)
                .auto('format')}
              height={height || null}
              width={imageWidth > 480 ? 480 + 'px' : imageWidth + 'px'}
              alt={alt || imageId}
            />
          </Mobile>
        </>
      )}
    </SSanityImage>
  );
};

export default SanityImage;

export const SSanityImage = styled.picture`
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    transition-duration: 0.3s;

    &.placeholder {
      z-index: 2;
      pointer-events: none;
      position: absolute !important;
      top: 50%;
      left: 50%;
      width: auto;
      height: auto;
      max-height: none;
      max-width: none;
      min-height: 101%;
      min-width: 101%;
      transform: translate(-50%, -50%);
      opacity: 1;

      &.ready {
        opacity: 0;
      }
    }

    &.image-loaded {
      z-index: 1;
      opacity: 0;
      transition-delay: 0.3s;

      &.ready {
        opacity: 1;
      }
    }
  }
`;
