import React from 'react';
import { getClient } from '../utils/sanity';
import imageUrlBuilder from '@sanity/image-url';

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(getClient());

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export default function urlFor(source) {
  return builder.image(source);
}
