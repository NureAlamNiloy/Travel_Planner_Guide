

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdVerified } from 'react-icons/md';

const Profile = () => {

  const [userData, setUserData] = useState({});
  const [newData, setNewData] = useState({ fullname: '', bio: '', image: '',user_id:'' });

  useEffect(() => {
    const token = localStorage.getItem("auth")
    
    if (!token){
      return "";
      // console.log(full_name, username, bio, image, verified)
    }
    const decode = JSON.parse(token) 

    const user_id = decode.user.user_id
    const username = decode.user.username
    const email =decode.user.email  
    const verified = decode.user.verified
    setUserData({ username, verified, user_id ,email});
  }, []);






  const [editableFields, setEditableFields] = useState({
    image: '',
    fullname: '',
    email: '',
    studyInfo: '',
    bio: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Load data from localStorage and populate the editableFields state.
    const profileData = JSON.parse(localStorage.getItem('profileData'));
    if (profileData) {
      setEditableFields(profileData);
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Save the edited data to localStorage.
    localStorage.setItem('profileData', JSON.stringify(editableFields));
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Revert to the original data from localStorage.
    const profileData = JSON.parse(localStorage.getItem('profileData'));
    if (profileData) {
      setEditableFields(profileData);
    }
    setIsEditing(false);
  };

  const handleFieldChange = (field, value) => {
    setEditableFields({
      ...editableFields,
      [field]: value,
    });
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // You can handle file upload here, e.g., upload to a server or store it locally.
      // For now, we'll just set it in the state.
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditableFields({
          ...editableFields,
          image: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-1/2 mx-auto mt-10 bg-gray-900 bg-opacity-40 p-6 rounded-lg shadow-md">
     <div className="mb-4">
        {isEditing ? (
          <input
            type="file"
            accept="image/*"
            className="py-2 px-3 text-white"
            onChange={handleImageChange}
          />
        ) : (
          <img
            src={editableFields.image}
            alt="Profile Image"
            className="w-32 h-32 object-cover rounded-full  border border-white"
          />
        )}
      </div>
      <div className='mb-4 flex gap-x-2 items-center'>
      <p className='text-white'>{userData.username}</p>
          {
             <MdVerified className='text-blue-500'/> 
          }
      </div>
    <div className="mb-4">
      <label className="block  font-bold mb-2 text-white">Full Name</label>
      {isEditing ? (
        <input
          type="text"
          className="border rounded w-full py-2 px-3"
          value={editableFields.fullname}
          onChange={(e) => handleFieldChange('fullname', e.target.value)}
        />
      ) : (
        <p className='text-white'>{editableFields.fullname}</p>
      )}
    </div>
    <div className="mb-4">
      <label className="block  font-bold mb-2 text-white">Email</label>
        <p className='text-white'>{userData.email}</p>
    </div>
    <div className="mb-4">
      <label className="block  font-bold mb-2 text-white">Study Info</label>
      {isEditing ? (
        <input
          type="text"
          className="border rounded w-full py-2 px-3"
          value={editableFields.studyInfo}
          onChange={(e) => handleFieldChange('studyInfo', e.target.value)}
        />
      ) : (
        <p className='text-white'>{editableFields.studyInfo}</p>
      )}
    </div>
    <div className="mb-4">
      <label className="block  font-bold mb-2 text-white">Bio</label>
      {isEditing ? (
        <textarea
          className="border rounded w-full py-2 px-3"
          value={editableFields.bio}
          onChange={(e) => handleFieldChange('bio', e.target.value)}
        />
      ) : (
        <p className='text-white'>{editableFields.bio}</p>
      )}
    </div>
    {isEditing ? (
      <div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
          onClick={handleSaveClick}
        >
          Save
        </button>
       
        <button
          className="bg-gray-300  py-2 px-4 rounded hover:bg-gray-400"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </div>
    ) : (
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleEditClick}
      >
        Edit
      </button>
    )}
  </div>
  );
};

export default Profile;