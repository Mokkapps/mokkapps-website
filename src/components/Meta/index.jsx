import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { getFormattedDate } from '../../utils/helper';

import './Meta.scss';

const Meta = props => {
  const {
    prefix,
    categories,
    author,
    categoryLink = true,
    icons: { calendar: CalendarIcon, user: UserIcon, tag: TagIcon },
  } = props;

  return (
    <p className="meta">
      <span>
        {CalendarIcon && <CalendarIcon />} {getFormattedDate(prefix)}
      </span>
      <span>
        {UserIcon && <UserIcon />} {author}
      </span>
      {categories &&
        categories.map(category => {
          const link = (
            <Link key={category} to={`/categories/${category}`}>
              {category}
            </Link>
          );
          const txt = <span key={category}>{category}</span>;

          return (
            <span>
              {TagIcon && <TagIcon />}
              {categoryLink ? link : txt}
            </span>
          );
        })}
    </p>
  );
};

Meta.propTypes = {
  customStyle: PropTypes.string,
  prefix: PropTypes.string,
  categories: PropTypes.array,
  author: PropTypes.string,
  categoryLink: PropTypes.bool,
  icons: PropTypes.object,
};

export default Meta;
