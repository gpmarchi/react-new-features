import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const NoteApp = () => {
  const storedNotes = JSON.parse(window.localStorage.getItem("notes"));
  const [notes, setNotes] = useState(storedNotes || []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  });

  const addNote = event => {
    event.preventDefault();
    setNotes([...notes, { title, body }]);
    setTitle("");
    setBody("");
  };

  const removeNote = title => {
    setNotes(notes.filter(note => note.title !== title));
  };

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>x</button>
        </div>
      ))}
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

// const App = props => {
//   const [count, setCount] = useState(props.count);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     console.log("useEffect ran");
//     document.title = count;
//   });

//   return (
//     <div>
//       <p>
//         the current {text || "count"} is {count}
//       </p>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => setCount(0)}>reset</button>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//       <input
//         type="text"
//         value={text}
//         onChange={event => setText(event.target.value)}
//       />
//     </div>
//   );
// };

ReactDOM.render(<NoteApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
