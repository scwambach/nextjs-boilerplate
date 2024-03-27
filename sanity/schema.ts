import { type SchemaTypeDefinition } from 'sanity'
import { page } from './docTypes/page'
import { banner } from './components/banner'
import { button } from './modules/button'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, banner, button],
}
