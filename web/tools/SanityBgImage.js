import React, { useEffect, useState, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import urlFor from '../js/urlFor';
import { LayoutContext } from '../components/Layout';
import { breakpoints } from '../styles/settings';

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: breakpoints.ipadLand });
  return isDesktop ? children : null;
};
export const TabletLarge = ({ children }) => {
  const isTablet = useMediaQuery({
    minWidth: breakpoints.ipadPort,
    maxWidth: breakpoints.ipadLand,
  });
  return isTablet ? children : null;
};
export const TabletSmall = ({ children }) => {
  const isTablet = useMediaQuery({
    minWidth: breakpoints.mobile,
    maxWidth: breakpoints.ipadPort,
  });
  return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.mobile });
  return isMobile ? children : null;
};

const SanityBgImage = ({ video, src, height, width, children }) => {
  const { placeholders } = useContext(LayoutContext);

  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const ph = placeholders.find((o) => o._id === src.asset._ref);
  const imageId = ph._id;
  const lqip = ph.lqip;
  const imageWidth = width || breakpoints.pageWidth;

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
                  .width(
                    imageWidth > breakpoints.ipadLand
                      ? breakpoints.ipadLand
                      : imageWidth
                  )
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
                  .width(
                    imageWidth > breakpoints.ipadPort
                      ? breakpoints.ipadPort
                      : imageWidth
                  )
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
                  .width(
                    imageWidth > breakpoints.mobile
                      ? breakpoints.mobile
                      : imageWidth
                  )
                  .height(height)
                  .quality(90)
                  .auto('format')
              : lqip
          }
        >
          {children}
        </SSanityBgImage>
      </Mobile>
      {loaded && isVisible && video && (
        <div className="video-wrapper">
          <iframe
            src={`https://player.vimeo.com/video/${video}?background=1&autoplay=1&loop=1&byline=0&title=0`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
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
