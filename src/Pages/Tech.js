import React from 'react';
import Header from "../Components/Header";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import './Tech.css';

const Tech = () => {

	return (
		<div>
			<Header/>
			<div className={'stackBlock'}>
				<Link to={'/frontend'}>
					<div className={'stackBlockElement'}>
						<span>Frontend</span>
					</div>
				</Link>
				<Link to={'/backend'}>
					<div className={'stackBlockElement'}>
						<span>Backend</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Tech;