import { Navigate, useNavigate } from 'react-router-dom';

export const AuthorizedUser = function ({ children }) {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  if (!token || role !== 'user') {
    return <Navigate to={'/login'} replace={true}></Navigate>;
  } else if (token && role === 'user') return children;
};
export const AuthorizedAdmin = function ({ children }) {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  if (!token || role !== 'admin') {
    return <Navigate to={'/loginAdmin'} replace={true}></Navigate>;
  } else if (token && role === 'admin') return children;
};
export const LoggedUser = function ({ children }) {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  if (token && role === 'user') {
    return <Navigate to={'/'} replace={true}></Navigate>;
  }
  return children;
};
export const LoggedAdmin = function ({ children }) {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  if (token && role === 'admin') {
    return <Navigate to={'/homeAdmin'} replace={true}></Navigate>;
  }
  return children;
};
