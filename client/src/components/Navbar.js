import useNavigate from 'react-router-dom';

const Navbar = () => {
const navigate = useNavigate();
  return (
    <div idName="background">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Dream Vacation Planner</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/Register')}>Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => navigate('/Login')}>Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Navbar;