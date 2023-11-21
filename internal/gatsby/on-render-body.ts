import React from "react";

import { RenderBodyArgs } from "gatsby";

import { themeAtomKey } from "@/hooks";

import config from "../../content/config.json";

const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setPreBodyComponents,
}: RenderBodyArgs) => {
  setHeadComponents([
    React.createElement("script", {
      key: "google-adsense",
      async: true,
      crossOrigin: "anonymous",
      src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${config.googleAdsenseId}`,
    }),
  ]);
  setPreBodyComponents([
    React.createElement("script", {
      key: "theme",
      dangerouslySetInnerHTML: {
        __html: `
          void function() {
            var cachedMode;

            try {
              var preferredTheme = JSON.parse(localStorage.getItem('${themeAtomKey}'));

              if (preferredTheme && preferredTheme.mode) {
                cachedMode = preferredTheme.mode;
              }
            } catch (err) { }

            function setTheme(newTheme) {
              document.documentElement.className = newTheme;
            }

            var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

            setTheme(cachedMode || (darkQuery.matches ? 'dark' : 'light'));
          }()
        `,
      },
    }),
  ]);

  setHtmlAttributes({ lang: "en" });
};

export { onRenderBody };
