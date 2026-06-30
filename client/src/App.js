import './App.css';
import Navbar from './components/Navbar.js';
import RegisterForm from './components/RegisterForm.js'
import LoginForm from './components/LoginForm.js'

function App() {
  return (
    <div className="App">
    <Navbar />
      <RegisterForm />
      <LoginForm />
    </div>
  );
}

export default App;
