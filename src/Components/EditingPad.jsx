import PropTypes from 'prop-types';

export default function EditingPad({ 
  title, editTitle, note, editNote, setTitle, setNote, submitNote 
}) {
  return (
    <form>
      <input
        label="note-title"
        placeholder={ editTitle }
        type="text"
        value={ editTitle }
        onChange={ setTitle }
      />
      <input
        label="note-text"
        placeholder={ editNote }
        type="text"
        value={ editNote }
        onChange={ setNote }
      />
      <button
        type="button"
        onClick={ submitNote }
      >
        Save
      </button>
    </form>
  )
}

EditingPad.propTypes = {
  title: PropTypes.string.isRequired, 
  editTitle: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired, 
  editNote: PropTypes.string.isRequired,
  setTitle: PropTypes.func, 
  setNote: PropTypes.func, 
  submitNote: PropTypes.func,
}