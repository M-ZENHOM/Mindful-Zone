"use client"
import React from 'react';
import { FC } from 'react'

interface SpeedDialProps {

}

const SpeedDial: FC<SpeedDialProps> = ({ }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="fixed bottom-4 right-4 z-10">
            <button
                className="bg-blue-500 text-white rounded-full p-4 shadow"
                onClick={toggleOpen}
            >
                +
            </button>

            {isOpen && (
                <div className="flex flex-col space-y-2 mt-2">
                    <button className="bg-blue-500 text-white rounded-full p-2">
                        Action 1
                    </button>
                    <button className="bg-blue-500 text-white rounded-full p-2">
                        Action 2
                    </button>
                    <button className="bg-blue-500 text-white rounded-full p-2">
                        Action 3
                    </button>
                </div>
            )}
        </div>
    )
}

export default SpeedDial