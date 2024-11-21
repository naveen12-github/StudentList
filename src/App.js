import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import List from "./List";
import FavouriteStudents from "./FavouriteStudents";

function App() {
   const [favoriteList, setFavoriteList] = useState([]);

   // Add a student to the favorite list
   const addToFavorites = (student) => {
      setFavoriteList((prev) => [...prev, student]);
   };

   // Remove a student from the favorite list
   const removeFromFavorites = (student) => {
      setFavoriteList((prev) => prev.filter((fav) => fav !== student));
   };

   return (
      <Router>
         <Routes>
            <Route
               path="/"
               element={
                  <List
                     favoriteList={favoriteList}
                     addToFavorites={addToFavorites}
                  />
               }
            />
            <Route
               path="/favourite-students"
               element={
                  <FavouriteStudents
                     favoriteList={favoriteList}
                     removeFromFavorites={removeFromFavorites}
                  />
               }
            />
         </Routes>
      </Router>
   );
}

export default App;
