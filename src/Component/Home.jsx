import React, { useState, useEffect } from 'react'
import Hero from './Hero'

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
        <div>
            <Hero data={data?.spotlightAnimes} />


        </div>
    )
}

export default Home
