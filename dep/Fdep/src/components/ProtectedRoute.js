import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import useAuth from './IsAuth';


const ProtectedRoute = ({rote}) => {

const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        if (!isAuthenticated) {
            navigate('/Login');
        }
    }, [isAuthenticated, navigate]);


  return isAuthenticated ? rote : null;
}

export default ProtectedRoute;