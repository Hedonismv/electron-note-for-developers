import React from 'react';
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
		<div className={'w-full'}>
			<div className={'flex m-auto justify-end items-center p-5 gap-4'}>
				<span className={'text-zinc-500'}>{loggedUser && loggedUser.displayName}</span>
				<img className={'rounded-full w-10'} src={loggedUser && loggedUser.photoURL} alt={'userPhoto'}/>
				<span className={'text-zinc-500 cursor-pointer'} onClick={() => logout()}>Logout</span>
			</div>
		</div>
	);
};

export default Header;