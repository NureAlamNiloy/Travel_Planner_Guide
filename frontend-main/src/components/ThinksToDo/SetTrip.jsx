import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SetTrip = () => {
    const { id } = useParams();
  const [userEmail, setUserEmail] = useState('');
  const [reservationData, setReservationData] = useState({
    place: '',
    username: '',
    email: '',
    check_in: '',
    check_out: '',
    number_of_people: 1,
    is_completed: false,
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/places/places/${id}/?format=json`)
      .then((response) => {
        setReservationData({...reservationData, 
          place: response.data.place_name,
          email: userEmail.email,
        });
      })
      .catch((error) => {
        console.error('Error fetching trip details:', error);
      });
  }, [id]);
  
  const handleChange = (e) => {
    setReservationData({
      ...reservationData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(reservationData);
  const sendReservationData = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/places/trip/', reservationData);
      if (response.status === 201) {
        alert('set trip successful')
        window.location.href = "/trip";
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
      <h2 className="text-2xl font-semibold mb-4 text-white">Set Trip</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label htmlFor="hotel_name" className="block text-sm font-medium text-white">
              Trip Name:
            </label>
            <input
              type="text"
              name="places"
              id="places"
              value={reservationData.place}
              readOnly
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white">
              Full Name:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              value={reservationData.username}
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
              Number Of people:
            </label>
            <input
              type="number"
              name="people"
              id="people"
              onChange={handleChange}
              value={reservationData.number_of_people}
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          
          
        </div>
        <button
          type="button"
          onClick={sendReservationData}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Make Trip
        </button>
      </form>
    </div>
  </div>
    );
};

export default SetTrip;