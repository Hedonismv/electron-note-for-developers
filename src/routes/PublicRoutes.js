import React from 'react';
import {Routes, Route} from "react-router";
import {Navigate} from "react-router";
import Main from "../Pages/Main";

const PublicRoutes = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Main/>}/>
			<Route path={'*'} element={<Navigate to={'/'}/>}/>
		</Routes>
	);
};

export default PublicRoutes;