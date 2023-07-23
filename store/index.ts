import type { Todo } from '@/types';
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


interface TodoStore {
    todos: Todo[];
    addTodo: (title: string) => void;
    updateTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    removeAllTodos: () => void;
}
interface TimerStore {
    time: number;
    isRunning: boolean;
    startTimer: () => void;
    pauseTimer: () => void;
    resetTimer: () => void;
    setTime: (newTime: number) => void;

}
interface ActiveStore {
    todo: boolean,
    note: boolean,
    timer: boolean,
    setTodoActive: (value: boolean) => void
    setTimerActive: (value: boolean) => void
    setNoteActive: (value: boolean) => void


}



export const useTodoStore = create<TodoStore>()(
    persist<TodoStore>(
        (set) => ({
            todos: [],
            addTodo: (title: string) => {
                set((state) => ({
                    todos: [
                        ...state.todos,
                        { id: Date.now(), title, completed: false },
                    ],
                }));
            },
            updateTodo: (id: number) => {
                set((state) => ({
                    todos: state.todos.map((todo) =>
                        todo.id === id ? { ...todo, completed: !todo.completed } : todo
                    ),
                }));
            },
            deleteTodo: (id: number) => {
                set((state) => ({
                    todos: state.todos.filter((todo) => todo.id !== id),
                }));
            },
            removeAllTodos: () => {
                set(() => ({ todos: [] }));
            },
        }),
        {
            name: 'todos',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export const useTimerStore = create<TimerStore>()(
    persist<TimerStore>(
        (set) => ({
            time: 0,
            isRunning: false,
            setTime: (newTime: number) => set({ time: newTime, isRunning: false }),
            startTimer: () => set({ isRunning: true }),
            pauseTimer: () => set((state) => ({
                isRunning: !state.isRunning
            })),
            resetTimer: () => set({ time: 0, isRunning: false }),
        }),

        {
            name: 'timeCounter',
            storage: createJSONStorage(() => localStorage),
        }
    )
);


export const useActiveStore = create<ActiveStore>()(
    persist<ActiveStore>(
        (set) => ({
            todo: false,
            note: false,
            timer: false,
            setTodoActive: (value: boolean) => set(() => ({ todo: value })),
            setNoteActive: (value: boolean) => set(() => ({ note: value })),
            setTimerActive: (value: boolean) => set(() => ({ timer: value })),
        }),
        {
            name: 'activeComponents',
            storage: createJSONStorage(() => localStorage),
        }
    )
)