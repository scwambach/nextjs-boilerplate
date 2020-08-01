import { FaShoppingBasket, FaEdit } from 'react-icons/lib/fa';
import client from 'part:@sanity/base/client';

export default {
  title: 'Option',
  name: 'option',
  type: 'object',
  icon: FaEdit,
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
    },
    {
      title: 'Linked Product',
      name: 'linkedProduct',
      type: 'reference',
      to: { type: 'product' },
      icon: FaShoppingBasket,
    },
  ],

  preview: {
    select: {
      title: 'label',
      linked: 'linkedProduct',
    },
    prepare(selection) {
      const { title, linked } = selection;

      function findLinked(linked) {
        const query = `*[_id == "${linked}"] `;

        client
          .fetch(query)
          .then(response => response)
          .then(data => {
            return data[0].title;
          });
      }

      return Object.assign({}, selection, {
        title: `${title}`,
        subtitle: linked && `Linked product: ${findLinked(linked._ref)}`,
      });
    },
  },
};
