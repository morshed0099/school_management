import React, { createContext, useContext, useEffect, useState } from 'react';


const auth = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('null')
    const [loader, setLoader] = useState(true)
    const token = localStorage.getItem("token")
    useEffect(() => {
        if (!token) {
            return console.log('token miss')
        } else {
            fetch('http://localhost:5000/me', {
                method: "POST",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                },
            }).then(res => res.json()).then(data => {
                console.log(data,'19')
                setUser(data);
                setLoader(false);          
            })
        }
    }, [token])

    const userInfo = {
        setLoader,
        setUser,
        user,
        loader
    }
    return (
        <div>
            <auth.Provider value={userInfo}>
                {children}
            </auth.Provider>
        </div>
    );
};

export default AuthProvider;