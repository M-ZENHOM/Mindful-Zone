import React from 'react';
import { useTimerStore } from '@/store';


export const useCountDown = (interval = 1000) => {
    const { time, isRunning } = useTimerStore();
    const intervalRef = React.useRef<NodeJS.Timeout>();

    const onTimeEnd = () => {
        const audioElement = new Audio('/timerEnded.mp3');
        audioElement.play();
    }

    React.useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                if (time > 0) useTimerStore.setState((state) => ({ time: state.time - 1 }));
            }, interval);
            if (time === 0) onTimeEnd()
        } else {
            clearInterval(intervalRef.current)
        }
        return () => clearInterval(intervalRef.current);
    }, [time, isRunning]);

    return time;
};

