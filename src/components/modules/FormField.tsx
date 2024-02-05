'use client'
import { slugify } from '@utils/slugify'
import ReactSelect from 'react-select'
import { Markdown } from '@components/utility/Markdown'
import { CheckSquare, RadioButton } from '@phosphor-icons/react'
import { FieldProps } from '@utils/types'

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
        className="label"
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
}: FieldProps) => {
  const fieldId = `${label ? slugify(label) : 'input'}_${id}`
  const fieldArgs = {
    name: fieldId,
    id: fieldId,
    disabled,
    required,
    readOnly,
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
          <Label label={label} description={description} />
          <textarea {...fieldArgs} rows={4} onChange={onChangeArea} />
        </label>
      ) : type === 'select' ? (
        <label
          data-testid={testId}
          className={`formField${className ? ` ${className}` : ''} ${type}`}
          htmlFor={fieldId}
        >
          <Label label={label} description={description} />
          <select {...fieldArgs} onChange={onChangeSelect}>
            {choices?.map((choice) => (
              <option key={choice.id} value={choice.value}>
                {choice.copy}
              </option>
            ))}
          </select>
        </label>
      ) : type === 'checkbox' || type === 'radio' ? (
        <div
          data-testid={testId}
          className={`formField${className ? ` ${className}` : ''} ${type}${
            disabled ? ' disabled' : ''
          }`}
        >
          <Label label={label} description={description} />
          <div className="choices">
            {choices?.map((choice) => (
              <label
                key={choice.id}
                htmlFor={`${slugify(choice.copy)}_${choice.id}`}
                className={`choice${choice.disabled ? ' disabled' : ''}`}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: choice.copy,
                  }}
                />
                <input
                  type={type}
                  onChange={onChange}
                  disabled={choice.disabled}
                  id={`${slugify(choice.copy)}_${choice.id}`}
                  name={fieldId}
                />
                <div className={`${type}-indicator`}>
                  {type === 'radio' && <RadioButton size={15} />}
                  {type === 'checkbox' && <CheckSquare size={12} />}
                </div>
              </label>
            ))}
          </div>
        </div>
      ) : type === 'multiselect' ? (
        <label
          data-testid={testId}
          className={`formField${className ? ` ${className}` : ''} ${type}`}
          htmlFor={fieldId}
        >
          <Label label={label} description={description} />
          <ReactSelect isMulti options={multiChoices} name={fieldId} />
        </label>
      ) : (
        <label
          data-testid={testId}
          htmlFor={fieldId}
          className={`formField${className ? ` ${className}` : ''} ${type}${
            disabled ? ' disabled' : ''
          }`}
        >
          <Label label={label} description={description} />
          <input {...fieldArgs} type={type} onChange={onChange} />
        </label>
      )}
    </>
  )
}
