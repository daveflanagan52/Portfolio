import React, { ChangeEventHandler } from 'react';

type FormCheckSwitchProps = {
  text: string,
  id: string,
  name: string,
  value: any,
  checked: boolean,
  onChange?: ChangeEventHandler<HTMLInputElement>,
}

const FormCheckSwitch: React.FC<FormCheckSwitchProps> = (props: FormCheckSwitchProps) => (
  <div className="form-check form-switch form-switch-lg mb-3">
    <input className="form-check-input" type="checkbox" id={props.id} name={props.name} value={props.value} checked={props.checked} onChange={props.onChange} />
    <label className="form-check-label" htmlFor={props.id}>{props.text}</label>
  </div>
);

export default FormCheckSwitch;
