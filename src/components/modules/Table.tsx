import { ComponentProps } from '@utils/types'
import { headingFont } from '@utils/fonts'
import { ReactNode } from 'react'

interface TableProps extends ComponentProps {
  headingRow?: string[]
  controlCell?: ReactNode
  rows: {
    cells: string[]
  }[]
}

export const Table = ({
  className,
  headingRow,
  rows,
  controlCell,
}: TableProps) => {
  return (
    <table className={`table${className ? ` ${className}` : ''}`}>
      {headingRow && headingRow.length > 0 && (
        <thead className={headingFont.className}>
          <tr>
            {headingRow.map((cell) => (
              <th key={cell}>{cell}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, index) => (
          <tr key={`row${index}${row.cells[0]}`}>
            {row.cells.map((cell) => (
              <td key={cell}>{cell}</td>
            ))}
            {controlCell && <td>{controlCell}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
