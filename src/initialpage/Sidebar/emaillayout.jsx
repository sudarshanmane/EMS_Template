/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import emailService from "../../router_service/emailService";

import Header from './header';
import EmailSidebar from './emailsidebar';

const Emaillayout = (props) => {

	const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	}

	const { match } = props;
	return (
		<>
			<div className={`main-wrapper ${menu ? 'slide-nav' : ''}`}>

				<Header onMenuClick={() => toggleMobileMenu()} />
				<div>
					{emailService && emailService.map((route, key) =>
						<Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
					)}
				</div>
				<EmailSidebar />
			</div>
		</>
	);

}
export default withRouter(Emaillayout);