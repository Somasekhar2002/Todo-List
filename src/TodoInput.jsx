import React, {useState} from "react";

export default function TodoInput({onAdd}){
    const [value, setValue]= useState("");

    function handleSubmit(e){
        e.preventDefault();
        onAdd(value);
        setValue("");
    }

    return(
        <form className="todo-input" onSubmit={handleSubmit}>
       
            <input className="text-input" placeholder="Todo task" value={value} onChange={(e)=> setValue(e.target.value)}/>

            <button type="submit" className="add-button" aria-label="Add task">+</button>
        </form>
    );
}