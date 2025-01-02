import React, { useState } from 'react'
import { loginAPICall, savedLoggedInUser, storeToken } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigator = useNavigate();


    async function handleLoginForm(e){
        e.preventDefault();
    
        await loginAPICall(username, password).then((response) => {
            console.log('response.data', response.data);
            // const token = 'Basic ' + window.btoa(username + ":" + password);
            const token = 'Bearer ' + response.data.accessToken;
            storeToken(token);
            savedLoggedInUser(username);
            navigator("/todos");
            window.location.reload(false);
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
              <h2 className='text-center'>User Login Form</h2>
            </div>
            <div className="card-body">
              <form action="">
                <div className="row mb-3">
                  <label htmlFor="" className='col-md-3 control-label'>Username/Email</label>
                  <div className="col-md-9">
                    <input type="text" name='username' className='form-control' placeholder='Enter Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
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
                  onClick={(e) => handleLoginForm(e)}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent