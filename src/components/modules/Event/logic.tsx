import dayjs from 'dayjs'
import { convertTime } from '../../../utils/convertTime'

/**
 * Whether the event's date falls in the current calendar year, used to
 * decide if the year needs to be shown alongside the day/month.
 */
export const isDateThisYear = (date: string): boolean =>
  dayjs(date).isSame(new Date(), 'year')

/**
 * Formats a "HH:mm" time string into a locale-aware clock display,
 * e.g. "10:00" -> "10:00 AM".
 */
export const formatClockTime = (time: string): string =>
  convertTime(time).toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  })

/**
 * Builds the copy describing when the event runs, covering both the
 * start-only and start/end variants.
 */
export const getEventTimeCopy = (
  startTime: string,
  endTime?: string
): { label: string; time: string } => {
  if (startTime && endTime) {
    return {
      label: 'Event time:',
      time: `${formatClockTime(startTime)} - ${formatClockTime(endTime)}`,
    }
  }
  return {
    label: 'Event Starts at',
    time: formatClockTime(startTime),
  }
}

export const createEscapeHandler =
  (close: () => void) => (e: KeyboardEvent) => {
    if (e.key === 'Escape') close()
  }

export const handlePosterToggle =
  (posterOpen: boolean, setPosterOpen: (open: boolean) => void) => () => {
    setPosterOpen(!posterOpen)
  }
