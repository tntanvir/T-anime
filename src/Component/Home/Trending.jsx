




// import React from 'react';

// import { FaChevronRight, FaChevronLeft, FaGithub, FaEye } from "react-icons/fa";
// // ..................
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { useRef } from 'react';
// import { Button } from '@material-tailwind/react';
// const Trending = ({ data }) => {
//     // const project = [
//     //     {
//     //         "id": 1,
//     //         "img": 'redDrop',
//     //         "live": "https://red-drop-4d803.web.app/",
//     //         "git": "https://github.com/tntanvir/RedDrop",
//     //         "dis": "Help & save Life By Donating Blood",
//     //     },
//     //     {
//     //         "id": 2,
//     //         "img": 'tawheed',
//     //         "live": "https://taw-heed.netlify.app/",
//     //         "git": "https://github.com/tntanvir/Tawheed",
//     //         "dis": "Digital home for all things Muslim",
//     //     },
//     //     {
//     //         "id": 3,
//     //         "img": 'flowershop',
//     //         "live": "https://flower-shops.vercel.app/",
//     //         "git": "https://github.com/tntanvir/flower-shop",
//     //         "dis": "Flower Shop UI",
//     //     },
//     //     {
//     //         "id": 4,
//     //         "img": 'proedu',
//     //         "live": "https://proedu.vercel.app/",
//     //         "git": "https://github.com/tntanvir/pro-edu",
//     //         "dis": "Education UI",
//     //     },
//     //     {
//     //         "id": 5,
//     //         "img": 'gituser',
//     //         "live": "https://user-git.netlify.app/",
//     //         "git": "https://github.com/tntanvir/user-git",
//     //         "dis": "Find GitHub User",
//     //     },
//     // ]
//     var settings = {
//         className: "center",
//         centerMode: true,
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         responsive: [
//             {
//                 breakpoint: 990,
//                 settings: {
//                     className: "center",
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: false,
//                     centerMode: false
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     className: "center",
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 2,
//                     centerMode: false
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     className: "center",
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     centerMode: false
//                 }
//             }
//         ]
//     };
//     const arrowRef = useRef(null);
//     return (

//         <section className='min-h-screen py-2 flex flex-col justify-center items-center md:px-2 px-2 project bg-yellow-900'>
//             <div className='text-start flex  gap-7  w-full px-8'>
//                 <div>
//                     <h1 className='md:text-5xl text-3xl '>Trending</h1>
//                 </div>
//             </div>
//             <div className='md:w-11/12 w-full relative'>
//                 <div className='w-full absolute top-[40%]  flex justify-between'>
//                     <button className='text-xl md:text-2xl z-20 bg-gray-800/50 hover:text-dkText text-white rounded-full p-2' onClick={() => arrowRef.current.slickPrev()}><FaChevronLeft /></button>
//                     <button className='text-xl md:text-2xl z-20 bg-gray-800/50 hover:text-dkText text-white rounded-full p-2' onClick={() => arrowRef.current.slickNext()}><FaChevronRight /> </button>
//                 </div>
//                 <Slider ref={arrowRef} {...settings}>

//                     {
//                         data && data.map((e, i) => (
//                             <div key={i} className='md:p-2 bg-red-600 border max-h-96 min-h-96 '>
//                                 <div className='flex justify-center items-center '>
//                                     <img src={e.poster} alt="" srcset="" className='bg-contain' />
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </Slider>

//             </div>

//         </section>

//     );
// };

// export default Trending;








// import React, { useRef } from "react";
// import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Trending = ({ data }) => {
//     const settings = {
//         className: "center",
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         centerMode: true,
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     };

//     const sliderRef = useRef(null);

//     return (
//         <section className="py-12 bg-[#151a30] text-white">
//             <div className="text-center mb-8">
//                 <h1 className="text-4xl font-bold mb-2">Trending</h1>
//             </div>

