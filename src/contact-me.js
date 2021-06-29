import React from 'react'
import { env } from './config';
import{ send } from 'emailjs-com';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
 
 const Schema = Yup.object().shape({
   user_name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   message: Yup.string()
     .min(20, 'Too Short!')
     .required('Required'),
   user_email: Yup.string().email('Invalid email').required('Required'),
 });

export default function ContactUs() {

  function sendEmail(values, setSubmitting, reset) {
    send(env.serviceId, env.templateId, values, env.user)
      .then((result) => {
          console.log(result.text);
          if (result.text === 'OK') {
            setSubmitting(false)
            reset()
          } 
      }, (error) => {
          return error.text
      });
  }

  return (
    <Formik
      initialValues={{
        user_name: '',
        user_email: '',
        message: '',
      }}
      validationSchema={Schema}
      onSubmit={( values, actions) => {
        sendEmail(values, actions.setSubmitting, actions.resetForm)
      }}>

      {({ dirty, isValid, isSubmitting, values, errors, touched }) => (
        <div className="form__container">
          <Form className="contact__form">
            <Field type="hidden" name="contact_number"/>
            <label className="formik__label" htmlFor="user_name">Name <span>{errors.user_name && touched.user_name ? errors.user_name : null}</span></label>
            <Field className="formik__input" name="user_name" placeholder="John" />
            

            <label className="formik__label" htmlFor="user_email">Email<span> {errors.user_email && touched.user_email ? errors.user_email : null}</span></label>
            <Field className="formik__input" name="user_email" placeholder="john@example.com" type="email" />

            <label className="formik__label" htmlFor="message">Message<span> ({240 - values.message.length}chars) {errors.message && touched.message ? errors.message : null}</span></label>
            <Field 
              maxLength="240"
              style={{height: "15em"}}
              className={values.message.length > 220 ?
                "input-warn" :
                "formik__input"}
              name="message"
              as="textarea"
            />

            <button className={!dirty || !isValid ? "submit disabled" : "submit"} type="submit" disabled={!dirty || !isValid || isSubmitting}>
              {isSubmitting ? "sending..." : "Send Message"}
            </button>
          </Form>
        </div>
        
      )}
    </Formik>
  );
}