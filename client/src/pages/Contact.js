import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import NavigationNew from '../components/NavigationNew';

class NameForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          name: '',
          number: '',
          email: '',
          message: '',
          sent: false
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .required('Name is required'),
          number: Yup.string()
            .required('Number is required'),
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          message: Yup.string()
            .min(30, 'Please add at least 30 characters')
            .required('Message is required'),
        })}

        onSubmit={values => {
          let data = {
            nameFilled: values.name,
            numberFilled: values.number,
            mailFilled: values.email,
            messageFilled: values.message,
          };
          axios
            .post('/api/forma', data)
            .then((res) => {
              this.setState(
                {
                  sent: true,
                },
                this.resetForm()
              );
            })
            .catch(error => {
              console.log(error.response);
            });
        }
        }

        render={({ errors, status, touched }) => (
          <div className="contact">
            <NavigationNew />
            <div className="contactContent">
              <div className="header">
                <h2>Contact Me</h2>
              </div>
              <div className="contactBox">
                <Form>

                  {/* <label htmlFor="name">First Name</label> */}
                  <Field name="name" type="text" placeholder="Name" className={'input' + (errors.name && touched.name ? ' is-invalid' : '')} />
                  <ErrorMessage name="name" component="div" className="invalid-feedback" />



                  {/* <label htmlFor="number">Number</label> */}
                  <Field name="number" type="number" placeholder="Number" className={'input' + (errors.number && touched.number ? ' is-invalid' : '')} />
                  <ErrorMessage name="number" component="div" className="invalid-feedback" />




                  {/* <label htmlFor="email">Email</label> */}
                  <Field name="email" type="text" placeholder="Mail" className={'input' + (errors.email && touched.email ? ' is-invalid' : '')} />
                  <ErrorMessage name="email" component="div" className="invalid-feedback" />




                  {/* <label htmlFor="message">Message</label> */}
                  <Field name="message" type="message" placeholder="Message" multiline rows={40} className={'input' + (errors.message && touched.message ? ' is-invalid' : '')} />
                  <ErrorMessage name="message" component="div" className="invalid-feedback" />


                  <button type="submit" className="inputSubmit" >Submit</button>

                </Form>
              </div>
            </div>
          </div>
        )}
      />
    )
  }
}

export default NameForm;