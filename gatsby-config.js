module.exports = {
  siteMetadata: {
    title: 'Ignas Portfolio',
    author: 'Ignas',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Fira Sans`,
          },
          {
            family: `Righteous`,
          },
        ],
      },
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-transition-link`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#023B54`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Portfolio',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#45443F',
        theme_color: '#45443F',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
