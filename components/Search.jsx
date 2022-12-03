import { useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export default function Search({ searchPhrase, setSearchPhrase }) {

  const searchHandler = (e) => {
    const searchValueLowercase = e.target.value.toLowerCase()
    setSearchPhrase(searchValueLowercase)
  }

  return (
    <div className="max-w-md mx-auto">
      <label htmlFor="search" className="sr-only">Search</label>
      <div className="relative rounded shadow">

        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
        </div>

        <input 
          type="search" 
          name="search" 
          id="search" 
          aria-label='search'
          placeholder="Søk etter eide spill"
          onChange={searchHandler} 
          className="block w-full rounded border-gray-300 pl-10 pr-4 py-2 focus:border-gray-500 focus:ring-gray-500" 
        />

      </div>
    </div>
  );
}