import React from 'react';
import { BsFillBadgeCcFill } from 'react-icons/bs';
import { FaMicrophone, FaPlay } from 'react-icons/fa';

const AnimeCart = ({ e }) => {

    return (
        <section>
            {e && (
                <div className="relative overflow-hidden w-[220px] rounded-lg cursor-pointer group">
                    {/* Image Section with gradient overlay */}
                    <div className="relative w-[220px] h-[280px]">
                        <img
                            src={e.poster}
                            alt={e.name}
                            className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:blur-sm"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#111827] via-[#263786]/10 to-[#111827] opacity-70 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
                        {/* Play Icon */}
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                            <FaPlay className="text-white text-3xl" />
                        </div>
                        {/* Episode Details */}
                        <div className="absolute bottom-0 left-3">
                            <div className="flex gap-4">
                                {e?.episodes?.sub && (
                                    <p className="flex justify-center items-center gap-1 bg-green-300 text-black text-sm px-1 rounded-sm">
                                        <BsFillBadgeCcFill />
                                        {e?.episodes?.sub}
                                    </p>
                                )}
                                {e?.episodes?.dub && (
                                    <p className="flex justify-center items-center gap-1 bg-blue-300 text-black text-sm px-1 rounded-sm">
                                        <FaMicrophone />
                                        {e?.episodes?.dub}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="p-4">
                        <h2 className="text-sm font-semibold text-white truncate">
                            {e.name || "Episode Name"}
                        </h2>
                        <p className="text-sm text-gray-400 mt-2">
                            {e.type} {e.duration && <span>- {e.duration}</span>}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AnimeCart;
