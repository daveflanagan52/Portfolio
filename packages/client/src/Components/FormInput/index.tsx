import React, { FocusEventHandler, ChangeEventHandler } from 'react';

enum FormInputType {
  Text = 'text',
  Number = 'number',
  Email = 'email',
  TextArea = 'textarea',
}

type FormInputProps = {
  id: string,
  name: string,
  type: FormInputType,
  value: any,
  readOnly?: boolean,
  isInvalid?: boolean,
  disabled?: boolean,
  placeHolder?: string,
  rows?: number,
  onFocus?: FocusEventHandler,
  onChange?: ChangeEventHandler,
  onBlur?: FocusEventHandler,
}

const FormInput: React.FC<FormInputProps> = (props: FormInputProps) => {
  if (props.type === FormInputType.TextArea) {
    return (
      <textarea
        id={props.id}
        name={props.name}
        className={[
          props.readOnly ? 'form-control' : 'form-control',
          props.isInvalid ? 'is-invalid' : '',
        ].join(' ')}
        rows={props.rows}
        disabled={props.disabled}
        placeholder={props.placeHolder}
        onFocus={props.onFocus}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    );
  }
  return (
    <input
      id={props.id}
      name={props.name}
      type={props.type}
      className={[
        props.readOnly ? 'form-control' : 'form-control',
        props.isInvalid ? 'is-invalid' : '',
      ].join(' ')}
      disabled={props.disabled}
      placeholder={props.placeHolder}
      onFocus={props.onFocus}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
};

export type { FormInputProps };
export default FormInput;
export { FormInputType };
