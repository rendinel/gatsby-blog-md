module.exports = {
  siteMetadata: {
    title: `John Doe Blog`,
    description: `This is john doe's blog,full of article about nutrition,training and scientific reasearch`,
    twitterUsername: `@gatsbyjs`,
    image: `/profilepic.png`,
    siteUrl: `https://www.yourdomain.tld`,
    role: 'Nutritionist, researcher and trainer',
    name: 'John Doe',
    bio: "Hi i'm John Doe a science nerd.",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bio`,
        path: `${__dirname}/MD/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `blogs`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: 'forward',
        },
        query: `
        {
          allMarkdownRemark {
            nodes {
              id
              frontmatter {
                title
                category
                }
                fields {
                slug
                }
              } 
            }
        }
        `,
        ref: 'id',
        index: ['title', 'category'],
        store: ['id', 'title', 'category', 'slug'],
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map((node) => ({
            id: node.id,
            title: node.frontmatter.title,
            category: node.frontmatter.category,
            slug: node.fields.slug,
          })),
      },
    },
  ],
}
