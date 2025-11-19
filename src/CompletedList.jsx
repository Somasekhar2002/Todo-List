import React from "react";

export default function CompletedList({todos, onDelete}){
    if(!todos.length) return <div className="empty">No Completed</div>;

    return(
        <div>
            {todos.map((t)=>(
                <div className="todo-row completed" key={t.id}>
                    <div className="todo-text">{t.text}</div>
                    <div className="todo-actions">
                        <button className="btn delete" onClick={()=> onDelete(t.id)}>Delete</button>
                    </div>
                    </div>
            ))}
        </div>
    );
}