import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Leaderboards', path: '/leaderboard' },
    { name: 'Gallery', path: '/gallery' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Vertical Navigation with Tab Titles */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="bg-white border border-gray-300 shadow-lg rounded-r-sm py-4">
          <div className="space-y-2">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive(item.path)
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer to prevent content overlap */}
      <div className="w-32"></div>
    </>
  );
};

export default Navigation;
