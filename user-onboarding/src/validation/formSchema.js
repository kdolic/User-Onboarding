import * as yup from 'yup';

export default yup.object().shape({
    fname: yup
    .string()
    .required('Please enter your first name')
    .min(2, 'First Name must be at least 2 chars long '),

    lname: yup
    .string()
    .required('Please enter your last name')
    .min(2, 'Last Name must be of minimum length 2 characters'),

    email: yup
    .string()
    .email('Enter a valid email')
    .required('Please enter your email address'),

    password: yup
    .string()
    .required('Please enter a password')
    .min(8, 'Password must be of minimum length 8 characters'),

    role: yup
    .string()
    .oneOf(['Front-End Engineer', 'Back-End Engineer', 'Software Engineer', 'Project Manager', 'Designer'], 'Role is required'),

    terms: yup.boolean()
});