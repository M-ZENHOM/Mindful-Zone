import React, { FC } from 'react'
import { Button } from './ui/button';
import { formatTime } from '@/lib/utils';
import { useTimerStore } from '@/store';
import { statusType } from '@/types';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { useCountDown } from '@/hooks/useCountDown';

interface TimerProps {
    statuses: statusType
    handleTimerStatusChange: (value: boolean) => void
}

const CountDown: FC<TimerProps> = ({ statuses, handleTimerStatusChange }) => {
    const [inputTime, setInputTime] = React.useState('');
    const { isRunning, startTimer, pauseTimer, resetTimer, setTime } = useTimerStore();
    const time = useCountDown()


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (/^\d*$/.test(value) && value !== '' && Number(value) > 0) {
            setInputTime(value);
        }

    };
    const handleStart = () => {
        const inputValue = Number(inputTime);
        setTime(inputValue * 60);
        startTimer();
        setInputTime('')

    };
    const handleDelete = () => {
        handleTimerStatusChange(false)
        resetTimer();
    }


    return (
        <>
            {statuses.timer && (
                <Card className="w-full max-w-sm p-10 space-y-5 text-center rounded-xl relative">
                    <button className='absolute top-3 right-5 text-xl' onClick={handleDelete} >x</button>
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">{`${formatTime(time)}`}</h1>
                    {time === 0 && <Input type="text" onKeyUp={(e) => e.key === "Enter" && handleStart()} placeholder="Set ur timer in mins" defaultValue={inputTime} onChange={handleInputChange} />}
                    <div className='space-x-5'>
                        <Button onClick={handleStart}>Start</Button>
                        {time !== 0 && <Button onClick={pauseTimer}>{isRunning ? "Pause" : "Resume"}</Button>}
                        <Button disabled={time === 0} onClick={resetTimer}>Reset</Button>
                    </div>
                </Card>
            )}
        </>
    )
}

export default CountDown


