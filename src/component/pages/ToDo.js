import ShowToDo from './ShowToDo';
import { toast } from 'react-toastify';

const ToDo = () => {

    const handleAddTask = event => {
        event.preventDefault();

        const newTask = event.target.name.value;

        const userTask = { newTask }

        fetch('https://maple-leaf-64017.herokuapp.com/task', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userTask),
        })
            .then(response => response.json())
            .then(data => {
                console.log('success', data);
                toast('Task added successfully!!! & Refresh!');
                event.target.reset();
            })
    }

    return (
        <div className='h-screen'>
            <div className='flex justify-center items-center mt-20'>
                <div className='w-2/4'>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">+New Task</label>

                    <form onSubmit={handleAddTask}>
                        <input type="text" name="name" class="input input-bordered input-info w-full" required autoComplete='off' />
                        <input className='bg-gray-800 text-white mt-3 rounded cursor-pointer py-1 px-2' type="submit" value="Add" />
                    </form>

                    <ShowToDo></ShowToDo>
                </div>
            </div>
        </div>
    );
};

export default ToDo;