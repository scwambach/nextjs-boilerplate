import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import urlFor from '../js/urlFor';

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

const BackgroundImage = ({ src, placeholders, height, width, children }) => {
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

    const postListing = document.getElementById(imageId);

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
    <>
      <Desktop>
        <SBackgroundImage
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
        </SBackgroundImage>
      </Desktop>
      <TabletLarge>
        <SBackgroundImage
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
        </SBackgroundImage>
      </TabletLarge>
      <TabletSmall>
        <SBackgroundImage
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
        </SBackgroundImage>
      </TabletSmall>
      <Mobile>
        <SBackgroundImage
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
        </SBackgroundImage>
      </Mobile>
    </>
  );
};

export default BackgroundImage;

export const SBackgroundImage = styled.div`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
