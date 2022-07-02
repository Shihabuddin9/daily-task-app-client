import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const CompletedTasks = () => {
    const [completedTasks, setCompletedTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/completed')
            .then(response => response.json())
            .then(data => setCompletedTasks(data))

    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want to Delete?')
        if (proceed) {
            const url = `http://localhost:5000/completed/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = completedTasks.filter(allTask => allTask._id !== id)
                        setCompletedTasks(remaining)
                    }
                })
        }
    }


    return (
        <div className='h-screen'>
            <div className='flex justify-center items-center mt-20 text-2xl'>
                <div>
                    <h1>Completed Task: <span className='bg-red-700 px-2.5 rounded-full text-white text-lg py-0.5'>{completedTasks.length}</span></h1>

                    <div>
                        {
                            completedTasks.map(completedTask => <li className='list-none my-5' key={completedTask._id}>
                                <input type="checkbox" checked="checked" class="checkbox checkbox-primary" disabled /> {completedTask.completed} <FontAwesomeIcon onClick={() => handleDelete(completedTask._id)} className='text-red-700 absolute lg:right-80 right-2 cursor-pointer' icon={faTrashAlt} />
                            </li>)
                        }
                    </div>

                </div>
            </div>
            {/* <div className='border border-gray-500 mx-10 m'></div> */}
        </div>
    );
};

export default CompletedTasks;