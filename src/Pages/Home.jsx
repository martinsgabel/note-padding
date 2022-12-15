import { useEffect, useState } from "react";
import NotePad from "../Components/NotePad";
import StickNotes from "../Components/StickNotes";
import "./Home.css";

export default function Home() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newNote, setNewNote] = useState("");
  const [editing, setEditing] = useState(null);
  const [noteList, setNoteList] = useState(
    JSON.parse(localStorage.getItem("noteList")) ?? []
  );

  function submitNote() {
    const noteObj = {
      id: Math.floor(Math.random() * 90000) + 10000,
      title,
      note,
    };

    const newNote = [...noteList, noteObj];

    setNoteList(newNote);

    setNote("");
    setTitle("");
  }

  useEffect(() => {
    localStorage.setItem("noteList", JSON.stringify(noteList));
  }, [noteList]);

  function deleteNote(id) {
    const updatedList = noteList.filter((item) => item.id !== Number(id));
    setNoteList(updatedList);
  }

  function editingNote(target) {
    setEditing(Number(target.id));

    for (const obj of noteList) {
      if (obj.id === Number(target.id)) {
        setNewTitle(obj.title);
        setNewNote(obj.note);
        break;
      }
    }
  }

  function saveEditedNote(id) {
    for (const obj of noteList) {
      if (obj.id === Number(id)) {
        if (newTitle !== "") obj.title = newTitle;
        if (newNote !== "") obj.note = newNote;
        break;
      }
    }

    localStorage.setItem("noteList", JSON.stringify(noteList));

    setEditing(null);
  }

  return (
    <main>
      <div className="pad">
        <h1 className="title">Note Padding</h1>
        <NotePad
          title={title}
          note={note}
          setTitle={(e) => setTitle(e.target.value)}
          setNote={(e) => setNote(e.target.value)}
          submitNote={() => submitNote()}
        />
      </div>      
      <div className="notes">
        {noteList && (
          <StickNotes
            list={noteList}
            editing={editing}
            newTitle={newTitle}
            newNote={newNote}
            deleteNote={(e) => deleteNote(e.target.id)}
            editNote={(e) => editingNote(e.target)}
            saveEditedNote={(e) => saveEditedNote(e.target.id)}
            setNewTitle={(e) => setNewTitle(e.target.value)}
            setNewNote={(e) => setNewNote(e.target.value)}
            cancelEditing={() => setEditing(null)}
          />
        )}
      </div>      
    </main>
  );
}
