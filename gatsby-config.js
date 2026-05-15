
/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config()
const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: `Vishal Pingle`,
    description: `Gatsby + WordPress (WPGraphQL) site`,
    author: `@vishal-pingle`,
    siteUrl: process.env.GATSBY_WEBSITE_URL || "https://wpvishal.studiosentientdemo.com",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.GATSBY_WPGRAPHQL_URL || "https://wpvishal.studiosentientdemo.com/graphql",
      },
    },
  ],

  // Proxy configuration to avoid CORS during development
  developMiddleware: app => {
    app.use(
      "/wp-json",
      createProxyMiddleware({
        target: "https://wpvishal.studiosentientdemo.com",
        changeOrigin: true,
        secure: false,
      })
    )
  },
}
