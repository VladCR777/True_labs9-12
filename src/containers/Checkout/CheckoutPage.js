import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import ErrorMessageComponent from './ErrorMessage';

const CheckoutPage = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
        address: Yup.string().required('Address is required'),
        city: Yup.string().required('City is required'),
    });


    const handleSubmit = (values) => {
        console.log('Form values:', values);
        navigate('/success');
    };

    return (
        <div className="checkout-page">
            <h2>Checkout</h2>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    city: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <label>Name</label>
                            <Field type="text" name="name" />
                            {errors.name && touched.name && (
                                <ErrorMessageComponent>{errors.name}</ErrorMessageComponent>
                            )}
                        </div>

                        <div>
                            <label>Email</label>
                            <Field type="email" name="email" />
                            {errors.email && touched.email && (
                                <ErrorMessageComponent>{errors.email}</ErrorMessageComponent>
                            )}
                        </div>

                        <div>
                            <label>Phone</label>
                            <Field type="text" name="phone" />
                            {errors.phone && touched.phone && (
                                <ErrorMessageComponent>{errors.phone}</ErrorMessageComponent>
                            )}
                        </div>

                        <div>
                            <label>Address</label>
                            <Field type="text" name="address" />
                            {errors.address && touched.address && (
                                <ErrorMessageComponent>{errors.address}</ErrorMessageComponent>
                            )}
                        </div>

                        <div>
                            <label>City</label>
                            <Field type="text" name="city" />
                            {errors.city && touched.city && (
                                <ErrorMessageComponent>{errors.city}</ErrorMessageComponent>
                            )}
                        </div>

                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CheckoutPage;
