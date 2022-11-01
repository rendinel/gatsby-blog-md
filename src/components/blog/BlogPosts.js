import React from 'react'
import { Link } from 'gatsby'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'

export default function BlogPosts({ date, title, category, desc, slug }) {
  return (
    <div className='py-8 flex flex-wrap md:flex-nowrap'>
      <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
        <Link
          to={`/blog/${category}`}
          className='font-semibold title-font text-gray-700'
        >
          {capitalizeFirstLetter(category)}
        </Link>
        <span className='mt-1 text-gray-500 text-sm'>{date}</span>
      </div>
      <div className='md:flex-grow'>
        <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
          {title}
        </h2>
        <p className='leading-relaxed'>{desc}</p>
        <Link
          to={`/blog${slug}`}
          className='text-indigo-500 inline-flex items-center mt-4'
        >
          Learn More
          <AiOutlineArrowRight className='w-4 h-4 ml-2' />
        </Link>
      </div>
    </div>
  )
}
