import { useState } from "react";
import NotePad from "../Components/NotePad";
import StickNotes from "../Components/StickNotes";

export default function Home() {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [noteList, setNoteList] = useState([])

  function submitNote() {
    const noteObj = {
      id: Math.random(),
      title,
      note
    }

    const newNote = [...noteList, noteObj]

    setNoteList(newNote)

    localStorage.setItem('noteList', JSON.stringify(noteList))

    setNote('')
    setTitle('')
  }

  return (
    <main>
      Note Padding
      <NotePad 
        title={ title }
        note={ note }
        setTitle={ (e) => setTitle(e.target.value) }
        setNote={ (e) => setNote(e.target.value) }
        submitNote={ () => submitNote() } 
      />
      <StickNotes
        list={ noteList }
      />
    </main>
  )
}