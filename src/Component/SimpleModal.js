import React from 'react';

const SimpleModal = (props) => {
  return (
    <div className={'modal-enter' + (props.iscorrect == "Wrong" ? ' worng-modal' : ' correct-modal')}>
      <div className="praise">{props.iscorrect}</div>
    </div>
  );
};


export default SimpleModal;
