require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "AudioCORE",
    siteUrl,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.DELIVERY_API_ACCESS_TOKEN,
        spaceId: "svx3i9ubu8jk",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    `gatsby-alias-imports`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          components: "src/components",
          utils: "src/utils",
        }
      }
    }
  ],
};
