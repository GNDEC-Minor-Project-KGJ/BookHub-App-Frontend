import "./BookEditor.css"
import React from 'react'
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

function BookEditor() {
    const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
    );
    
    const editor = React.useRef(null);
    function focusEditor() {
        editor.current.focus();
    }

  return (
      <div
          style={{ minHeight: "6em", cursor: "text", padding: "30px"}}
      onClick={focusEditor}
      >
      <h2>Editor</h2>
          <Editor
              style={{ background: "gray", padding: "30px 100px", fontSize: "20px" }}
        ref={editor}
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Write something!"
      />
    </div>
  )
}

export default BookEditor