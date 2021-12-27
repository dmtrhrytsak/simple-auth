import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../hooks/use-auth';

interface RequireAuthProps {
  redirectTo: string;
  children: JSX.Element;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ redirectTo, children }) => {
  const { isAuth } = useAuth();

  const location = useLocation();

  if (!isAuth) {
    return (
      <Navigate to={redirectTo} replace={true} state={{ from: location }} />
    );
  }

  return children;
};

export default RequireAuth;
