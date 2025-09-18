
import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    // <div className="min-h-screen flex flex-row items-center justify-between text-white px-8 py-12 relative overflow-hidden">
      <div
  className="min-h-screen flex flex-row items-center justify-between text-white px-8 py-12 relative overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/img/background2.jpg')" }}
>

      {/* Left Solid Background */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 h-full -z-10">
        <div className="w-full h-full bg-[#002c3ae1]"></div>
      </div>

      {/* Right Background Image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 h-full -z-10">
        
      </div>

      {/* Left Content */}
      <div className="md:w-1/2 max-w-xl z-10">
        {/* Logos */}
        <div className="flex items-center gap-8 mb-6">
          <img src="/img/left2.png" alt="aKinder Volunteer Logo" className="h-12" />
          <img src="/img/right2 (2).png" alt="Legacy Response Logo" className="h-25 bg-auto" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
          Welcome to the partnership of <br />
          <span className="text-green-400">aKinder™Volunteer</span> and{" "}
          <span className="text-purple-400">Legacy Response!</span>
        </h1>

        {/* Subheading */}
        <h2 className="text-lg font-semibold mb-4">
          Volunteers are the most powerful Force for Good in the world!
        </h2>
        <div className="flex flex-row gap-8 ">
          <p>
            Every day volunteers impact the lives of those in need and help
            mission driven nonprofits as they strive to make their community a
            better place to live. We want you to be part of that movement!
          </p>

          <p>
            Over the next 90 days we will be hard at work training nonprofits on
            the use of our social network driven platform. As nonprofits register
            and complete training we will then start matching you with the
            nonprofit/nonprofits who are looking for your skills, passion and
            availability. If you have any issues registering please call us at{" "}
            <span className="font-bold">508-202-3165</span>.
          </p>
        </div>

        {/* Button to Login Page */}
        <Link
          to="/login"
          className="mt-6 w-[70%] block text-center py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-800 min-w-16 h-9"
        >
          REGISTER NOW!
        </Link>
        <p className="mt-4 ">Thank You</p>
      </div>
      
      {/* Right Content (empty for layout) */}
      <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0 h-full relative z-10"></div>

    </div>
  );
} 

