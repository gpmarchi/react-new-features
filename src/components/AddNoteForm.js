import React, { useState, useContext } from "react";
import NotesContext from "../context/notes-context";

const AddNoteForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { dispatch } = useContext(NotesContext);

  const addNote = event => {
    event.preventDefault();
    dispatch({ type: "ADD_NOTE", note: { title, body } });
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="3"
          value={body}
          onChange={event => setBody(event.target.value)}
        ></textarea>
        <button>add note</button>
      </form>
    </div>
  );
};

export default AddNoteForm;
