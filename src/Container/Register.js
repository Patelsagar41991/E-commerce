import React from 'react';
import { Col, Button, FormGroup, Label, Input, FormText, Table } from 'reactstrap';
import { Formik, Field, FastField, Form, useFormik } from 'formik';
import * as yup from 'yup';
import { NavLink,useHistory } from 'react-router-dom';
function Register(props) {
    const history = useHistory()
    let schema = yup.object().shape({
        message: yup.string().required('please enter your message'),
        password: yup.string().required('please enter your password'),
        email: yup.string().email().required('please enter your email'),
        name: yup.string().required('please enter your name'),

    });
    const formik = useFormik({
        initialValues: {
            name: '',
            message: '',
            email: '',
            password:'',
        },
        onSubmit: values => {
            handleData(values);
            console.log(values);
        },
    });
    const handleData = (values) => {
        values={
            id:Math.floor(Math.random()*1000),
            ...values
        }
        let localData = JSON.parse(localStorage.getItem('Book-reg'));
        if (localData === null) {
            localStorage.setItem("Book-reg", JSON.stringify([values]))
        } else {
            localData.push(values)
            localStorage.setItem("Book-reg", JSON.stringify(localData))

        }
        history.push("./card");
    }
    const { handleSubmit, handleBlur, errors, touched, handleChange, values } = formik;
    
    return (
        <div className='container'>
            <div className='row'>
            <div className='d-flex col-12 justify-content-center mb-5'>
       <div className='col-6'>
          <NavLink exact to={"./table"} >Tabel</NavLink>
        </div>
        <div className='col-6'>
          <NavLink exact to={'./card'} >Card</NavLink></div>
       </div>
                <Formik values={formik}>
                    <Form onSubmit={handleSubmit} className='col-8 mx-auto'>
                    <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {errors.name && touched.name ? <p>{errors.name}</p> : null}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {errors.email && touched.email ? <p>{errors.email}</p> : null}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="examplePassword" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input type="text" name="password" id="examplePassword" placeholder="password placeholder"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {errors.password && touched.password ? <p>{errors.password}</p> : null}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleText" sm={2}>Text Area</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="text" id="exampleText"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {errors.message && touched.message ? <p>{errors.message}</p> : null}
                            </Col>
                        </FormGroup>
                        <div className='conatiner'>
                            <div className='row'>
                                <div className='col-3 d-block mx-auto'>
                                    <Button type='submit'>Submit</Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>

        </div>
    );
}
export default Register