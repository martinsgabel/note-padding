import PropTypes from 'prop-types';

export default function EditingPad({ newTitle, newNote, id, saveEditedNote, setNewTitle, setNewNote, cancelEditing }) {

  return (
    <form>
      <input
        label="note-title"
        type="text"
        value={ newTitle }
        onChange={ setNewTitle }
      />
      <input
        label="note-text"
        type="text"
        value={ newNote }
        onChange={ setNewNote }
      />
      <button
        id={ id }
        type="button"
        onClick={ saveEditedNote }
      >
        Save
      </button>
      <button
        id={ id }
        type="button"
        onClick={ cancelEditing }
      >
        Cancel
      </button>
    </form>
  )
}

EditingPad.propTypes = {
  id: PropTypes.number.isRequired,
  saveEditedNote: PropTypes.func,
  setNewTitle: PropTypes.func, 
  setNewNote: PropTypes.func,
  newTitle: PropTypes.string,
  newNote: PropTypes.string,
  cancelEditing: PropTypes.func,
}