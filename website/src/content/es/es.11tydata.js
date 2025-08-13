import { getRoutesForLang } from "../../_utils/localeLinks.js";
import { getInPageNavLinks } from "../../_utils/inPageNavLinks.js";
import { getHomePageLinks } from "../../_utils/homePageLinks.js";

export default {
  lang: "es",
  eleventyComputed: {
    nav_main: (data) => data.es.main?.nav_main,
    main: (data) => data.es.main,
    resources: (data) => data.es.resources,
    how: (data) => data.es.how,
    why: (data) => data.es.why,
    nav_side: (data) => getInPageNavLinks(data, "es"),
    homeLinks: (data) => getHomePageLinks(data),
    localeLinks: (data) =>
      getRoutesForLang(data.page.lang, data.page.fileSlug, data.isHomepage),
  },
};
