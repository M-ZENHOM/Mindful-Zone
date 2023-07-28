import { formatDate } from '@/lib/utils';
import { FC } from 'react'
import { Icons } from './Icons';
import { Todo } from '@/types';
import { Checkbox } from './ui/checkbox';


interface TodoInputsProps {
    todos: Todo[]
    deleteTodo: (id: number) => void
    updateTodo: (id: number) => void
}

const TodoInputs: FC<TodoInputsProps> = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <div className='space-y-5'>
            {todos?.sort((a, b) => b.id - a.id).map((todo) => (
                <div key={todo.id} className="items-top flex space-x-2 ">
                    <Checkbox onClick={() => updateTodo(todo.id)} checked={todo.completed} id="terms1" />
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
        </div>
    )
}

export default TodoInputs