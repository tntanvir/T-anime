

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = ({ data }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,

        autoplaySpeed: 5000,
    };

    return (
        <div className=" overflow-hidden  bg-[#111827]">
            <div className="w-screen relative">
                <Slider {...settings}>
                    {data &&
                        data.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row items-center md:items-start  text-white h-[500px] md:gap-8 gap-4 "
                            >
                                <div className="bg-green-500 relative">

                                    {/* Text Section */}
                                    <div className=" w-full space-y-6 absolute  text-white h-full p-10"

                                        // style={{
                                        //     background: "radial-gradient(circle, rgba(12,9,121,0) 0%, rgba(18,17,39,0.936186974789916) 72%)",
                                        // }}
                                        style={{
                                            background: "linear-gradient(115deg, rgba(17,24,39,1) 28%, rgba(38,55,134,0.0846463585434174) 60%, rgba(17,24,39,1) 100%)",
                                        }}
                                    >
                                        <div className="0 w-1/2 h-full flex  flex-col justify-start gap-6 ">
                                            <h2 className="text-pink-400 text-sm font-medium">{`#${index + 1} Spotlight`}</h2>
                                            <h1 className="text-4xl font-bold">{item.name}</h1>
                                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                                                <span className="flex items-center gap-1">🖥 {item.type}</span>
                                                <span className="flex items-center gap-1">⏱ {item.otherInfo[1]}</span>
                                                <span className="flex items-center gap-1">📅 {item.otherInfo[2]}</span>
                                                <span className="bg-pink-600 text-white px-2 py-1 rounded-md">{item.otherInfo[3]}</span>
                                            </div>
                                            {/* <p className="text-gray-300 leading-relaxed">{item.description}</p> */}
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit suscipit atque ab maxime, iusto qui! Aut dolorum nostrum sunt inventore.</p>
                                            <div className="flex items-center space-x-4">
                                                <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg shadow-lg transition-all duration-300">
                                                    🎥 Watch Now
                                                </button>
                                                <button className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg shadow-lg transition-all duration-300">
                                                    Detail →
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <div className="w-full">
                                        <img
                                            src={item?.poster}
                                            alt={item.name}
                                            className="rounded-lg shadow-lg w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>

                            </div>
                        ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;


// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Hero = ({ data }) => {
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//     };

//     return (
//         <div className="min-h-screen overflow-hidden bg-black">
//             <div className="w-screen relative">
//                 <Slider {...settings}>
//                     {data &&
//                         data.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="relative flex flex-col md:flex-row items-center md:items-start bg-black text-white h-[500px] md:gap-8 gap-4"
//                             >
//                                 {/* Background Gradient */}
//                                 <div
//                                     className="absolute inset-0 bg-gradient-to-r from-red-900 via-gray-900 to-transparent z-10"
//                                     style={{
//                                         backgroundImage: `url(${item.poster})`,
//                                         backgroundSize: "cover",
//                                         backgroundPosition: "center",
//                                         opacity: 0.5,
//                                     }}
//                                 />

//                                 {/* Content Section */}
//                                 <div className="relative z-20 flex flex-col md:flex-row items-center md:items-start w-full h-full">
//                                     {/* Text Section */}
//                                     <div className="md:w-1/2 w-full space-y-6 p-10">
//                                         <h2 className="text-pink-400 text-sm font-medium">{`#${index + 1} Spotlight`}</h2>
//                                         <h1 className="text-4xl font-bold">{item.name}</h1>
//                                         <div className="flex items-center space-x-4 text-sm text-gray-400">
//                                             <span className="flex items-center gap-1">🖥 {item.type}</span>
//                                             <span className="flex items-center gap-1">⏱ {item.otherInfo[1]}</span>
//                                             <span className="flex items-center gap-1">📅 {item.otherInfo[2]}</span>
//                                             <span className="bg-pink-600 text-white px-2 py-1 rounded-md">{item.otherInfo[3]}</span>
//                                         </div>
//                                         <div className="flex items-center space-x-4">
//                                             <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg shadow-lg transition-all duration-300">
//                                                 🎥 Watch Now
//                                             </button>
//                                             <button className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg shadow-lg transition-all duration-300">
//                                                 Detail →
//                                             </button>
//                                         </div>
//                                     </div>

//                                     {/* Image Section */}
//                                     {/* <div className="md:w-1/2 w-full">
//                                         <img
//                                             src={item.poster}
//                                             alt={item.name}
//                                             className="rounded-lg shadow-lg w-full h-auto object-cover"
//                                         />
//                                     </div> */}
//                                 </div>
//                             </div>
//                         ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default Hero;
