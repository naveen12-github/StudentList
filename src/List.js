import { Link } from "react-router-dom";

function List({ favoriteList, addToFavorites }) {
   const mylist = ["Bharath", "Praveen", "Kumar", "Virat", "Mounika"];

   return (
      <>
         {/* Navbar */}
         <div className="bg-[#EB7071] p-4 flex justify-between">
            <h1 className="text-2xl underline text-white decoration-black underline-offset-4 ">
               List of Students
            </h1>
            <Link to="/favourite-students">
               <h1 className="text-2xl underline text-white decoration-black underline-offset-4 cursor-pointer">
                  Favourite Students
               </h1>
            </Link>
         </div>

         {/* Students and Add Favourite Section */}
         <div className="m-4">
            <ol className="space-y-4">
               {mylist.map((item, index) => (
                  <li
                     key={index}
                     className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
                  >
                     <span className="text-xl font-medium">
                        {index + 1}. {item}
                     </span>
                     <button
                        onClick={() => addToFavorites(item)}
                        disabled={favoriteList.includes(item)}
                        className={`px-4 py-2 rounded-lg ${
                           favoriteList.includes(item)
                              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                              : "bg-[#4E4E4E] text-white hover:bg-blue-600"
                        }`}
                     >
                        {favoriteList.includes(item) ? "Added" : "Add Favourite"}
                     </button>
                  </li>
               ))}
            </ol>
         </div>
      </>
   );
}

export default List;
