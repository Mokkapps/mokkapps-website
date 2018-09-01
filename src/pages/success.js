import React from 'react';
import { graphql } from 'gatsby';

import Article from '@react-website-themes/default/components/Article';
import Bodytext from '@react-website-themes/default/components/Bodytext';
import Header from '@react-website-themes/default/components/Header';
import Heading from '@react-website-themes/default/components/Heading';
import Layout from '@react-website-themes/default/components/Layout';
import Seo from '@react-website-themes/default/components/Seo';

import config from 'content/meta/config';
import menuItems from 'content/meta/menu';

import CustomMenu from '../components/CustomMenu';
import Footer from '../components/Footer';
import HeaderLogo from '../components/HeaderLogo';

import '../styles/global';
import '../styles/variables';

const SuccessPage = props => {
  const {
    data: {
      success: { html: contactSuccessHTML },
    },
  } = props;

  const { siteUrl, siteTitle, siteDescription, siteLanguage } = config;

  return (
    <Layout>
      <Header>
        <HeaderLogo />
        <CustomMenu items={menuItems} />
      </Header>
      <Article>
        <Heading title="SUCCESS" />
        <Bodytext html={contactSuccessHTML} />
      </Article>
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

export default SuccessPage;

export const query = graphql`
  query {
    success: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/contactSuccess/" }
    ) {
      html
    }
  }
`;
