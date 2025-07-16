import './Todo.css'

function Todo({ title, onTodoDelete }) {
  function deleteTodo(id) {
    console.log('deleteTodo()', title)
  }
  return (
    <div className='test'>
      <p>{ title }</p>
      <button onClick={onTodoDelete} 
      >Delete</button>

    </div>
  );
}

export default Todo;
