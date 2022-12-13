import { useEffect, useState } from "react";
import NotePad from "../Components/NotePad";
import StickNotes from "../Components/StickNotes";

export default function Home() {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newNote, setNewNote] = useState('')
  const [editing, setEditing] = useState(null)
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
    setEditing(Number(target.id))
  }

  function saveEditedNote(id) {
    console.log('save edit:', id);
    console.log('save edit:', noteList);
    console.log('newtitle:', newTitle);

    noteList.splice(id, 2, { id: Number(id), title: newTitle, note: newNote });

    // const index = noteList.findIndex(item => item.id === Number(id))

    // console.log('selected Id:', index);
    // console.log('selected Obj:',  noteList[index]); 
    // console.log('selected Obj Id:',  noteList[index].id);

    // const editedObj = {
    //   noteList[index].id: id,
    //   noteList[index].title: newTitle,
    //   noteList[index].note: newNote
    // }

    // noteList[index].title = newTitle;
    // noteList[index].note = newNote;

    // setNoteList(noteList[index].title = newTitle)
    // setNoteList(noteList[index].note = newNote)
    
    // console.log('changed Obj:',  noteList[index]); 
    console.log(noteList);    
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
        editing={ editing }
        deleteNote={ (e) => deleteNote(e.target.id) }
        editNote={ (e) => editingNote(e.target) }
        saveEditedNote={ (e) => saveEditedNote(e.target.id) }
        setNewTitle={ (e) => setNewTitle(e.target.value) }
        setNewNote={ (e) => setNewNote(e.target.value) }
      />}
    </main>
  )
}