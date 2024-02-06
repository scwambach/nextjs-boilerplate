'use client'
import { slugify } from '@utils/slugify'
import ReactSelect from 'react-select'
import { Markdown } from '@components/utility/Markdown'
import { CaretDown, CheckSquare, RadioButton } from '@phosphor-icons/react'
import { FieldProps } from '@utils/types'
import { Flex, Grid } from '@components/utility'
import { Roboto } from 'next/font/google'
import { alfaSlabOne } from '@utils/headingFont'
import { IconSelector } from '@components/utility/IconSelector'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const Label = ({
  label,
  description,
}: {
  label: string
  description?: string
}) => {
  return (
    <>
      <span
        className={`label ${alfaSlabOne.className}`}
        dangerouslySetInnerHTML={{
          __html: label,
        }}
      />
      {description && <Markdown>{description}</Markdown>}
    </>
  )
}

export const FormField = ({
  choices,
  className,
  description,
  disabled,
  id,
  choiceGridColumns = 4,
  label,
  multiChoices,
  onChange,
  onChangeArea,
  onChangeSelect,
  defaultValue,
  value,
  placeholder,
  readOnly,
  required,
  testId,
  type,
}: FieldProps) => {
  const fieldId = `${label ? slugify(label) : 'input'}_${id}`
  const fieldArgs = {
    name: fieldId,
    id: fieldId,
    disabled,
    required,
    readOnly,
    value,
    defaultValue,
    placeholder,
  }
  return (
    <>
      {type === 'textarea' ? (
        <label
          data-testid={testId}
          className={`formField${className ? ` ${className}` : ''} ${type}${
            disabled ? ' disabled' : ''
          }`}
          htmlFor={fieldId}
        >
          <Flex direction="column" gap={0.5}>
            <Label label={label} description={description} />
            <textarea
              {...fieldArgs}
              rows={4}
              onChange={onChangeArea}
              className={roboto.className}
            />
          </Flex>
        </label>
      ) : type === 'select' ? (
        <label
          data-testid={testId}
          className={`formField${className ? ` ${className}` : ''} ${type}`}
          htmlFor={fieldId}
        >
          <Flex direction="column" gap={0.5}>
            <Label label={label} description={description} />
            <select
              {...fieldArgs}
              onChange={onChangeSelect}
              className={roboto.className}
            >
              {choices?.map((choice) => (
                <option key={choice.id} value={choice.value}>
                  {choice.copy}
                </option>
              ))}
            </select>
            <CaretDown size={16} weight="bold" />
          </Flex>
        </label>
      ) : type === 'checkbox' || type === 'radio' ? (
        <div
          data-testid={testId}
          id={
            type === 'checkbox'
              ? `checkbox_${slugify(label)}_${id}`
              : `radio_${slugify(label)}_${id}`
          }
          className={`formField${className ? ` ${className}` : ''} ${type}${
            disabled ? ' disabled' : ''
          }`}
        >
          <Flex direction="column" gap={0.5}>
            <Label label={label} description={description} />
            <Grid columns={choiceGridColumns} gap={1} className="choices">
              {choices?.map((choice) => (
                <label
                  key={choice.id}
                  htmlFor={`${type}_${slugify(choice.copy)}_${choice.id}`}
                  className={`choice${choice.disabled ? ' disabled' : ''}`}
                >
                  <Flex direction="row-reverse" alignItems="center" gap={0.4}>
                    <span
                      className={roboto.className}
                      dangerouslySetInnerHTML={{
                        __html: choice.copy,
                      }}
                    />
                    <input
                      className={roboto.className}
                      type={type}
                      onChange={onChange}
                      disabled={choice.disabled}
                      id={`${type}_${slugify(choice.copy)}_${choice.id}`}
                      name={fieldId}
                    />
                    <div className={`${type}-indicator`}>
                      {type === 'radio' && (
                        <RadioButton size={20} weight="fill" />
                      )}
                      {type === 'checkbox' && (
                        <CheckSquare size={20} weight="fill" />
                      )}
                    </div>
                  </Flex>
                </label>
              ))}
            </Grid>
          </Flex>
        </div>
      ) : type === 'multiselect' ? (
        <label
          data-testid={testId}
          className={`formField${className ? ` ${className}` : ''} ${type}`}
          htmlFor={fieldId}
        >
          <Flex direction="column" gap={0.5}>
            <Label label={label} description={description} />
            <ReactSelect
              isMulti
              options={multiChoices}
              name={fieldId}
              className={roboto.className}
            />
          </Flex>
        </label>
      ) : type === 'file' ? (
        <label
          data-testid={testId}
          htmlFor={fieldId}
          className={`formField${className ? ` ${className}` : ''} ${type}${
            disabled ? ' disabled' : ''
          }`}
        >
          <Flex direction="column" gap={0.5}>
            <Label label={label} description={description} />
            <input {...fieldArgs} type={type} onChange={onChange} />
            <Flex
              direction="column"
              gap={0.5}
              justifyContent="center"
              alignItems="center"
            >
              <IconSelector icon="Upload" size={20} />
              <span>Click Here</span>
            </Flex>
          </Flex>
        </label>
      ) : (
        <label
          data-testid={testId}
          htmlFor={fieldId}
          className={`formField${className ? ` ${className}` : ''} ${type}${
            disabled ? ' disabled' : ''
          }`}
        >
          <Flex direction="column" gap={0.5}>
            <Label label={label} description={description} />
            <input {...fieldArgs} type={type} onChange={onChange} />
          </Flex>
        </label>
      )}
    </>
  )
}
