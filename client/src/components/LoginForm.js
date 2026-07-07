import { fetchData } from '../main.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
const navigate = useNavigate();
const [user, setUser] = useState({username: '', password: ''});
const {username, password} = user;
const onChange = (e)=> setUser({...user, [e.target.name]: e.target.value});
const onSubmit = async (e) => {
  e.preventDefault();
 
    const data = await fetchData('users/login', {username, password}, 'POST')
    .then((data) => 
      {
        if(!data.message){
           console.log(data)}
           navigate('/login')
          })
          .catch(
            (err) => {console.log(err)

        });
      }
  return(
    <div>
      <form >
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="username"
            name='username'
            onChange={onChange}
            value={username}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            onChange={onChange}
            value={password}
            id="password"
            name='password'
            required
          />
        </div>

        <input type="submit" onSubmit={onSubmit} className="btn btn-primary" value="Login"/>
      </form>
    </div>
  );
}

export default LoginForm;