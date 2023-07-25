import type { Todo } from '@/types';
import { create } from 'zustand'
import { persist } from 'zustand/middleware'


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
    setTodoActive: () => void
    setTimerActive: () => void
    setNoteActive: () => void

}


export const useTodoStore = create<TodoStore>()(
    persist<TodoStore>(
        (set, get) => ({
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
        }
    )
);

export const useTimerStore = create<TimerStore>()(
    persist<TimerStore>(
        (set, get) => ({
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
        }
    )
);

export const useActiveStore = create<ActiveStore>()(
    persist(
        (set, get) => ({
            todo: false,
            note: false,
            timer: false,
            setTodoActive: () => set((state) => ({ todo: !state.todo })),
            setNoteActive: () => set((state) => ({ note: !state.note })),
            setTimerActive: () => set((state) => ({ timer: !state.timer })),

        }),
        {
            name: 'active-components',
        }
    )
)
