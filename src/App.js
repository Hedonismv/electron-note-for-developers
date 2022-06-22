import './App.css';
import Header from "./Components/Header";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase/fireConfig";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setUserAuth} from "./redux/actions/authActions";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {

	const dispatch = useDispatch()

	const [user, loading, error] = useAuthState(auth)
	const {loggedUser} = useSelector(state => state.authReducer)

	useEffect(() => {
		if (user){
			dispatch(setUserAuth(user))
		}
	}, [user, loggedUser])

	return (
		<div className={'App'}>
			{loading ? 'Loading' : user ? <PrivateRoutes/> : <PublicRoutes/> }
		</div>
	);
}

export default App;
