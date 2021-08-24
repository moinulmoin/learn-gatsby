import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

const about = ({ data }) => {
	console.log(data);
	return (
		<>
			<Layout pageName='About Page'>
				<section className='w-max mx-auto p-6 space-y-6 rounded shadow'>
					{data.allUsersJson.edges.map((edge) => (
						<article
							key={edge.node.id}
							className='py-2 px-4 shadow'
						>
							<h4 className='font-medium'>
								Name: {edge.node.name}
							</h4>
							<p className='font-medium'>
								Email: {edge.node.email}
							</p>
						</article>
					))}
				</section>
			</Layout>
		</>
	);
};

export const query = graphql`
	{
		allUsersJson {
			edges {
				node {
					name
					id
					email
				}
			}
		}
	}
`;

export default about;
