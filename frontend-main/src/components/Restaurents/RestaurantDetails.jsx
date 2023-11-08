import { Link } from "lucide-react";
import { useEffect, useState } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import FoodItem from "./FoodItem";

const RestaurantDetails = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Fetch hotel details using the 'id' parameter
      fetch(`http://scriptsurgeons.pythonanywhere.com/restaurant/restaurant/${id}/?format=json`)
        .then((response) => response.json())
        .then((data) => {
          setRestaurant(data);
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

    const foodData = [
        {
          id: 1,
          image: '/carbonara.jpg',
          name: 'Delicious Burger',
          description: 'Creamy pasta with bacon and parmesan cheese',
          price: 9.99,
        },
        {
          id: 2,
          image: '/burger.jpeg',
          name: 'Spaghetti Carbonara',
          description: 'Creamy pasta with bacon and parmesan cheese.',
          price: 12.99,
        },
        {
            id: 3,
            image: '/pizza.avif',
            name: 'Pizza',
            description: 'Creamy pasta with bacon and parmesan cheese.',
            price: 12.99,
          },
        // Add more food items here
      ];
    
 
      const handleBuyClick = (foodName) => {
        alert(`You bought ${foodName}!`);
      }
    
    return (
        <div className="text-white bg-white bg-opacity-20 shadow-lg rounded-lg overflow-hidden mx-auto max-w-screen-xl mt-10 mb-10">
        <div className="grid grid-cols-2">
        <div className={`bg-center py-10 `} >
          <div className="flex flex-col gap-y-4 max-w-[90%] mx-auto"> 
          <img className="max-h-[50vh] w-[110vh]" src={restaurant?.image} alt="" />
          <div className="flex gap-x-4">
          <img className="max-h-[19.5vh] w-auto" src={restaurant?.image} alt="" />
          <img className="max-h-[19vh] w-auto" src={restaurant?.image} alt="" />
          <img className="max-h-[19vh] w-auto" src={restaurant?.image} alt="" />
          </div>
          </div>
        </div>
  
        <div className="py-10">
            <h1 className="text-3xl font-semibold mb-4">{restaurant?.restaurant}</h1>
            <p>{restaurant?.res_type}</p>
            <p className="mb-2">{restaurant?.location}</p>
  
            <p className="text-lg  mb-4">{restaurant?.description}</p>
  
            {/* <p className="text-2xl font-semibold  mb-4">${restaurant.price} per night</p> */}
          <div className="p-6">
            {/* <div className="reservation-form grid grid-cols-3">
              <button onClick={()=>handleReservation(restaurant.id)} className=" mt-3 bg-blue-700 hover:bg-blue-600 text-white py-2 rounded-full">Reserve Hotel</button>
            </div> */}
        </div>
        </div>
        
        </div>


        <div className="p-6 bg-white bg-opacity-20 max-w-[95%] mx-auto py-6">
            <h1 className="text-center text-white text-[2rem] font-[600] py-2">See our foods</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {foodData.map((food) => (
            <FoodItem
            key={food.id}
            image={food.image}
            name={food.name}
            description={food.description}
            price={food.price}
            onBuyClick={() => handleBuyClick(food.name)}
            />
        ))}
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

export default RestaurantDetails;