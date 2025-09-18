
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { db, auth } from "../firebase-config.js";
// import { doc, getDoc } from "firebase/firestore";
// import { signOut } from "firebase/auth";

// export default function VolunteerHome() {
//   const [userData, setUserData] = useState(null);
//   const [posts, setPosts] = useState([]);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   // ✅ Fetch user data
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const uid = auth.currentUser?.uid;
//         if (!uid) return;
//         const userDoc = await getDoc(doc(db, "users", uid));
//         if (userDoc.exists()) {
//           setUserData(userDoc.data());
//         }
//       } catch (err) {
//         console.error("Error fetching user:", err);
//       }
//     };
//     fetchUser();
//   }, []);

//   // ✅ Logout handler
//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       navigate("/login");
//     } catch (err) {
//       console.error("Logout error:", err);
//     }
//   };

//   return (
 
// <div className="min-h-screen flex flex-col bg-gray-100">
//   {/* Navbar (fixed) */}
//   <nav className="fixed top-0 left-0 right-0 flex flex-wrap items-center justify-between bg-gradient-to-r from-blue-700 to-blue-500 p-4 text-white shadow-md z-50">
//     <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-start">
//       <img src="/img/left2.png" alt="aKinder Logo" className="h-10" />
//       <input
//         type="text"
//         placeholder="Search..."
//         className="hidden md:block mx-6 px-4 py-1 w-full md:w-72 rounded-full text-gray-800 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
//       />
//     </div>

//     <div className="flex items-center space-x-4 mt-2 md:mt-0">
//       <Link to="/volunteer/home" className="hover:underline">Home</Link>
//       <Link to="/volunteer/needs" className="hover:underline">Needs</Link>
//       <Link to="/volunteer/chat" className="hover:underline">Chat</Link>
//       <Link to="/volunteer/notifications" className="hover:underline">Notifications</Link>

//       {/* Profile dropdown */}
//       <div className="relative">
//         <img
//           src="/img/userImage.png"
//           alt="Profile"
//           className="w-8 h-8 rounded-full cursor-pointer border-2 border-white hover:scale-110 transition"
//           onClick={() => setDropdownOpen(!dropdownOpen)}
//         />
//         {dropdownOpen && (
//           <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg text-gray-800 z-50">
//             <Link to="/volunteer/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
//             <button
//               onClick={handleLogout}
//               className="w-full text-left px-4 py-2 hover:bg-gray-100"
//             >
//               Logout
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   </nav>

//   {/* Responsive body layout */}
//   <div className="flex flex-col lg:flex-row flex-1 pt-24 gap-4 px-2 md:px-6">
//     {/* Left Sidebar */}
//     <div className="w-full lg:w-1/4 bg-white p-6 shadow-md flex flex-col justify-start border rounded-lg">
//       {userData ? (
//         <>
//         {console.log("User Data:", userData)}
//           <div className="text-center space-y-3">
//             <img
//               src="/img/userImage.png"
//               alt="Profile"
//               className="mx-auto w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-blue-500 shadow-md"
//             />
//             <h3 className="font-bold text-lg">
//               {userData.firstName} {userData.lastName}
//             </h3>
//             <p className="text-sm text-gray-500">{userData.address1}</p>
//             <p className="text-sm text-gray-500">
//               {userData.city}, {userData.state}
//             </p>
//           </div>

//           {/* Followers / Following */}
//           <div className="flex flex-col sm:flex-row justify-around items-center gap-3 mt-4">
//             <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-200 w-full sm:w-auto">
//               <img src="/img/userImage.png" alt="Followers" className="w-6 h-6" />
//               <span className="font-bold">0</span>
//             </button>

//             <button className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-xl shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-200 w-full sm:w-auto">
//               <img src="/img/userImage.png" alt="Following" className="w-6 h-6" />
//               <span className="font-bold">100</span>
//             </button>
//           </div>
//         </>
//       ) : (
//         <p className="text-center">Loading user...</p>
//       )}
//     </div>

//    {/* Center Feed */}
// <div className="w-full lg:flex-1 bg-white p-6 shadow-md rounded-lg overflow-y-auto">
//   {/* Create Post Box */}
//   <div className="bg-white rounded-lg p-4 shadow mb-6">
//     <div className="flex items-center mb-3">
//       <img
//         src="/img/userImage.png"
//         alt="Profile"
//         className="w-10 h-10 rounded-full mr-3"
//       />
//       <input
//         type="text"
//         placeholder={`What's on your mind, ${userData?.firstName || ""}?`}
//         className="bg-gray-100 flex-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
//       />
//     </div>
//     <div className="flex justify-between text-sm text-gray-600">
//       <button className="flex items-center gap-2 hover:text-blue-600">
//         <span>📷</span> Photo/Video
//       </button>
//       <button className="flex items-center gap-2 hover:text-green-600">
//         <span>😊</span> Feeling/Activity
//       </button>
//     </div>
//   </div>

