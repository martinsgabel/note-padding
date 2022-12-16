import PropTypes from "prop-types";
import "./NotePad.css";

export default function NotePad({
  title,
  note,
  setTitle,
  setNote,
  submitNote,
}) {
  return (
    <form>
      <input
        className="title-input"
        label="note-title"
        placeholder="Note Title"
        type="text"
        value={title}
        onChange={setTitle}
      />
      <textarea
        className="text-input"
        label="note-text"
        placeholder="Write your note here"
        type="text"
        value={note}
        onChange={setNote}
      />
      <button
        className="send-button"
        type="button"
        onClick={submitNote}
        disabled={!title && !note}
      >
        Send
      </button>
    </form>
  );
}

NotePad.propTypes = {
  title: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  setTitle: PropTypes.func,
  setNote: PropTypes.func,
  submitNote: PropTypes.func,
};
