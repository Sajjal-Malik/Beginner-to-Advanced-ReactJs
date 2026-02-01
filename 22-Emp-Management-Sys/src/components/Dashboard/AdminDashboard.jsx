import Header from '../Layout/Header'
import AllTasks from '../Others/AllTasks'
import CreateTask from '../Others/CreateTask'

const AdminDashboard = ({ data, handleLogout }) => {
    return (
        <div className="h-screen w-full p-10">
            <Header data={data} logoutHandler={handleLogout} />
            <CreateTask />
            <AllTasks />
        </div>
    )
}

export default AdminDashboard
