import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Booking = () => {
  const [reservations, setReservations] = useState([]);
  const [userEmail, setUserEmail] = useState(''); // You need to set the user's email
  useEffect(() => {
    const token = localStorage.getItem("auth")
    
    if (!token){
      return "";
      // console.log(full_name, username, bio, image, verified)
    }
    const decode = JSON.parse(token) 
    const email =decode.user.email  
    setUserEmail({email});
  }, []);

  // Fetch reservations data from the API
  useEffect(() => {
    // Make an API request to fetch the data
    axios.get('https://scriptsurgeons.pythonanywhere.com/api/reservations/?format=json')
      .then((response) => {
        const filteredReservations = response.data.filter((reservation) => reservation.email === userEmail['email']);
       
      setReservations(filteredReservations);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [userEmail]);

    return (
      <div className="bg-transparent">
        <h1 className='py-2 text-center text-white'>Booking Information</h1>
  <table className="w-full text-white border border-collapse">
    <thead className="bg-gray-800 text-gray-300">
      <tr>
        <th className="py-2 px-4">Hotel Name</th>
        <th className="py-2 px-4">Full Name</th>
        <th className="py-2 px-4">Contact No</th>
        <th className="py-2 px-4">Email</th>
        <th className="py-2 px-4">Check-In</th>
        <th className="py-2 px-4">Check-Out</th>
        <th className="py-2 px-4">Adults</th>
        <th className="py-2 px-4">Children</th>
        <th className="py-2 px-4">Is Confirmed</th>
      </tr>
    </thead>
    <tbody>
      {reservations.map((reservation) => (
        <tr key={reservation.id} className="bg-gray-100 text-gray-800 text-center">
          <td className="py-2 px-4">{reservation.hotel_name}</td>
          <td className="py-2 px-4">{reservation.full_name}</td>
          <td className="py-2 px-4">{reservation.contact_no}</td>
          <td className="py-2 px-4">{reservation.email}</td>
          <td className="py-2 px-4">{reservation.check_in}</td>
          <td className="py-2 px-4">{reservation.check_out}</td>
          <td className="py-2 px-4">{reservation.adults}</td>
          <td className="py-2 px-4">{reservation.children}</td>
          <td className="py-2 px-4">
            {reservation.is_confirmed ? (
              <span className="text-green-500">Approved</span>
            ) : (
              <span className="text-red-500">Approve</span>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    );
};

export default Booking;