import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };
    return (
        <div>
            <nav>
                <ul>
                    <li>
                    <Link to="/profile">View Profile</Link>
                    </li>
                    <li>
                    <button onClick={toggleDropdown}>Booking</button>
                    {isDropdownOpen && (
                        <ul className="dropdown" onBlur={closeDropdown}>
                        <li>Hotel Booking</li>
                        {/* Add more booking options as needed */}
                        </ul>
                    )}
                    </li>
                    <li>
                    <Link to="/trips">Trip</Link>
                    </li>
                    <li>
                    <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;