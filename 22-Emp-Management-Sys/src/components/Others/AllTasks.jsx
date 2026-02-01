import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';

const AllTasks = () => {

    const authData = useContext(AuthContext);

    return (
        <div className="p-5 bg-[#1C1C1C] rounded mt-5 h-60">
            <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
                <h3 className="text-lg font-medium w-1/5">New Task</h3>
                <h5 className="text-lg font-medium w-1/5">Active Task</h5>
                <h5 className="text-lg font-medium w-1/5">Completed Task</h5>
                <h5 className="text-lg font-medium w-1/5">Failed Task</h5>
            </div>
            <div className="h-[80%] overflow-auto">
                {authData.employeeData.map((emp, index) => {
                    return <div className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded" key={index}>
                        <h2 className="text-lg font-medium w-1/5">{emp.name}</h2>
                        <h3 className="text-lg font-medium w-1/5 text-green-500">{emp.taskCounts.newTask}</h3>
                        <h5 className="text-lg font-medium w-1/5 text-yellow-500">{emp.taskCounts.active}</h5>
                        <h5 className="text-lg font-medium w-1/5 text-blue-500">{emp.taskCounts.completed}</h5>
                        <h5 className="text-lg font-medium w-1/5 text-red-500">{emp.taskCounts.failed}</h5>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AllTasks
