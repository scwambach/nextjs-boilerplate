import { FaStar } from 'react-icons/lib/fa';

export default {
  name: 'productCategory',
  title: 'Product Category',
  type: 'document',
  icon: FaStar,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'title',
      desc: 'description'
    },
    prepare(selection) {
      const { title, desc } = selection;
      return Object.assign({}, selection, {
        title,
        subtitle: desc
      });
    }
  }
};
