import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("adminAuth");
    setUser(null);
    navigate("/auth");
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">D SQUARE TOURS & TRAVELS</h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/ourservice">Our Services</Link>
        <Link to="/ourvehicles">Our Vehicles</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {user ? (
        <div className="navbar-user-box">
          <span className="navbar-username">Hi, {user.name}</span>
          <button className="navbar-logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <button className="navbar-auth-btn" onClick={() => navigate("/auth")}>
          Log In
        </button>
      )}
    </nav>
  );
};

export default Navbar;
