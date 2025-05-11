
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export function Header() {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="coffee-container">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <svg 
              className="w-10 h-10 text-coffee-600" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M4 3h16c.6 0 1 .4 1 1v3a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7V4c0-.6.4-1 1-1z" 
                fill="currentColor" 
              />
              <path 
                d="M17.5 17.5a9 9 0 0 1-11 0M8 2v1M16 2v1M12 2v1M21 8a4 4 0 0 1 0 8" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
              />
            </svg>
            <span className="text-xl font-bold text-coffee-800">Coffee Exchange</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-coffee-600 transition-colors">
              Home
            </Link>
            <Link to="/marketplace" className="text-gray-600 hover:text-coffee-600 transition-colors">
              Marketplace
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-coffee-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-coffee-600 transition-colors">
              Contact
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                {user.role === 'buyer' && (
                  <Link to="/buyer/dashboard">
                    <Button variant="ghost">My Account</Button>
                  </Link>
                )}
                {user.role === 'seller' && (
                  <Link to="/seller/dashboard">
                    <Button variant="ghost">Seller Dashboard</Button>
                  </Link>
                )}
                {user.role === 'admin' && (
                  <Link to="/admin/dashboard">
                    <Button variant="ghost">Admin Panel</Button>
                  </Link>
                )}
                <Button variant="outline" onClick={() => logout()}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/auth/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/auth/register">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-coffee-600 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden py-4 px-4 bg-white shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="px-4 py-2 text-gray-600 hover:text-coffee-600 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/marketplace"
              className="px-4 py-2 text-gray-600 hover:text-coffee-600 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 text-gray-600 hover:text-coffee-600 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-gray-600 hover:text-coffee-600 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {user ? (
              <>
                {user.role === 'buyer' && (
                  <Link
                    to="/buyer/dashboard"
                    className="px-4 py-2 text-gray-600 hover:text-coffee-600 hover:bg-gray-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    My Account
                  </Link>
                )}
                {user.role === 'seller' && (
                  <Link
                    to="/seller/dashboard"
                    className="px-4 py-2 text-gray-600 hover:text-coffee-600 hover:bg-gray-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Seller Dashboard
                  </Link>
                )}
                {user.role === 'admin' && (
                  <Link
                    to="/admin/dashboard"
                    className="px-4 py-2 text-gray-600 hover:text-coffee-600 hover:bg-gray-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin Panel
                  </Link>
                )}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="px-4 py-2 text-gray-600 hover:text-coffee-600 hover:bg-gray-100 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link to="/auth/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
