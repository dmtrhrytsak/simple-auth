import { useAuth } from '../hooks/use-auth';
import { useAppDispatch } from '../hooks/redux-hooks';
import { removeUser } from '../store/slices/userSlice';

import SHomePage from '../components/styles/HomePage.styled';

const HomePage = () => {
  const { email } = useAuth();

  const dispatch = useAppDispatch();

  return (
    <SHomePage>
      <SHomePage.Title>Welcome</SHomePage.Title>

      <SHomePage.Button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </SHomePage.Button>
    </SHomePage>
  );
};

export default HomePage;
