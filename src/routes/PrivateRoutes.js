import React from 'react';
import {Routes, Route} from "react-router";
import {Navigate} from "react-router";
import Tech from "../Pages/Tech";

const PrivateRoutes = () => {
	return (
		<Routes>
			<Route path={'/tech'} element={<Tech/>}/>
			<Route path={'*'} element={<Navigate to={'/tech'}/>}/>
		</Routes>
	);
};

export default PrivateRoutes;