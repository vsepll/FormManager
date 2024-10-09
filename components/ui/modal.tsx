import React from 'react';

export const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export const ModalHeader: React.FC = ({ children }) => (
    <div className="modal-header">
        {children}
    </div>
);

export const ModalBody: React.FC = ({ children }) => (
    <div className="modal-body">
        {children}
    </div>
);

export const ModalFooter: React.FC = ({ children }) => (
    <div className="modal-footer">
        {children}
    </div>
);
