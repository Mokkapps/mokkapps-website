import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

import { sendCustomAnalyticsEvent } from '../../utils/helper';
import config from '../../content/meta/config';

const HireTheAuthor = () => (
  <div
    className="flex flex-col bg-secondary rounded-md"
    data-cy="hire-the-author"
  >
    <Link
      className="w-100 flex flex-col bg-none rounded-lg user-select-none"
      to="/contact"
      onClick={() => sendCustomAnalyticsEvent('Hire the author card clicked')}
    >
      <h3 className="text-main-text p-2 mb-0">
        <FormattedMessage id="hireTheAuthor.title" />
      </h3>
      <StaticImage
        alt={config.baseName}
        src="../../images/about.jpg"
        className="m-1"
      />
      <p className="p-2 bg-secondary text-main-text text-center text-md">
        <FormattedMessage id="hireTheAuthor.shortSummary" />
      </p>
    </Link>
  </div>
);

HireTheAuthor.propTypes = {
  image: PropTypes.object,
};

export default HireTheAuthor;
