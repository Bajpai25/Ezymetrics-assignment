import React from 'react';
import { FaBars, FaChartPie, FaCalendarAlt, FaBook } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebar_main = ({ isCollapsed, isMobile, toggleSidebar }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex relative">
      {/* Fixed Sidebar */}
      <div
        className={`fixed left-0 top-15 h-full overflow-y-auto bg-gray-800 text-white flex flex-col transition-all duration-300 ${
          isCollapsed ? 'w-12' : 'w-64'
        } ${isMobile ? 'w-12' : ''}`}
      >
        {/* Sidebar Header */}
        {!isMobile && (
          <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-gray-900">
            <h1 className={`text-lg font-semibold ${isCollapsed ? 'hidden' : 'block'}`}>
              Dashboard
            </h1>
            <button onClick={toggleSidebar} className="text-2xl">
              <FaBars />
            </button>
          </div>
        )}

        {/* Menu */}
        <div className="flex-1">
          <ul className="flex flex-col">
            <Link to="/leads">
              <li className={`flex items-center p-4 hover:bg-gray-700 cursor-pointer ${
                currentPath === '/leads' ? 'bg-gray-600' : ''
              }`}>
                <FaChartPie className="text-xl" />
                <span className={`ml-4 ${isCollapsed ? 'hidden' : 'block'}`}>Leads</span>
              </li>
            </Link>
            <Link to="/analytics">
              <li className={`flex items-center p-4 hover:bg-gray-700 cursor-pointer ${
                currentPath === '/analytics' ? 'bg-gray-600' : ''
              }`}>
                <FaCalendarAlt className="text-xl" />
                <span className={`ml-4 ${isCollapsed ? 'hidden' : 'block'}`}>Analytics</span>
              </li>
            </Link>
            <Link to="/report">
              <li className={`flex items-center p-4 hover:bg-gray-700 cursor-pointer ${
                currentPath === '/report' ? 'bg-gray-600' : ''
              }`}>
                <FaBook className="text-xl" />
                <span className={`ml-4 ${isCollapsed ? 'hidden' : 'block'}`}>Report</span>
              </li>
            </Link>
          </ul>
        </div>

        {/* Sidebar Footer */}
        {!isMobile && (
          <div className="sticky bottom-0 p-4 bg-gray-900">
            <span className={`text-sm ${isCollapsed ? 'hidden' : 'block'}`}>
              © 2024 My App
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar_main;