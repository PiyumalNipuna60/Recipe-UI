import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import api from "../../util/baseURL";

const FoodMenu = () => {
  const [category, setCategory] = useState("pork");
  const navigate = useNavigate(); // For navigation
  const [items, setItems] = useState([]); // State to hold food items
  const [favorites, setFavorites] = useState([]);
  const [categories, setCategories] = useState([]);
  //const categories = ["pork", "Beef", "Chicken", "Lamb", "pasta", "Dessert"];

  // Function to fetch categories from the API
  const fetchCategories = async () => {
    try {
      const response = await api.get( "/categories/getAll");

      if (response.data && Array.isArray(response.data)) {
        setItems(response.data);
        setCategoriesData(response.data);
      } else {
        console.error("Invalid response format", response);
      }
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };


  const setCategoriesData = (data) => {
    const uniqueCategories = [...new Set(data.map(item => item.strCategory))];
    setCategories(uniqueCategories);
  };
 


  const likeFavourite = async (item) => {
    try {
      const response = await api.post("/favorites/save",{
          idCategory:item.idCategory,
          strCategory:item.strCategory,
          strCategoryThumb:item.strCategoryThumb,
          strCategoryDescription:item.strCategoryDescription
      });

      if (response.status !== 201) {
        console.error("Invalid response format", response);
      } 
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };



  const UnLikeFavourite = async (itemId) => {
    try {
      const response = await api.delete(`/favorites/${itemId}`);

      if (response.status === 200) {
        setFavorites((prevFavorites) => prevFavorites.filter((id) => id !== itemId));
        console.log("Category removed from favorites");
      } else {
        console.error("Failed to remove category from favorites", response);
      }
    } catch (error) {
      console.error("Error removing category from favorites", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  },);

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  // Filter items based on selected category
  const filteredItems = items.filter((item) => item.strCategory === category);

  // Function to navigate to login page
  const handleLogout = () => {
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="bg-pink-50 p-6 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold text-pink-500 mb-4">cook</h1>
        <nav>
          <Button variant="text" className="text-black font-bold">
            HOME
          </Button>
          <Button
            href="favourite"
            variant="text"
            className="text-black font-bold"
          >
            FAVOURITE
          </Button>
        </nav>
        <div className="justify-end">
          <ExitToAppIcon
            className="cursor-pointer text-black"
            onClick={handleLogout} // Calls the function to go to login page
          />
        </div>
      </header>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-2 rounded-sm  bg-pink-100 p-5">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={cat === category ? "contained" : "outlined"}
            onClick={() => setCategory(cat)}
            style={{
              backgroundColor: cat === category ? "#ff5c8d" : "transparent",
              color: cat === category ? "#fff" : "#ff5c8d",
              borderColor: "#ff5c8d",
              borderRadius: "20px",
            }}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10  bg-pink-100 p-5">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.idCategory} className="text-center w-full rounded-lg mb-4">
              <img
                src={item.strCategoryThumb}
                alt={item.strCategory}
                className="h-40 w-full object-cover rounded-lg mb-4 bg-gray-300 " 
                style={{
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              {/* Category and Food Name */}
              <p className="text-gray-500 flex justify-center items-center">
                {item.strCategory}
                <span
                  className="ml-2 cursor-pointer"
                  onClick={() => toggleFavorite(item.idCategory)}
                >
                  {favorites.includes(item.idCategory) ? (
                    <FavoriteIcon
                    onClick={() => UnLikeFavourite(item.idCategory)}
                      className="text-red-500"
                    />
                  ) : (
                    <FavoriteBorderIcon
                    onClick={() => likeFavourite(item)}
                      className="text-pink-500"
                    />
                  )}
                </span>
              </p>
              <p className="font-bold text-black mt-1">
                {item.strCategoryDescription}
              </p>
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