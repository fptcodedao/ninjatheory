import React from 'react';
import { modalService } from './ModalListener';

export default function BasicModalContent(props: any) {
  function closeModal() {
    if (props.close) {
      props.close();
      return;
    }

    modalService.close();
  }

  function onClick() {
    if (props.closeOnSubmit) {
      modalService.close();
    }
    props.onSubmit()
  }

  return (
    <div className={`basic-modal ${props.className ? props.className : ''}`}>
      {props.customTitle && (
        <div className="basic-modal__title">
          {props.customTitle}
        </div>
      )}
      <div className="basic-modal__content">
        {props.content}
      </div>
      {!props.noPanel && (
        <div className={`basic-modal__panel`}>
          <div className="btn" onClick={closeModal}>Cancel</div>

          {!!props.onSubmit && (
            <div className="btn btn--gradient ml-4" onClick={onClick}>
              {props.submitText ?? 'Confirm'}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
