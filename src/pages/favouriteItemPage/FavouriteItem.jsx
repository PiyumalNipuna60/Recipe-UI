import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Snackbar from "@mui/material/Snackbar"; // Import Snackbar
import { useNavigate } from "react-router-dom"; 
import api from "../../util/baseURL";

const FoodFavourite = () => {
  const navigate = useNavigate(); 
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar

  const fetchCategories = async () => {
    try {
      const response = await api.get("/favorites/getAll");

      if (response.data && Array.isArray(response.data)) {
        setItems(response.data);
      } else {
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
        setOpenSnackbar(true); // Show Snackbar on success
        fetchCategories();
      } else {
        console.error("Failed to remove category from favorites", response);
      }
    } catch (error) {
      console.error("Error removing category from favorites", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Function to navigate to login page
  const handleLogout = () => {
    navigate("/login");
  };

  // Close Snackbar
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
        </nav>
        <div className="justify-end">
          <ExitToAppIcon
            className="cursor-pointer text-black"
            onClick={handleLogout}
          />
        </div>
      </header>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 bg-pink-100 p-5">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.idCategory} className="text-center">
              <div className="bg-gray-300 h-40 w-full rounded-lg mb-4">
                <img
                  src={item.strCategoryThumb}
                  alt={item.strCategory}
                  className="h-40 w-full object-cover rounded-lg mb-4"
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <p className="text-gray-500 flex justify-center items-center">
                {item.strCategory}
                <span className="ml-2 cursor-pointer">
                  <FavoriteIcon
                    onClick={() => UnLikeFavourite(item.idCategory)}
                    className="text-red-500"
                  />
                </span>
              </p>
              <p className="font-bold text-black mt-1">{item.strCategoryDescription}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4 text-gray-500">
            No items available for
          </p>
        )}
      </div>

      {/* Snackbar for Unliking */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Category removed from favorites"
      />
    </div>
  );
};

export default FoodFavourite;