//   {/* Posts */}
//   {posts.length > 0 ? (
//     posts.map((post) => (
//       <div
//         key={post.id}
//         className="bg-white border rounded-lg shadow mb-6 overflow-hidden"
//       >
//         {/* Post Header */}
//         <div className="flex items-center p-4">
//           <img
//             src="/img/profile.png"
//             alt="Agency"
//             className="w-10 h-10 rounded-full mr-3"
//           />
//           <div>
//             <h4 className="font-bold">{post.author || "Unknown Agency"}</h4>
//             <p className="text-xs text-gray-500">
//               {post.createdAt || "Some time ago"}
//             </p>
//           </div>
//         </div>

//         {/* Post Content */}
//         <div className="px-4 pb-2">
//           <p className="mb-2">{post.content}</p>
//           {post.image && (
//             <img
//               src={post.image}
//               alt="Post"
//               className="rounded-lg w-full object-cover max-h-96"
//             />
//           )}
//         </div>

//         {/* Buttons */}
//         <div className="px-4 py-2 border-t flex justify-around text-gray-600 text-sm">
//           <button className="flex items-center gap-1 hover:text-blue-600">
//             👍 Like
//           </button>
//           <button className="flex items-center gap-1 hover:text-green-600">
//             💬 Comment
//           </button>
//           <button className="flex items-center gap-1 hover:text-amber-600">
//             ↗️ Share
//           </button>
//         </div>
//       </div>
//     ))
//   ) : (
//     <p className="text-gray-500 text-center">No posts yet...</p>
//   )}
// </div>



//     {/* Right Sidebar with Multiple Ads */}
// <div className="w-full lg:w-1/4 bg-white p-6 shadow-md border rounded-lg space-y-6">
//   {/* Ad 1 */}
//   <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//     <div className="flex items-center space-x-2">
//       <img src="/img/ads1.jpg" alt="Sponsor" className="w-10 h-10 rounded-full" />
//       <div>
//         <h5 className="font-bold">Green City Developers</h5>
//         <p className="text-xs text-gray-500">Sponsored</p>
//       </div>
//     </div>
//     <div className="mt-2 bg-black h-24 rounded-lg flex items-center justify-center text-white">
//       Video
//     </div>
//     <p className="text-sm mt-2">This is great</p>
//     <button className="mt-2 bg-blue-500 text-white py-1 rounded-lg w-full hover:bg-blue-600">
//       Learn More
//     </button>
//   </div>

//   {/* Ad 2 */}
//   <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//     <div className="flex items-center space-x-2">
//       <img src="/img/ads1.jpg" alt="Sponsor" className="w-10 h-10 rounded-full" />
//       <div>
//         <h5 className="font-bold">TechForGood</h5>
//         <p className="text-xs text-gray-500">Sponsored</p>
//       </div>
//     </div>
//     <div className="mt-2 bg-green-200 h-24 rounded-lg flex items-center justify-center text-gray-800">
//       Image / Promo
//     </div>
//     <p className="text-sm mt-2">Join our volunteering hackathon</p>
//     <button className="mt-2 bg-green-500 text-white py-1 rounded-lg w-full hover:bg-green-600">
//       Sign Up
//     </button>
//   </div>

//   {/* Ad 3 */}
//   <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
//     <h5 className="font-bold mb-2">✨ Your Ad Here</h5>
//     <p className="text-sm text-gray-600">
//       Reach 1000+ volunteers by advertising on aKinder™
//     </p>
//     <button className="mt-2 bg-amber-500 text-white py-1 rounded-lg w-full hover:bg-amber-600">
//       Contact Us
//     </button>
//   </div>
// </div>

//   </div>
// </div>




//   );
// }








import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db, auth } from "../firebase-config.js";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";

