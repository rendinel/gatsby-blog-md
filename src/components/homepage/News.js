import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function News() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        limit: 3
        sort: { fields: frontmatter___date, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              category
              date(formatString: "MMMM Do, YYYY")
              title
              desc
              cover {
                childImageSharp {
                  gatsbyImageData(width: 720, placeholder: BLURRED)
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const {
    allMarkdownRemark: { edges },
  } = data

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          Blog
        </h1>
        <div className='flex flex-wrap -m-4'>
          {edges.map((post) => {
            const {
              node: {
                frontmatter: { category, date, title, desc, cover },
                fields: { slug },
              },
            } = post
            const coverImg = getImage(cover)
            return (
              <div key={slug} className='p-4 md:w-1/3'>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                  <GatsbyImage
                    imgClassName='lg:h-48 md:h-36 w-full object-cover object-center'
                    image={coverImg}
                    alt='blog cover image'
                  />
                  <div className='p-6'>
                    <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                      <Link to={`/blog/${category}`}>
                        {category.toUpperCase()}
                      </Link>
                    </h2>
                    <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                      {title}
                    </h1>
                    <p className='leading-relaxed mb-3'>{desc}</p>
                    <div className='flex items-center flex-wrap '>
                      <Link
                        to={`/blog${slug}`}
                        className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'
                      >
                        Learn More
                        <AiOutlineArrowRight className='w-4 h-4 ml-2' />
                      </Link>
                      <span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1'>
                        {date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
