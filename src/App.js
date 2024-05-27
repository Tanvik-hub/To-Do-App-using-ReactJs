import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: 'learn react',
    },
    {
      id: 2,
      task: 'learn angular',
    },
    {
      id: 3,
      task: 'learn web',
    },
  ]);

  let nextid = 3;

  function addNewTodo() {
    if (inputValue === '') {
      alert('Please add a task');
    } else {
      let newTodo = [
        ...todos,
        {
          id: ++nextid,
          task: inputValue,
        },
      ];
      setTodos(newTodo);
      setInputValue('');
    }
  }

  function tododelete(id){
    let deletedtodos=todos.filter(
      (todo)=>{
        return todo.id!==id
      }
    )
    setTodos(deletedtodos)

  }
  const s = {
    fontSize: '2px',
    position: 'fixed',
    bottom: '20px', 
    right: '20px', 
    background: 'lightgray',
    padding: '10px',
    borderRadius: '5px',
  };


  return (
    <div className="container mt-5 w-50">
      <h1 className="text-center">TODO APP USING REACT</h1>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addNewTodo} className="btn btn-primary">
          Add
        </button>
      </div>
      <ul className="list-group mt-4">
        {todos.map((t) => {
          return (
            <li key={t.id} className="list-group-item">
              <p>{t.task}</p>
              <button onClick={()=>{
                tododelete(t.id)
              }} className="btn">❌</button>
            </li>
          );
        })}
      </ul>
      <div style={s}>
            <p>background color change</p>
            <input type='color' onChange={
                (e)=>{
                    document.body.style.background=e.target.value

                }
            }></input>
        </div>





    </div>
  );
}












export default App;
