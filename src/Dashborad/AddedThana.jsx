import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const AddedThana = () => {
    const [divisions, setDivisions] = useState([])
    const [division, setDivition] = useState(null)
    const [distics, setDistics] = useState([])
    const [empty, setEmpty] = useState(true)
    const [empty1, setEmpty1] = useState(true)


    useEffect(() => {
        fetch(`http://localhost:5000/divition`)
            .then(res => res.json())
            .then(data => setDivisions(data))
    }, [])


    useEffect(() => {
        fetch(`http://localhost:5000/divitions/${division}`)
            .then(res => res.json())
            .then(data => setDistics(data[0]?.distics))
    }, [division])

    const hanselSubmit = event => {
        event.preventDefault();
        const form = event.target
        const divi = form.divi.value
        const dis = form.dis.value
        const thanaName = form.thanaName.value
        if (divi === 'বিভাগ ‍সেট করুন') {
            return setEmpty(false)
        }
        if (dis === 'জেলা ‍সেট করুন') {
            return setEmpty1(false)
        }
        const thana = {
            divi,
            dis,
            thanaName
        }
        console.log(thana)
        fetch('http://localhost:5000/thana',{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(thana)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('thana added successfully!!')
                }else{
                    toast.error(data.message)
                }
            })
    }
    return (
        <div >
            <form onSubmit={hanselSubmit}>
                <div className='flex flex-col gap-4 p-4'>
                    <select required onChange={(e) => setDivition(e.target.value)} name='divi' className={`border-2 p-2 ${!empty ? "border-red-800" : "border-green-800"}`}>
                        <option disabled selected>বিভাগ ‍সেট করুন</option>
                        {
                            divisions.map(dive => <option >{dive.divition_name}</option>)
                        }
                    </select>
                    <select required name='dis' className={`border-2 p-2 ${!empty1 ? "border-red-800" : "border-green-800"}`}>

                        <option disabled selected>জেলা ‍সেট করুন</option>
                        {
                            distics?.map(distic => <option >{distic}</option>)
                        }
                    </select>
                    <input name='thanaName' required className='px-4 py-2 border rounded-2xl' placeholder='থানা যোগ করুন' type="text" />

                    <button className='px-4 py-2 bg-gray-600 rounded-2xl hover:bg-gray-900 text-white'>সেভ করুন</button>
                </div>

            </form>
        </div>
    );
};

export default AddedThana;