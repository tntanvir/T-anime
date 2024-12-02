import React from 'react';
import Minicart from '../Cart/Minicart';
import { FaAngleRight } from 'react-icons/fa';

const AllMinicart = ({ data }) => {
    return (
        <div className=' min-h-screen flex justify-center items-center'>
            <div className='grid grid-cols-4  w-full  h-full p-3 gap-4'>

                <div >
                    <div className='py-5 font-semibold text-xl text-pink-300'>
                        <h1>Top Airing</h1>
                    </div>
                    <div className='flex flex-col gap-2 '>
                        {
                            data && (data?.topAiringAnimes)?.slice(0, 5).map((e, i) => (
                                <Minicart key={i} data={e} />
                            ))
                        }
                    </div>
                    <div className='py-5'>
                        <h1 className='flex gap-3 items-center hover:gap-4 duration-300 cursor-pointer'>View more <FaAngleRight /></h1>
                    </div>
                </div>
                <div>
                    <div className='py-5 font-semibold text-xl text-pink-300'>
                        <h1>Most Popular</h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        {
                            data && (data?.mostPopularAnimes)?.slice(0, 5).map((e, i) => (
                                <Minicart key={i} data={e} />
                            ))
                        }
                    </div>
                    <div className='py-5'>
                        <h1 className='flex gap-3 items-center hover:gap-4 duration-300 cursor-pointer'>View more <FaAngleRight /></h1>
                    </div>
                </div>
                <div>
                    <div className='py-5 font-semibold text-xl text-pink-300'>
                        <h1>Most Favorite</h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        {
                            data && (data?.mostFavoriteAnimes)?.slice(0, 5).map((e, i) => (
                                <Minicart key={i} data={e} />
                            ))
                        }
                    </div>
                    <div className='py-5'>
                        <h1 className='flex gap-3 items-center hover:gap-4 duration-300 cursor-pointer'>View more <FaAngleRight /></h1>
                    </div>
                </div>
                <div>
                    <div className='py-5 font-semibold text-xl text-pink-300'>
                        <h1>Latest Completed</h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        {
                            data && (data?.latestCompletedAnimes)?.slice(0, 5).map((e, i) => (
                                <Minicart key={i} data={e} />
                            ))
                        }
                    </div>
                    <div className='py-5 '>
                        <h1 className='flex gap-3 items-center hover:gap-4 duration-300 cursor-pointer'>View more <FaAngleRight /></h1>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default AllMinicart;