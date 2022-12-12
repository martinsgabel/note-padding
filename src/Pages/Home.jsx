import { useEffect, useState } from "react";
import EditingPad from "../Components/EditingPad";
import NotePad from "../Components/NotePad";
import StickNotes from "../Components/StickNotes";

export default function Home() {
  const [title, setTitle] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [note, setNote] = useState('')
  const [editNote, setEditNote] = useState('')
  const [editing, setEditing] = useState(false)
  const [noteList, setNoteList] = useState(JSON.parse(localStorage.getItem('noteList')) ?? [])

  function submitNote() {
    const noteObj = {
      id: Math.floor(Math.random() * 90000) + 10000,
      title,
      note
    }

    const newNote = [...noteList, noteObj]

    setNoteList(newNote)

    setNote('')
    setTitle('')
  }

  useEffect(() => {
    localStorage.setItem('noteList', JSON.stringify(noteList))
  }, [noteList])

  function deleteNote(id) {
    const updatedList = noteList.filter(item => item.id !== Number(id))
    setNoteList(updatedList)
  }

  function editingNote(target) {
    setEditing(true)
    setEditTitle(target.title)
    setEditNote(target.note)
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
      { noteList && <StickNotes
        list={ noteList }
        deleteNote={ (e) => deleteNote(e.target.id) }
        editNote={ (e) => editingNote(e.target) }
      />}
      { editing && <EditingPad
        title={ title }
        editTitle={ editTitle }
        note={ note }
        editNote={ editNote }
        setTitle={ (e) => setTitle(e.target.value) }
        setNote={ (e) => setNote(e.target.value) }
        submitNote={ () => submitNote() } 
      />}
    </main>
  )
}