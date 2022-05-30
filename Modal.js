import React, { useState } from 'react';
import './style.css';

export default function Modal() {
  const [open, setOpen] = useState(false);

  let modal = (
    <div>
      <div className="modalbox">
        <div>
          <button onClick={closeModal}>X</button>
        </div>
        <div>
          <p>Hey this is Modal box</p>
        </div>
        <div className="footer">
          <div>
            <button onClick={closeModal}>Cancel</button>
          </div>
          <div>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }
  return (
    <div>
      <div>
        <h2>Please Open Modla</h2>
      </div>
      <div>
        <button onClick={openModal}>Open Modal</button>
      </div>
      {open && modal}
    </div>
  );
}
