import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function HotelReservation() {
  const { id } = useParams();
  const [userEmail, setUserEmail] = useState('');
  const [reservationData, setReservationData] = useState({
    hotel_name: '',
    full_name: '',
    contact_no: '',
    email: '',
    check_in: '',
    check_out: '',
    adults: 1,
    children: 0,
  });

  useEffect(() => {
    axios
      .get(`https://scriptsurgeons.pythonanywhere.com/api/hotels/${id}/?format=json`)
      .then((response) => {
        setReservationData({...reservationData, 
          hotel_name: response.data.hotel_name,
          email: userEmail.email,
        });
      })
      .catch((error) => {
        console.error('Error fetching hotel details:', error);
      });
  }, [id]);
  // console.log(hotel.hotel_name);
  // const hotelName = hotel?.hotel_name; 
  
  const handleChange = (e) => {
    setReservationData({
      ...reservationData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(reservationData);
  const sendReservationData = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/reservations/', reservationData);
      if (response.status === 201) {
        alert('Reservation successful')
        window.location.href = "/booking";
        // You can perform additional actions, such as showing a success message or redirecting the user to a confirmation page.
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      // Handle the error, e.g., show an error message to the user.
    }
  };

  return (
    <div className="bg-white bg-opacity-20 py-12">
    <div className="container mx-auto p-4 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-white">Hotel Reservation</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label htmlFor="hotel_name" className="block text-sm font-medium text-white">
              Hotel Name:
            </label>
            <input
              type="text"
              name="hotel_name"
              id="hotel_name"
              value={reservationData.hotel_name}
              readOnly
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="full_name" className="block text-sm font-medium text-white">
              Full Name:
            </label>
            <input
              type="text"
              name="full_name"
              id="full_name"
              onChange={handleChange}
              value={reservationData.full_name}
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="contact_no" className="block text-sm font-medium text-white">
              Contact Number:
            </label>
            <input
              type="text"
              name="contact_no"
              id="contact_no"
              onChange={handleChange}
              value={reservationData.contact_no}
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={reservationData.email}
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="check_in" className="block text-sm font-medium text-white">
              Check-in Date:
            </label>
            <input
              type="date"
              name="check_in"
              id="check_in"
              onChange={handleChange}
              value={reservationData.check_in}
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="check_out" className="block text-sm font-medium text-white">
              Check-out Date:
            </label>
            <input
              type="date"
              name="check_out"
              id="check_out"
              onChange={handleChange}
              value={reservationData.check_out}
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="adults" className="block text-sm font-medium text-white">
              Adults:
            </label>
            <input
              type="number"
              name="adults"
              id="adults"
              onChange={handleChange}
              value={reservationData.adults}
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="children" className="block text-sm font-medium text-white">
              Children:
            </label>
            <input
              type="number"
              name="children"
              id="children"
              onChange={handleChange}
              value={reservationData.children}
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          
        </div>
        <button
          type="button"
          onClick={sendReservationData}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Make Reservation
        </button>
      </form>
    </div>
  </div>
);
}
export default HotelReservation;