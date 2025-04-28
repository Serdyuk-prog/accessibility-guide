import React from 'react';

const modalStyles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'blue',
};

interface IBlockModalProps {
  show: boolean;
  onAction: () => void;  
  onCancel?: () => void;
}

const BlockModal = (props: IBlockModalProps) => {
  const { show, onAction } = props;
  if (show) {
    return (
      <div style={modalStyles}>
        <h1>I'm a Modal!</h1>
        <button onClick={onAction}>Hide Me</button>
      </div>
    );
  }

  return null;
};

export default BlockModal;
