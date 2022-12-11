import PropTypes from 'prop-types';

export default function StickNotes({list, deleteNote}) {
  return (
    <div>
      { list
        .map(note => (
          <div key={ note.id }>
            <h1>{ note.title }</h1>
            <div>{ note.note }</div>
            <button 
              id={ note.id }
              type="button"
              onClick={ deleteNote }
            >
              X
            </button>
          </div>
        ))
      }
    </div>
  )
}

StickNotes.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
  }))
}