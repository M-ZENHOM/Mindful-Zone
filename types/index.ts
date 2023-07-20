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