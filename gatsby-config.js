module.exports = {
	siteMetadata: {
		siteUrl: 'https://jstemplates.com',
		title: 'tailby',
	},
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-transformer-json',
		'gatsby-plugin-mdx',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `blog`,
				path: `${__dirname}/blog`,
			},
		},

		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `dummy`,
				path: `${__dirname}/dummy`,
			},
		},

		// {
		//   resolve: `gatsby-source-strapi`,
		//   options: {
		//     apiURL: `http://localhost:1337`,
		//     queryLimit: 1000, // Defaults to 100
		//     collectionTypes: [`banner`],
		//     // singleTypes: [`home-page`, `contact`]
		//   }
		// }
	],
};
