import PropTypes from "prop-types";
import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import EditingPad from "./EditingPad";
import "./StickNotes.css";

export default function StickNotes({
  list,
  editing,
  newTitle,
  newNote,
  cancelEditing,
  deleteNote,
  editNote,
  saveEditedNote,
  setNewTitle,
  setNewNote,
}) {
  return (
    <div className="listof-cards">
      {list.map((note) => (
        <div className="single-card" key={note.id}>
          <div className="header-card">
            <h1 className="titleof-card">{note.title}</h1>
            <button className="editbuttonof-card" id={note.id} type="button" onClick={editNote}>
              <HiOutlinePencilAlt size={17} />
            </button>
            <button className="deletebuttonof-card" id={note.id} type="button" onClick={deleteNote}>
              <HiOutlineTrash size={17} />
            </button>
          </div>
          <div className="textof-card">{note.note}</div>
          {editing === note.id ? (
            <EditingPad
              newTitle={newTitle}
              newNote={newNote}
              id={note.id}
              saveEditedNote={saveEditedNote}
              setNewTitle={setNewTitle}
              setNewNote={setNewNote}
              cancelEditing={cancelEditing}
            />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}

StickNotes.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      note: PropTypes.string.isRequired,
    })
  ),
  editing: PropTypes.number,
  deleteNote: PropTypes.func,
  editNote: PropTypes.func,
  saveEditedNote: PropTypes.func,
  setNewTitle: PropTypes.func,
  setNewNote: PropTypes.func,
  newTitle: PropTypes.string,
  newNote: PropTypes.string,
  cancelEditing: PropTypes.func,
};
