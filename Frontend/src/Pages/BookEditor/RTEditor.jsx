import React, { useState, useRef } from 'react';

import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  ContentBlock,
  DraftHandleValue,
  convertFromHTML,
  convertFromRaw,
  convertToRaw,
  ContentState,
  RawDraftContentState,
} from 'draft-js';
import 'draft-js/dist/Draft.css';

import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';

const RTEditor = React.forwardRef((props, ref) => {
  const editorRef = useRef();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const setContent = props.setContent;
  const styleMap = {
    CODE: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
  };

  const focusEditor = () => {
    editorRef.current.focus();
  };

  const getBlockStyle = (block) => {
    switch (block.getType()) {
      case 'blockquote':
        return 'RichEditor-blockquote';
      default:
        return '';
    }
  };

  const onChange = (state) => {
    setEditorState(state);
    setContent(convertToRaw(editorState.getCurrentContent()));
  };

  const mapKeyToEditorCommand = (e) => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
      if (newEditorState !== editorState) {
        onChange(newEditorState);
      }
      return null;
    }
    return getDefaultKeyBinding(e);
  };

  const handleKeyCommand = (command, editorState, eventTimeStamp) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const toggleBlockType = (blockType) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle) => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  return (
    <div>
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <Editor
        ref={editorRef}
        editorState={editorState}
        placeholder="Tell a story..."
        customStyleMap={styleMap}
        blockStyleFn={(block) => getBlockStyle(block)}
        keyBindingFn={(e) => mapKeyToEditorCommand(e)}
        onChange={onChange}
        spellCheck={true}
        handleKeyCommand={handleKeyCommand}
      />
    </div>
  );
});

export default React.memo(RTEditor);
