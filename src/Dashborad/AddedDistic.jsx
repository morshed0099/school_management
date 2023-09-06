import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const AddedDistic = () => {
    const [division, setDivision] = useState([])
    const [empty, setEmpty] = useState(true)


    useEffect(() => {
        fetch('http://localhost:5000/divition')
            .then(res => res.json())
            .then(data => setDivision(data))
    }, [])

    const hanselSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const distic = form.disticName.value;
        const selectDivision = form.divition.value
        console.log(selectDivision);
        if (selectDivision === 'বিভাগ ‍সেট করুন') {
            setEmpty(false)
            return
        }
        setEmpty(true);
        const addDistic = {
            distic,
            selectDivision
        }
        fetch('http://localhost:5000/divition', {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(addDistic)
        })
            .then(res => res.json())
            .then(data => {               
                if (data.acknowledged) {
                    toast.success('distic added !!!')
                    form.reset()
                } else {
                    toast.error(data.message)
                }
            })
    }
    return (
        <div >
            <form className='flex flex-col gap-4 p-4' onSubmit={hanselSubmit}>
                <select name='divition' required className={`border-2 p-2 ${!empty ? "border-red-800" : "border-green-800"}`}>
                    <option disabled selected>বিভাগ ‍সেট করুন</option>

                    {
                        division.map(dive => <option required >{dive.divition_name}</option>)
                    }

                </select>
                <input name='disticName' required className='px-4 py-2 border rounded-2xl' placeholder='add distic' type="text" />

                <button className='px-4 py-2 bg-gray-600 rounded-2xl hover:bg-gray-900 text-white'>সেভ করুন</button>
            </form>
        </div>
    );
};

export default AddedDistic;