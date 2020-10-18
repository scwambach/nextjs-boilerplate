import React, { useEffect, useState, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
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

const SanityBgImage = ({ src, height, width, children }) => {
  const { placeholders } = useContext(LayoutContext);

  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const ph = placeholders.find((o) => o._id === src.asset._ref);
  const imageId = ph._id;
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

    const postListing = document.getElementById(`bg_${imageId}`);

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
    <div id={`bg_${imageId}`}>
      <Desktop>
        <SSanityBgImage
          image={
            loaded && isVisible
              ? urlFor(src)
                  .width(imageWidth)
                  .height(height)
                  .quality(90)
                  .auto('format')
              : lqip
          }
        >
          {children}
        </SSanityBgImage>
      </Desktop>
      <TabletLarge>
        <SSanityBgImage
          image={
            loaded && isVisible
              ? urlFor(src)
                  .width(imageWidth > 1024 ? 1024 : imageWidth)
                  .height(height)
                  .quality(90)
                  .auto('format')
              : lqip
          }
        >
          {children}
        </SSanityBgImage>
      </TabletLarge>
      <TabletSmall>
        <SSanityBgImage
          image={
            loaded && isVisible
              ? urlFor(src)
                  .width(imageWidth > 768 ? 768 : imageWidth)
                  .height(height)
                  .quality(90)
                  .auto('format')
              : lqip
          }
        >
          {children}
        </SSanityBgImage>
      </TabletSmall>
      <Mobile>
        <SSanityBgImage
          image={
            loaded && isVisible
              ? urlFor(src)
                  .width(imageWidth > 480 ? 480 : imageWidth)
                  .height(height)
                  .quality(90)
                  .auto('format')
              : lqip
          }
        >
          {children}
        </SSanityBgImage>
      </Mobile>
    </div>
  );
};

export default SanityBgImage;

export const SSanityBgImage = styled.div`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
`;
