import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';
import { injectIntl } from 'react-intl';
import { MokkappsBlack, MokkappsRed } from '../../styles/variables';

const Form = styled.form`
  text-align: center;
  color: ${MokkappsBlack};
`;

const SubscribeInput = styled.input`
  background-color: ${MokkappsRed};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: white;
  padding: 0.5rem 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const NewsletterSubscription = ({ intl }) => {
  return (
    <Form
      action="https://mokkapps.us19.list-manage.com/subscribe/post?u=587746a905932c04ed4e175bb&amp;id=220816f8fa"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <Margin top={2}>
        <SubscribeInput
          type="submit"
          value={intl.formatMessage({ id: 'joinTheNewsletter' })}
        />
      </Margin>
    </Form>
  );
};

NewsletterSubscription.propTypes = {
  intl: PropTypes.any.isRequired,
};

export default injectIntl(NewsletterSubscription);
