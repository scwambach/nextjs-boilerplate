import React, { useEffect, useState, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import newRatio from './newRatio';
import urlFor from '../js/urlFor';
import { LayoutContext } from '../components/Layout';
import { breakpoints } from '../styles/settings';

const SanityImage = ({ src, height, width, alt }) => {
  const { placeholders } = useContext(LayoutContext);

  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const ph = placeholders.find((o) => o._id === src.asset._ref);
  const imageId = ph._id;
  const dimensions = ph.dimensions;
  const lqip = ph.lqip;
  const imageWidth = width || breakpoints.pageWidth;

  const isDesktop = useMediaQuery({
    query: `(min-width: ${breakpoints.ipadLand}px)`,
  });

  const isTablet = useMediaQuery({
    query: `(min-width: ${breakpoints.ipadPort}px)`,
  });

  const isTabletSmall = useMediaQuery({
    query: `(min-width: ${breakpoints.mobile}px)`,
  });

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile - 1}px)`,
  });

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
    let widthCheck = width || breakpoints.pageWidth;

    if (
      global.window.innerWidth >= breakpoints.ipadPort &&
      global.window.innerWidth <= breakpoints.ipadLand
    ) {
      widthCheck = breakpoints.ipadLand;
    } else if (
      global.window.innerWidth >= breakpoints.mobile &&
      global.window.innerWidth <= breakpoints.ipadPort
    ) {
      widthCheck = breakpoints.ipadPort;
    } else if (global.window.innerWidth <= breakpoints.mobile) {
      widthCheck = breakpoints.mobile;
    }

    imageCheck(
      urlFor(src).width(widthCheck).height(height).quality(90).auto('format')
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
        <img
          id={imageId}
          classes={`image-loaded ${loaded && isVisible ? 'ready' : 'loading'}`}
          src={urlFor(src)
            .width(
              isDesktop
                ? imageWidth
                : isTablet
                ? imageWidth > breakpoints.ipadLand
                  ? breakpoints.ipadLand
                  : imageWidth
                : isTabletSmall
                ? imageWidth > breakpoints.ipadPort
                  ? breakpoints.ipadPort
                  : imageWidth
                : isMobile
                ? imageWidth > breakpoints.mobile
                  ? breakpoints.mobile
                  : imageWidth
                : imageWidth
            )
            .height(height)
            .quality(90)
            .auto('format')}
          height={height || null}
          width={imageWidth + 'px'}
          alt={alt || imageId}
        />
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
