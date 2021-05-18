import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getSrc } from 'gatsby-plugin-image';

import config from '../content/meta/config';
import { metaIcons } from '../utils/helper';

import BlogLanguageWarning from '../components/BlogLanguageWarning';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Article from '../components/Article';
import BlogPostList from '../components/BlogPostList';
import Heading from '../components/Heading';
import Seo from '../components/Seo';

import './style.scss';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BlogPage = props => {
  const {
    data: {
      seoImage,
      posts: { edges },
    },
  } = props;

  const posts = edges.map(edge => edge.node);
  const { siteUrl, siteTitlePostfix } = config;

  const searchComponent = (
    <p className="my-8 text-center">
      {' '}
      You can search blog posts by{' '}
      <a href="https://www.google.com/search?q=site%3Amokkapps.de%2Fblog">
        using Google
      </a>
      , browse a <Link to={'/minimal-blog-list'}>minimal list</Link> or{' '}
      <Link to={'/categories'}>by category</Link>
    </p>
  );

  return (
    <Layout>
      <Article>
        <Container>
          <Heading className="mb-8" i18nId="blogPage.title" />
          <BlogLanguageWarning className="w-full my-4" />
          {searchComponent}
          <BlogPostList
            items={posts}
            author={config.authorName}
            metaIcons={metaIcons}
          />
        </Container>
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Blog${siteTitlePostfix}`}
        image={`${config.siteUrl}${getSrc(seoImage)}`}
        description="Blog posts about software engineering and career"
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
  {
    seoImage: file(relativePath: { eq: "og/og-blog.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
    allBlogPosts: allMdx(
      filter: { fields: { source: { eq: "posts" }, slug: { ne: null } } }
    ) {
      totalCount
    }
    posts: allMdx(
      filter: { fields: { source: { eq: "posts" }, slug: { ne: null } } }
      sort: { fields: [fields___prefix], order: DESC }
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
                gatsbyImageData(
                  width: 700
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  }
`;
