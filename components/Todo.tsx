"use client"
import React, { FC } from 'react'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import { useStore } from '@/store'
import useStoreFromLocalStorage from '@/hooks/use-store'
import { cn, formatDate } from '@/lib/utils'
import { Icons } from './Icons'
import { Card } from './ui/card'
import { Button } from './ui/button'




interface TodoProps {

}

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const Todo: FC<TodoProps> = ({ }) => {
    const [todoText, setTodoText] = React.useState<string>("");
    const [todoState, setTodoState] = React.useState<Todo[]>([]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(e.target.value)
    }

    const { deleteTodo, addTodo, updateTodo, removeAllTodos } = useStore((state => state))

    const handleAdd = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && todoText !== "") {
            addTodo(todoText)
            setTodoText('')
        }
    }

    const todos = useStoreFromLocalStorage(useStore, (state) => state.todos)



    return (

        <Card className="w-full max-w-sm p-10 space-y-5  rounded-xl m-5">
            <Input onKeyUp={handleAdd} onChange={handleChange} value={todoText} type="email" placeholder="Todo" />
            <ul className="space-y-5">
                {todos.map((todo) => (
                    <div key={todo.id} className="items-top flex space-x-2 ">
                        <Checkbox className='bg-white text-black' checked={todo.completed} onClick={() => updateTodo(todo.id)} id="terms1" />
                        <div className="grid gap-1.5 leading-none w-full max-w-sm">

                            <label
                                htmlFor="terms1"
                                className={`${todo.completed && "line-through text-green-500 "}   text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                            >
                                {todo.title}
                            </label>
                            <p className="text-sm text-muted-foreground">
                                {formatDate(todo.id)}
                            </p>
                        </div>
                        <button className="text-sm text-muted-foreground" onClick={() => deleteTodo(todo.id)}> <Icons.Delete /></button>
                    </div>
                ))}

            </ul>
            {todos.length !== 0 && (
                <Button variant="destructive" onClick={() => removeAllTodos()} >Delete All</Button>

            )}
        </Card>



    )
}

export default Todo