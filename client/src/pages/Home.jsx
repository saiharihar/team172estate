import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();

    // Enable scroll on unmount or page change
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  useEffect(() => {
    // Re-enable scroll on unmount or page change
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div>
      {/* top */}
      <div
        className='flex flex-col gap-6 p-28 max-w-6xl mx-auto container-fluid relative'
        style={{
          backgroundSize: 'cover', // Adjusted backgroundSize
          width: '100vw',
          height: '100vh',
          position: 'relative',
        }}
      >
        {/* Semi-transparent overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}
        ></div>

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            color: 'white', // Text color on the dark background
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1 className='text-white font-bold text-5xl lg:text-7xl'>
            Find your next <span className='text-gray-300'>perfect</span>
            <br />
            place with ease
          </h1>
          <div className='text-white text-xl sm:text-2xl'>
            172 Estate is the best place to find your next perfect place to
            live.
            <br />
            We have a wide range of properties for you to choose from.
          </div>
          <Link
            to={'/search'}
            className='text-xl sm:text-2xl text-blue-400 font-bold hover:underline mt-4' // Changed text color
          >
            Let's get started...
          </Link>
        </div>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale, and rent */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {/* ... (rest of the code) */}
      </div>
    </div>
  );
}
