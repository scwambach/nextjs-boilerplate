import React from 'react';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { getClient } from '@/utils/sanity';

const Image = ({ src, height, width, crop, quality }) => {
  const imageProps = useNextSanityImage(getClient(), src);

  return (
    <Img
      layout="responsive"
      objectFit={crop ? 'cover' : 'contain'}
      height={height || imageProps.height}
      width={width || imageProps.width}
      src={imageProps.src}
      quality={quality || 100}
    />
  );
};

export default Image;
