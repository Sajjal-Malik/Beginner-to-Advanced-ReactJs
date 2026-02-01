import Header from "../Layout/Header"
import TaskListNumbers from "../Others/TaskListNumbers"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = ({ data, handleLogout }) => {
    return (
        <div className="p-10 bg-[#1C1C1C] h-screen">
            <Header data={data} logoutHandler={handleLogout} />
            <TaskListNumbers data={data} />
            <TaskList data={data} />
        </div>
    )
}

export default EmployeeDashboard
