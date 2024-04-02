import { banner } from './components/banner'
import { button } from './modules/button'
import { buttonRow } from './components/buttonRow'
import { card } from './modules/card'
import { cards } from './components/cards'
import { carousel } from './components/carousel'
import { compareTable } from './modules/compareTable'
import { compareTables } from './components/compareTables'
import { page } from './docTypes/page'
import { type SchemaTypeDefinition } from 'sanity'
import { marker } from './modules/marker'
import { social } from './modules/social'
import { contactBlock } from './components/contactBlock'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    banner,
    button,
    buttonRow,
    card,
    cards,
    carousel,
    compareTable,
    compareTables,
    contactBlock,
    marker,
    page,
    social,
  ],
}
