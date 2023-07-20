import React from 'react';


export const useStoreComponents = () => {
    const [statuses, setStatuses] = React.useState({
        todo: false,
        timer: false,
        note: false
    });

    // Function to update status for a given type
    const updateStatusInLocalStorage = (data_type: string, value: boolean) => {
        localStorage.setItem('storeComponents', JSON.stringify({
            ...statuses,
            [data_type]: value,
        }));
    };

    // Function to retrieve the statuses from localStorage
    const getStatusesFromLocalStorage = () => {
        const storedStatuses = localStorage.getItem('storeComponents');
        if (storedStatuses) {
            return JSON.parse(storedStatuses);
        }
        return {
            todo: false,
            timer: false,
            note: false,


        }; // Return default values if 'storeComponents' key is not found in localStorage
    };

    // Load statuses from localStorage on mount
    React.useEffect(() => {
        const storedStatuses = getStatusesFromLocalStorage();
        setStatuses(storedStatuses);
    }, []);

    // Update statuses in localStorage whenever they change
    React.useEffect(() => {
        updateStatusInLocalStorage('todo', statuses.todo);
        updateStatusInLocalStorage('timer', statuses.timer);
        updateStatusInLocalStorage('note', statuses.note);
    }, [statuses]);

    // Usage example: updating todo status
    const handleTodoStatusChange = (newStatus: boolean) => {
        setStatuses({
            ...statuses,
            todo: newStatus,
        });
    };

    // Usage example: updating timer status
    const handleTimerStatusChange = (newStatus: boolean) => {
        setStatuses({
            ...statuses,
            timer: newStatus,
        });
    };

    // Usage example: updating note status
    const handleNoteStatusChange = (newStatus: boolean) => {
        setStatuses({
            ...statuses,
            note: newStatus,
        });
    };

    return {
        statuses,
        setStatuses,
        handleTodoStatusChange,
        handleNoteStatusChange,
        handleTimerStatusChange
    }
}

