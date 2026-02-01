import React, { useEffect, useState } from 'react';
import { AuthContext } from "./AuthContext";
import { getLocalStorageData, setLocalStorageData } from '../utils/LocalStorage';

const AuthProvider = ({ children }) => {

    const [userData] = useState(() => {
        const data = getLocalStorageData();
        return data.adminData ? data : { adminData: [], employeeData: [] };
    });

    useEffect(() => {
        setLocalStorageData();
        console.log("LocalStorage has been seeded and synchronized.");
    }, []);

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthProvider
