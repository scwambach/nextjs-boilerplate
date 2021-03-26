import React from 'react';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { getClient } from '@/utils/sanity';
import newRatio from '@/utils/newRatio';

const Image = ({ src, height, width, crop, quality }) => {
  const imageProps = src.asset && useNextSanityImage(getClient(), src);

  const dimensions = newRatio(src.crop, {
    height: imageProps?.height,
    width: imageProps?.width,
  });

  return src.asset ? (
    <Img
      layout="responsive"
      objectFit={crop ? 'cover' : 'contain'}
      height={height || dimensions.height}
      width={width || dimensions.width}
      src={imageProps.src}
      quality={quality || 100}
    />
  ) : (
    ''
  );
};

export default Image;
