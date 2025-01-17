"use client"
import { addUser } from '@/app/redux/slice';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddUser = () => {
    const [name, setName] = useState("");
    let dispatch = useDispatch();


    const userDispatch = () => {
        if (!name) {
            // return alert("name is required")
            return
        }
        dispatch(addUser(name));
        setName("")
    }



    return (
        <div className='add-user'>
            <h2>User list</h2>
            <input type="text" placeholder='Add user' value={name} onChange={(e) => setName(e.target.value)} className='add-user-input' />
            <button className='add-user-btn' onClick={userDispatch}>Add user</button>
            <Link href="/removeuser">Remove user</Link>
            <Link href="/todolist">todolist</Link>
            <Link href="/apiusers">Api users list</Link>
        </div>
    );
}

export default AddUser;
