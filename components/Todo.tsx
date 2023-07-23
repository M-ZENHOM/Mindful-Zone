"use client"
import React, { FC } from 'react'
import { Input } from './ui/input'
import { useActiveStore, useTodoStore } from '@/store'
import { Card } from './ui/card'
import { Button } from './ui/button'
import TodoInputs from './TodoInputs'
import useLocalStorage from '@/hooks/useStore'

const Todo: FC = () => {
    const [todoText, setTodoText] = React.useState<string>("");
    const { todos, deleteTodo, addTodo, updateTodo, removeAllTodos } = useTodoStore((state => state))
    const { todo, setTodoActive } = useLocalStorage(useActiveStore, (state) => state)

    const handleAdd = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && todoText !== "") {
            addTodo(todoText)
            setTodoText('')
        }
    }
    const handleDelete = () => {
        setTodoActive(false)
        removeAllTodos()
    }

    return (
        <>
            {todo && (
                <Card className="w-full max-w-sm p-10 space-y-5 rounded-xl relative">
                    <button className='absolute top-3 right-5 text-xl' onClick={handleDelete} >x</button>
                    <Input onKeyUp={handleAdd} onChange={(e) => setTodoText(e.target.value)} value={todoText} type="text" placeholder="Enjoy with ur todos..." />
                    <TodoInputs todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                    {todos.length !== 0 && todos.length >= 2 && (
                        <Button variant="destructive" onClick={() => removeAllTodos()} >Delete All</Button>
                    )}
                </Card>
            )}
        </>
    )
}

export default Todo