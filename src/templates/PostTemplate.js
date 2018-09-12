import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import { ShareButtonRectangle } from 'react-custom-share';

import config from 'content/meta/config';

import CalendarIcon from 'react-feather/dist/icons/calendar';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';
import PrevIcon from 'react-feather/dist/icons/arrow-left';
import NextIcon from 'react-feather/dist/icons/arrow-right';
import FacebookIcon from 'react-feather/dist/icons/facebook';
import TwitterIcon from 'react-feather/dist/icons/twitter';
import EmailIcon from 'react-feather/dist/icons/mail';
import ReadIcon from 'react-feather/dist/icons/eye';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Article from '../components/Article';
import Layout from '../components/Layout';
import PostMeta from '../components/PostMeta';
import Heading from '../components/Heading';
import BodyText from '../components/BodyText';
import Header from '../components/Header';
import Seo from '../components/Seo';
import Author from '../components/Author';
import NextPrev from '../components/NextPrev';
import Share from '../components/Share';

const metaIcons = {
  calendar: CalendarIcon,
  user: UserIcon,
  tag: TagIcon,
  read: ReadIcon,
};

const nextPrevIcons = {
  next: NextIcon,
  prev: PrevIcon,
};

const PostTemplate = props => {
  const {
    data: {
      post: {
        excerpt,
        html: postHTML,
        frontmatter: { title, categories, cover },
        fields: { slug, prefix },
        timeToRead,
      },
      author: { html: authorHTML },
      file,
    },
    pageContext: { next, prev },
  } = props;

  const { siteUrl, siteLanguage, siteTitlePostfix } = config;

  const url = `${siteUrl}/blog${slug}`;
  const shareBlockProps = {
    url,
    button: ShareButtonRectangle,
    buttons: [
      { network: 'Twitter', icon: TwitterIcon },
      { network: 'Facebook', icon: FacebookIcon },
      { network: 'Email', icon: EmailIcon },
    ],
    text: title,
    longtext: excerpt,
  };

  const handleNewComment = comment => console.log(comment);

  return (
    <Layout>
      <Header>
        <Menu />
      </Header>
      <Article>
        <Heading title={title} />
        <PostMeta
          authorImage={file}
          author="Michael Hoffmann"
          prefix={prefix}
          categories={categories}
          icons={metaIcons}
          timeToRead={timeToRead}
        />
        {cover ? (
          <Img
            style={{ marginBottom: '1rem' }}
            fluid={cover.childImageSharp.fluid}
          />
        ) : null}
        <BodyText html={postHTML} />
        <Share shareBlockProps={shareBlockProps} />
        <NextPrev next={next} prev={prev} icons={nextPrevIcons} />
        <ReactDisqusComments
          style={{ marginTop: '2rem' }}
          shortname="mokkapps"
          identifier={slug}
          title="Comments"
          onNewComment={handleNewComment}
        />
        <Author html={authorHTML} />
      </Article>
      <Footer />
      <Seo
        url={`${siteUrl}${slug}`}
        language={siteLanguage}
        title={`${title}${siteTitlePostfix}`}
        description={excerpt}
      />
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
};

export default PostTemplate;

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
      excerpt
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        categories
        cover {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
    }
    author: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/author/" }
    ) {
      html
    }
    file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
