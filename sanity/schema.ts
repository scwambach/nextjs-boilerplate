import { compareTable } from './modules/compareTable'
import { type SchemaTypeDefinition } from 'sanity'
import { page } from './docTypes/page'
import { banner } from './components/banner'
import { button } from './modules/button'
import { buttonRow } from './components/buttonRow'
import { card } from './modules/card'
import { cards } from './components/cards'
import { compareTables } from './components/compareTables'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    banner,
    button,
    buttonRow,
    card,
    cards,
    compareTable,
    compareTables,
    page,
  ],
}
