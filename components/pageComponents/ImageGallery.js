import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, font, breakpoints } from '@/styles/settings';
import { absoluteCenter } from '@/styles/bits';
import urlFor from '@/utils/urlFor';
import Wrapper from '@/tools/Wrapper';
import Loader from '@/tools/Loader';
import Delayed from '@/tools/Delayed';
import Image from '@/tools/Image';

const ImageGallery = ({ gallery }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (
        e.target.id === 'outter' ||
        e.target.id === 'lightboxInner' ||
        e.key === 'Escape'
      ) {
        setModalOpen(false);
      }
    });

    document.onkeydown = (e) => {
      if (e.keyCode === 27) {
        setModalOpen(false);
      }
    };
  }, []);
  return (
    <Wrapper narrow>
      <SGallery>
        {gallery?.map((image, index) => (
          <a
            key={`image${index}`}
            href={null}
            onClick={() => {
              setActiveIndex(index);
              setImageLoading(true);
              setModalOpen(true);
            }}
          >
            {image.asset && <Image crop src={image} height={300} width={300} />}
          </a>
        ))}
        {modalOpen && (
          <SLightBox id="outter">
            {imageLoading && (
              <Delayed waitBeforeShow={100}>
                <Loader />
              </Delayed>
            )}
            <a
              href={null}
              onClick={() => {
                setModalOpen(false);
              }}
              className="close"
            >
              <span />
              <span />
            </a>
            {activeIndex - 1 !== -1 && (
              <a
                href={null}
                onClick={() => {
                  setImageLoading(true);
                  setActiveIndex(activeIndex - 1);
                }}
                className="control previous"
              >
                <span />
                <span />
              </a>
            )}
            {activeIndex !== gallery.length - 1 && (
              <a
                href={null}
                onClick={() => {
                  setImageLoading(true);
                  setActiveIndex(activeIndex + 1);
                }}
                className="control next"
              >
                <span />
                <span />
              </a>
            )}
            <div className="inner" id="lightboxInner">
              <div
                className={`image-container${imageLoading ? ' loading' : ''}`}
              >
                <img
                  onLoad={() => {
                    setImageLoading(false);
                  }}
                  alt="..."
                  src={urlFor(gallery[activeIndex])
                    .quality(100)
                    .width(breakpoints.pageWidth)
                    .fit('crop')
                    .auto('format')
                    .url()}
                />
              </div>
            </div>
          </SLightBox>
        )}
      </SGallery>
    </Wrapper>
  );
};

export default ImageGallery;

const SLightBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${colors.blackOverlay};
  top: 0;
  left: 0;
  z-index: 100;

  .control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 60px;
    z-index: 101;
    cursor: pointer;
    text-decoration: none;
    color: ${colors.white};

    span {
      display: block;
      height: 3px;
      width: 30px;
      background-color: ${colors.white};
      top: 17px;
      position: relative;

      + span {
        margin-top: 18px;
      }
    }
  }

  .previous {
    left: 5%;

    span {
      transform: rotate(-45deg);
      + span {
        transform: rotate(45deg);
      }
    }
  }

  .next {
    right: 5%;

    span {
      transform: rotate(45deg);

      + span {
        transform: rotate(-45deg);
      }
    }
  }

  .close {
    position: absolute;
    right: 5%;
    top: 5%;
    height: 30px;
    z-index: 101;
    cursor: pointer;
    text-decoration: none;
    color: ${colors.white};

    &:hover {
      color: ${colors.white};
    }

    &:before {
      content: 'Close';
      display: block;
      position: absolute;
      font-family: ${font.primary};
      text-transform: uppercase;
      right: calc(100% + 10px);
      top: calc(50% - 13px);
      transform: translateY(-50%);
    }

    span {
      display: block;
      height: 3px;
      width: 30px;
      background-color: ${colors.white};
      transform: rotate(45deg);

      + span {
        margin-top: -3px;
        transform: rotate(-45deg);
      }
    }
  }

  .inner {
    width: 100%;
    ${absoluteCenter};
  }

  .image-container {
    max-width: 1000px;
    max-height: 90vh;
    margin: 0 auto;

    &.loading {
      img {
        opacity: 0;
      }
    }

    img {
      max-width: 100%;
      max-height: 90vh;
      height: auto;
      width: auto;
      margin: 0 auto;
      opacity: 1;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
    }
  }
`;

const SGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px 50px 0;

  > a {
    padding: 0 20px 20px 0;
    width: 50%;
    cursor: pointer;

    @media screen and (min-width: ${breakpoints.ipadPort}px) {
      width: 25%;
    }

    > span {
      overflow: hidden;
      display: block;
      height: 162px;
      position: relative;

      img {
        height: 100%;
        width: 100%;
        ${absoluteCenter};
      }
    }
  }
`;
