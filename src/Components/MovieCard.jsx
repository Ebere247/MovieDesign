import React from 'react'

function MovieCard() {
  return (
    <div className='pt-2 pb-8 px-3 w-full rounded-xl bg-[#20283E80]'>
      <div className="w-full pb-8 h-[400px] rounded-md">
        <img className='w-full rounded-md h-full' src="https://images.unsplash.com/photo-1688777147359-146711ea3a4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80" alt="" />
      </div>
      <h2 className='text-white text-sm'>Black Widow</h2>
    </div>
  )
}

export default MovieCard