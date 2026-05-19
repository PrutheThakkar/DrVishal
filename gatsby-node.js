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

      allWpClinicalFocus {
        nodes {
          id
          slug
        }
      }
    }
  `)

  const blogTemplate = path.resolve("./src/templates/insight-detail.js")
  const clinicalFocusTemplate = path.resolve(
    "./src/templates/clinical-focus-detail.js"
  )

  result.data.allWpPost.nodes.forEach(post => {
    createPage({
      path: `/insights/${post.slug}/`,
      component: blogTemplate,
      context: {
        id: post.id,
      },
    })
  })

  result.data.allWpClinicalFocus.nodes.forEach(item => {
    createPage({
      path: `/clinical-focus/${item.slug}/`,
      component: clinicalFocusTemplate,
      context: {
        id: item.id,
      },
    })
  })
}