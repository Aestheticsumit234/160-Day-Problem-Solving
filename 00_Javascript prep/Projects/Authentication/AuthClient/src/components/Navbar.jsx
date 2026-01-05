import { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, setUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Left Side: Logo */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => navigate("/home")}
      >
        <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
          <span className="text-white font-bold text-xl">S</span>
        </div>
        <span className="text-xl font-bold text-gray-900 tracking-tight">
          SaasApp
        </span>
      </div>

      {/* Right Side: Profile Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-3 focus:outline-none group"
        >
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
              {user?.name}
            </p>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">
              Pro Plan
            </p>
          </div>

          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-indigo-100 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden transition-transform active:scale-95 group-hover:border-indigo-200 cursor-pointer">
            {user?.profileImage ? (
              <img
                src={user.profileImage}
                alt={user?.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <span className="text-indigo-700 font-bold">
                {user?.name?.charAt(0)?.toUpperCase()}
              </span>
            )}
          </div>
        </button>

        {/* Animated Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 origin-top-right overflow-hidden"
            >
              <div className="py-1 overflow-hidden">
                <button
                  onClick={() => {
                    navigate("/profile");
                    setIsOpen(false);
                  }}
                  className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  <span className="mr-3 text-lg">
                    <CgProfile />
                  </span>
                  Profile
                </button>
              </div>

              <div className="border-t border-gray-50 pt-1">
                <button
                  onClick={logout}
                  className="flex items-center w-full px-4 py-3 text-sm font-bold text-red-600 hover:bg-red-50 transition-colors"
                >
                  <span className="mr-3 text-lg">
                    <IoMdLogOut />
                  </span>
                  Logout
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
