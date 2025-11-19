import React from "react";

function TodoItem({item, onComplete, onDelete}){
    return(

        <div className="todo-row">
            <div className="todo-text">{item.text}</div>
            <div className="todo-actions">
                <button className="btn complete" onClick={()=>onComplete(item.id)}>Complete</button>
                <button className="btn delete" onClick={()=>onDelete(item.id)}>Delete</button>
            </div>
        </div>
    );
}

export default function TodoList({todos, onComplete, onDelete}){
    if(!todos.length) return <div className="empty">No tasks</div>;
    return(
        <div>
            {todos.map((t)=>(
                <TodoItem key={t.id} item={t} onComplete={onComplete} onDelete={onDelete}/>
            ))}
        </div>
    );
}