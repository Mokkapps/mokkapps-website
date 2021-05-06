import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { getSrc, StaticImage } from 'gatsby-plugin-image';

import config from '../content/meta/config';

import Footer from '../components/Footer';
import ProjectList from '../components/ProjectList';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Seo from '../components/Seo';

const MarginCenteredWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading2 = styled.h2`
  text-align: center;
`;

const ProjectsPage = props => {
  const {
    data: { projectAssets, seoImage },
  } = props;

  const { siteUrl, siteTitlePostfix, customers } = config;

  return (
    <Layout>
      <Article>
        <Heading i18nId="businessProjectsHeading" />
        <MarginCenteredWrapper className="my-8">
          <span>
            <Link to="/contact">
              <FormattedMessage id="getInTouch" />
            </Link>
            <FormattedMessage id="detailedProjectList" />
          </span>
          <MarginCenteredWrapper className="mt-8">
            <StaticImage
              alt={config.baseName}
              className="fluid-image"
              src="../images/consulting1.jpg"
            />
          </MarginCenteredWrapper>
          <MarginCenteredWrapper className="my-8">
            <span>
              <FormattedMessage id="workedWith" />
            </span>
            <section className="my-4 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 md:grid-flow-col gap-4">
              {customers.map(customer => (
                <div
                  className="flex justify-center items-center bg-secondary align-middle text-center shadow-md rounded-lg py-2 px-4"
                  key={customer}
                >
                  <span className="font-bold">{customer}</span>
                </div>
              ))}
            </section>
          </MarginCenteredWrapper>
        </MarginCenteredWrapper>
        <Heading2>
          <FormattedMessage id="privateProjectsHeading" />
        </Heading2>
        <ProjectList projectAssets={projectAssets} />
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Projects${siteTitlePostfix}`}
        image={`${config.siteUrl}${getSrc(seoImage)}`}
        description="A list of all private and business projects from Michael Hoffmann"
      />
    </Layout>
  );
};

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectsPage;

export const query = graphql`
  {
    seoImage: file(relativePath: { eq: "og/og-projects.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
    projectAssets: allFile(filter: { absolutePath: { regex: "/projects/" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              width: 600
              layout: CONSTRAINED
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`;
