import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import BackButton from "../components/BackButton";

const ShowStore = () => {
  const [store, setStore] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4444/stores/${id}`)
      .then((res) => {
        setStore(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the store!", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Show Store</h1>
      <BackButton/>
      {loading ? (
        BsCheckLg 
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{store._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Name</span>
            <span>{store.name}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Email</span>
            <span>{store.email}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Phone Number</span>
            <span>{store.phoneNum}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Owner</span>
            <span>{store.owner}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Tags</span>
            <span>{store.tags.join(', ')}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(store.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(store.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowStore;
