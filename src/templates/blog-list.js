import React from 'react'
import { graphql } from 'gatsby'
import BlogLayout from '../components/blog/BlogLayout'
import Pagination from '../components/blog/Pagination'
import BlogPosts from '../components/blog/BlogPosts'
import Seo from '../components/seo/seo'

export default function BlogList({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext
  const {
    allMarkdownRemark: { nodes: posts },
  } = data
  return (
    <BlogLayout>
      <Seo />
      {posts.map((post) => {
        const {
          fields: { slug },
          frontmatter: { date, title, category, desc },
        } = post
        return (
          <BlogPosts
            key={slug}
            slug={slug}
            date={date}
            title={title}
            category={category}
            desc={desc}
          />
        )
      })}
      <Pagination currentPage={currentPage} numberOfPages={numberOfPages} />
    </BlogLayout>
  )
}

export const pageQuery = graphql`
  query blogListQuery($limit: Int!, $offset: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $offset
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM Do, YYYY")
          title
          category
          desc
        }
        fields {
          slug
        }
      }
    }
  }
`
