import React, { useEffect } from 'react';
import './Modal.scss';

type ModalProps = {
  isActive: boolean
  onClose: Function
  children: React.ReactNode
  className?: string
  hideCloseBtn?: boolean
  title?: string
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  useEffect(() => {
    const activeClass = 'modal-active';

    if (props.isActive) {
      document.querySelector('body')!.classList.add(activeClass);
    }

    return () => {
      document.querySelector('body')!.classList.remove(activeClass);
    }
  }, [props.isActive]);

  function handleClose(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  }

  return (
    <div
      className={`modal-overlay ${props.isActive ? "modal-overlay--active" : ""}`}
      onClick={handleClose}
    >
      <div className={`modal ${props.isActive ? "modal--active" : ""}`}>
        <div className={"modal__wrapper"} onClick={handleClose}>
          <div className={`modal__content ${props.className ? props.className : ""}`}>
            {props.hideCloseBtn !== true && (
              <div className={"modal__close-btn"} onClick={handleClose}>×</div>
            )}
            {props.title && (
              <div className={"modal__title"}>{props.title}</div>
            )}
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal;