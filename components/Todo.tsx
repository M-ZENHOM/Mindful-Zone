"use client"
import React, { FC } from 'react'
import { Input } from './ui/input'
import { useTodoStore } from '@/store'
import useStoreFromLocalStorage from '@/hooks/use-store'
import { Card } from './ui/card'
import { Button } from './ui/button'
import TodoInputs from './TodoInputs'
import { statusType } from '@/types'

interface TodoProps {
    statuses: statusType
    handleTodoStatusChange: (value: boolean) => void
}

const Todo: FC<TodoProps> = ({ statuses, handleTodoStatusChange }) => {
    const [todoText, setTodoText] = React.useState<string>("");
    const { deleteTodo, addTodo, updateTodo, removeAllTodos } = useTodoStore((state => state))
    const { data } = useStoreFromLocalStorage(useTodoStore, (state) => state.todos)


    const handleAdd = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && todoText !== "") {
            addTodo(todoText)
            setTodoText('')
        }
    }
    const handleDelete = () => {
        handleTodoStatusChange(false)
        removeAllTodos()
    }

    return (
        <>
            {statuses.todo && (
                <Card className="w-full max-w-sm p-10 space-y-5  rounded-xl  relative">
                    <button className='absolute top-3 right-5 text-xl' onClick={handleDelete} >x</button>
                    <Input onKeyUp={handleAdd} onChange={(e) => setTodoText(e.target.value)} value={todoText} type="email" placeholder="Todo" />
                    <TodoInputs todos={data} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                    {data.length !== 0 && data.length >= 2 && (
                        <Button variant="destructive" onClick={() => removeAllTodos()} >Delete All</Button>
                    )}
                </Card>
            )}
        </>
    )
}

export default Todo