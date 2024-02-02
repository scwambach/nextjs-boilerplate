import { addCommas } from './addCommas'

export const maxPlus = (num: number, maxNumber: number) => {
  // if number is over maxNumber, return maxNumber with a plus sign
  if (num > maxNumber) {
    return `${addCommas(maxNumber)}+`
  }
  return addCommas(num)
}
