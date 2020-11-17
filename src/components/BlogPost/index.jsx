import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { PropTypes } from 'prop-types';

import Meta from '../Meta';

import './styles.scss';

const BlogPost = props => {
  const {
    id,
    slug,
    cover,
    title,
    categories,
    prefix,
    author,
    metaIcons,
    excerpt,
    className,
  } = props;
  return (
    <Link
      className={`flex flex-col lg:flex-row justify-center items-center cursor-pointer rounded-md bg-none bg-secondary p-4 hover:shadow-2xl ${className}`}
      to={`/blog${slug}`}
      data-cy={`blog-post-${id}`}
      key={slug}
    >
      {cover ? (
        <Img className="image mb-4 lg:mr-4" fluid={cover.childImageSharp.fluid} />
      ) : null}
      <div className="w-full lg:w-2/3">
        <h3>{title}</h3>
        <Meta
          categories={categories}
          prefix={prefix}
          author={author}
          categoryLink={false}
          icons={metaIcons}
        />
        <p className="text-main-text">{excerpt}</p>
      </div>
    </Link>
  );
};

BlogPost.propTypes = {
  author: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  cover: PropTypes.object.isRequired,
  excerpt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  metaIcons: PropTypes.object.isRequired,
  prefix: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BlogPost;
