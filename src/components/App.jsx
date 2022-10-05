import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);
  const [noteData, setNoteData] = React.useState({
    title: "",
    content: ""
  });

  function addNote(event) {
    setNotes((prev) => {
      return [...prev, noteData];
    });
    console.log(notes);

    event.preventDefault();
  }

  function handleOnChange(event) {
    const { value, name } = event.target;

    setNoteData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  const noteRender = notes.map((val, index) => {
    return (
      <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteNote={deleteNote}
      />
    );
  });

  function deleteNote(id) {
    setNotes(
      notes.filter((val, index) => {
        return id !== index;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea
        handleOnChange={handleOnChange}
        noteData={noteData}
        addNote={addNote}
      />
      {noteRender}
      <Footer />
    </div>
  );
}

export default App;
