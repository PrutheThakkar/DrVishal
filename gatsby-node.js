const path = require("path")
const fs = require("fs")

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

exports.onPostBuild = async ({ graphql, reporter }) => {
  const result = await graphql(`
    query SitemapPages {
      allSitePage {
        nodes {
          path
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Could not generate sitemap", result.errors)
    return
  }

  const excluded = [/^\/404\/?$/, /^\/404\.html$/, /^\/dev-404-page\/?$/, /^\/api\//]
  const urls = result.data.allSitePage.nodes
    .map(node => node.path)
    .filter(pagePath => !excluded.some(pattern => pattern.test(pagePath)))
    .sort()
    .map(pagePath => `  <url><loc>https://www.drvishalpingle.com${pagePath}</loc></url>`)
    .join("\n")

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  fs.writeFileSync(path.join("public", "sitemap.xml"), sitemap)
  reporter.info("Generated sitemap.xml")
}
