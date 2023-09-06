import React from 'react';
import { toast } from 'react-hot-toast';

const Login = () => {

    const handelSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const userId = form.userId.value;
        const password = form.password.value;
        const user = { userId, password };
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.token)
                if (data.message) {
                    toast.error(data.message);
                }
            })
    }
    return (
        <div className='p-2 flex justify-center items-center h-screen'>
            <form onSubmit={handelSubmit}>
                <div className='px-4  flex flex-col gap-4 justify-center items-center py-4'>
                    <div className='flex items-center lg:gap-4 md:gap-2 gap-1 '>
                        <div>
                            <span>USER ID :</span>
                        </div>
                        <div >
                            <input name='userId' type="text" className='px-4 py-2 border rounded-2xl w-full' />
                        </div>
                    </div>
                    <div className='flex items-center lg:gap-4 md:gap-2 gap-1 '>
                        <div>
                            <span>PASSWORD :</span>
                        </div>
                        <div>
                            <input name='password' type="password" className='px-4 py-2 border rounded-2xl w-full' />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <button className='px-4 py-2 w-full bg-gray-600 hover:bg-gray-900 rounded-2xl text-white'>লগইন</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;