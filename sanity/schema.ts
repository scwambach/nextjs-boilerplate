import { type SchemaTypeDefinition } from 'sanity'
import { page } from './docTypes/page'
import { banner } from './components/banner'
import { button } from './modules/button'
import { buttonRow } from './components/buttonRow'
import { card } from './modules/card'
import { cards } from './components/cards'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, banner, buttonRow, cards, card, button],
}
