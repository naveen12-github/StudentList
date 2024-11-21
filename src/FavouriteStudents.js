import { Link } from "react-router-dom";

function FavouriteStudents({ favoriteList, removeFromFavorites }) {
   return (
      <>
         {/* Navbar */}
         <div className="bg-[#EB7071] p-4">
            <Link to="/">
               <h1 className="text-2xl underline text-white decoration-black underline-offset-4 cursor-pointer">
                  Back to List
               </h1>
            </Link>
         </div>

         {/* Favourite Students */}
         <div className="m-4">
            {favoriteList.length > 0 ? (
               <ol className="space-y-4">
                  {favoriteList.map((student, index) => (
                     <li
                        key={index}
                        className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
                     >
                        <span className="text-xl font-medium">{student}</span>
                        <button
                           onClick={() => removeFromFavorites(student)}
                           className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                        >
                           Remove
                        </button>
                     </li>
                  ))}
               </ol>
            ) : (
               <p className="text-gray-500">No favourite students yet.</p>
            )}
         </div>
      </>
   );
}

export default FavouriteStudents;
