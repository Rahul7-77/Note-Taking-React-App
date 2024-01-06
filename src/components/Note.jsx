import React from "react";

function Note(props) {
    function deletenote(event) {
        props.helpdelete(props.id)
        event.preventDefault();
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={deletenote}>DELETE</button>
        </div>
    );
}

export default Note;
