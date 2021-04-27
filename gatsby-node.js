const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const BlogPostTemplate = path.resolve('src/templates/blog-post/index.tsx')
  const { data, errors } = await graphql(`
    query {
      remark: allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (errors) {
    reporter.panicOnBuild(
      `Error while running GraphQL blog post query in gatsby-node.`
    )
    return
  }

  data.remark.nodes.map((post) =>
    actions.createPage({
      path: `/${post.frontmatter.slug}`,
      component: BlogPostTemplate,
      context: {
        id: post.id,
      },
    })
  )
}
