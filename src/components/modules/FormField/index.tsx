'use client'
import ReactSelect from 'react-select'
import { CaretDown, CheckSquare, RadioButton } from '@phosphor-icons/react'
import { FieldProps } from '../../../utils/types'
import { Flex, Grid, Markdown, IconSelector } from '../../utility'
import {
  getChoiceId,
  getFieldId,
  getGroupId,
  handleIndicatorBlur,
  handleIndicatorFocus,
  handleMultiSelectBlur,
  handleMultiSelectFocus,
} from './logic'
import './styles.scss'

const Label = ({
  label,
  description,
}: {
  label: string
  description?: string
}) => {
  return (
    <Flex direction="column" gap="micro">
      <span
        className="label"
        dangerouslySetInnerHTML={{
          __html: label,
        }}
      />
      {description && <Markdown>{description}</Markdown>}
    </Flex>
  )
}

export const FormField = ({
  choiceGridColumns = 4,
  choices,
  className,
  defaultValue,
  description,
  disabled,
  id,
  label,
  multiChoices,
  onChange,
  onChangeArea,
  onChangeSelect,
  placeholder,
  readOnly,
  required,
  testId,
  type,
  value,
}: FieldProps) => {
  const fieldId = getFieldId(label, id)
  const fieldArgs = {
    name: fieldId,
    id: fieldId,
    disabled,
    required,
    'aria-required': required,
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
          <Flex direction="column" gap="xxs">
            <Label label={label} description={description} />
            <textarea {...fieldArgs} rows={4} onChange={onChangeArea} />
          </Flex>
        </label>
      ) : type === 'select' ? (
        <label
          data-testid={testId}
          className={`formField${className ? ` ${className}` : ''} ${type}`}
          htmlFor={fieldId}
        >
          <Flex direction="column" gap="xxs">
            <Label label={label} description={description} />
            <select {...fieldArgs} onChange={onChangeSelect}>
              {choices?.map((choice) => (
                <option key={choice.id} value={choice.value}>
                  {choice.copy}
                </option>
              ))}
            </select>
            <CaretDown size={16} weight="bold" aria-hidden="true" />
          </Flex>
        </label>
      ) : type === 'checkbox' || type === 'radio' ? (
        <fieldset
          data-testid={testId}
          id={getGroupId(type, label, id)}
          className={`formField${className ? ` ${className}` : ''} ${type}${
            disabled ? ' disabled' : ''
          }`}
        >
          <Flex direction="column" gap="xxs" elementTag="div">
            <legend
              className="label"
              dangerouslySetInnerHTML={{
                __html: label,
              }}
            />
            {description && <Markdown>{description}</Markdown>}
            <Grid columns={choiceGridColumns} gap="xxs" className="choices">
              {choices?.map((choice) => (
                <label
                  key={choice.id}
                  htmlFor={getChoiceId(type, choice.copy, choice.id)}
                  className={`choice${choice.disabled ? ' disabled' : ''}`}
                >
                  <Flex direction="row-reverse" alignItems="center" gap="micro">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: choice.copy,
                      }}
                    />
                    <input
                      type={type}
                      onFocus={handleIndicatorFocus}
                      onBlur={handleIndicatorBlur}
                      onChange={onChange}
                      disabled={choice.disabled}
                      id={getChoiceId(type, choice.copy, choice.id)}
                      name={fieldId}
                    />
                    <div className={`${type}-indicator`}>
                      {type === 'radio' && (
                        <RadioButton
                          size={20}
                          weight="fill"
                          aria-hidden="true"
                        />
                      )}
                      {type === 'checkbox' && (
                        <CheckSquare
                          size={20}
                          weight="fill"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </Flex>
                </label>
              ))}
            </Grid>
          </Flex>
        </fieldset>
      ) : type === 'multiselect' ? (
        <label
          data-testid={testId}
          className={`formField${className ? ` ${className}` : ''} ${type}`}
          htmlFor={fieldId}
        >
          <Flex direction="column" gap="xxs">
            <Label label={label} description={description} />
            <ReactSelect
              isMulti
              onFocus={handleMultiSelectFocus}
              onBlur={handleMultiSelectBlur}
              options={multiChoices}
              inputId={fieldId}
              name={fieldId}
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
          <Flex direction="column" gap="xxs">
            <Label label={label} description={description} />
            <input {...fieldArgs} type={type} onChange={onChange} />
            <Flex
              direction="column"
              gap="micro"
              justifyContent="center"
              className="dropzone"
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
          <Flex direction="column" gap="xxs">
            <Label label={label} description={description} />
            <input {...fieldArgs} type={type} onChange={onChange} />
            {type === 'search' && (
              <IconSelector icon="MagnifyingGlass" size={20} weight="bold" />
            )}
          </Flex>
        </label>
      )}
    </>
  )
}
