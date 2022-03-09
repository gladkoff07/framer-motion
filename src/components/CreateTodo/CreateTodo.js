import style from './form.module.scss'

const CreateTodo = ({ onCrateTodo }) => {
  const handleSubmit = e => {
    e.preventDefault()

    const name = e.target.todo.value

    if (e.target.todo.value) {
      onCrateTodo(prevTodos => [
        ...prevTodos,
        {
          id: Date.now(),
          name,
        },
      ])

      e.target.reset()
    }
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input name='todo' placeholder='New todo' className={style.form__input} />
      <input type='submit' value='Add Todo' className={style.form__submit} />
    </form>
  )
}

export default CreateTodo
