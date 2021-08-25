import React from 'react';
import { Helmet } from 'react-helmet';
import { Formik, Form, FormikHelpers } from 'formik';
import {
  faComment, faEnvelope, faShare, faUser,
} from '@fortawesome/free-solid-svg-icons';

import FormLabel from '../../Components/FormLabel';
import InputGroup from '../../Components/InputGroup';
import InputGroupIcon from '../../Components/InputGroupIcon';
import FormInput, { FormInputType } from '../../Components/FormikInput/FormInput';
import Button, { ButtonType } from '../../Components/Button';
import { IMessage } from '../../Types';
import { useSendContactFormMutation } from '../../Services/Data';
import Loader from '../../Components/Loader';

const Contact: React.FC = () => {
  const [sendContact, { isLoading }] = useSendContactFormMutation();
  return (
    <>
      <Helmet>
        <title>Dave Flanagan | Contact</title>
      </Helmet>
      <h2>Contact</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        onSubmit={(
          values: IMessage,
          { setSubmitting }: FormikHelpers<IMessage>,
        ) => {
          Promise.resolve(sendContact(values))
            .then(() => setSubmitting(false));
        }}
      >
        {(props) => (
          <Form>
            <Loader show={isLoading} />
            <div className="mb-3">
              <FormLabel htmlFor="name" text="Name" />
              <InputGroup>
                <InputGroupIcon icon={faUser} className="bg-primary text-white" />
                <FormInput type={FormInputType.Text} name="name" id="name" value="" />
              </InputGroup>
            </div>
            <div className="mb-3">
              <FormLabel htmlFor="email" text="Email" />
              <InputGroup>
                <InputGroupIcon icon={faEnvelope} className="bg-primary text-white" />
                <FormInput type={FormInputType.Email} name="email" id="email" value="" />
              </InputGroup>
            </div>
            <div className="mb-3">
              <FormLabel htmlFor="message" text="Message" />
              <InputGroup>
                <InputGroupIcon icon={faComment} className="bg-primary text-white" />
                <FormInput type={FormInputType.TextArea} name="message" id="message" value="" rows={5} />
              </InputGroup>
            </div>
            <div className="d-flex">
              <Button type={ButtonType.Primary} className="ms-auto" icon={faShare} text="Send" />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Contact;
