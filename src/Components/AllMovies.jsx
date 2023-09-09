import React from 'react'

function AllMovies() {
    return (
        <div>
            <nav className='w-full py-6 bg-[#121829] border-[#121829] border-b-2 px-14 lg:px-32 flex justify-between items-center'>
                <div>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.25621 15.7628L26.7802 4.768C30.097 2.6872 34.4002 5.0796 34.4002 9.0052V30.9948C34.4002 34.92 30.097 37.3128 26.7802 35.232L9.25621 24.2372C6.1366 22.2796 6.1366 17.7204 9.25621 15.7628Z" fill="#4BB7FD" />
                        <path d="M30.7441 15.7628L13.2201 4.768C9.9033 2.6872 5.6001 5.0796 5.6001 9.0052V30.9948C5.6001 34.92 9.9033 37.3128 13.2201 35.232L30.7441 24.2372C33.8637 22.2796 33.8637 17.7204 30.7441 15.7628Z" fill="#7B6EF6" />
                    </svg>
                </div>
                <div>
                    <ul className='justify-center gap-10 text-white lg:flex hidden'>
                        <li>Movies</li>
                        <li>Tv Shows</li>
                        <li className='flex gap-2 items-center'>Suggest me <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.61987 3.95331L13.6665 7.99997L9.61987 12.0466" stroke="#A8AEBF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.33325 8H13.5533" stroke="#A8AEBF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* Hero section */}
            <div className='px-14 py-24 lg:px-32 w-full'>
                <div className='w-[523px] break-words h-[188px] flex flex-col gap-5'>
                    <h1 className='text-white text-6xl'>
                        MaileHereko
                    </h1>
                    <p className='text-[#8E95A9] text-md break-words'>
                        List of movies and TV Shows, I, <span className='text-[#9C92F8]'>Pramod Poudel</span> have watched till date. Explore what I have watched and also feel free to make a suggestion.😉
                    </p>

                    <input type="text" className='px-14 py-24' />

                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default AllMovies