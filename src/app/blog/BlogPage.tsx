import { Banner, Cards } from '@components/blocks'

export const BlogPage = (props: any) => {
  return (
    <div className={`blogPage${props.className ? ` ${props.className}` : ''}`}>
      <Banner
        img={{
          alt: 'A person typing on a laptop',
          query: 'person typing',
        }}
        heading="This is the title of a blog post about something"
        message="This is a short description of the blog post. We will use this to entice the reader to click on the post and read more."
        headingLevel={1}
        links={[
          {
            href: '/blog/post',
            label: 'Read More',
          },
        ]}
      />

      <Cards heading="Recent Blog Posts" items={props.posts} />
    </div>
  )
}
