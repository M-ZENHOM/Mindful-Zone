

import type { NoteType, Todo } from '@/types';
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
    notes: NoteType[]
    addNote: (title: string) => void;
    deleteNote: (id: number) => void;
    deleteAll: () => void;


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

