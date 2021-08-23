import React from 'react';
import { connect, FormikContextType, getIn } from 'formik';
import FormCheckSwitch from '../FormCheckSwitch';

type FormikPartProps = {
  formik: FormikContextType<any>;
};

type FormikFormCheckSwitchProps = {
  id: string,
  name: string,
  text: string,
  value: any,
};

const FormikFormCheckSwitch: React.FC<FormikPartProps & FormikFormCheckSwitchProps> = ({
  id, name, text, value, formik,
}) => (
  <FormCheckSwitch
    text={text}
    id={id}
    name={name}
    value={value}
    checked={getIn(formik?.values || [], name) === value}
    onChange={formik?.handleChange}
  />
);

export default connect<FormikFormCheckSwitchProps, any>(FormikFormCheckSwitch);
