import React from 'react'
import { useState } from "react";

export default function TodoBody() {

    const [todos, setTodos] = useState('');
    const [newTodo, setNewTodo] = useState([]);

    const todoEvent = (event) => {
        setTodos(event.target.value)
    }

    const get_update = () => {
        setNewTodo((prevTodo) => {
            return [...prevTodo, todos]
        })
        setTodos(' ')
        document.getElementById("title").value = ""

    }

    return (
        <>
            <div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="title"><b>Task</b></label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            aria-describedby="emailHelp"
                            onChange={todoEvent}
                        />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="description"><b>Description</b></label>
                        <textarea className="form-control" id="description" rows="3" ></textarea>
                    </div> */}
                    <button
                        type="submit"
                        id="additem"
                        className="btn btn-success"
                        style={{ fontSize: "18px" }}
                        onClick={get_update}
                    >
                        Add item
                    </button>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">S.no</th>
                            <th scope="col">Task</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">

                        {

                            newTodo.map((val, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{val}</td>
                                        <td><button type="submit" onClick="deleted(${index})" className="btn btn-danger">Delete</button></td>

                                    </tr>)
                            })
                        }

                        {/* {todos.map((element, index) => (

                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{element[0]}</td>
                                <td>{element[1]}</td>
                            </tr>
                            
                        ))} */}
                    </tbody>
                </table>
            </div>
        </>
    )
}