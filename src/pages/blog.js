import React from 'react';
import { graphql, navigate } from 'gatsby';
import ReactPaginate from 'react-paginate';
import { Margin } from 'styled-components-spacing';
import PropTypes from 'prop-types';

import config from 'content/meta/config';

import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Article from '../components/Article';
import BlogPostList from '../components/BlogPostList';
import Heading from '../components/Heading';
import Seo from '../components/Seo';
import CategorySelection from '../components/CategorySelection';

import { metaIcons, getAllCategories } from '../utils/helper';

import './style.scss';

const BlogPage = props => {
  const {
    data: {
      posts: { edges },
      allPosts,
    },
    pageContext: { numberOfPages, pageNumber },
  } = props;

  const posts = edges.map(edge => edge.node);
  const categories = getAllCategories(allPosts);

  const { siteUrl, siteDescription } = config;

  const handlePageClick = ({ selected }) =>
    navigate(`/blog/${selected === 0 ? '' : selected + 1}`);

  return (
    <Layout>
      <Article>
        <Heading title="BLOG" />
        <Margin top={4} bottom={4}>
          <CategorySelection categories={categories} />
        </Margin>
        <Margin bottom={4} />
        <BlogPostList
          items={posts}
          author={config.authorName}
          metaIcons={metaIcons}
        />
        <ReactPaginate
          pageCount={numberOfPages} // required
          pageRangeDisplayed={5} // required
          marginPagesDisplayed={2} // required
          initialPage={pageNumber}
          previousLabel="<"
          nextLabel=">"
          breakLabel={<button>...</button>}
          disableInitialCallback
          breakClassName="break-me"
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="pagination__active"
          previousClassName="pagination__prev"
          nextClassName="pagination__next"
          previousLinkClassName="pagination__prev-link"
          disabledClassName="pagination__disabled"
          nextLinkClassName="pagination__next-link"
        />
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Blog | ${siteDescription}`}
        description={siteDescription}
      />
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default BlogPage;

export const query = graphql`
  query($skip: Int, $limit: Int) {
    allPosts: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            categories
          }
        }
      }
    }
    posts: allMarkdownRemark(
      filter: { fields: { source: { eq: "posts" }, slug: { ne: null } } }
      sort: { fields: [fields___prefix], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            categories
            cover {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
