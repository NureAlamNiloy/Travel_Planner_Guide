import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Trip = () => {
    const [reservations, setReservations] = useState([]);
    const [completedReservations, setCompletedReservations] = useState([]);
    const [userEmail, setUserEmail] = useState('');
  
    useEffect(() => {
      // Fetch user email from localStorage
      const token = localStorage.getItem('auth');
  
      if (!token) {
        return '';
      }
  
      const decode = JSON.parse(token);
      const email = decode.user.email;
      setUserEmail(email);
    }, []);
  
    // Fetch reservations data from the API
    useEffect(() => {
      // Make an API request to fetch the data
      axios.get('http://127.0.0.1:8000/places/trip/?format=json')
        .then((response) => {
          const allReservations = response.data;
          const filteredReservations = allReservations.filter((reservation) => reservation.email === userEmail);
  
          setReservations(filteredReservations);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [userEmail]);
  
    const markAsCompleted = (reservationId) => {
      // Find the reservation by ID
      const updatedReservations = reservations.map((reservation) => {
        if (reservation.id === reservationId) {
          reservation.is_completed = true;
          return reservation;
        }
        return reservation;
      });
  
      // Move the completed reservation to the completedReservations state
      const completedReservation = reservations.find((reservation) => reservation.id === reservationId);
      setCompletedReservations([...completedReservations, completedReservation]);
  
      // Update the reservations state
      setReservations(updatedReservations);
    };
    return (
        <div className="bg-transparent">
        <h1 className='py-2 text-center text-white font-bold'>Upcoming Trips</h1>
        <table className="w-full text-white border border-collapse">
          {/* ... Table Header ... */}
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id} className="bg-gray-100 text-gray-800 text-center">
                <td className="py-2 px-4">{reservation.place}</td>
                <td className="py-2 px-4">{reservation.username}</td>
                <td className="py-2 px-4">{reservation.email}</td>
                <td className="py-2 px-4">{reservation.check_in}</td>
                <td className="py-2 px-4">{reservation.check_out}</td>
                <td className="py-2 px-4">{reservation.number_of_people}</td>
                <td className="py-2 px-4">
                  {reservation.is_completed ? (
                    <span className="text-green-500">Completed</span>
                  ) : (
                    <button
                      className="text-blue-500"
                      onClick={() => markAsCompleted(reservation.id)}
                    >
                      Complete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <h1 className='py-2 text-center text-white font-bold'>Completed Trips</h1>
        <table className="w-full text-white border border-collapse">
          {/* ... Table Header ... */}
          <tbody>
            {completedReservations.map((reservation) => (
              <tr key={reservation.id} className="bg-gray-100 text-gray-800 text-center">
                <td className="py-2 px-4">{reservation.place}</td>
                <td className="py-2 px-4">{reservation.username}</td>
                <td className="py-2 px-4">{reservation.email}</td>
                <td className="py-2 px-4">{reservation.check_in}</td>
                <td className="py-2 px-4">{reservation.check_out}</td>
                <td className="py-2 px-4">{reservation.number_of_people}</td>
                <td className="py-2 px-4">
                  <span className="text-green-500">Completed</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default Trip;