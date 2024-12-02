import React from 'react';
import { BsFillBadgeCcFill } from 'react-icons/bs';
import { FaMicrophone } from 'react-icons/fa';

const Minicart = ({ data }) => {
    const textslice = (text) => {
        if (text.length > 20) {
            return text.slice(0, 40) + '...';
        }
        return text;
    };

    return (
        <div>
            {data && (
                <div className="border-b pb-4  border-gray-800/50 flex gap-3">
                    <div className="rounded-md overflow-hidden w-[80px] h-[108px]">
                        <img
                            src={data?.poster}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full flex justify-center flex-col gap-2">
                        <h1 className="text-wrap text-sm font-semibold">{textslice(data.name)}</h1>
                        <div className="flex gap-3">
                            {data?.episodes?.sub && (
                                <p className="flex justify-center items-center gap-1 bg-green-300 text-black text-sm px-1 rounded-sm">
                                    <BsFillBadgeCcFill />
                                    {data?.episodes?.sub}
                                </p>
                            )}
                            {data?.episodes?.dub && (
                                <p className="flex justify-center items-center gap-1 bg-blue-300 text-black text-sm px-1 rounded-sm">
                                    <FaMicrophone />
                                    {data?.episodes?.dub}
                                </p>
                            )}
                            <p>{data?.type}</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Minicart;
