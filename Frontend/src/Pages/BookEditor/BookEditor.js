import './BookEditor.css';
import React from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

import RTEditor from './RTEditor';

// import Toolbar from './Toolbar';

function BookEditor() {
  const editorRef = React.useRef();
  const [content, setContent] = React.useState();

  // const saveContent = (content) => {
  //   window.localStorage.setItem('markdown', JSON.stringify(content));
  // };

  // const handleChange = (editorState) => {
  //   const contentState = editorState.getCurrentContent();
  //   let rawContent = convertToRaw(contentState);
  //   console.log('content state', rawContent.blocks[0].text);

  //   saveContent(rawContent.blocks[0].text);
  //   setEditorState(editorState);
  // };

  // api request to save editor markdown

  return (
    <>
      <h2>Editor</h2>
      <div style={{ minHeight: '6em', cursor: 'text', padding: '30px' }}>
        {/* <Editor
          style={{
            background: 'gray',
            padding: '30px 100px',
            fontSize: '20px',
          }}
          ref={editorRef}
          editorState={editorState}
          onChange={handleChange}
          placeholder="Write something!"
          handleKeyCommand={handleKeyCommand}
        /> */}
        <RTEditor setContent={setContent} />
      </div>
    </>
  );
}

export default BookEditor;
