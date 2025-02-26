import React from 'react'

const SearchStudent = ({search, setSearch}) => {
  return (
    <div className='col-sm-6 mb-4'>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor='search'>Search Student</label>
        
          <input
            type='search'
            className='form-control'
            role = 'searchbox'
            placeholder='Search Student'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <br/>
          <button className='btn btn-outline-secondary' type='submit'>
            Search
          </button>
          
        </form>
      
    </div>
  )
}

export default SearchStudent
