export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
export interface NoteType {
    id: number;
    title: string;
}

export type statusType = {
    todo: boolean
    timer: boolean
    note: boolean
}

export interface Note {
    id: number;
    title: string;
    completed: boolean;
    color: string
}
export type TodosType = {
    todos: [],
    setTodoActive: () => void
    addTodo: (value: string) => void
    updateTodo: () => void
    deleteTodo: () => void
    removeAllTodos: () => void
}
export type NotesType = {
    notes: Note[],
    addNote: (value: string) => void
    updateNote: (id: number, title: string) => void;
    deleteNote: (id: number) => void
    removeAllNotes: () => void
}
export type CounterType = {
    startTimer: () => void
    pauseTimer: () => void
    resetTimer: () => void
    setTime: (value: number) => void
    isRunning: boolean
}
export type ActiveType = {
    todo: boolean,
    note: boolean,
    timer: boolean,
    setTodoActive: () => void
    setNoteActive: () => void
    setTimerActive: () => void
}