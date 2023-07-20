export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
export interface Note {
    id: number;
    title: string;
    color: string;
}

export type statusType = {
    todo: boolean,
    timer: boolean,
    note: boolean
}