const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Sydney Clarinet Choir',
  },
  pathPrefix: '/scc',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`),
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-less',
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
