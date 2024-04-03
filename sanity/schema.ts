import { type SchemaTypeDefinition } from 'sanity'
import { banner } from './components/banner'
import { button } from './modules/button'
import { buttonRow } from './components/buttonRow'
import { card } from './modules/card'
import { cards } from './components/cards'
import { carousel } from './components/carousel'
import { compareTable } from './modules/compareTable'
import { compareTables } from './components/compareTables'
import { contactBlock } from './components/contactBlock'
import { event } from './docTypes/event'
import { events } from './components/events'
import { gallery } from './components/gallery'
import { logoBanner } from './components/logoBanner'
import { marker } from './modules/marker'
import { page } from './docTypes/page'
import { person } from './docTypes/person'
import { quote } from './components/quote'
import { river } from './components/river'
import { riverObject } from './modules/riverObject'
import { social } from './modules/social'
import { stat } from './modules/stat'
import { stats } from './components/stats'

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
    event,
    events,
    gallery,
    logoBanner,
    marker,
    page,
    person,
    quote,
    river,
    riverObject,
    social,
    stat,
    stats,
  ],
}
