"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiUser } from '../redux/slice';
const Page = () => {

    let userData = useSelector((state) => state.usersData.fetchUser);
    // console.log(userData.length);
    let dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchApiUser())
    }, [])


    return (
        <div className='api-data'>
            <h2>User list</h2>
            {
                userData.length && userData?.map((item) => (
                    <React.Fragment key={item.id}>
                        <h4>Name : {item.name} , website : {item.website}</h4>
                    </React.Fragment>
                ))
            }
        </div>
    );
}

export default Page;
