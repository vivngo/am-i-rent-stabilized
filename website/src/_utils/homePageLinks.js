/**
 * @typedef {Object} HomeLinksDatum
 * @property {string} resources - absolute path to resources page
 * @property {string} why - absolute path to why page
 */

/**
 * gets the in page links to the resources and why pages
 * @param {{}} data - data that is passed to eleventyComputed
 * @returns {HomeLinksDatum | undefined}
 */
export const getHomePageLinks = (data) => {
  const lang = data.lang;
  const isHomepage = data.isHomepage;
  if (isHomepage) {
    const prefix = lang === "en" ? "/" : `/${lang}/`;
    const links = {
      resources: `${prefix}resources`,
      why: `${prefix}why`,
    };
    return links;
  }
};
