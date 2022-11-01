import React from 'react'
import { graphql } from 'gatsby'
import BlogLayout from '../components/blog/BlogLayout'
import BlogPosts from '../components/blog/BlogPosts'
import Seo from '../components/seo/seo'
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter'

export default function Category({ data }) {
  const {
    allMarkdownRemark: { nodes: posts },
  } = data
  return (
    <BlogLayout>
      {posts.map((post) => {
        const {
          fields: { slug },
          frontmatter: { date, title, category, desc },
        } = post
        return (
          <>
            <Seo title={`${capitalizeFirstLetter(category)} page`} />
            <BlogPosts
              key={slug}
              slug={slug}
              date={date}
              title={title}
              category={category}
              desc={desc}
            />
          </>
        )
      })}
    </BlogLayout>
  )
}

export const pageQuery = graphql`
  query categoryQuery($category: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
