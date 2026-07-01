import { FocusEvent } from 'react'
import { slugify } from '../../../utils/slugify'

/**
 * Builds the base input id/name used for most field types, combining the
 * slugified label with the field's raw id for uniqueness.
 */
export const getFieldId = (label: string | undefined, id: string): string =>
  `${label ? slugify(label) : 'input'}_${id}`

/**
 * Builds the wrapper id for checkbox/radio groups, which are namespaced
 * by type since a form can have both a checkbox and radio group with the
 * same label.
 */
export const getGroupId = (
  type: 'checkbox' | 'radio',
  label: string,
  id: string
): string => `${type}_${slugify(label)}_${id}`

/**
 * Builds the id for an individual checkbox/radio choice input.
 */
export const getChoiceId = (
  type: string | undefined,
  copy: string,
  choiceId: string
): string => `${type}_${slugify(copy)}_${choiceId}`

/**
 * Toggles a "focused" class on the input's parent element so custom
 * checkbox/radio indicators (which aren't natively focusable) can show a
 * visible focus style that tracks the real input's focus state.
 */
export const handleIndicatorFocus = (e: FocusEvent<HTMLInputElement>) => {
  e.target.parentElement?.classList.add('focused')
}

export const handleIndicatorBlur = (e: FocusEvent<HTMLInputElement>) => {
  e.target.parentElement?.classList.remove('focused')
}

/**
 * Same idea as handleIndicatorFocus/Blur, but for react-select's
 * multiselect, whose focusable input is nested several levels deep from
 * the wrapper we want to style.
 */
export const handleMultiSelectFocus = (e: FocusEvent<HTMLInputElement>) => {
  e.target.parentElement?.parentElement?.parentElement?.parentElement?.classList.add(
    'focused'
  )
}

export const handleMultiSelectBlur = (e: FocusEvent<HTMLInputElement>) => {
  e.target.parentElement?.parentElement?.parentElement?.parentElement?.classList.remove(
    'focused'
  )
}
