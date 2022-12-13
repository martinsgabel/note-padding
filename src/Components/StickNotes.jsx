import PropTypes from 'prop-types';
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";
import EditingPad from './EditingPad';

export default function StickNotes({list, editing, deleteNote, editNote, saveEditedNote, setNewTitle, setNewNote}) {
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
              onClick={ editNote }
            >
              <HiPencilAlt size={17} />
            </button>
            <button 
              id={ note.id }
              type="button"
              onClick={ deleteNote }
            >
              <HiOutlineTrash size={17} />
            </button>
            { editing === note.id ? (<EditingPad
              prevTitle={ note.title }
              prevNote={ note.note }
              id={ note.id }
              saveEditedNote={ saveEditedNote }
              setNewTitle={ setNewTitle }
              setNewNote={ setNewNote } />) : ''
            }
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
  })),
  editing: PropTypes.number,
  deleteNote: PropTypes.func,
  editNote: PropTypes.func,
  saveEditedNote: PropTypes.func,
  setNewTitle: PropTypes.func,
  setNewNote: PropTypes.func,
}