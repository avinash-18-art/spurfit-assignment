import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold">Spur Fit</h1>
        <nav className="mt-2">
          <a href="#" className="mx-2 hover:underline">
            Home
          </a>
          <a href="#" className="mx-2 hover:underline">
            About
          </a>
          <a href="#" className="mx-2 hover:underline">
            Services
          </a>
          <a href="#" className="mx-2 hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
