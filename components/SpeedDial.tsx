"use client"
import React from 'react';
import { FC } from 'react'
import { Icons } from './Icons';
import { Button } from './ui/button';
import { ActiveType } from '@/types';


interface IProps {
    Active: ActiveType
}

const SpeedDial: FC<IProps> = ({ Active }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleClick = (fnc: void) => {
        fnc
        setIsOpen(false)
    }
    return (
        <div className="flex flex-col-reverse fixed bottom-6 right-6 z-50">
            <Button variant='default' className={` w-14 h-14  rounded-full flex items-center justify-center z-10 transition-all duration-500 ${isOpen ? 'rotate-45' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <Icons.plus />
            </Button>

            <div className={`flex flex-col items-start gap-4 mb-5 transition-all duration-500 ${isOpen ? ' opacity-100 translate-y-0' : ' opacity-0 hidden translate-y-[50px]'}`}>
                <Button disabled={Active?.todo} onClick={() => handleClick(Active?.setTodoActive())} variant='default' className={` w-14 h-14  rounded-full flex items-center justify-center transition-opacity duration-300 z-10`} >
                    <Icons.todo />
                </Button>
                <Button disabled={Active?.note} onClick={() => handleClick(Active?.setNoteActive())} variant='default' className={` w-14 h-14  rounded-full flex items-center justify-center transition-opacity duration-300 z-10`} >
                    <Icons.note />
                </Button>
                <Button disabled={Active?.timer} onClick={() => handleClick(Active?.setTimerActive())} variant='default' className={` w-14 h-14  rounded-full flex items-center justify-center transition-opacity duration-300 z-10`} >
                    <Icons.timer />
                </Button>
            </div>
        </div>


    )
}

export default React.memo(SpeedDial)