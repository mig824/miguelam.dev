module.exports = {
  siteMetadata: {
    author: 'Miguel Michel',
    title: "Miguel Michel's Brief Website",
    description: `Hi, I'm a full-stack developer named Miguel Michel. Welcome to my humble abode.`,
    pathname: 'mmiguel.dev',
    github: 'https://github.com/mig824',
    linkedin: 'https://www.linkedin.com/in/miguel-michel/',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-tsconfig-paths',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
          omitKeys: ['xmlnsSerif'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Miguel's website [mmiguel.dev]",
        short_name: 'mmiguel.dev',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/utils/icons/favicon.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
