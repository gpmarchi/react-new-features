import React, { useEffect, useReducer } from "react";
import notesReducer from "../reducers/notes";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";
import NotesContext from "../context/notes-context";

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const storedNotes = JSON.parse(window.localStorage.getItem("notes"));

    if (storedNotes) {
      dispatch({ type: "POPULATE_NOTES", notes: storedNotes });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const removeNote = title => {
    dispatch({ type: "REMOVE_NOTE", title });
  };

  return (
    <div>
      <h1>Notes</h1>
      <NoteList notes={notes} removeNote={removeNote} />
      <AddNoteForm dispatch={dispatch} />
    </div>
  );
};

export default NoteApp;
