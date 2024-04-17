import { ImageObjectProps } from './modules'

export interface PageProps {
  title: string
  slug: string
  ogImage: ImageObjectProps
  description?: string
  pageComponents?: any[]
}
