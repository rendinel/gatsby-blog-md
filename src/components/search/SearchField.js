import React from 'react'

export default function SearchField({ onFocus, value, setValue }) {
  return (
    <>
      <label htmlFor='search' className='leading-7 text-sm text-gray-600'>
        Search
      </label>
      <input
        name='search'
        type='text'
        placeholder='Search'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={onFocus}
        className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
      />
    </>
  )
}
