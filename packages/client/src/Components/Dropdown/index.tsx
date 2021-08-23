import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, ReactNode } from 'react';

interface DropdownProps {
  children: ReactNode | ReactNode[],
  text: ReactNode,
  label: string,
  className?: string,
  popClassName?: string,
}

const Dropdown: React.FC<DropdownProps> = ({
  children, text, label, className, popClassName,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (open) {
      setTimeout(() => setOpen(false), 200);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={popClassName || 'dropdown'} onClick={() => setOpen(!open)}>
      <button
        type="button"
        className={className || 'btn btn-primary py-0 text-capitalize'}
        role="button"
        aria-label={label}
        aria-expanded={open}
      >
        {text}
        <FontAwesomeIcon icon={faCaretDown} className="ms-2" />
      </button>

      <ul className={`dropdown-menu dropdown-menu-end py-0${open ? ' show' : ''}`}>
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;
