import React from 'react';

const Field = ({ required, inputType, label, fieldId }) => (
  <label
    className={inputType === 'textarea' ? 'textarea' : 'input'}
    htmlFor={fieldId}
  >
    {label && <span>{label}</span>}
    {inputType === 'textarea' ? (
      <textarea id={fieldId} name={fieldId} required={required} />
    ) : (
      <input id={fieldId} name={fieldId} required={required} type={inputType} />
    )}
  </label>
);

export default Field;