//             <div className="relative">
//                 {/* Navigation Buttons */}
//                 <div className="absolute inset-y-0 left-2 z-10 flex items-center">
//                     <button
//                         className="text-2xl bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 shadow-md"
//                         onClick={() => sliderRef.current.slickPrev()}
//                     >
//                         <FaChevronLeft />
//                     </button>
//                 </div>
//                 <div className="absolute inset-y-0 right-2 z-10 flex items-center">
//                     <button
//                         className="text-2xl bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 shadow-md"
//                         onClick={() => sliderRef.current.slickNext()}
//                     >
//                         <FaChevronRight />
//                     </button>
//                 </div>

//                 {/* Slider */}
//                 <Slider ref={sliderRef} {...settings}>
//                     {data && data.map((item, index) => (
//                         <div key={index} className="p-4">
//                             <div className="flex  bg-red-900">
//                                 <div className="">
//                                     <p className="text-sm text-white  transform -rotate-90 text-start bg-gray-800 w-full">
//                                         {item?.name}
//                                     </p>
//                                 </div>
//                                 <div className="flex bg-[#1e2438] rounded-lg overflow-hidden shadow-lg h-96 w-64">
//                                     {/* Vertical Text */}
//                                     {/* <div className=" w-fit">
//                                     <div className=" h-full flex flex-col justify-center gap-10 items-center ">
//                                         <p className="text-sm text-white transform -rotate-90 whitespace-nowrap">
//                                             {item?.name}
//                                         </p>
//                                         <div className=" text-2xl font-bold text-blue-500">
//                                             {String(index + 1).padStart(2, "0")}
//                                         </div>
//                                     </div>

//                                 </div> */}
//                                     {/* Poster */}
//                                     <img
//                                         src={item.poster}
//                                         alt={item.title}
//                                         width={100}
//                                         className="h-full w-full object-cover"
//                                     />


//                                 </div>
//                             </div>

//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </section>
//     );
// };

// export default Trending;











import React, { useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trending = ({ data }) => {
    const settings = {
        className: "center",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const sliderRef = useRef(null);

    return (
        <section className="py-12 bg-[#151a30] text-white ">
            <div className="text-start px-10 mb-8">
                <h1 className="text-4xl font-bold mb-2">Trending</h1>
            </div>

            <div className="relative">
                {/* Navigation Buttons */}
                <div className="absolute inset-y-0 left-2 z-10 flex items-center">
                    <button
                        className="text-2xl bg-[#37364680]  text-white hover:text-pink-300 rounded-full p-3 shadow-md"
                        onClick={() => sliderRef.current.slickPrev()}
                    >
                        <FaChevronLeft />
                    </button>
                </div>
                <div className="absolute inset-y-0 right-2 z-10 flex items-center">
                    <button
                        className="text-2xl bg-[#37364680]  text-white hover:text-pink-300 rounded-full p-3 shadow-md"
                        onClick={() => sliderRef.current.slickNext()}
                    >
                        <FaChevronRight />
                    </button>
                </div>

                {/* Slider */}
                <Slider ref={sliderRef} {...settings}>
                    {data &&
                        data.map((item, index) => (
                            <div key={index} className="p-4 ">
                                <div className="flex h-[20rem] w-[16rem]   overflow-hidden shadow-lg">
                                    {/* Left Side Text */}
                                    <div className="flex flex-col items-center justify-center  text-white w-10 relative">
                                        <p className="text-sm transform -rotate-90 whitespace-nowrap ">
                                            {(item?.name).split(" ").slice(0, 2).join(" ")}
                                        </p>
                                        <span className="absolute bottom-0 text-2xl text-pink-400 font-bold">{item.rank}
                                        </span>
                                    </div>

                                    {/* Image */}
                                    <div className="flex-1">
                                        <img
                                            src={item.poster}
                                            alt={item.title}
                                            className="h-full w-full object-cover "
                                        />
                                    </div>
                                </div>

                                {/* Index */}
                                {/* <div className="text-center mt-4 text-2xl font-bold text-blue-500">
                                    {String(index + 1).padStart(2, "0")}
                                </div> */}
                            </div>
                        ))}
                </Slider>
            </div>
        </section>
    );
};

export default Trending;
