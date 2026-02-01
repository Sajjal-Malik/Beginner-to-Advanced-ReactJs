
const TaskListNumbers = ({ data }) => {
    return (
        <div className="flex mt-10 justify-between gap-5 screen">
            <div className="rounded-xl p-10 w-[45%] bg-blue-400">
                <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
                <h3 className="text-xl font-medium">New Tasks</h3>
            </div>
            <div className="rounded-xl p-10 w-[45%] bg-green-400">
                <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
                <h3 className="text-xl font-medium">Completed Tasks</h3>
            </div>
            <div className="rounded-xl p-10 w-[45%] bg-yellow-400">
                <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
                <h3 className="text-xl font-medium">Active Tasks</h3>
            </div>
            <div className="rounded-xl p-10 w-[45%] bg-red-400">
                <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
                <h3 className="text-xl font-medium">Failed Tasks</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers
