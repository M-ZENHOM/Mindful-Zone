"use client"
import React, { FC } from 'react'
import { Input } from './ui/input'
import { useTodoStore } from '@/store'
import { Card } from './ui/card'
import { Button } from './ui/button'
import TodoInputs from './TodoInputs'


interface IProps {
    setTodoActive: (value: boolean) => void
}
const Todo: FC<IProps> = ({ setTodoActive }) => {
    const todoRef = React.useRef<HTMLInputElement>(null)
    const { todos, deleteTodo, addTodo, updateTodo, removeAllTodos } = useTodoStore((state => state))


    const handleAdd = (e: React.KeyboardEvent) => {
        const value = todoRef?.current?.value ?? "";
        if (e.key === "Enter" && value !== "") {
            addTodo(value)
            if (todoRef.current) {
                todoRef.current.value = "";
            }
        }
    }
    const handleDelete = () => {
        setTodoActive(false)
        removeAllTodos()

    }

    return (
        <Card className="w-full max-w-sm h-fit  p-10 space-y-5 rounded-xl relative">
            <button className='absolute top-3 right-5 text-xl' onClick={handleDelete} >x</button>
            <Input ref={todoRef} onKeyUp={handleAdd} type="text" placeholder="Enjoy with ur todos..." />
            <TodoInputs todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            {todos.length !== 0 && todos.length >= 2 && (
                <Button variant="destructive" onClick={() => removeAllTodos()} >Delete All</Button>
            )}
        </Card>
    )
}

export default Todo