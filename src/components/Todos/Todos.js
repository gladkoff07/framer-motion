import React from 'react'
import { Reorder, AnimatePresence } from 'framer-motion'
import TodosItem from './TodosItem'
import style from './todo.module.scss'

const Todos = ({ todos, setTodo, onRemove }) => {
  return (
    <Reorder.Group
      as='ol'
      axis='y'
      values={todos}
      onReorder={setTodo}
      className={style.todo}
    >
      <AnimatePresence>
        {todos.map(todo => (
          <TodosItem key={todo.id} todo={todo} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </Reorder.Group>
  )
}

export default Todos
