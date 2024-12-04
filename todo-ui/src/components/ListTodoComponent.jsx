import React, { useEffect, useState } from 'react'
import { completeTodo, deleteTodo, getAllTodos, inCompleteTodo } from '../services/TodoService';
import { useNavigate } from 'react-router-dom';

const ListTodoComponent = () => {
    const [todos, setTodos] = useState([]);
    const naivgate = useNavigate();

    useEffect(() => {
        listTodos();
    },[]);

    const listTodos = () => {
        getAllTodos().then((response) => {
            setTodos(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
    const addNewTodo = () => {
        naivgate('/add-todo')
    }
    const updateTodo = (id) => {
        naivgate(`/update-todo/${id}`);
    }
    const removedTodo = (id) => {
        deleteTodo(id).then((response) => {
            listTodos();
        }).catch(error => {
            console.error(error);
        })
    }
    const markCompleted = (id) => {
        completeTodo(id).then((response) => {
            listTodos();
        }).catch(error => {
            console.error();   
        })
    }
    const markInCompleted = (id) => {
        inCompleteTodo(id).then((response) => {
            listTodos();
        }).catch(error => {
            console.error(error);
        })
    }
  return (
    <div className='container'>
        <h2 className='text-center'>Todos</h2>
        <button className='btn btn-primary mb-2' onClick={addNewTodo}>Add Todo</button>
        <div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Todo Title</th>
                        <th>Todo Description</th>
                        <th>Todo Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => 
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.completed ? 'YES': 'NO'}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateTodo(todo.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removedTodo(todo.id)} style={ { marginLeft: "10px" }}>Delete</button>
                                    <button className='btn btn-success' onClick={() => markCompleted(todo.id)}style={ { marginLeft: "10px" }}>Complete</button>
                                    <button className='btn btn-info' onClick={() => markInCompleted(todo.id)}style={ { marginLeft: "10px" }}>In-complete</button>
                                </td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    </div>
    
  )
}

export default ListTodoComponent