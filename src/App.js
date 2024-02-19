import { useFormik } from "formik";
import React from "react";
import './app.css';


function App() {
  
  const formik = useFormik({
    initialValues : {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log('Values:', values)
      alert('Login Successful');
    },
    validate: values => {
      let errors = {};
      if(!values.email) {
        errors.email = 'Field Required'
      } else if (!values.email.includes('@')) {
        errors.email = 'Username should be an email'
      }
      if(!values.password) errors.password = 'Field Required'
      return errors;
    }
  })

  return (
    <div className="container">
      <div className="tittle">Sign-in</div>

      <form onSubmit={formik.handleSubmit} className="form">
        <div className="label">E-mail</div>
        <input className="input" name="email" type="text" id="emailField" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null}

        <div className="label">Password</div>
        <input className="input" name="password" type="text" id="pswField" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null}

        <button className="btn" id="submitBtn" type="submit" >Login</button>
      </form>

    </div>
  );
}

export default App;
