import { useState } from 'react';

export default function NotePad() {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [noteList, setNoteList] = useState([])

  function submitNote() {
    const noteObj = {
      id: Math.random(),
      title,
      note
    }

    setNoteList([...noteList, noteObj])

    localStorage.setItem('noteList', JSON.stringify(noteList))

    setNote('')
    setTitle('')
  }

  return (
    <form>
      <input
        label="note-title"
        placeholder="Note Title"
        type="text"
        value={title}
        onChange={ (e) => setTitle(e.target.value) }
      />
      <input
        label="note-text"
        placeholder="Write your note here"
        type="text"
        value={note}
        onChange={ (e) => setNote(e.target.value) }
      />
      <button
        type="button"
        onClick={ () => submitNote() }
      >
        Send
      </button>
    </form>
  )
}