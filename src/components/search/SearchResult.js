import React from 'react'
import { Link } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'

export default function SearchResult({
  searchQuery,
  blogsIndexStore,
  toggleModal,
  setToggleModal,
  setSearchQuery,
}) {
  const blogsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(blogsIndexStore.index),
    blogsIndexStore.store
  )
  const reset = () => {
    setToggleModal(!toggleModal)
    setSearchQuery('')
  }

  if (blogsResult.length === 0)
    return (
      <div className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 mt-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out flex flex-row content-center justify-between'>
        <div className='font-medium text-gray-900 title-font mb-2'>
          No Result Found.
        </div>
      </div>
    )
  return (
    <>
      {blogsResult.map((result) => {
        const { id, category, title, slug } = result
        return (
          <>
            <div
              key={id}
              className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 mt-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out '
            >
              <div className='font-medium text-gray-900 title-font  truncated'>
                <Link onClick={reset} to={`/blog${slug}`}>
                  {title}
                </Link>
              </div>
              <div className='font-semibold title-font text-gray-700'>
                <Link onClick={reset} to={`/blog/${category}`}>
                  {capitalizeFirstLetter(category)}
                </Link>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}
