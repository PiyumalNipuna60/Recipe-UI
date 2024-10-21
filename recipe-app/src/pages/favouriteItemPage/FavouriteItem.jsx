import React from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom for navigation

const FoodFavourite = () => {
  const navigate = useNavigate(); // For navigation

  // Categories and items with unique ids
  const items = [
    { id: 1, category: "pork", name: "BBQ Pork Ribs" },
    { id: 2, category: "pork", name: "Honey Garlic Pork Chops" },
    { id: 3, category: "Beef", name: "Beef Steak" },
    { id: 4, category: "Beef", name: "Beef Stroganoff" },
    { id: 5, category: "Chicken", name: "Chicken Noodle Soup" },
    { id: 6, category: "Chicken", name: "Chicken Alfredo" },
    { id: 7, category: "Lamb", name: "Lamb Curry" },
    { id: 8, category: "pasta", name: "Spaghetti Carbonara" },
    { id: 9, category: "pasta", name: "Fettuccine Alfredo" },
  ];

  // Function to navigate to login page
  const handleLogout = () => {
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="bg-pink-50 p-6 min-h-screen">
      {/* Header */}
      <header className="flex  justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-pink-500 mb-4">cook</h1>
        <nav>
          <Button href="home" variant="text" className="text-black font-bold">
            HOME
          </Button>
          <Button variant="text" className="text-black font-bold">
            FAVOURITE
          </Button>
          {/* Exit Icon */}
        </nav>
        <div className="justify-end">
          <ExitToAppIcon
            className="cursor-pointer text-black"
            onClick={handleLogout} // Calls the function to go to login page
          />
        </div>
      </header>


      {/* Food Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="text-center">
              {/* Placeholder Image */}
              <div className="bg-gray-300 h-40 w-full rounded-lg mb-4"></div>

              {/* Category and Food Name */}
              <p className="text-gray-500 flex justify-center items-center">
                {item.category}
                <span
                  className="ml-2 cursor-pointer"
                >
                  <FavoriteIcon className="text-red-500" />
                </span>
              </p>
              <p className="font-bold text-black mt-1">{item.name}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4 text-gray-500">
            No items available for
          </p>
        )}
      </div>
    </div>
  );
};

export default FoodFavourite;
