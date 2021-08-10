import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/logo.png';

const Header = () => {
	return (
		<header className="bg-gradient-to-r from-purple-900 to-purple-800 py-2 md:py-3 xl:py-6 drop-shadow-md">
			<div className="container mx-auto flex justify-between items-center px-4 md:px-11 xl:px-0">
				<Link to="/" className="xl:w-2/5 text-left">
					<img src={Logo} alt="" />
				</Link>

				<svg
					className="xl:hidden"
					width="18"
					height="16"
					viewBox="0 0 18 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z"
						fill="white"
					/>
				</svg>

				<div className="hidden xl:flex xl:justify-end xl:items-center xl:w-3/5 ">
					<ul className="flex mr-16 space-x-8">
						<li>
							<Link
								to="/"
								className="flex items-center text-white"
							>
								Home
								<svg
									className="ml-2"
									width="10"
									height="7"
									viewBox="0 0 10 7"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M5.00008 6.49999L0.75708 2.25699L2.17208 0.842987L5.00008 3.67199L7.82808 0.842987L9.24308 2.25699L5.00008 6.49999Z"
										fill="white"
									/>
								</svg>
							</Link>
						</li>
						<li>
							<Link to="/" className="text-white">
								About
							</Link>
						</li>
						<li>
							<Link to="/" className="text-white">
								Services
							</Link>
						</li>
						<li>
							<Link
								to="/"
								className="flex items-center text-white"
							>
								Pages
								<svg
									className="ml-2"
									width="10"
									height="7"
									viewBox="0 0 10 7"
									fill="none"
									xmlns="http:/3www.w3.org/2000/svg"
								>
									<path
										d="M5.00008 6.49999L0.75708 2.25699L2.17208 0.842987L5.00008 3.67199L7.82808 0.842987L9.24308 2.25699L5.00008 6.49999Z"
										fill="white"
									/>
								</svg>
							</Link>
						</li>
						<li>
							<Link to="/" className="text-white">
								Blog
							</Link>
						</li>
						<li>
							<Link to="/" className="text-white">
								Contact
							</Link>
						</li>
					</ul>
					<a
						href="www.ntg.com"
						className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold px-4 py-3 rounded "
					>
						Request A Consult
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
