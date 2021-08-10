import React from 'react';
import Header from './Header';

const Layout = ({ pageName, children }) => {
	return (
		<>
			<title>{pageName} - LandPa</title>
			<Header />
			{children}
		</>
	);
};

export default Layout;
