import './BookEditor.css';
import React from 'react';

import MDEditor from './MDEditor/MDEditor';

function BookEditor() {
  const editorRef = React.useRef();
  const [value, setValue] = React.useState('Write Your Story!');

  return (
    <>
      <h2>Editor</h2>
      <div style={{ minHeight: '6em', cursor: 'text', padding: '30px' }}>
        <MDEditor value={value} setValue={setValue} />
      </div>
    </>
  );
}

export default BookEditor;
