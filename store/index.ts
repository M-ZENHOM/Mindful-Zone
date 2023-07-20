import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoStore {
    todos: Todo[];
    addTodo: (title: string) => void;
    updateTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    removeAllTodos: () => void;
}


export const useStore = create<TodoStore>()(
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
            // skipHydration: true,
        }
    )
);

// export const useStore = create<TodoStore>(

//     (set) => ({
//         todos: [],
//         addTodo: (title: string) => {
//             set((state) => ({

//                 todos: [...state.todos, { id: Date.now(), title, completed: false, }]
//             }))
//         },
//         updateTodo: (id: number) => {
//             set((state) => ({ todos: state.todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo) }))
//         },
//         deleteTodo: (id: number) => {
//             set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }))
//         },
//         removeAllTodos: () => {
//             set(() => ({ todos: [] }))
//         }
//     })
// )

