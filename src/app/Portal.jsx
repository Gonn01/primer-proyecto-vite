import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
export function Popup({ isOpen, onClose, children }) {
  const popupRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div ref={popupRef} className="p-8 rounded-lg shadow-lg bg-slate-500">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          X
        </button>
        <div className="popup-content">{children}</div>
      </div>
    </div>,
    document.getElementById("popup-root")
  );
}
