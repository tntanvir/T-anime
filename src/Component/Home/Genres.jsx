// import { Button } from '@material-tailwind/react';
// import { Tooltip } from '@material-tailwind/react';
// import React from 'react';

// const Genres = ({ data }) => {
//     const textslice = (text) => {
//         if (text.length > 7) {
//             return text.slice(0, 7) + '...';
//         }
//         return text;
//     };
//     return (
//         <div className=''>
//             <div className='py-3'>
//                 <h1 className='text-2xl text-pink-300 font-semibold'>Genres</h1>

//             </div>
//             <div className='bg-[#111827]'>
//                 <div className='grid grid-cols-3 gap-1 p-1 '>

//                     {
//                         data &&
//                         data.map((genre) => (
//                             <div key={genre} className=' hover:bg-[#ffffff10] h-10 flex justify-center items-center overflow-hidden cursor-pointer rounded-sm'>
//                                 <Tooltip content={genre}>

//                                     <h2>{textslice(genre)}</h2>
//                                 </Tooltip>
//                             </div>
//                         ))
//                     }
//                 </div>
//                 <div className='w-full px-4'>
//                     <Button className='w-full text-white bg-[#182142]' variant="outlined" >See more</Button>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Genres;




import { Button } from '@material-tailwind/react';
import { Tooltip } from '@material-tailwind/react';
import React, { useState } from 'react';

const Genres = ({ data }) => {
    const [showAll, setShowAll] = useState(false); // State to toggle between showing 24 and all genres

    const textslice = (text) => {
        if (text.length > 7) {
            return text.slice(0, 7) + '...';
        }
        return text;
    };

    // Determine how many genres to display based on `showAll`
    const displayedGenres = showAll ? data : data.slice(0, 24);

    return (
        <div className="">
            <div className="py-3">
                <h1 className="text-2xl text-pink-300 font-semibold">Genres</h1>
            </div>
            <div className="bg-[#111827]">
                <div className="grid grid-cols-3 gap-1 p-1">
                    {displayedGenres &&
                        displayedGenres.map((genre, index) => (
                            <div
                                key={index}
                                className="hover:bg-[#ffffff10] h-10 flex justify-center items-center overflow-hidden cursor-pointer rounded-sm"
                            >
                                <Tooltip content={genre}>
                                    {genre && <h2>{textslice(genre)}</h2>}
                                </Tooltip>
                            </div>
                        ))}
                </div>
                <div className="w-full px-4 py-2">
                    <Button
                        className="w-full text-white bg-[#182142] border-none"

                        onClick={() => setShowAll(!showAll)} // Toggle the `showAll` state
                    >
                        {showAll ? "See less" : "See more"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Genres;
