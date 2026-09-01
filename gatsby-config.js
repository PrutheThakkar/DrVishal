require("dotenv").config()
const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: `Dr. Vishal Pingle`,
    description: `Internationally trained cardiothoracic and transplant surgeon in Mumbai.`,
    author: `Dr. Vishal Pingle`,
    siteUrl: process.env.GATSBY_WEBSITE_URL || "https://www.drvishalpingle.com",
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
}
