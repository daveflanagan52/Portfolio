import React from 'react';
import { connect, FormikContextType, getIn } from 'formik';
import FormInput, { FormInputProps, FormInputType } from '../FormInput';

type FormikPartProps = {
  formik: FormikContextType<any>;
};

const FormikFormInput: React.FC<FormikPartProps & FormInputProps> = ({
  id, name, type, placeHolder, formik, ...other
}) => (
  <FormInput
    id={id}
    type={type}
    name={name}
    value={getIn(formik?.values || [], name)}
    onChange={formik?.handleChange}
    onBlur={formik?.handleBlur}
    placeHolder={placeHolder}
    isInvalid={getIn(formik?.errors || [], name) && getIn(formik?.touched || [], name)}
    {...other}
  />
);

export default connect<FormInputProps, any>(FormikFormInput);
export { FormInputType };
