import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NoteModal = ({ closeModal, addNote, currentNote, editNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setDescription(currentNote.description);
    }
  }, [currentNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentNote) {
      editNote(currentNote._id, title, description);
    } else {
      addNote(title, description);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">
          {currentNote ? 'Edit Task' : 'Add New Task'}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task Title"
            className="border p-2 w-full mb-4 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
            className="border p-2 w-full mb-4 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md font-semibold transition-transform duration-200 transform hover:bg-blue-600 active:scale-95"
          >
            {currentNote ? 'Update Task' : 'Add Task'}
          </button>
        </form>

        <button
          className="mt-4 w-full text-red-500 font-semibold py-2 rounded-md transition-transform duration-200 transform hover:bg-red-100 active:scale-95"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NoteModal;
