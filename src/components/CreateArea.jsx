import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          onChange={props.handleOnChange}
          value={props.noteData.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={props.handleOnChange}
          value={props.noteData.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={props.addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