export default function VolunteerHome() {
  const [userData, setUserData] = useState(null);
  const [posts, setPosts] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [newPost, setNewPost] = useState("");
  const [mediaFile, setMediaFile] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  const navigate = useNavigate();

  // ✅ Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const uid = auth.currentUser?.uid;
        if (!uid) return;
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUser();
  }, []);

  // ✅ Logout handler
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  // ✅ File handler for image/video
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMediaFile(file);
      setMediaPreview(URL.createObjectURL(file));
    }
  };

  // ✅ Add new post
  const addPost = () => {
    if (!newPost.trim() && !mediaFile) return;

    const post = {
      author: userData?.firstName + " " + userData?.lastName || "You",
      content: newPost,
      createdAt: new Date().toLocaleString(),
      image: mediaFile?.type.startsWith("image") ? mediaPreview : null,
      video: mediaFile?.type.startsWith("video") ? mediaPreview : null,
    };

    setPosts([post, ...posts]);
    setNewPost("");
    setMediaFile(null);
    setMediaPreview(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 flex flex-wrap items-center justify-between bg-gradient-to-r from-blue-700 to-blue-500 p-4 text-white shadow-md z-50">
        <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-start">
          <img src="/img/left2.png" alt="aKinder Logo" className="h-10" />
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block mx-6 px-4 py-1 w-full md:w-72 rounded-full text-gray-800 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <Link to="/volunteer/home" className="hover:underline">Home</Link>
          <Link to="/volunteer/needs" className="hover:underline">Needs</Link>
          <Link to="/volunteer/chat" className="hover:underline">Chat</Link>
          <Link to="/volunteer/notifications" className="hover:underline">Notifications</Link>

          {/* Profile dropdown */}
          <div className="relative">
            <img
              src="/img/userImage.png"
              alt="Profile"
              className="w-8 h-8 rounded-full cursor-pointer border-2 border-white hover:scale-110 transition"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg text-gray-800 z-50">
                <Link to="/volunteer/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Body */}
      <div className="flex flex-col lg:flex-row flex-1 pt-24 gap-4 px-2 md:px-6">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/4 bg-white p-6 shadow-md flex flex-col justify-start border rounded-lg">
          {userData ? (
            <>
              <div className="text-center space-y-3">
                <img
                  src="/img/userImage.png"
                  alt="Profile"
                  className="mx-auto w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-blue-500 shadow-md"
                />
                <h3 className="font-bold text-lg">
                  {userData.firstName} {userData.lastName}
                </h3>
                <p className="text-sm text-gray-500">{userData.address1}</p>
                <p className="text-sm text-gray-500">
                  {userData.city}, {userData.state}
                </p>
              </div>
            </>
          ) : (
            <p className="text-center">Loading user...</p>
          )}
        </div>

        {/* Center Feed */}
        <div className="w-full lg:flex-1 bg-white p-6 shadow-md rounded-lg overflow-y-auto">
          {/* Create Post Box */}
          <div className="bg-white rounded-lg p-4 shadow mb-6">
            <div className="flex items-center mb-3">
              <img
                src="/img/userImage.png"
                alt="Profile"
                className="w-10 h-10 rounded-full mr-3"
              />
              <input
                type="text"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder={`What's on your mind, ${userData?.firstName || ""}?`}
                className="bg-gray-100 flex-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Media Preview */}
            {mediaPreview && (
              <div className="mb-3">
                {mediaFile?.type.startsWith("image") ? (
                  <img
                    src={mediaPreview}
                    alt="Preview"
                    className="w-full rounded-lg max-h-64 object-cover"
                  />
                ) : (
                  <video
                    src={mediaPreview}
                    controls
                    className="w-full rounded-lg max-h-64"
                  />
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
              <label className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                📷 Add Photo/Video
                <input type="file" accept="image/*,video/*" hidden onChange={handleFileChange} />
              </label>

              <button
                onClick={addPost}
                disabled={!newPost.trim() && !mediaFile}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                Post
              </button>
            </div>
          </div>

          {/* Posts */}
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg shadow mb-6 overflow-hidden"
              >
                {/* Post Header */}
                <div className="flex items-center p-4">
                  <img
                    src="/img/profile.png"
                    alt="Agency"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-bold">{post.author}</h4>
                    <p className="text-xs text-gray-500">{post.createdAt}</p>
                  </div>
                </div>

                {/* Post Content */}
                <div className="px-4 pb-2">
                  {post.content && <p className="mb-2">{post.content}</p>}
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post"
                      className="rounded-lg w-full object-cover max-h-96"
                    />
                  )}
                  {post.video && (
                    <video
                      src={post.video}
                      controls
                      className="rounded-lg w-full max-h-96"
                    />
                  )}
                </div>

                {/* Buttons */}
                <div className="px-4 py-2 border-t flex justify-around text-gray-600 text-sm">
                  <button className="flex items-center gap-1 hover:text-blue-600">
                    👍 Like
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-600">
                    💬 Comment
                  </button>
                  <button className="flex items-center gap-1 hover:text-amber-600">
                    ↗️ Share
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No posts yet...</p>
          )}
        </div>

        {/* Right Sidebar (Ads) */}
        <div className="w-full lg:w-1/4 bg-white p-6 shadow-md border rounded-lg space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h5 className="font-bold mb-2">✨ Your Ad Here</h5>
            <p className="text-sm text-gray-600">
              Reach 1000+ volunteers by advertising on aKinder™
            </p>
            <button className="mt-2 bg-amber-500 text-white py-1 rounded-lg w-full hover:bg-amber-600">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

