import React from 'react';

const StoreModal = ({ store, onClose }) => {
  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold mb-4'>{store.name}</h2>
        <p><strong>Email:</strong> {store.email}</p>
        <p><strong>Phone Number:</strong> {store.phoneNum}</p>
        <p><strong>Owner:</strong> {store.owner}</p>
        <p><strong>Tags:</strong> {store.tags.join(', ')}</p>
        <button
          className='mt-4 bg-red-500 text-white px-4 py-2 rounded'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default StoreModal;
