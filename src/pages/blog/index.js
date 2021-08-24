import React from 'react';
import Layout from '../../components/Layout';
import { Link, graphql } from 'gatsby';

const Blog = ({ data }) => {
	console.log(data);
	return (
		<>
			<Layout pageName='Blog Page'>
				<section className='w-max mx-auto p-6 space-y-6 rounded shadow'>
					{data.allMdx.nodes.map((node) => (
						<article key={node.id} className='px-4 py-2 shadow'>
							<h2 className='font-semibold'>
								<Link to={`/blog/${node.slug}`}>
									{node.frontmatter.title}
								</Link>
							</h2>
							<p className='text-xs mb-4'>
								Posted: {node.frontmatter.date}
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
		allMdx(sort: { fields: frontmatter___date, order: DESC }) {
			nodes {
				frontmatter {
					date(formatString: "MMMM D, YYYY")
					title
				}
				id
				slug
			}
		}
	}
`;

export default Blog;
