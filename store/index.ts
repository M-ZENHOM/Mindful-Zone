import type { ActiveType, Todo } from '@/types';
import { create } from 'zustand'
import { persist } from 'zustand/middleware'


interface TodoStore {
    todos: Todo[];
    addTodo: (title: string) => void;
    updateTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    removeAllTodos: () => void;
}
interface NotesStore {
    notes: Todo[];
    addNote: (title: string) => void;
    updateNote: (id: number, title: string) => void;
    deleteNote: (id: number) => void;
    removeAllNotes: () => void
}
interface TimerStore {
    time: number;
    isRunning: boolean;
    startTimer: () => void;
    pauseTimer: () => void;
    resetTimer: () => void;
    setTime: (newTime: number) => void;
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
export const useNotesStore = create<NotesStore>()(
    persist<NotesStore>(
        (set, get) => ({
            notes: [],
            addNote: (title: string) => {
                set((state) => ({
                    notes: [
                        ...state.notes,
                        { id: Date.now(), title, completed: false, color: "#" + Math.floor(Math.random() * 16777215).toString(16) },
                    ],
                }));
            },
            updateNote: (id: number, newTitle: string) => {
                set((state) => ({
                    notes: state.notes.map((note) =>
                        note.id === id ? { ...note, title: newTitle } : note
                    ),
                }));
            },
            deleteNote: (id: number) => {
                set((state) => ({
                    notes: state.notes.filter((todo) => todo.id !== id),
                }));
            },
            removeAllNotes: () => {
                set(() => ({ notes: [] }));
            },
        }),
        {
            name: 'notes',
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

export const useActiveStore = create<ActiveType>()(
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
