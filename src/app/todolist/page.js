"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoList, removeTodo } from '../redux/todoslice';

const Page = () => {

    const [title, setTitle] = useState("");
    let dispatch = useDispatch();

    let todoData = useSelector((state) => state.todosData.todoList);



    return (
        <>
            <div className='add-todo'>
                <h2>Add todo</h2>
                <input type="text" placeholder='Add new task' value={title} onChange={(e) => setTitle(e.target.value)} />
                <button onClick={() => dispatch(addTodoList(title))} >Add todo</button>
            </div>
            <div className="todo-list">
                <h2>Todod list</h2>
                {
                    todoData.length && todoData?.map((item) => (
                        <React.Fragment key={item.id}>
                            <div className="todo-item">
                                <span>{item.title}</span>
                                <button onClick={() => dispatch(removeTodo(item.id))} >Remove</button>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    );
}

export default Page;
