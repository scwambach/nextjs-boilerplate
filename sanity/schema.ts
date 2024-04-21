import { type SchemaTypeDefinition } from 'sanity'
// docTypes
import { event } from './docTypes/event'
import { globalSettings } from './docTypes/globalSettings'
import { page } from './docTypes/page'
import { person } from './docTypes/person'
// modules
import { button } from './modules/button'
import { card } from './modules/card'
import { compareTable } from './modules/compareTable'
import { marker } from './modules/marker'
import { riverObject } from './modules/riverObject'
import { social } from './modules/social'
import { stat } from './modules/stat'
import { tab } from './modules/tab'
import { video } from './modules/video'
// components
import { banner } from './components/banner'
import { buttonRow } from './components/buttonRow'
import { cards } from './components/cards'
import { carousel } from './components/carousel'
import { compareTables } from './components/compareTables'
import { contactBlock } from './components/contactBlock'
import { events } from './components/events'
import { formSelector } from './components/formSelector'
import { gallery } from './components/gallery'
import { logoBanner } from './components/logoBanner'
import { logoRow } from './components/logoRow'
import { map } from './components/map'
import { people } from './components/people'
import { quote } from './components/quote'
import { richText } from './components/richText'
import { river } from './components/river'
import { stats } from './components/stats'
import { tabs } from './components/tabs'
import { timeline } from './components/timeline'
import { videos } from './components/videos'
import { navigation } from './docTypes/navigation'
import { post } from './docTypes/post'
import { tag } from './docTypes/tag'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // docTypes
    event,
    globalSettings,
    page,
    person,
    post,
    tag,
    navigation,
    // modules
    button,
    card,
    compareTable,
    marker,
    riverObject,
    social,
    stat,
    tab,
    video,
    // components
    banner,
    buttonRow,
    cards,
    carousel,
    compareTables,
    contactBlock,
    events,
    formSelector,
    gallery,
    logoBanner,
    logoRow,
    map,
    people,
    quote,
    richText,
    river,
    stats,
    tabs,
    timeline,
    videos,
  ],
}
