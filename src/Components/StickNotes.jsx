export default function StickNotes() {
  const list = JSON.parse(localStorage.getItem('noteList'))

  return (
    <div>
      { list
        .map(note => (
          <div key={ note.id }>
            <h1>{ note.title }</h1>
            <div>{ note.note }</div>
          </div>
        ))
      }
    </div>
  )
}