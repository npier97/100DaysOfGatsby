module.exports = {
  siteMetadata: {
    title: "AudioCORE",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "04GS0gBW-cxjpoUxPh6f4TObK8ryIPOdWHMqYqfvyRY",
        spaceId: "svx3i9ubu8jk",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
