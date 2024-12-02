import React, { useState } from 'react';
import Minicart from '../Cart/Minicart';

function AnimeList({ data }) {
    const [selectedCategory, setSelectedCategory] = useState('today');




    return (
        <div>
            {/* Category Buttons */}
            <div className="flex space-x-4 mb-4">
                <button onClick={() => setSelectedCategory('today')} className="btn">
                    Today
                </button>
                <button onClick={() => setSelectedCategory('week')} className="btn">
                    Week
                </button>
                <button onClick={() => setSelectedCategory('month')} className="btn">
                    Month
                </button>
            </div>

            {/* Display Selected Data */}
            {/* <h2 className="text-xl mb-4">Top 10 Anime - {selectedCategory}</h2> */}
            <div className="">
                {data[selectedCategory].map((anime, index) => (

                    <Minicart key={index} data={anime} />
                )
                )}
            </div>
        </div>
    );
};

const Topten = ({ data }) => {
    return (
        <div>
            <div className="py-10">
                <h1 className="text-2xl text-pink-300 font-semibold">Top 10</h1>
            </div>
            <AnimeList data={data} />
        </div>
    );
};

export default Topten;
