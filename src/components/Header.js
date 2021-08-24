import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/logo.png';

const Header = () => {
	return (
		<header className='bg-purple-900 py-2 md:py-3 drop-shadow'>
			<div className='container flex justify-between items-center px-4 md:px-11 xl:px-0'>
				<Link to='/' className='xl:w-2/5 text-left'>
					<img src={Logo} alt='' />
				</Link>

				<svg
					className='xl:hidden'
					width='18'
					height='16'
					viewBox='0 0 18 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z'
						fill='white'
					/>
				</svg>

				<nav className='hidden xl:flex xl:justify-end xl:items-center xl:w-3/5 '>
					<ul className='flex space-x-8 text-white'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/services'>Services</Link>
						</li>
						<li>
							<Link to='/blog'>Blog</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
