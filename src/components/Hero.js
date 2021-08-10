import React from 'react';
import HeroImage from '../images/hero-image.png';

const Hero = () => {
	return (
		<section
			id="hero"
			className="bg-gradient-to-r from-purple-900 to-purple-800 py-12 md:py-24 xl:py-28"
		>
			<div className="container mx-auto px-4 md:px-16 xl:px-0">
				<div className="grid grid-cols-1 xl:grid-cols-2 items-center text-center xl:text-left text-white">
					<div>
						<h1 className="font-semibold text-2xl px-6 mb-4 md:font-bold md:leading-normal md:text-4xl xl:text-6xl xl:leading-normal md:px-28 xl:pr-6 xl:pl-0">
							Taking Your Site at The Top of &nbsp;
							<a
								href="www.ntg.com"
								className="underline text-pink-500 font-normal"
							>
								Google's Ranking.
							</a>
						</h1>
						<p className="text-base mb-8 md:mb-10 px-2 md:px-12 xl:pl-0">
							Digital Marketing conference dedicated to delivering
							actionable methods and strategies covering all
							aspects of online marketing
						</p>
						<div className="md:flex md:w-3/5 md:mx-auto md:mb-10 xl:w-full xl:mb-16">
							<a
								href="www.ntg.com"
								className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold px-4 py-2 rounded mb-10 inline-block md:mr-8 md:mb-0"
							>
								Start A Project
							</a>

							<div className="flex items-center mx-auto md:mx-0 w-max mb-8 md:mb-0">
								<a
									href="www.ntg.com"
									className="inline-block font-semibold text-sm"
								>
									Play Video
								</a>
								<span className="ml-16 relative w-10 h-10 rounded-full bg-transparent border-2 border-solid border-white text-center before:block before:w-14 before:h-0 before:border before:border-white before:border-solid before:absolute before:right-full flex justify-center items-center cursor-pointer">
									<svg
										className="w-3 h-3"
										width="10"
										height="12"
										viewBox="0 0 10 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M9 5.13397C9.66667 5.51887 9.66667 6.48113 9 6.86603L1.5 11.1962C0.833332 11.5811 -5.28905e-07 11.0999 -4.95256e-07 10.3301L-1.16704e-07 1.66987C-8.30548e-08 0.900072 0.833333 0.418947 1.5 0.803847L9 5.13397Z"
											fill="white"
										/>
									</svg>
								</span>
							</div>
						</div>
						<div className="hidden xl:block">
							<p className="font-medium text-xl">
								Follow
								<svg
									className="ml-4 inline-block"
									width="41"
									height="8"
									viewBox="0 0 41 8"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M40.5162 4.35355C40.7114 4.15829 40.7114 3.84171 40.5162 3.64645L37.3342 0.464466C37.1389 0.269204 36.8223 0.269204 36.6271 0.464466C36.4318 0.659728 36.4318 0.976311 36.6271 1.17157L39.4555 4L36.6271 6.82843C36.4318 7.02369 36.4318 7.34027 36.6271 7.53553C36.8223 7.7308 37.1389 7.7308 37.3342 7.53553L40.5162 4.35355ZM0.162598 4.5H40.1626V3.5H0.162598V4.5Z"
										fill="white"
									/>
								</svg>
							</p>
							<ul className="flex items-center space-x-4 mt-4">
								<li className="">
									<a
										href="www.ntg.com"
										className="transition duration-500 ease-in-out transform flex justify-center items-center w-8 h-8 rounded-full  bg-indigo-700 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-400 hover:to-yellow-300 hover:-translate-y-1 hover:scale-105"
									>
										<svg
											width="7"
											height="12"
											viewBox="0 0 7 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.32918 6.87501H5.78752L6.37085 4.54167H4.32918V3.37501C4.32918 2.77417 4.32918 2.20834 5.49585 2.20834H6.37085V0.248338C6.18068 0.223255 5.4626 0.166672 4.70427 0.166672C3.12052 0.166672 1.99585 1.13326 1.99585 2.90834V4.54167H0.24585V6.87501H1.99585V11.8333H4.32918V6.87501Z"
												fill="white"
											/>
										</svg>
									</a>
								</li>
								<li className="">
									<a
										href="www.ntg.com"
										className="transition duration-500 ease-in-out transform flex justify-center items-center w-8 h-8 rounded-full  bg-indigo-700 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-400 hover:to-yellow-300 hover:-translate-y-1 hover:scale-105"
									>
										<svg
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M6.16268 0.166672C7.7476 0.166672 7.94535 0.172505 8.56718 0.201672C9.18843 0.230838 9.61135 0.328255 9.98351 0.472922C10.3685 0.621089 10.6928 0.821755 11.0172 1.14551C11.3138 1.43711 11.5433 1.78985 11.6898 2.17917C11.8338 2.55076 11.9318 2.97426 11.961 3.59551C11.9884 4.21734 11.996 4.41509 11.996 6.00001C11.996 7.58492 11.9902 7.78267 11.961 8.40451C11.9318 9.02576 11.8338 9.44867 11.6898 9.82084C11.5437 10.2104 11.3142 10.5632 11.0172 10.8545C10.7255 11.151 10.3728 11.3805 9.98351 11.5271C9.61193 11.6712 9.18843 11.7692 8.56718 11.7983C7.94535 11.8258 7.7476 11.8333 6.16268 11.8333C4.57776 11.8333 4.38001 11.8275 3.75818 11.7983C3.13693 11.7692 2.71401 11.6712 2.34185 11.5271C1.95237 11.3809 1.59957 11.1514 1.30818 10.8545C1.0115 10.5629 0.781972 10.2102 0.635596 9.82084C0.490929 9.44925 0.393512 9.02576 0.364346 8.40451C0.336929 7.78267 0.329346 7.58492 0.329346 6.00001C0.329346 4.41509 0.335179 4.21734 0.364346 3.59551C0.393512 2.97367 0.490929 2.55134 0.635596 2.17917C0.781567 1.78961 1.01115 1.43678 1.30818 1.14551C1.59965 0.848723 1.95243 0.619181 2.34185 0.472922C2.71401 0.328255 3.13635 0.230838 3.75818 0.201672C4.38001 0.174255 4.57776 0.166672 6.16268 0.166672ZM6.16268 3.08334C5.38913 3.08334 4.64727 3.39063 4.10028 3.93761C3.5533 4.48459 3.24601 5.22646 3.24601 6.00001C3.24601 6.77355 3.5533 7.51542 4.10028 8.0624C4.64727 8.60938 5.38913 8.91667 6.16268 8.91667C6.93623 8.91667 7.67809 8.60938 8.22507 8.0624C8.77206 7.51542 9.07935 6.77355 9.07935 6.00001C9.07935 5.22646 8.77206 4.48459 8.22507 3.93761C7.67809 3.39063 6.93623 3.08334 6.16268 3.08334ZM9.95435 2.93751C9.95435 2.74412 9.87752 2.55865 9.74078 2.42191C9.60403 2.28516 9.41857 2.20834 9.22518 2.20834C9.03179 2.20834 8.84633 2.28516 8.70958 2.42191C8.57283 2.55865 8.49601 2.74412 8.49601 2.93751C8.49601 3.13089 8.57283 3.31636 8.70958 3.4531C8.84633 3.58985 9.03179 3.66667 9.22518 3.66667C9.41857 3.66667 9.60403 3.58985 9.74078 3.4531C9.87752 3.31636 9.95435 3.13089 9.95435 2.93751ZM6.16268 4.25001C6.62681 4.25001 7.07193 4.43438 7.40012 4.76257C7.72831 5.09076 7.91268 5.53588 7.91268 6.00001C7.91268 6.46413 7.72831 6.90925 7.40012 7.23744C7.07193 7.56563 6.62681 7.75001 6.16268 7.75001C5.69855 7.75001 5.25343 7.56563 4.92524 7.23744C4.59705 6.90925 4.41268 6.46413 4.41268 6.00001C4.41268 5.53588 4.59705 5.09076 4.92524 4.76257C5.25343 4.43438 5.69855 4.25001 6.16268 4.25001Z"
												fill="white"
											/>
										</svg>
									</a>
								</li>
								<li className="">
									<a
										href="www.ntg.com"
										className="transition duration-500 ease-in-out transform flex justify-center items-center w-8 h-8 rounded-full  bg-indigo-700 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-400 hover:to-yellow-300 hover:-translate-y-1 hover:scale-105"
									>
										<svg
											width="13"
											height="10"
											viewBox="0 0 13 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M12.0905 1.29934C11.6452 1.49632 11.1729 1.6257 10.6894 1.68317C11.199 1.37834 11.5805 0.898595 11.7627 0.333336C11.2844 0.618003 10.7599 0.817503 10.2134 0.92542C9.84621 0.532591 9.35957 0.272065 8.82908 0.184344C8.29859 0.0966233 7.75399 0.186623 7.27993 0.440351C6.80587 0.694078 6.42892 1.09732 6.20767 1.58738C5.98643 2.07745 5.93329 2.62687 6.05652 3.15025C5.0865 3.10163 4.13755 2.84956 3.27127 2.41039C2.405 1.97122 1.64076 1.35478 1.02819 0.601086C0.811359 0.973516 0.697413 1.39689 0.698023 1.82784C0.698023 2.67367 1.12852 3.42092 1.78302 3.85842C1.39569 3.84623 1.01689 3.74163 0.678189 3.55334V3.58367C0.678306 4.147 0.873238 4.69295 1.22993 5.12895C1.58663 5.56496 2.08314 5.8642 2.63527 5.97592C2.27571 6.07336 1.8987 6.08772 1.53277 6.01792C1.68845 6.50281 1.99186 6.92687 2.40053 7.23073C2.80921 7.5346 3.30268 7.70305 3.81186 7.7125C3.3058 8.10994 2.72638 8.40374 2.1067 8.5771C1.48703 8.75046 0.839264 8.79998 0.200439 8.72284C1.3156 9.44001 2.61375 9.82074 3.93961 9.8195C8.42719 9.8195 10.8813 6.10192 10.8813 2.87784C10.8813 2.77284 10.8784 2.66667 10.8737 2.56284C11.3514 2.2176 11.7636 1.78993 12.0911 1.29992L12.0905 1.29934Z"
												fill="white"
											/>
										</svg>
									</a>
								</li>
								<li className="">
									<a
										href="www.ntg.com"
										className="transition duration-500 ease-in-out transform flex justify-center items-center w-8 h-8 rounded-full bg-indigo-700 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-400 hover:to-yellow-300 hover:-translate-y-1 hover:scale-105"
									>
										<svg
											width="12"
											height="10"
											viewBox="0 0 12 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11.7294 1.79049C11.996 2.82999 11.996 4.99999 11.996 4.99999C11.996 4.99999 11.996 7.16999 11.7294 8.20949C11.5813 8.78408 11.1478 9.23616 10.5989 9.38899C9.60201 9.66666 6.16268 9.66666 6.16268 9.66666C6.16268 9.66666 2.7251 9.66666 1.72643 9.38899C1.17518 9.23383 0.742346 8.78233 0.595929 8.20949C0.329346 7.16999 0.329346 4.99999 0.329346 4.99999C0.329346 4.99999 0.329346 2.82999 0.595929 1.79049C0.744096 1.21591 1.17751 0.763828 1.72643 0.610995C2.7251 0.333328 6.16268 0.333328 6.16268 0.333328C6.16268 0.333328 9.60201 0.333328 10.5989 0.610995C11.1502 0.766161 11.583 1.21766 11.7294 1.79049V1.79049ZM4.99601 7.04166L8.49601 4.99999L4.99601 2.95833V7.04166Z"
												fill="white"
											/>
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="mx-auto">
						<img src={HeroImage} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
