import React from 'react';
import PropTypes from 'prop-types';
import { getSrc, StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

import config from '../content/meta/config';

import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Seo from '../components/Seo';
import LinkButton from '../components/LinkButton';
import Availability from '../components/Availability';
import ScheduleMeetingButton from '../components/ScheduleMeetingButton';

const ContactPage = props => {
  const {
    data: { seoImage },
  } = props;
  const { siteUrl, siteTitlePostfix } = config;

  return (
    <Layout>
      <Article>
        <Heading i18nId="contactPage.title" />
        <section className="flex flex-col justify-center items-center">
          <StaticImage
            alt="Michael Hoffmann Image"
            className="fluid-image"
            src="../images/contact.jpg"
          />
          <LinkButton
            className="mt-2"
            dataCy="contact-about-me-button"
            href="/about"
            i18nId="general.moreAboutMeLink"
          />
          <Availability className="my-5" />
          <ScheduleMeetingButton
            dataCy="contact-hire-me-button"
            className="w-64 h-16 mb-2 uppercase"
          />
          <ContactForm />
        </section>
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        title={`Contact${siteTitlePostfix}`}
        description="Contact Michael Hoffmann to hire him as a freelance software engineer or just ask him a question"
        image={`${config.siteUrl}${getSrc(seoImage)}`}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const query = graphql`
  {
    seoImage: file(relativePath: { eq: "og/og-contact.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`;
