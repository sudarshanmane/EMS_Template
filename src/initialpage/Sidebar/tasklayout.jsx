/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import taskservice from "../../router_service/taskservice";
import Header from './header';
import SidebarContent from './tasksidebar';

const Tasklayout = (props) => {
	const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	}
	const { match } = props;
	return (
		<>
			<div className={`main-wrapper ${menu ? 'slide-nav' : ''}`}>

				<Header onMenuClick={() => toggleMobileMenu()} />
				{taskservice && taskservice.map((route, key) =>
					<Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
				)}
				<SidebarContent />
			</div>
		</>
	);
}
export default withRouter(Tasklayout);