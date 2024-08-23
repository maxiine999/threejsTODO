import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <div className='pt-20 md:pt-10 sm:pt-5 px-4 sm:px-2'>
      <form 
        className='flex items-center justify-center pt-5 bg-transparent'
        onSubmit={handleSubmit}
      >
        <input 
          type='text'
          className='h-12 w-80 sm:w-64 drop-shadow-lg rounded-lg mb-4 p-2 text-black focus:outline-none'
          value={value}
          placeholder='What is the task today?'
          onChange={(e) => setValue(e.target.value)}
        />
        <button 
          type='submit'
          className='drop-shadow-lg w-24 h-12 bg-white text-black rounded-lg mb-4 ml-3'
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
