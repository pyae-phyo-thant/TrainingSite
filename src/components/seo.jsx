import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

export function Seo({
  title = "",
  description = "",
  pathname = "",
  image = "",
  children = null,
}) {
  const location = useLocation();
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleDefault
          siteUrl
          hrefLang
          siteDescription
          siteImage
        }
      }
    }
  `);

  const {
    siteTitle,
    siteTitleDefault,
    siteUrl,
    siteDescription,
    siteImage,
    hrefLang,
  } = siteMetadata;

  const seo = {
    title: title || siteTitleDefault,
    description: description || siteDescription,
    url: pathname ? `${siteUrl}${pathname}` : location.href,
    image: `${siteUrl}${image || siteImage}`,
  };

  return (
    <Helmet
      title={title}
      defaultTitle={siteTitleDefault}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang={hrefLang} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <link rel="icon" type="image/png" sizes="32x32" href="logo.png" />
      {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" /> */}

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital@1&display=swap"
        rel="stylesheet"
      />

      <script
        src="https://use.fontawesome.com/5e28dc330f.js"
        crossorigin="anonymous"
      ></script>
      <script
        defer
        src="https://unpkg.com/alpinejs@3.2.4/dist/cdn.min.js"
      ></script>
      {children}
    </Helmet>
  );
}
