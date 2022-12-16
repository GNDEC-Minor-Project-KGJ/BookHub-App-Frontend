import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

import ReactDOMServer from 'react-dom/server';

function MDEditor({ value, setValue }) {

   

  const onChange = React.useCallback((value) => {
    setValue(value);
    setTimeout(() => {console.log(value)}, 5000) ;
  }, []);

  const handleCleanup = () => {
    setValue(``);
  };

  const autofocusNoSpellcheckerOptions = React.useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
      autosave: {
        enabled: true,
        uniqueId: 'Editor',
        delay: 1000,
      },
    };
  }, []);

  return (
    <>
      <SimpleMDE
        style={{ fontSize: '24px', textAlign: 'left' }}
        id="Editor"
        value={value}
        options={autofocusNoSpellcheckerOptions}
        onChange={onChange}
      />
      {/* <button onClick={handleCleanup}>Clear</button> */}
    </>
  );
}

export default MDEditor;
