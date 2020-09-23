import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const appTitle = site.siteMetadata?.title

  return (
    <Helmet
      title={title}
      titleTemplate={appTitle ? `%s | ${appTitle}` : null}
    />
  )
}

export default SEO
