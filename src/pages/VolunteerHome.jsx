import { Link } from "react-router-dom";

export default function VolunteerHome() {
  return (
    <div className="min-h-screen bg-blue-600 text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-gradient-to-r from-blue-700 to-blue-500 p-4 text-white">
        <div className="flex items-center space-x-4">
          <img src="/img/akinderLogo.png" alt="aKinder Logo" className="h-10" />
          <span className="font-bold text-lg">aKinder™Volunteer</span>
        </div>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search..." className="px-4 py-1 rounded-full text-gray-800 bg-amber-100" />
          <Link to="/volunteer/home" className="hover:underline">Home</Link>
          <Link to="/volunteer/needs" className="hover:underline">Needs</Link>
          <Link to="/volunteer/chat" className="hover:underline">Chat</Link>
          <Link to="/volunteer/notifications" className="hover:underline">Notifications</Link>
          <img src="/img/profile.png" alt="Profile" className="w-8 h-8 rounded-full cursor-pointer" />
        </div>
      </nav>

      {/* Body Layout */}
      <div className="flex gap-4 p-4">
        {/* Left Sidebar */}
        <div className="w-1/4 bg-white rounded-lg p-4 shadow-md space-y-4">
          <div className="text-center">
            <img src="/img/profile.png" alt="Profile" className="mx-auto w-20 h-20 rounded-full" />
            <h3 className="font-bold mt-2">Kat Lina</h3>
            <p className="text-sm text-gray-500">Noida, India</p>
          </div>
          <div className="flex justify-around text-center">
            <div>
              <p className="text-lg font-bold">0</p>
              <p className="text-xs text-gray-500">Followers</p>
            </div>
            <div>
              <p className="text-lg font-bold">0</p>
              <p className="text-xs text-gray-500">Following</p>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Hours</button>
          <div className="space-y-2">
            <button className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded-lg">Donate Now</button>
            <button className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded-lg">My Agencies</button>
            <button className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded-lg">Team Challenges</button>
          </div>
        </div>

        {/* Center Feed */}
        <div className="flex-1 bg-white rounded-lg p-4 shadow-md space-y-4">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <img src="/img/profile.png" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
            <input type="text" placeholder="What's Happening Kat Lina?" className="bg-transparent flex-1 focus:outline-none" />
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/img/profile.png" alt="Demo Agency" className="w-8 h-8 rounded-full mr-2" />
              <div>
                <h4 className="font-bold">Demo Agency</h4>
                <p className="text-xs text-gray-500">1 month ago</p>
              </div>
            </div>
            <p>This is a sample post content.</p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/4 bg-white rounded-lg p-4 shadow-md space-y-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <img src="/img/profile.png" alt="Sponsor" className="w-10 h-10 rounded-full" />
              <div>
                <h5 className="font-bold">Green City Developers</h5>
                <p className="text-xs text-gray-500">Sponsored Content</p>
              </div>
            </div>
            <div className="mt-2 bg-black h-24 rounded-lg flex items-center justify-center text-white">Video</div>
            <p className="text-sm mt-2">This is great</p>
            <button className="mt-2 bg-blue-500 text-white py-1 rounded-lg w-full hover:bg-blue-600">Learn More</button>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <img src="/img/profile.png" alt="Sponsor" className="w-10 h-10 rounded-full" />
              <div>
                <h5 className="font-bold">dave's advertising Machine</h5>
                <p className="text-xs text-gray-500">Sponsored Content</p>
              </div>
            </div>
            <div className="mt-2 bg-black h-24 rounded-lg flex items-center justify-center text-white">Video</div>
            <p className="text-sm mt-2">Check this out</p>
            <button className="mt-2 bg-blue-500 text-white py-1 rounded-lg w-full hover:bg-blue-600">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
