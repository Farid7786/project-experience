import React from 'react'

function CreateListing() {
  console.log('rendering')
  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>create a Listing</h1>
      <form className='flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-4 flex-1'>
          <input className='border p-3 rounded-lg' type="text" placeholder='Name' maxLength='22'minLength='8' required id="name" />
          <input className='border p-3 rounded-lg' type="text" placeholder='Description' required id="description" />
          <input className='border p-3 rounded-lg' type="text" placeholder='Address' required id="address" />
      <div className=' flex gap-7 flex-wrap mt-4'>
          <div className='flex gap-2'>
            <input type="checkbox" id='sell' className='w-7' />
            <span className='font-semibold text-red-600' >Sell</span>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" id='sell' className='w-7' />
            <span className='font-semibold text-red-600'>Rent</span>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" id='sell' className='w-7' />
            <span className='font-semibold text-red-600'>Parking Spot</span>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" id='sell' className='w-7' />
            <span className='font-semibold text-red-600'>Furnished</span>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" id='sell' className='w-7' />
            <span className='font-semibold text-red-600'>Offer</span>
          </div>
        </div>
        <div className=' flex flex-wrap gap-6'>
            <div className= 'flex items-center gap-2'>
              <input type="number" id="bedrooms" min='1' max='10' required className='p-3 mt-4 border rounded-lg border-gray-300' />
              <span className='text-red-600 font-semibold'>Bedrooms</span>
            </div>
            <div className= 'flex items-center gap-2'>
              <input type="number" id="baths" min='1' max='10' required className='p-3  mt-4 border rounded-lg border-gray-300' />
              <span className='text-red-600 font-semibold'>Bathrooms</span>
            </div>
            <div className= 'flex items-center gap-2'>
              <input type="number" id="regularPrice" min='1' max='10' required className='p-3 mt-4 border rounded-lg border-gray-300' />
              <div className='flex flex-col items-center text-red-600 font-semibold'>
              <span>Regular Price</span>
              <span>(rs /month)</span>
              </div>
            </div>
            <div className= 'flex items-center gap-2'>
              <input type="number" id="discounted Price" min='1' max='10' required className='p-3  mt-4 border rounded-lg border-gray-300' />
              <div className='flex flex-col items-center text-red-600 font-semibold'>
              <span>Disconted Price</span>
              <span>(rs /month)</span>
              </div>
            </div>
          </div>
          </div>
          <div className='font-semibold flex flex-col flex-1 gap-4'>
            <p className='text-red-600'>Images :
            <span className='font-normal ml-2 text-red-500'>The first image will be the cover (max 6)</span>
            </p>
          <div className='flex gap-4 p-5 '>
            <input className=' border rounded w-full border-slate-500 p-5' type="file" id='images' accept='image/*' multiple />
            <button className='border p-3 border-blue-700 text-blue-700 rounded uppercase hover: shadow-lg disabled : opacity-80'>Upload</button>
          </div>
          <button className='border-none uppercase font-normal disabled:opacity-70 rounded-lg hover:opacity-95 p-3 text-white' style={{backgroundColor:'#302825'}}>Create Listing</button>
          </div>
      </form>
    </main>
  )
}

export default CreateListing
