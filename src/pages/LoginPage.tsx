import { Link } from 'react-router-dom';

import Login from '../components/Login';

import SLoginPage from '../components/styles/LoginPage.styled';

const LoginPage = () => {
  return (
    <SLoginPage>
      <h1>Login</h1>
      <Login />
      <SLoginPage.Caption>
        Or <Link to="/register">Register</Link>
      </SLoginPage.Caption>
    </SLoginPage>
  );
};

export default LoginPage;
