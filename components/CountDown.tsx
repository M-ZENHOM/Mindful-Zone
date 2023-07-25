"use client"
import React, { type FC } from 'react'
import { Button } from './ui/button';
import { formatTime } from '@/lib/utils';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { useCountDown } from '@/hooks/useCountDown';
import type { CounterType } from '@/types';

interface IProps {
    counter: CounterType
    Active: {
        setTimerActive: () => void
    }
}

const CountDown: FC<IProps> = ({ counter, Active }) => {
    const timeRef = React.useRef<HTMLInputElement>(null)
    const time = useCountDown()

    const handleStart = () => {
        const inputValue = timeRef?.current?.value ?? "";
        if (/^\d*$/.test(inputValue) && Number(inputValue) > 0 && inputValue !== '') {
            counter?.setTime(Number(inputValue) * 60);
            counter?.startTimer();
        }
    };
    const handleDelete = () => {
        Active?.setTimerActive()
        counter?.resetTimer();
    }

    return (
        <Card className="w-full max-w-sm h-full max-h-[300px] p-10 space-y-5 text-center rounded-xl relative">
            <button className='absolute top-3 right-5 text-xl' onClick={handleDelete} >x</button>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">{`${formatTime(time)}`}</h1>
            {time === 0 && <Input ref={timeRef} maxLength={4} type="text" onKeyUp={(e) => e.key === "Enter" && handleStart()} placeholder="Set ur timer in mins" />}
            <div className='space-x-5'>
                <Button disabled={time !== 0} onClick={handleStart}>Start</Button>
                {time !== 0 && <Button onClick={counter?.pauseTimer}>{counter?.isRunning ? "Pause" : "Resume"}</Button>}
                <Button disabled={time === 0} onClick={counter?.resetTimer}>Reset</Button>
            </div>
        </Card>
    )
}

export default React.memo(CountDown)


