import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import config from '../../content/meta/config';
import SocialLink from '../SocialLink';

const FooterWrapper = styled.footer`
  flex-shrink: 0;
  padding: 1em;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  text-align: center;
  color: white;
  margin: 1rem 0 1rem 0;
`;

const Footer = () => (
  <FooterWrapper>
    <SocialLinks data-cy="footer-social-links">
      {config.socialLinks.map(link => (
        <SocialLink key={link.url} href={link.url} iconName={link.icon} />
      ))}
    </SocialLinks>

    <Content>
      <a
        href="https://github.com/Mokkapps/website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FormattedMessage id="built" />
      </a>{' '}
      <FormattedMessage id="with" /> &hearts; <FormattedMessage id="using" />{' '}
      <a
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby.js
      </a>{' '}
      |{' '}
      <a data-cy="footer-newsletter" href="/newsletter">
        <FormattedMessage id="newsletter" />
      </a>
      |{' '}
      <a data-cy="footer-privacy-policy" href="/privacy-policy">
        <FormattedMessage id="privacyPolicy" />
      </a>{' '}
      |{' '}
      <a data-cy="footer-legal-notice" href="/legal-notice">
        <FormattedMessage id="legalNotice" />
      </a>
      <a href="https://www.bloggerei.de/gutscheine/" target="_blank"><img style="width:0" src="https://www.bloggerei.de/bgpublicon.jpg" alt="Bloggerei.de Gutscheincodes" /></a>
    </Content>
  </FooterWrapper>
);

export default Footer;
