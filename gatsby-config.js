module.exports = {
  siteMetadata: {
    author: 'Miguel Michel',
    title: "Miguel's Blog",
    description: `Hi, I'm a full-stack developer named Miguel Michel. Welcome to my humble abode.`,
    pathname: 'mmiguel.dev',
    github: 'https://github.com/mig824',
    linkedin: 'https://www.linkedin.com/in/miguel-michel/',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
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
        name: "Miguel's Blog [blog.mmiguel.dev]",
        short_name: 'MM.Blog',
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
