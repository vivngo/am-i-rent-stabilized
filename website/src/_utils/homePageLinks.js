/**
 * gets the in page links to the resources and why pages
 * @param {{}} data
 * @returns {{} | undefined}
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
