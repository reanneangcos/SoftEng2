import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [darkMode, setDarkMode] = useState(false);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', loginData);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted:', signupData);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`login-page ${darkMode ? 'dark-mode' : ''}`}>
      {/* Background Image */}
      <img
        className="background-image"
        src="https://api.builder.io/api/v1/image/assets/TEMP/623e7d909b588d1bb3ace9814402c9a0fac541a8?width=5872"
        alt=""
      />

      {/* Page Overlay */}
      <div className="page-overlay"></div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-overlay"></div>
        <div className="navbar-content">
          <div className="navbar-left">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ed5841bb3fe6d8fee0892498d27edb52cdbd64cf?width=76"
              alt="Logo"
              className="navbar-logo"
            />
            <span className="navbar-brand">Ursal Rice Milling Services</span>
          </div>
          <div className="navbar-center">
            <a href="#" className="navbar-link">Home</a>
            <a href="#" className="navbar-link">Shop</a>
            <a href="#" className="navbar-link">Contact</a>
          </div>
          <div className="navbar-right">
            <a href="#" className="navbar-link">Login</a>
            <a href="#" className="navbar-link">Signup</a>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
              {darkMode ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z" fill="currentColor"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z" fill="currentColor"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="content-container">
        {/* Forms Container */}
        <div className="forms-container">
          {/* User Profile Icon */}
          <div className="profile-icon-container">
            <svg className="profile-icon" width="173" height="173" viewBox="0 0 173 173" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M86.4998 158.583C46.6893 158.583 14.4165 126.31 14.4165 86.5001C14.4165 46.6895 46.6893 14.4167 86.4998 14.4167C126.31 14.4167 158.583 46.6895 158.583 86.5001C158.583 126.31 126.31 158.583 86.4998 158.583ZM86.4998 57.6667C90.481 57.6667 93.7082 60.8941 93.7082 64.8751C93.7082 68.8561 90.481 72.0834 86.4998 72.0834C82.5187 72.0834 79.2915 68.8561 79.2915 64.8751C79.2915 60.8941 82.5187 57.6667 86.4998 57.6667ZM86.4998 86.5001C98.4433 86.5001 108.125 76.8186 108.125 64.8751C108.125 52.932 98.4433 43.2501 86.4998 43.2501C74.5563 43.2501 64.8748 52.932 64.8748 64.8751C64.8748 76.8186 74.5563 86.5001 86.4998 86.5001ZM86.4998 108.125C94.4622 108.125 100.917 114.579 100.917 122.542H115.333C115.333 106.618 102.424 93.7084 86.4998 93.7084C70.5756 93.7084 57.6665 106.618 57.6665 122.542H72.0832C72.0832 114.579 78.5375 108.125 86.4998 108.125Z" fill="black"/>
            </svg>
          </div>

          {/* Login Section */}
          <div className="login-section">
            <h2 className="form-title">Login</h2>

            <form onSubmit={handleLoginSubmit} className="auth-form">
              <div className="input-field">
                <svg className="field-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" fill="black"/>
                </svg>
                <input
                  type="email"
                  name="email"
                  placeholder="Email or Mobile Number"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  className="field-input"
                  required
                />
              </div>

              <div className="input-field">
                <svg className="field-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM11 15.7324V18H13V15.7324C13.5978 15.3866 14 14.7403 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 14.7403 10.4022 15.3866 11 15.7324ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16Z" fill="black"/>
                </svg>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="field-input"
                  required
                />
              </div>
              
              <button type="submit" className="auth-button"  >
                Login
              </button>
             
            </form>
          </div>

          {/* Center Divider */}
          <div className="center-divider">
            <div className="divider-line-vertical"></div>
            <span className="divider-text">Or</span>
            <div className="divider-line-vertical"></div>
          </div>

          {/* Signup Section */}
          <div className="signup-section">
            <h2 className="form-title">Signup</h2>

            <form onSubmit={handleSignupSubmit} className="auth-form">
              <div className="input-field">
                <svg className="field-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="black"/>
                </svg>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={signupData.fullName}
                  onChange={handleSignupChange}
                  className="field-input"
                  required
                />
              </div>

              <div className="input-field">
                <svg className="field-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" fill="black"/>
                </svg>
                <input
                  type="email"
                  name="email"
                  placeholder="Email or Mobile Number"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  className="field-input"
                  required
                />
              </div>

              <div className="input-field">
                <svg className="field-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM11 15.7324V18H13V15.7324C13.5978 15.3866 14 14.7403 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 14.7403 10.4022 15.3866 11 15.7324ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16Z" fill="black"/>
                </svg>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  className="field-input"
                  required
                />
              </div>

              {/* Social Login Divider */}
             

              <button type="submit" className="auth-button">
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
