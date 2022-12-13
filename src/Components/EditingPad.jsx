import PropTypes from 'prop-types';

export default function EditingPad({ id, saveEditedNote, setNewTitle, setNewNote }) {

  return (
    <form>
      <input
        label="note-title"
        type="text"
        onChange={ setNewTitle }
      />
      <input
        label="note-text"
        type="text"
        onChange={ setNewNote }
      />
      <button
        id={ id }
        type="button"
        onClick={ saveEditedNote }
      >
        Save
      </button>
    </form>
  )
}

EditingPad.propTypes = {
  id: PropTypes.number.isRequired,
  saveEditedNote: PropTypes.func,
  setNewTitle: PropTypes.func, 
  setNewNote: PropTypes.func, 
  // submitNote: PropTypes.func,
}