import PropTypes from 'prop-types';
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";

export default function StickNotes({list, deleteNote, editNote}) {
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