import React, { useState, useEffect } from 'react'
import Hero from './Hero'
import Trending from './Home/Trending';
import LatestEpisode from './Home/LatestEpisode';
import LatestCompleted from './Home/LatestCompleted';
import AllMinicart from './Home/AllMinicart';
import Genres from './Home/Genres';
import Topten from './Home/Topten';

const Home = () => {
    const [data, setData] = useState(null);



    useEffect(() => {
        fetch(`${import.meta.env.VITE_TAPI}/api/v2/hianime/home`)
            .then((response) => response.json())
            .then((data) => {
                setData(data?.data);
                // console.log(data?.data);
            })
            .catch((error) => console.error(error));

    }, [])



    return (
        <div className='bg-[#111827] text-white'>
            {data &&
                <>
                    <Hero data={data?.spotlightAnimes} />
                    <Trending data={data?.trendingAnimes} />
                    {data && <AllMinicart data={data} />}
                    <div className=' flex '>
                        <div className='  w-[75%] '>

                            <LatestEpisode data={data?.latestEpisodeAnimes} />
                            <LatestCompleted data={data?.latestCompletedAnimes} />
                        </div>
                        <div className=' bg-[#151a30] w-[25%] py-3'>
                            <Genres data={data?.genres} />
                            <Topten data={data?.top10Animes} />
                        </div>
                    </div>

                </>

            }


        </div>
    )
}

export default Home
