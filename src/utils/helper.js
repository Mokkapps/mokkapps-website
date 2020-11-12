import CalendarIcon from 'react-feather/dist/icons/calendar';
import UserIcon from 'react-feather/dist/icons/user';
import TagIcon from 'react-feather/dist/icons/tag';

export const getAsset = (edges, imageName) => {
  return edges
    .map(e => e.node)
    .filter(node => node.childImageSharp)
    .find(node => node.childImageSharp.fluid.src.includes(imageName));
};

export function sendCustomAnalyticsEvent(eventName) {
  if (window.umami && typeof window.umami === 'function') {
    window.umami(eventName);
  }
}

export const yearsOfExperience = new Date().getFullYear() - 2015;

export const getAllCategories = allPosts => {
  const postCategories = allPosts.edges
    .map(edge => edge.node.frontmatter.categories)
    .filter(category => category !== null);
  let categories = [];
  for (const categoryArr of postCategories) {
    for (const category of categoryArr) {
      categories.push(category);
    }
  }
  // eslint-disable-next-line no-undef
  categories = Array.from(new Set(categories));
  return categories;
};

export const metaIcons = {
  calendar: CalendarIcon,
  user: UserIcon,
  tag: TagIcon,
};

export const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};
