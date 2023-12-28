interface FieldProps {
  choices?: {
    label: string
    value: string
    checked?: boolean
  }[]
  className?: string
  disabled?: boolean
  fieldId: string
  fieldName?: string
  invalid?: boolean
  label?: string
  placeholder?: string
  readonly?: boolean
  required?: boolean
  type:
    | 'checkbox'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'hidden'
    | 'month'
    | 'number'
    | 'radio'
    | 'select'
    | 'switch'
    | 'tel'
    | 'text'
    | 'textarea'
    | 'time'
    | 'url'
    | 'week'
}

export const Field = ({
  choices,
  className,
  disabled,
  fieldId,
  fieldName,
  invalid,
  label,
  placeholder,
  readonly,
  required,
  type = 'text',
}: FieldProps) => {
  if (type === 'textarea') {
    return (
      <label htmlFor={fieldId} className={className}>
        {label && <span>{label}</span>}
        <textarea
          placeholder={placeholder}
          readOnly={readonly}
          required={required}
          disabled={disabled}
          id={fieldId}
          name={fieldName || fieldId}
          aria-invalid={invalid}
        />
      </label>
    )
  }

  if (type === 'select') {
    return (
      <label htmlFor={fieldId} className={className}>
        {label && <span>{label}</span>}
        <select
          id={fieldId}
          name={fieldName || fieldId}
          required={required}
          aria-invalid={invalid}
          disabled={disabled}
        >
          {choices?.map((choice) => (
            <option key={choice.value} value={choice.value}>
              {choice.label}
            </option>
          ))}
        </select>
      </label>
    )
  }

  if (type === 'checkbox' || type === 'radio' || type === 'switch') {
    return (
      <fieldset className={className}>
        {label && <legend>{label}</legend>}
        {choices?.map((choice) => (
          <label key={choice.value} htmlFor={choice.value}>
            <input
              role={type === 'switch' ? 'switch' : undefined}
              type={type}
              readOnly={readonly}
              required={required}
              disabled={disabled}
              checked={choice.checked}
              id={choice.value}
              name={fieldName || fieldId}
              value={choice.value}
            />
            {choice.label}
          </label>
        ))}
      </fieldset>
    )
  }

  return (
    <label htmlFor={fieldId} className={className}>
      {label && <span>{label}</span>}
      <input
        type={type}
        id={fieldId}
        disabled={disabled}
        required={required}
        readOnly={readonly}
        name={fieldName || fieldId}
        placeholder={placeholder}
        aria-invalid={invalid}
      />
    </label>
  )
}
