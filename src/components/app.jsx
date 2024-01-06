import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./createArea";


function App() {
    const [notes, setNotes] = useState([]);
    function addNote(note) {
        setNotes(prevnotes => {
            return [...prevnotes, note];
        })
    }
    function removeNote(id) {
        setNotes(prevnotes => {
            return notes.filter((note, index) => {
                return index !== id;
            })

        })
    }
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {/* <Note key={1} title="Note title" content="Note content" /> */}
            {notes.map((noteItem, index) => {
                return <Note
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    helpdelete={removeNote}
                />
            })}
            <Footer />
        </div>
    );
}

export default App;
