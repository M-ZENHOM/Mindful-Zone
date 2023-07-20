

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
interface NotesStore {
    notes: string
    addNote: (title: string) => void;
    deleteNote: () => void;

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
            name: 'todos', // Specify the name for the localStorage key
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
);
export const useNotesStore = create<NotesStore>()(
    persist<NotesStore>(
        (set) => ({
            notes: "",
            addNote: (title: string) => {
                set(() => ({
                    notes: title,
                }));
            },
            deleteNote: () => {
                set(() => ({
                    notes: "",
                }));
            },
        }),
        {
            name: 'notes', // Specify the name for the localStorage key
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
);

