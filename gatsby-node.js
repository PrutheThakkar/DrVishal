const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          slug
        }
      }
    }
  `)

  const blogTemplate = path.resolve("./src/templates/insight-detail.js")

  result.data.allWpPost.nodes.forEach((post) => {
    createPage({
      path: `/insights/${post.slug}/`,
      component: blogTemplate,
      context: {
        id: post.id,
      },
    })
  })
}