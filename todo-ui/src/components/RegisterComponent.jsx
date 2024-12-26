import React, { useState } from 'react'
import { registerAPICall } from '../services/AuthService';

const RegisterComponent = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegistrationForm(e){
    e.preventDefault();

    const register = {name, username, email, password};

    console.log('register', register)
    registerAPICall(register).then((response) => {
      console.log('response.data', response.data)
    }).catch(error => {
      console.error(error);
    });
  }

  return (
    <div className='container'>
      <br/><br/>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="car-header">
              <h2 className='text-center'>User Registration Form</h2>
            </div>
            <div className="card-body">
              <form action="">
                <div className="row mb-3">
                  <label htmlFor="" className='col-md-3 control-label'>Name</label>
                  <div className="col-md-9">
                    <input type="text" name='name' className='form-control' placeholder='Enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="" className='col-md-3 control-label'>Username</label>
                  <div className="col-md-9">
                    <input type="text" name='username' className='form-control' placeholder='Enter Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="" className='col-md-3 control-label'>Email</label>
                  <div className="col-md-9">
                    <input type="email" name='email' className='form-control' placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="" className='col-md-3 control-label'>Password</label>
                  <div className="col-md-9">
                    <input type="password" name='name' className='form-control' placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className='form-group mb-3'>
                  <button className='btn btn-primary' 
                  onClick={(e) => handleRegistrationForm(e)}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterComponent