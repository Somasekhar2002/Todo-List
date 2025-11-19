import React, {useEffect, useState} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import CompletedList from "./CompletedList";

const LOCAL_KEY="my_todos_v1";

export default function App(){
  const [todos, setTodos]=useState([]);

  useEffect(()=>{
    const raw = localStorage.getItem("myTodos");
    if(raw) (JSON.parse(raw));
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_KEY,JSON.stringify(todos));
  },[todos]);

  function addTodo(text){
    if (!text || !text.trim()) return;
    const newTodo={
      id:Date.now().toString(),
      text:text.trim(),
      completed:false,
    };
    setTodos((t)=> [newTodo, ...t]);
  }

  function completeTodo(id){
    setTodos((t)=>
    t.map((item)=>(item.id === id ? {...item, completed: true}: item))
  );
  }

  function deleteTodo(id){
    setTodos((t)=> t.filter((item)=> item.id!== id));
  }

  return(
    <div className="app-shell">
      <div className="card">
        <h1 className="title">My To do List</h1>

        <TodoInput onAdd ={addTodo}/>

        <section className="section">
          <h2 className="section-title">To be completed</h2>

          <TodoList todos = {todos.filter((t)=> !t.completed)}
          onComplete={completeTodo}
          onDelete={deleteTodo}/>

        </section>

        <hr/>
        <section className="section">
          <h2 className="section-title">Completed Tasks</h2>

          <CompletedList todos = {todos.filter((t)=> t.completed)}
          onDelete={deleteTodo}/>

        </section>
      </div>
    </div>

  );
}