import { useContext, useState } from "react";
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./contexts/AuthContext";

function App() {

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    return storedUser ? JSON.parse(storedUser).role : null;
  });

  const [loggedInUser, setLoggedInUser] = useState(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    return storedUser ? JSON.parse(storedUser).data : null;
  });
  const authData = useContext(AuthContext);

  function loginHandler(email, password) {
    if (!authData)
      return;

    // Admin login
    if (email === 'admin@example.com' && password === '1234') {
      const adminUser = authData.adminData[0];
      setUser('admin');
      setLoggedInUser(adminUser);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: adminUser }));
      return;
    }

    // Employee login
    const employee = authData.employeeData.find(emp => emp.email === email && emp.password === password);
    if (employee) {
      setUser('employee');
      setLoggedInUser(employee);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      return;
    }

    alert("Invalid Credentials");
  }

  const logoutHandler = () => {
    setUser(null);
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser');
  }


  return (
    <>
      {!user ? <Login handleLogin={loginHandler} /> : ''}
      {user === 'admin' && <AdminDashboard data={loggedInUser} handleLogout={logoutHandler} />}
      {user === 'employee' && <EmployeeDashboard data={loggedInUser} handleLogout={logoutHandler} />}

    </>
  )
}

export default App
