import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='flex justify-center mb-2'>
      <div className='flex items-center bg-white drop-shadow-lg max-sm:mx-[15px] rounded-lg p-2 w-[430px] mx-2 mr-7 h-12 text-gray-800'>
        <p
          onClick={() => toggleComplete(task.id)}
          className={`flex-1 cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
        >
          {task.task}
        </p>
        <div className='flex space-x-3'>
          <FaRegEdit
            className='text-gray-600 hover:text-gray-800 transition-colors duration-300 h-6 w-6 cursor-pointer'
            onClick={() => editTodo(task.id)}
          />
          <MdOutlineDeleteOutline
            className='text-gray-600 hover:text-red-600 transition-colors duration-300 h-6 w-6 cursor-pointer'
            onClick={() => deleteTodo(task.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
