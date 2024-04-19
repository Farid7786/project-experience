import React from 'react'

function Search() {
  return (
    <div className='flex flex-col md:flex-row'>
        <div className='p-7 border-b-2 md:border-r-2 bg-yellow-400 border-gray-500 md:min-h-screen'>
            <form className='flex flex-col gap-8 '>
                <div className='flex items-center gap-2 flex-wrap'>
                    <label className='whitespace-nowrap font-semibold'>Your Search : </label>
                    <input type="text" id='searchTerm' placeholder='Search....' className='w-full rounded-lg p-3 border bg-gray-200' />
                </div>
                <div className='flex gap-2 flex-wrap'>
                    <label className='whitespace-nowrap font-semibold'>Type : </label>
                    <div className='flex gap-2 items-center'>
                        <input type="checkbox" id='all' className='w-5 bg-gray-200'/>
                        <span className='whitespace-nowrap'>Rent and Sale</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input type="checkbox" id='rent' className='w-5 bg-gray-200'/>
                        <span>Rent</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input type="checkbox" id='sale' className='w-5 bg-gray-200'/>
                        <span>Sale</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input type="checkbox" id='offer' className='w-5 bg-gray-200'/>
                        <span>Offer</span>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <label className='font-semibold'>Amenities : </label>
                    <div className='flex gap-2 items-center'>
                        <input type="checkbox" id='parking' className='w-5 bg-gray-200'/>
                        <span>Parking</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <input type="checkbox" id='furnished' className='w-5 bg-gray-200'/>
                        <span>Furnished</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <label className='font-semibold'> sort :</label>
                    <select id="sort_order" className='border rounded-lg p-3'>
                        <option>Highest First</option>
                        <option>Lowest First</option>
                        <option>Latest</option>
                        <option>Oldest</option>
                    </select>
                </div>
                <button className='text-white bg-slate-800 uppercase rounded-lg hover:opacity-95 p-3'>Search</button>
            </form>
        </div>
        <div className='bg-white w-[340px] sm:w-[1100px] max-h-screen'>
            <h1 className='text-3xl font-semibold mt-5'>Results :</h1>
        </div>
    </div>
  )
}

export default Search
