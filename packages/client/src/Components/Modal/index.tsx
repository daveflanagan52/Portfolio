import React, { ReactNode } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ModalProps {
  open: boolean,
  title: string,
  close: Function,
  children?: ReactNode | ReactNode[],
  footerItems?: ReactNode[],
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  if (!props.open) {
    return null;
  }
  return (
    <div className={`modal fade ${props.open ? 'show' : ''}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-dark text-light">
            <h5 className="modal-title">{props.title}</h5>
            <button type="button" className="btn-close text-light" onClick={() => props.close()}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="modal-body">
            {props.children}
          </div>
          {props.footerItems && (
            <div className="modal-footer d-flex">
              {props.footerItems}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
