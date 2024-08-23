import React,{useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from "uuid";
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = () => {
    const [todos,setTodos] =useState([])
    const addTodo = (todo) => {
        setTodos([
          ...todos,
          { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
      }
      const toggleComplete = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      }

      const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

      const editTodo = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
          )
        );
      }
      const editTask=(task,id)=>{
        setTodos(todos.map(todo=>todo.id===id?{...todo,task,isEditing:!todo.isEditing}:todo))
      }
  return (
    <div>
        
        <TodoForm addTodo={addTodo}/>
        <div className="absolute top-30 z-50">
          <div className='flex flex-col w-screen'>

        {todos.map((todo) =>
        todo.isEditing?(
          <EditTodoForm editTodo={editTask} task={todo}/>
        ) : (
          <Todo
          key={todo.id}
          task={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleComplete={toggleComplete}
          />)
          
        )}
        </div>
        </div>
    </div> 
  )
}

export default TodoWrapper