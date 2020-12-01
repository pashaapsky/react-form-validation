import React from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup';

function BigFormik(props) {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(4, 'Must be 4 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(5, 'Must be 5 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} style={{marginBottom: "50px"}}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
            ) : null}
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
            ) : null}
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            <button type="submit">Submit</button>
        </form>
    );
}

export default BigFormik;