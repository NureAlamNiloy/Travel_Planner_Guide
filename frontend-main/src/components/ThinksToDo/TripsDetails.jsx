import { Link } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const TripsDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedHotel, setSelectedHotel] = useState("");
    useEffect(() => {
      // Fetch hotel details using the 'id' parameter
      fetch(`http://127.0.0.1:8000/places/places/${id}/?format=json`)
        .then((response) => response.json())
        .then((data) => {
          setHotel(data);
          setSelectedHotel(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching hotel details:', error);
          setLoading(false);
        });
    }, [id]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!hotel) {
      return <div>Hotel not found.</div>;
    }

    const handleSetTrip = (hotel_id) => {
        navigate(`/set-trip/${hotel_id}`);
      };
    return (
        <div className="text-white bg-white bg-opacity-20 shadow-lg rounded-lg overflow-hidden mx-auto max-w-screen-xl mt-10 mb-10">
      <div className="grid grid-cols-1">
      <div className={`bg-center py-10 `} >
        <div className="flex flex-col gap-y-4 max-w-[90%] mx-auto"> 
        <img className="max-h-[50vh] w-[100%]" src={hotel?.image1} alt="" />
        <div className="flex gap-x-4 mx-auto">
        <img className="max-h-[28vh] w-auto" src={hotel?.image2} alt="" />
        <img className="max-h-[28vh] w-auto" src={hotel?.image3} alt="" />
        <img className="max-h-[28vh] w-auto" src={hotel?.image4} alt="" />
        <img className="max-h-[28vh] w-auto" src={hotel?.image5} alt="" />
        </div>
        </div>
      </div>

      <div className="py-10 px-10 mx-auto">
          <h1 className="text-3xl font-semibold mb-4">{hotel.place_name}</h1>

          <p className="mb-2">{hotel.location}</p>

          <p className="text-lg  mb-4">{hotel.description}</p>

          <p className="text-2xl font-semibold  mb-4">Max cost :${hotel.price} per day</p>
          <p className="text-2xl font-semibold  mb-4">Prefer visit date :${hotel.duration} days</p>
          <p className="text-2xl font-semibold  mb-4">Min age Limit :${hotel.age} per day</p>
        <div className="p-6">
          <div className="reservation-form grid grid-cols-3">
            <button onClick={()=>handleSetTrip(hotel?.id)} className=" mt-3 bg-blue-700 hover:bg-blue-600 text-white py-2 rounded-full max-w-[40%]">Set Trip</button>
          </div>
      </div>
      </div>
      
      </div>

      <div className="p-6 bg-white bg-opacity-20 max-w-[95%] mx-auto py-6">
          <h2 className="text-xl font-semibold mb-2">Reviews</h2>

          <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 01.832.445l1.878 2.682 2.812.407a1 1 0 01.555 1.705l-2.16 2.47.511 2.827a1 1 0 01-1.451 1.058L10 12.937l-2.682 1.614a1 1 0 01-1.451-1.058l.511-2.826-2.16-2.47a1 1 0 01.555-1.705l2.812-.407L9.168 2.445A1 1 0 0110 2zm1 7a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              <span className="ml-2 ">John Doe</span>
              <p className="ml-4 ">Great hotel! Wonderful experience.</p>
          </div>

          <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 01.832.445l1.878 2.682 2.812.407a1 1 0 01.555 1.705l-2.16 2.47.511 2.827a1 1 0 01-1.451 1.058L10 12.937l-2.682 1.614a1 1 0 01-1.451-1.058l.511-2.826-2.16-2.47a1 1 0 01.555-1.705l2.812-.407L9.168 2.445A1 1 0 0110 2zm1 7a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              <span className="ml-2 ">Jane Smith</span>
              <p className="ml-4 ">I loved my stay at this hotel. Highly recommended!</p>
          </div>
      </div>
      
      
  </div>
    );
};

export default TripsDetails;