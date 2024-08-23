import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";

const EditTodoForm = ({ editTodo, task = { task: '', id: null } }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.id) {
            editTodo(value, task.id);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex items-center justify-center bg-transparent'>
            <div className='relative max-sm:mx-[15px] w-[430px] mr-5'>
                <input
                    type='text'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className='bg-white drop-shadow-lg rounded-lg p-2 w-full h-12 text-gray-800 mb-2 pl-10 pr-12 focus:outline-none'
                    placeholder='Update Task'
                />
                <button
                    type='submit'
                    className='absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-800'
                >
                    <TiTick className='h-7 w-7 ml-2' />
                </button>
            </div>
        </form>
    );
};

export default EditTodoForm;
