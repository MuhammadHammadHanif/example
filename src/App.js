import React from 'react';
import Posts from './components/Post';
import PostForm from './components/PostForm';
import MyForm from './components/MyForm';
import DemoForm from './components/DemoForm';
import { SubmissionError } from 'redux-form';
import './App.css';

// const submitToServer = async data => {
//   try {
//     let response = await fetch('', {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     let resposnsedata = await response.json();
//     return resposnsedata;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const submit = ({ firstName = '', lastName = '', email = '' }) => {
//   let errors = {};
//   let isError = false;
//   if (firstName.trim() === '') {
//     errors.firstName = 'First Name is required';
//     isError = true;
//   }
//   if (lastName.trim() === '') {
//     errors.lastName = 'Last Name is required';
//     isError = true;
//   }
//   if (email.trim() === '') {
//     errors.email = 'Email is required';
//     isError = true;
//   }
//   if (isError) {
//     throw new SubmissionError(errors);
//   } else {
//     // print the form values to the console
//     return submitToServer({ firstName, lastName, email }).then(data => {
//       if (data.errors) {
//         throw new SubmissionError(data.errors);
//       } else {
//         console.log(data);
//       }
//     });
//   }
// };

const App = () => {
  return (
    <div className='App'>
      {/* <PostForm />
      <hr />
      <Posts /> */}
      {/* <MyForm onSubmit={submit} /> */}
      <DemoForm />
    </div>
  );
};

export default App;
