"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/slice';
import Link from 'next/link';

const Page = () => {
    let userData = useSelector((state) => state.usersData.users);
    let dispatch = useDispatch();



    return (
        <>
            <Link href="/">Home page</Link>
            <div className='display-user' >
                <h2>User list</h2>
                <div className="data">
                    {
                        userData?.map((user) => (
                            <React.Fragment key={user.id}>
                                <div className="user-item">
                                    <p>{user.name}</p>
                                    <button onClick={() => dispatch(removeUser(user.id))} >remove</button>
                                </div>
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Page;
