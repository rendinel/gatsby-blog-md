import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter'
import Seo from '../components/seo/seo'

export default function SinglePost({ data }) {
  const {
    allMarkdownRemark: { nodes },
  } = data
  const coverImg = getImage(nodes[0].frontmatter.cover)
  return (
    <section className='text-gray-600 body-font bg-red-500'>
      <Seo title={`${nodes[0].frontmatter.title}`} />
      <div className='container px-5 py-16 mx-auto flex flex-col'>
        <div className='lg:w-4/6 mx-auto'>
          <GatsbyImage
            as='div'
            className='rounded-lg h-64 overflow-hidden'
            imgClassName='object-cover object-center h-full w-full'
            layout='fullWidth'
            image={coverImg}
            alt={`${nodes[0].frontmatter.title} cover image`}
          />
          <div className='font-sans'>
            <h1 className='text-gray-900 title-font font-bold font-sans break-normal pt-6 pb-2 text-3xl md:text-4xl'>
              {nodes[0].frontmatter.title}
            </h1>
            <p className='text-sm md:text-base font-semibold text-gray-600'>
              {nodes[0].frontmatter.date}
            </p>
            <h3 className='title-font text-gray-700  text-sm md:text-base font-semibold pt-2 pb-2'>
              <Link to={`/blog/${nodes[0].frontmatter.category}`}>
                {capitalizeFirstLetter(nodes[0].frontmatter.category)}
              </Link>
            </h3>
          </div>
          <div className='mt-10'>
            <div
              className='prose max-w-5xl'
              dangerouslySetInnerHTML={{ __html: nodes[0].html }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export const pageQuery = graphql`
  query singlePostQuery($slug: String!) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          category
          date(formatString: "MMMM Do, YYYY")
          desc
          title
          cover {
            childImageSharp {
              gatsbyImageData(width: 1200, placeholder: BLURRED)
            }
          }
        }
        html
      }
    }
  }
`
