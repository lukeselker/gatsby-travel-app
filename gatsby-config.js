require('dotenv').config({
  path: `.env.development`,
})

module.exports = {
  siteMetadata: {
    title: `Somewhere With The Selkers •  Find Your Next Somewhere`,
    description: `We’re Megan and Luke Selker - two San Francisco based newlyweds who enjoy exploring our city 🌁, our state 🐻, and our world 🌎`,
    author: `Luke Selker`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/small_bridge.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
