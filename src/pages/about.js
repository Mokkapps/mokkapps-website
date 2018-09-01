import React from 'react';
import { graphql } from 'gatsby';

import Header from '@react-website-themes/default/components/Header';
import Heading from '@react-website-themes/default/components/Heading';
import Layout from '@react-website-themes/default/components/Layout';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

import CustomMenu from '../components/CustomMenu';
import Footer from '../components/Footer';
import HeaderLogo from '../components/HeaderLogo';
import About from '../components/About';
import PageArticle from '../components/PageArticle';

import '../styles/global';
import '../styles/variables';

const AboutPage = props => {
  const {
    data: {
      file,
    },
  } = props;

  const { siteUrl, siteTitle, siteDescription, siteLanguage } = config;

  console.log('about props', props);

  return (
    <Layout>
      <Header>
        <HeaderLogo />
        <CustomMenu items={menuItems} />
      </Header>
      <PageArticle>
        <Heading title="About Me" />
        <About aboutImage={file} />
      </PageArticle>
      <Footer />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
