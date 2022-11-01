const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogListTemplate = path.resolve(`./src/templates/blog-list.js`)
  const blogPostsPerPage = 3

  const categoryTemplate = path.resolve(`./src/templates/category.js`)

  const postTemplate = path.resolve(`./src/templates/single-post.js`)

  const ourQuery = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
          frontmatter {
            category
          }
        }
      }
    }
  `)

  if (ourQuery.errors) throw ourQuery.errors

  const allBlogPosts = ourQuery.data.allMarkdownRemark.nodes
  const totalBlogListPages = Math.ceil(allBlogPosts.length / blogPostsPerPage)
  Array.from({ length: totalBlogListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? '/blog' : `/blog/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: blogPostsPerPage,
        offset: index * blogPostsPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: index + 1,
      },
    })
  })

  allBlogPosts.forEach((blogCat) => {
    createPage({
      path: `/blog/${blogCat.frontmatter.category}`,
      component: categoryTemplate,
      context: { category: blogCat.frontmatter.category },
    })
  })

  allBlogPosts.forEach((blogPost) => {
    createPage({
      path: `/blog${blogPost.fields.slug}`,
      component: postTemplate,
      context: { slug: blogPost.fields.slug },
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
