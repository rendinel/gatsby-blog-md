import React from 'react'
import { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import axios from 'axios'
import SearchField from './SearchField'
import SearchResult from './SearchResult'

const query = graphql`
  {
    localSearchBlogs {
      publicIndexURL
      publicStoreURL
    }
  }
`
export default function SearchSidebar({ toggleModal, setToggleModal }) {
  const data = useStaticQuery(query)
  const { publicIndexURL, publicStoreURL } = data.localSearchBlogs
  const [blogsIndexStore, setBlogsIndexStore] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const fetchOnFocus = async () => {
    if (blogsIndexStore) return
    const [{ data: blogsIndex }, { data: blogsStore }] = await Promise.all([
      axios.get(`${publicIndexURL}`),
      axios.get(`${publicStoreURL}`),
    ])
    setBlogsIndexStore({
      index: blogsIndex,
      store: blogsStore,
    })
  }
  return (
    <>
      <aside
        className={`${
          toggleModal
            ? 'hidden'
            : 'overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 w-90 h-screen bg-gray-200 ease-in-out ease duration-500 px-4'
        }`}
      >
        <div>
          <SearchField
            value={searchQuery}
            setValue={setSearchQuery}
            onFocus={fetchOnFocus}
          />
          {searchQuery && blogsIndexStore ? (
            <SearchResult
              toggleModal={toggleModal}
              setToggleModal={setToggleModal}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              blogsIndexStore={blogsIndexStore}
            />
          ) : null}
        </div>
        <button
          onClick={() => setToggleModal(!toggleModal)}
          className='mt-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
        >
          Button
        </button>
      </aside>
    </>
  )
}
