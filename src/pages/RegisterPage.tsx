import { Link } from 'react-router-dom';

import SignUp from '../components/SignUp';

import SSignUpPage from '../components/styles/SignUp.styled';

const RegisterPage = () => {
  return (
    <SSignUpPage>
      <h1>Register</h1>
      <SignUp />

      <SSignUpPage.Caption>
        Already have an account? <Link to="/login">Sign in</Link>
      </SSignUpPage.Caption>
    </SSignUpPage>
  );
};

export default RegisterPage;
