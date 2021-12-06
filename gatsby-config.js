require("dotenv").config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    title: `Design+Code`,
    description: `Don't skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools.`,
    author: `@DesignCode`,
    keywords: `react, hooks, courses, tutorials, web, ios, development`,
    image: "https://images.ctfassets.net/ooa29xqb8tix/24XYZktClnZjDjt2YNlGmX/d857becac30265e19ad8847365c68fbf/Metadata.png",

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID ,
        accessToken: process.env.GATSBY_CONTENFUL_DELIVERY_TOKEN
      }
    },
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
        icon: `static/images/logos/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
