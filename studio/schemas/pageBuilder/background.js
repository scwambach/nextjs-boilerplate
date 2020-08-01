import { FaStar } from 'react-icons/lib/fa';

export default {
  title: 'Background',
  name: 'background',
  type: 'object',
  icon: FaStar,
  fields: [
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'parallax',
      title: 'Parallax',
      type: 'boolean',
    },
    {
      name: 'backgroundColor',
      type: 'color',
      title: 'Background color',
    },
    {
      name: 'BackgroundGradientColor',
      type: 'gradientBuilder',
      title: 'Background Gradient',
    },
  ],
  preview: {
    prepare(selection) {
      return Object.assign({}, selection, {
        title: 'Background',
      });
    },
  },
};
