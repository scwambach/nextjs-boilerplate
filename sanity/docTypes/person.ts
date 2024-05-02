export const person = {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc: any) => `${doc.firstName} ${doc.lastName}`,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      title: 'title',
      company: 'company',
      media: 'image',
    },
    prepare(selection: any) {
      const { firstName, lastName, company, title, media } = selection
      return {
        title: `${firstName} ${lastName}`,
        subtitle: company ? `${title} @ ${company}` : title,
        media,
      }
    },
  },
}
