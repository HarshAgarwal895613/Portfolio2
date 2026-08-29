import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close image modal">
          <X size={20} />
        </button>
        <img src={image} alt="Enlarged Certificate View" />
      </div>
    </div>
  );
};
