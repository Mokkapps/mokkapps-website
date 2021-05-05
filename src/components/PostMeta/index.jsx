import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { FormattedDate, FormattedMessage } from 'react-intl';

import { capitalize } from '../../utils/helper';
import config from '../../content/meta/config';

const PostMeta = props => {
  const {
    prefix,
    timeToRead,
    categories,
    className,
    categoryLink = true,
    icons: {
      calendar: CalendarIcon,
      user: UserIcon,
      tag: TagIcon,
      read: ReadIcon,
    },
  } = props;

  return [
    <section
      className={`flex justify-start items-center mb-4 ${className}`}
      key="author"
    >
      <StaticImage
        alt={config.baseName}
        className="rounded-full mr-4"
        layout="fixed"
        width={60}
        height={60}
        src="../../images/about.jpg"
      />
      <div className="flex flex-col">
        <span className="mb-2 flex items-center">
          {CalendarIcon && <UserIcon className="mr-2 w-4 h-4" />} Michael
          Hoffmann
        </span>
        <span className="flex items-center">
          {CalendarIcon && <CalendarIcon className="mr-2 w-4 h-4" />}{' '}
          {<FormattedDate value={prefix} />} |{' '}
          {ReadIcon && <ReadIcon className="ml-1 mr-2 w-4 h-4" />} {timeToRead}{' '}
          <FormattedMessage id="minuteRead" />
        </span>
      </div>
    </section>,
    <section className="flex flex-wrap justify-center md:justify-start mb-6" key="categories-container">
      {categories &&
        categories.map(category => {
          const link = (
            <Link to={`/categories/${category}`}>{capitalize(category)}</Link>
          );
          const txt = <span key={category}>{capitalize(category)}</span>;

          return (
            <span className="flex flex-wrap items-center mr-2 mb-2" key={category}>
              {TagIcon && <TagIcon className="mr-2 w-4 h-4" />}
              {categoryLink ? link : txt}
            </span>
          );
        })}
    </section>,
  ];
};

PostMeta.propTypes = {
  prefix: PropTypes.string,
  categories: PropTypes.array,
  author: PropTypes.string,
  categoryLink: PropTypes.bool,
  icons: PropTypes.object,
};

export default PostMeta;
