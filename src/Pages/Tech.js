import React from 'react';
import Header from "../Components/Header";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import './Tech.css';

const Tech = () => {

	return (
		<div>
			<Header/>
			<div className={'container m-auto'}>
				<Link to={'/frontend'}>
					<div className={'stackBlockElement px-9 py-10 bg-blue-800'}>
						<span className={'text-3xl'}>Frontend</span>
					</div>
				</Link>
				<Link to={'/backend'}>
					<div className={'stackBlockElement px-9 py-10 bg-blue-800'}>
						<span className={'text-3xl'}>Backend</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Tech;