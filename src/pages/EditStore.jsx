import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditStore = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [owner, setOwner] = useState("");
  const [tags,setTags] =useState([])
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4444/stores/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setPhoneNum(res.data.phoneNum);
        setOwner(res.data.owner);
        setTags[res.data.tags]
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert("error getting  the Store");
      });
  }, []);

  const handleEditStore = () => {
    setLoading(true);
    axios
      .patch(`http://localhost:4444/stores/${id}`, {
        name,
        email,
        phoneNum,
        owner,
        tags
      })
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("error updating the store");
      });
  };

  return (
    <div className="p-4">
      <BackButton></BackButton>
      <h1 className="text-3xl my-4">Edit Store</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-600">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-400 w-full py-2"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-600">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-400 w-full py-2"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-600">Phone Number</label>
          <input
            type="number"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            className="border-2 border-gray-400 w-full py-2"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-600">Owner</label>
          <input
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            className="border-2 border-gray-400 w-full py-2"
          />
        </div>
        <button className="p-2 bg-sky-400 m-8 " onClick={handleEditStore}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditStore;
