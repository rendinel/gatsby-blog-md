import { Link } from 'gatsby'
import React from 'react'

export default function Pagination({ currentPage, numberOfPages }) {
  const prevPage =
    currentPage - 1 === 0 || currentPage - 1 === 1
      ? `/blog`
      : `/blog/${currentPage - 1}`

  const nextPage =
    currentPage === numberOfPages ? `/blog` : `/blog/${currentPage + 1}`
  return (
    <div className='flex justify-center w-full'>
      <Link to={prevPage}>
        <button
          className='mt-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:bg-gray-200 disabled:text-gray-300'
          disabled={currentPage === 1}
        >
          Prev
        </button>
      </Link>
      <Link to={nextPage}>
        <button
          disabled={currentPage === numberOfPages}
          className='mt-4 ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:bg-gray-200 disabled:text-gray-300'
        >
          Next
        </button>
      </Link>
    </div>
  )
}
