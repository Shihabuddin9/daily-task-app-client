import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateTask = () => {
    const { id } = useParams()
    const [tasks, setTasks] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/allTask/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => setTasks(data))

    }, [])



    const handleClick = event => {
        event.preventDefault()

        const newTask = event.target.name.value

        const updateTask = { newTask }

        const url = `http://localhost:5000/allTask/${id}`
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateTask),
        })
            .then(response => response.json())
            .then(data => {
                console.log('success', data);
                toast('users added successfully!!!');
                event.target.reset();
            })
    }


    return (
        <div className='h-screen'>
            <div className='flex justify-center items-center mt-20'>
                <div className='w-2/4'>
                    <h1 className=''>Update your Task: {tasks.newTask}</h1>
                    <div className=' mt-5'>

                        <form onSubmit={handleClick}>
                            <input
                                type="text" name="name" class="input input-bordered input-info w-full" required />
                            <input className='bg-gray-800 text-white mt-3 rounded cursor-pointer py-1 px-2' type="submit" value="update" autoComplete='off' />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateTask;