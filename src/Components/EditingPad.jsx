import PropTypes from "prop-types";
import "./EditingPad.css";

export default function EditingPad({
  newTitle,
  newNote,
  id,
  saveEditedNote,
  setNewTitle,
  setNewNote,
  cancelEditing,
}) {
  return (
    <form className="editing-form">
      <input
        className="editing-title-input"
        label="note-title"
        type="text"
        value={newTitle}
        onChange={setNewTitle}
      />
      <textarea
        className="editing-text-input"
        label="note-text"
        type="text"
        value={newNote}
        onChange={setNewNote}
      />
      <div className="editing-buttons">
        <button
          className="editing-save-button"
          id={id} 
          type="button" 
          onClick={saveEditedNote}
        >
          Save
        </button>
        <button
          className="editing-cancel-button"
          id={id} 
          type="button" 
          onClick={cancelEditing}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

EditingPad.propTypes = {
  id: PropTypes.number.isRequired,
  saveEditedNote: PropTypes.func,
  setNewTitle: PropTypes.func,
  setNewNote: PropTypes.func,
  newTitle: PropTypes.string,
  newNote: PropTypes.string,
  cancelEditing: PropTypes.func,
};
