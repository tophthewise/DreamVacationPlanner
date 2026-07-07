import { fetchData } from '../main.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
const [user, setUser] = useState({username: '', password: '', password2: ''});
const {username, password, password2} = user;
const onChange = (e)=> setUser({...user, [e.target.name]: e.target.value});
const onSubmit = async (e) => {
  e.preventDefault();
  if(password !== password2){
    alert('Passwords do not match');
    return;
  }
 
    const data = await fetchData('users/register', {username, password}, 'POST')
    .then((data) => 
      {
        if(!data.message){
           console.log(data)}
           navigate('/Vacations')
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
            required
            value={username}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password"
            name='password'
            required
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password2" className="form-label">Confirm Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password2"
            name='password2'
            required
            value={password2}
            onChange={onChange}
            required
          />
        </div>
        <input type="submit" onSubmit={onSubmit} className="btn btn-primary" value="Register"/>
      </form>
    </div>
  );
  
}
export default Register;