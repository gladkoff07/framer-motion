import { Reorder, useDragControls } from 'framer-motion'
import { ReorderIcon } from './Icon'
import style from './todo.module.scss'

const variants = {
  initial: {
    opacity: 0,
    height: 0,
  },
  animate: {
    opacity: 1,
    height: 'auto',
  },
  exit: {
    opacity: 0,
    height: 0,
  },
}

const TodosItem = ({ todo, onRemove }) => {
  const controls = useDragControls()

  return (
    <Reorder.Item
      value={todo}
      dragListener={false}
      dragControls={controls}
      whileDrag={{
        scale: 1.05,
        boxShadow: 'rgba(0, 0, 0, .2) 1px 1px 10px',
      }}
      {...variants}
      className={style.todo__item}
    >
      <span className={style.todo__text}>{todo.name}</span>
      <span onClick={() => onRemove(todo.id)} className={style.todo__del}>
        &#10008;
      </span>
      <ReorderIcon dragControls={controls} />
    </Reorder.Item>
  )
}

export default TodosItem
