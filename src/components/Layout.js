import React from 'react';
import Header from './Header';

const Layout = ({ pageName, children }) => {
	return (
		<>
			<title>{pageName} - LandPa</title>
			<Header />
			<main>
				<h1 className='text-center mb-10 mt-4'>This is {pageName}</h1>
				{children}
			</main>
		</>
	);
};

export default Layout;
