import React from 'react';

// While we recommend SVGs, an alternative is to use a regular image (png, jpg)
// Notice how we're "importing" the path from a local image - when building the
// studio, this image will automatically be part of the output bundle, with a
// hash that will make it easy to invalidate on changes.
import logo from './logo.png';

const ImgLogo = () => (
  <img
    style={{
      marginBottom: '-6px',
      width: '50px',
    }}
    alt="..."
    src={logo}
  />
);

export default ImgLogo;
