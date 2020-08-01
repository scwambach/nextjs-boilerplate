import { FaImage, FaStar, FaShoppingBasket } from 'react-icons/lib/fa';
import { slugify } from './post';
import client from "part:@sanity/base/client";

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: FaShoppingBasket,
  fields: [
    {
      name: 'title',
      title: 'Title',
      validation: Rule => Rule.required(),
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        slugify: input => `/shop/${slugify(input)}`,
      },
    },
    {
      title: 'Main Image',
      name: 'mainImage',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Product Type',
      name: 'productType',
      type: 'string',
      options: {
        list: [
          { title: 'Retail', value: 'retail' },
          { title: 'Subscription', value: 'subscription' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'youtubeId',
      title: 'Youtube ID',
      type: 'string',
      description: 'https://www.youtube.com/watch?v=[Youtube ID would be here]'
    },
    {
      title: 'Additional Images',
      name: 'additionalImages',
      type: 'array',
      icon: FaImage,
      of: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      title: 'Description',
      name: 'description',
      type: 'simpleContent',
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
      description: 'Keep it short and sweet!',
      validation: Rule => Rule.max(150).required(),
    },
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule =>
        Rule.required()
          .integer()
          .positive(),
        },
        {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'productCategory' },
          icon: FaStar,
        },
      ],
    },
    {
      name: 'customFields',
      type: 'customFields',
    },
    {
      title: 'Parent Product',
      name: 'parentProduct',
      type: 'reference',
      to: { type: 'product' },
      icon: FaShoppingBasket,
    },
  ],

  preview: {
    select: {
      title: 'title',
      image: 'mainImage',
      price: 'price',
      parent: 'parentProduct',
    },
    prepare(selection) {
      const { title, price, image, parent } = selection;

      function findParent(parent) {
        const query = `*[_id == "${parent}"] `;

        client.fetch(query)
          .then((response) => response)
          .then((data) => {
            return data[0].title;
        });
      }

      return Object.assign({}, selection, {
        title: `${title} | $${(price / 100).toFixed(2)}`,
        subtitle: parent && `Variant of ${findParent(parent._ref)}`,
        media: image,
      });
    },
  },
};
