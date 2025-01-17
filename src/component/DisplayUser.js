"use client"
import { removeUser } from '@/app/redux/slice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DisplayUser = () => {

    let userData = useSelector((state) => state.usersData.users);
    // console.log(userData);

    let dispatch = useDispatch();



    return (
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
    );
}

export default DisplayUser;
