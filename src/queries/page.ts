import { banner } from './blocks/banner'
import { buttonRow } from './blocks/buttonRow'
import { cards } from './blocks/cards'
import { carousel } from './blocks/carousel'
import { compareTables } from './blocks/compareTables'
import { contactBlock } from './blocks/contactBlock'
import { events } from './blocks/events'
import { formSelector } from './blocks/formSelector'
import { gallery } from './blocks/gallery'
import { logoBanner } from './blocks/logoBanner'
import { logoRow } from './blocks/logoRow'
import { map } from './blocks/map'
import { people } from './blocks/people'
import { quote } from './blocks/quote'
import { richText } from './blocks/richText'
import { river } from './blocks/river'
import { stats } from './blocks/stats'
import { tabs } from './blocks/tabs'
import { timeline } from './blocks/timeline'
import { imageQuery } from './common'

export const PAGE_QUERY = `*[_type == "page" && slug.current == $slug][0] {
  ...,
  "slug": slug.current,
  ${imageQuery('ogImage')},
  pageComponents[] {
    _type,
    _key,
    ${banner},
    ${buttonRow},
    ${cards},
    ${carousel},
    ${compareTables},
    ${contactBlock},
    ${events},
    ${formSelector},
    ${gallery},
    ${logoBanner},
    ${logoRow},
    ${people},
    ${map},
    ${quote},
    ${richText},
    ${river},
    ${stats},
    ${tabs},
    ${timeline},
  }
}`
