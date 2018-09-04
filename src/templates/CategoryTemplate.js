import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import TagIcon from 'react-feather/dist/icons/tag';
import { css } from 'emotion';

import 'prismjs/themes/prism-okaidia.css';

import Header from '@react-website-themes/default/components/Header';
import Heading from '@react-website-themes/default/components/Heading';
import List from '@react-website-themes/default/components/List';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import PageArticle from '../components/PageArticle';

import '../styles/global';
import '../styles/variables';
import { MokkappsRed } from '../styles/variables';

const listStyle = css`
  a {
    color: ${MokkappsRed};
  }

  a:hover {
    color: ${MokkappsRed};
    text-decoration: underline;
  }
`;

const PageTemplate = props => {
  const {
    pageContext: { category },
    data: {
      posts: { totalCount, edges },
    },
  } = props;

  const items = edges.map(edge => edge.node);

  const { siteUrl, siteDescription, siteLanguage, siteTitlePostfix } = config;

  return (
    <Layout>
      <Header>
        <Menu />
      </Header>
      <PageArticle>
        <Heading>
          <span>Posts in category</span> <TagIcon />
          <h1>{category}</h1>
          <h3 className="meta">
            There {totalCount > 1 ? 'are' : 'is'} <strong>{totalCount}</strong>{' '}
            post
            {totalCount > 1 ? 's' : ''} in the category:
          </h3>
        </Heading>
        <List customStyle={listStyle} items={items} />
      </PageArticle>
      <Footer />
      <Seo
        url={`${siteUrl}/categories/${category}/`}
        language={siteLanguage}
        title={`Posts in category: ${category}${siteTitlePostfix}`}
        description={siteDescription}
      />
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PageTemplate;

export const query = graphql`
  query CategoryTemplateQuery($category: String!) {
    posts: allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            categories
          }
        }
      }
    }
  }
`;
