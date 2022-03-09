import { useState } from 'react'
import CreateTodo from '../CreateTodo'
import Todos from '../Todos'
import style from './app.module.scss'

const defaultTodos = [
  { id: 1, name: 'Learn React' },
  { id: 2, name: 'Learn Redux' },
  { id: 3, name: 'Learn Framer Motion' },
]

const App = () => {
  const [todo, setTodo] = useState(defaultTodos)

  const onRemove = id => {
    return setTodo(todo.filter(todo => todo.id !== id))
  }

  return (
    <div className={style.app}>
      <CreateTodo onCrateTodo={setTodo} />
      <Todos todos={todo} setTodo={setTodo} onRemove={onRemove} />
    </div>
  )
}

export default App
