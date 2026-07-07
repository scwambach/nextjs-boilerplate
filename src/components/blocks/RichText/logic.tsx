import { ColumnSize, RichTextProps } from '@/utils/types'

/**
 * Derives the number of populated copy columns (1-4) so the Grid can size
 * itself to only the columns that actually have content.
 */
export const getColumnCount = ({
  copy,
  column2Copy,
  column3Copy,
  column4Copy,
}: Pick<
  RichTextProps,
  'copy' | 'column2Copy' | 'column3Copy' | 'column4Copy'
>): ColumnSize => {
  return [copy, column2Copy, column3Copy, column4Copy].filter(
    (column) => column
  ).length as ColumnSize
}
