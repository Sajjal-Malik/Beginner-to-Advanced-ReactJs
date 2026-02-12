import React, { useState } from 'react'

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [category, setCategory] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const submitHanlder = (event) => {
        event.preventDefault();

        const newTaskObj = {
            taskTitle,
            taskDate,
            category,
            taskDescription,
            newTask: true,
            active: false,
            failed: false,
            completed: false,
        };

        const data = JSON.parse(localStorage.getItem('employeeData'));

        data.forEach(function (emp) {
            if (assignedTo === emp.name) {
                emp.tasks.push(newTaskObj);
                emp.taskCounts.newTask = emp.taskCounts.newTask + 1;
                console.log("New Task assigned to:", emp.name);
            }
        });

        localStorage.setItem('employeeData', JSON.stringify(data));

        setTaskTitle('');
        setTaskDate('');
        setAssignedTo('');
        setCategory('');
        setTaskDescription('');
    }

    return (
        <div>
            <div className="p-5 bg-[#1C1C1C] mt-10 mt-5 rounded">
                <form onSubmit={(e) => submitHanlder(e)} className="flex flex-wrap w-full items-start justify-between">
                    <div className="w-1/2">
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                            <input value={taskTitle} onChange={(event) => setTaskTitle(event.target.value)} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make UI Design" />
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                            <input value={taskDate} onChange={(event) => setTaskDate(event.target.value)} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" />
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                            <input value={assignedTo} onChange={(event) => setAssignedTo(event.target.value)} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Enter employee name..." />
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                            <input value={category} onChange={(event) => setCategory(event.target.value)} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Designer, Developer etc..." />
                        </div>
                    </div>
                    <div className="w-2/5 flex flex-col items-start">
                        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                        <textarea value={taskDescription} onChange={(event) => setTaskDescription(event.target.value)} className="w-full h-45 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id="" rows="10" cols="30"></textarea>
                        <button className="bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded text-sm mt-4 w-full cursor-pointer">Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTask
