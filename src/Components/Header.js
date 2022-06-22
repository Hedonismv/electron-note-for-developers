import React from 'react';
import './header.css';
import {useDispatch, useSelector} from "react-redux";
import {signOut} from "firebase/auth"
import {auth} from "../firebase/fireConfig";
import {logoutUser} from "../redux/actions/authActions";

const Header = () => {

	const dispatch = useDispatch()

	const {loggedUser} = useSelector(state => state.authReducer)

	const logout = () => {
		signOut(auth)
		dispatch(logoutUser)
	}

	return (
		<div className={'header'}>
			<div className={'header-auth'}>
				<span className={'Secondary-Color'}>{loggedUser && loggedUser.displayName}</span>
				<span style={{cursor: "pointer"}} className={'Secondary-Color'} onClick={() => logout()}>Logout</span>
			</div>
		</div>
	);
};

export default Header;