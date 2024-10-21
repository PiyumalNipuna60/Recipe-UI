import React, { useState } from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FoodMenu = () => {
  const [category, setCategory] = useState("pork");

  // Categories and items with unique ids
  const categories = ["pork", "Beef", "Chicken", "Lamb", "pasta"];
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

  // State to keep track of favorited items
  const [favorites, setFavorites] = useState([]);

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  // Filter items based on selected category
  const filteredItems = items.filter((item) => item.category === category);

  return (
    <div className="bg-pink-50 p-6 min-h-screen">
      {/* Header */}
      <header className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-4xl font-bold text-pink-500 mb-4">cook</h1>
        <nav className="flex space-x-6 justify-center">
          <Button variant="text" className="text-black font-bold">
            HOME
          </Button>
          <Button variant="text" className="text-black font-bold">
            FAVOURITE
          </Button>
        </nav>
      </header>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={cat === category ? "contained" : "outlined"}
            onClick={() => setCategory(cat)}
            style={{
              backgroundColor: cat === category ? "#ff5c8d" : "transparent",
              color: cat === category ? "#fff" : "#ff5c8d",
              borderColor: "#ff5c8d",
            }}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="text-center">
              {/* Placeholder Image */}
              <div className="bg-gray-300 h-40 w-full rounded-lg mb-4"></div>

              {/* Category and Food Name */}
              <p className="text-gray-500 flex justify-center items-center">
                {category}
                <span
                  className="ml-2 cursor-pointer"
                  onClick={() => toggleFavorite(item.id)}
                >
                  {favorites.includes(item.id) ? (
                    <FavoriteIcon className="text-red-500" />
                  ) : (
                    <FavoriteBorderIcon className="text-pink-500" />
                  )}
                </span>
              </p>
              <p className="font-bold text-black mt-1">{item.name}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4 text-gray-500">
            No items available for {category}
          </p>
        )}
      </div>
    </div>
  );
};

export default FoodMenu;
