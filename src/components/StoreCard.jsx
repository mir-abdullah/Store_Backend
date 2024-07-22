import { Link } from 'react-router-dom';
import { BiStore, BiUserCircle, BiShow, BiEnvelope, BiPhone } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import StoreModal from './StoreModal';

const StoreCard = ({ store }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
      <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
        {store.tags.join(', ')}
      </h2>
      <h4 className='my-2 text-gray-500'>{store._id}</h4>
      <div className='flex justify-start items-center gap-x-2'>
        <BiStore className='text-red-300 text-2xl' />
        <h2 className='my-1'>{store.name}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <BiUserCircle className='text-red-300 text-2xl' />
        <h2 className='my-1'>{store.owner}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <BiEnvelope className='text-red-300 text-2xl' />
        <h2 className='my-1'>{store.email}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <BiPhone className='text-red-300 text-2xl' />
        <h2 className='my-1'>{store.phoneNum}</h2>
      </div>
      <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
        <BiShow
          className='text-3xl text-blue-800 hover:text-black cursor-pointer'
          onClick={() => setShowModal(true)}
        />
        <Link to={`/stores/details/${store._id}`}>
          <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
        </Link>
        <Link to={`/stores/edit/${store._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
        </Link>
        <Link to={`/stores/delete/${store._id}`}>
          <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
        </Link>
      </div>
      {showModal && (
        <StoreModal store={store} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default StoreCard;
