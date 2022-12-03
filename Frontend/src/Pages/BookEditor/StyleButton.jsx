import React from 'react';

const StyleButton = ({ active, style, label, onToggle }) => {
  const _onToggle = (e) => {
    e.preventDefault();
    onToggle(style);
  };

  const className = 'RichEditor-styleButton';

  return (
    <button
      className={className + `${active ? ' RichEditor-activeButton' : ''}`}
      onClick={_onToggle}
    >
      {label}
    </button>
  );
};

export default React.memo(StyleButton);
