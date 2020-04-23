const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allContentfulScheldwoord {
          edges {
            node {
              id: contentful_id
              from
              scheldwoord
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  result.data.allContentfulScheldwoord.edges.forEach(({ node }) => {
    createPage({
      path: `scheldwoord/${node.id}`,
      component: path.resolve(`./src/templates/scheldwoord.js`),
      context: {
        id: node.id,
        from: node.from,
      },
    })
  })
}
