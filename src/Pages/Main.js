import React from 'react';
import './main.css';
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import {auth} from "../firebase/fireConfig";


const Main = () => {

	const [signInWithGoogle] = useSignInWithGoogle(auth)

	return (
		<div className={'flex justify-center h-screen items-center'}>
			<button className={'signBtn'} onClick={() => signInWithGoogle()}>Sign In with Google</button>
		</div>
	);
};

export default Main;