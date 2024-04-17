import { set } from 'mongoose';
import React, { useEffect, useState } from 'react'
import {FaSpinner} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import {Swiper,SwiperSlide} from 'swiper/react';
import SwiperCore from 'Swiper';
import {Navigation} from 'Swiper/modules';
import 'Swiper/css/bundle';
function Listing() {
    const params = useParams()
    SwiperCore.use([Navigation]);
    const [listing,setListing]=useState(null);
    const [loading,setLoading]= useState(false);
    const [error,setError]= useState(false);
    useEffect(()=>{
        const fetchListing = async ()=>{
            try {
                setLoading(true);
                const res= await fetch(`/api/listing/get/${params.listingId}`);
                const data = await res.json();
                if(data.sucess === false){
                    setError(true);
                    setLoading(false);
                    return;
                }
                setListing(data); 
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchListing();
    },[params.listingId]);
  return (
    <main>
      {loading && <FaSpinner className=' text-center text-6xl'/>}
      {error && <p className='text-center my-7 text-2xl text-blue-600'> Error loading the page........ </p>}
      {listing && !loading && !error && (<div>
      <Swiper navigation>
        {listing.imageUrls.map((url)=>( <SwiperSlide key={url}>
            <div className='h-[550px] 'style={{ background:`url(${url}) center no-repeat`, backgroundSize:'cover'}}>
            </div>
        </SwiperSlide>))}
      </Swiper>
      </div>
      )}
    </main>
  )
}

export default Listing
