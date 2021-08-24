import React from 'react';
import Layout from '../../components/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const SinglePost = ({ data }) => {
	return (
		<>
			<Layout pageName='Single Post'>
				<div className='w-1/2 mx-auto shadow rounded p-4 mt-10'>
					<h1 className='font-semibold text-xl'>
						{data.mdx.frontmatter.title}
					</h1>
					<p className='text-xs mt-2 mb-6'>
						posted: {data.mdx.frontmatter.date}
					</p>
					<MDXRenderer>{data.mdx.body}</MDXRenderer>
				</div>
			</Layout>
		</>
	);
};

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				date(formatString: "MMMM D, YYYY")
			}
			body
		}
	}
`;

export default SinglePost;
