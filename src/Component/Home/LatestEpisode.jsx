

import React from 'react';

import AnimeCart from '../Cart/AnimeCart';

const LatestEpisode = ({ data }) => {
    return (
        <section className=" py-12 bg-[#151a30] text-white flex flex-col justify-center items-center">
            <div className="text-start  mb-8 w-full">
                <h1 className="text-4xl font-bold mb-2">Latest Episode</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {data &&
                    data.map((e) => (
                        <AnimeCart key={e.id} e={e} />


                    ))}
            </div>
        </section>
    );
};

export default LatestEpisode;
