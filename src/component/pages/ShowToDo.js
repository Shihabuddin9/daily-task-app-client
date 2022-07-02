import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ShowToDo = () => {
    const [allTasks, setAllTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allTask')
            .then(response => response.json())
            .then(data => setAllTasks(data))

    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want to Delete?')
        if (proceed) {
            const url = `http://localhost:5000/allTask/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = allTasks.filter(allTask => allTask._id !== id)
                        setAllTasks(remaining)
                    }
                })
        }
    }


    const handleCompletedTask = completed => {
        // const completed = e.target.value

        const completedTask = { completed }
        fetch('http://localhost:5000/completed', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(completedTask),
        })
            .then(response => response.json())
            .then(data => {
                console.log('success', data);
                toast('Completed Task!!!');
            })
    }


    const handleCompletedDelete = (id) => {


        const url = `http://localhost:5000/allTask/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = allTasks.filter(allTask => allTask._id !== id)
                    setAllTasks(remaining)
                }
            })


    }


    return (
        <div className='mt-16'>
            <h1 className='text-2xl mb-2'>Daily Task: <span className='bg-red-700 px-2.5 rounded-full text-white text-lg py-0.5'>{allTasks.length}</span></h1>
            {
                allTasks.map(allTask => <div key={allTask._id}>

                    {allTask.newTask ? <li className='list-none	my-3'>

                        <input type="checkbox" className='mr-2' onClick={() => {
                            handleCompletedDelete(allTask._id);
                            handleCompletedTask(allTask.newTask);
                        }} name="" value={allTask.newTask} id="" />

                        {allTask.newTask}
                        <Link to={`/updateTask/${allTask._id}`} ><button className='absolute lg:right-96 right-7'>edit</button></Link>
                        <FontAwesomeIcon onClick={() => handleDelete(allTask._id)} className='text-red-700 absolute lg:right-80 right-2 cursor-pointer' icon={faTrashAlt} /></li>

                        : ''}
                </div>)
            }
        </div>
    );
};

export default ShowToDo;