import { banner } from '@/components/blocks/Banner/query'
import { buttonRow } from '@/components/blocks/ButtonRow/query'
import { cards } from '@/components/blocks/Cards/query'
import { carousel } from '@/components/blocks/Carousel/query'
import { compareTables } from '@/components/blocks/CompareTables/query'
import { contactBlock } from '@/components/blocks/ContactBlock/query'
import { events } from '@/components/blocks/Events/query'
import { formSelector } from '@/components/blocks/FormSelector/query'
import { gallery } from '@/components/blocks/Gallery/query'
import { logoBanner } from '@/components/blocks/LogoBanner/query'
import { logoRow } from '@/components/blocks/LogoRow/query'
import { map } from '@/components/blocks/Map/query'
import { people } from '@/components/blocks/People/query'
import { quote } from '@/components/blocks/Quote/query'
import { richText } from '@/components/blocks/RichText/query'
import { river } from '@/components/blocks/River/query'
import { stats } from '@/components/blocks/Stats/query'
import { tabs } from '@/components/blocks/Tabs/query'
import { timeline } from '@/components/blocks/Timeline/query'
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
