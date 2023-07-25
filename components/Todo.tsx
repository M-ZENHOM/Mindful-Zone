"use client"
import React, { FC } from 'react'
import { Input } from './ui/input'
import { Card } from './ui/card'
import { Button } from './ui/button'
import TodoInputs from './TodoInputs'
import { TodosType } from '@/types'


interface IProps {
    todos: TodosType
    Active: {
        setTodoActive: () => void
    }
}
const Todo: FC<IProps> = ({ Active, todos }) => {
    const todoRef = React.useRef<HTMLInputElement>(null)

    const handleAdd = (e: React.KeyboardEvent) => {
        const value = todoRef?.current?.value ?? "";
        if (e.key === "Enter" && value !== "") {
            todos?.addTodo(value)
            if (todoRef.current) {
                todoRef.current.value = "";
            }
        }
    }
    const handleDelete = () => {
        Active?.setTodoActive()
        todos?.removeAllTodos()
    }
    return (
        <Card className="w-full max-w-sm h-fit min-h-[300px] p-10 space-y-5 rounded-xl relative">
            <button className='absolute top-3 right-5 text-xl' onClick={handleDelete} >x</button>
            <Input ref={todoRef} onKeyUp={handleAdd} type="text" placeholder="Enjoy with ur todos..." />
            <TodoInputs todos={todos?.todos} updateTodo={todos?.updateTodo} deleteTodo={todos?.deleteTodo} />
            {todos.todos?.length !== 0 && todos.todos?.length >= 2 && (
                <Button variant="destructive" onClick={() => todos.removeAllTodos()} >Delete All</Button>
            )}
        </Card>
    )
}

export default React.memo(Todo)