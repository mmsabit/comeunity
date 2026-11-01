import React from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri';

const DeleteEvent = () => {
    return (
        <>
            <button className="btn bg-[#e7000b] text-white hover:bg-[#fb2c36]  w-1/2">
                    <RiDeleteBin2Fill /> Delete Event
                  </button>
        </>
    );
};

export default DeleteEvent;