
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import useAuthCheck from '../../hooks/useCheckAuth';

const PrivateRoute = ({ children }) => {
    const checkAuth = useAuthCheck()
    const auth = useAuth();
    console.log(checkAuth);
    if (!checkAuth) {
        return "Lading..."
    }
    return auth ? children : <Navigate to="/login" />
};

export default PrivateRoute;