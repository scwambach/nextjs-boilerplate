import React, { useEffect, useState, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import urlFor from '../js/urlFor';
import { LayoutContext } from '../components/Layout';
import { breakpoints } from '../styles/settings';

const SanityBgImage = ({ video, src, height, width, children }) => {
  const { placeholders } = useContext(LayoutContext);

  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const ph = placeholders.find((o) => o._id === src.asset._ref);
  const imageId = ph._id;
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
      <SSanityBgImage
        image={
          loaded && isVisible
            ? urlFor(src)
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
                .auto('format')
            : lqip
        }
      >
        {children}
      </SSanityBgImage>

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
