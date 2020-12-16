import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import formSchema from './validation/formSchema';
import User from './components/User';
import Form from './components/Form';
import './App.css';

const initialFormValues = {
   // Text Inputs
   fname: '',
   lname: '',
   email: '',
   password: '',
   role: '',
   terms: false, // checkbox
}

const initialFormErrors = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  role: '',
}

const initialUsers = []
const initialDisabled = true

function App() {
// slices of state
const [users, setUsers] = useState(initialUsers)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const getUsers = () => {
  axios.get('https://reqres.in/api/users')
  .then((res) => {
    console.log(res.data);
    setUsers(res.data);
  })
  .catch((err) => {
    console.log(err);
    debugger;
  })
}

const postNewUser = (newUser) => {
  axios.post('https://reqres.in/api/users', newUser)
  .then((res) => {
    setUsers([res.data, ...users]);
    setFormValues(initialFormValues);
  })
  .catch((err) => {
    console.log(err);
    debugger;
  })
}

const inputChange = (name, value) => {
  yup
  .reach(formSchema, name)
  .validate(value)
  .then(() => {
    setFormErrors({
      ...formErrors, [name]: ''
    });
  })
  .catch((err) => {
    setFormErrors({
      ...formErrors, [name]: err.errors[0],
    });
  });

  setFormValues({
    ...formValues, [name]: value,
  });
};

const formSubmit = () => {
  const newUser = {
    fname: formValues.fname.trim(),
    lname: formValues.lname.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    role: formValues.role.trim(),
    terms: formValues.terms
  }

  postNewUser(newUser);
  
}

// useEffect(() => {
//   getUsers();
// }, []);

useEffect(() => {
  formSchema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  })
}, [formValues]);

  return (
    <div className="App">
     <header>
       <h1>Form Application App</h1>
     </header>

     <Form
      values={formValues}
      update={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />

      {users.map((user) => {
        return <User key={user.id} userInfo={user} />;
      })}
    </div>
  );
}

export default App;
