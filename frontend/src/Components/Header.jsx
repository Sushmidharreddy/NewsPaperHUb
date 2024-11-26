import React, { useContext } from 'react';
import { store } from './ContextAPI';

const Header = ({ onLoginClick }) => {
  const [loginData, setLoginData] = useContext(store);

  const handleButtonClick = () => {
    if (loginData) {
      // Clear loginData when logging out
      setLoginData(null);
    } else {
      // Trigger the onLoginClick function when logging in
      if (onLoginClick) {
        onLoginClick();
      }
    }
  };

  return (
    <header className="bg-primary text-white d-flex justify-content-between align-items-center">
      <h1 className="ms-5">NEWS PAPER HUB</h1>
      <button
        className={`btn me-5 ${loginData ? 'btn-danger' : 'btn-primary'}`}
        onClick={handleButtonClick}
      >
        {loginData ? 'Logout' : 'Login'}
      </button>
    </header>
  );
};

export default Header;
