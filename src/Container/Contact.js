import React from 'react';
import { Formik, FastField, Form, useFormik } from 'formik';
import * as Yup from "yup";
function Contact(props) {

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            // .min(2, 'Too Short!')
            // .max(70, 'Too Long!')
            .required('please enter your name'),
        email: Yup.string()
            // .email('Invalid email')
            .required('please enter your email'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            handleData(values)
            console.log(values);
        }
    })
    const handleData = (values) =>{
        values = {
            id: Math.floor(Math.random() * 1000),
            ...values
          }
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500);
    }

    const { handleSubmit, handleChange, handleBlur,touched, values, errors } = formik
    return (
        <div>
            <Formik values={formik}>
                <Form onSubmit={handleSubmit}>
                    <div className='col-lg-12 mb-3'>
                        <input name="name" placeholder="please enter your name" type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                             />
                        {errors.name && touched.name ? <p>{errors.name}</p> : ''}
                    </div>
                    <div className='col-lg-12 mb-3'>
                        <input name="email" placeholder="please enter your email" type="text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                             />
                        {errors.email && touched.email ? <p>{errors.email}</p> : ''}

                    </div>
                    <button type="submit" onClick={handleData}>Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Contact;