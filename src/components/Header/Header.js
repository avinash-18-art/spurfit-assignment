import React, {useEffect} from 'react'
import {gsap} from 'gsap'

const Header = () => {
  useEffect(() => {
    gsap.from('.header', {opacity: 0, duration: 1, y: -50, ease: 'power4.out'})
  }, [])

  return (
    <header className="header bg-gray-800 text-white py-4">
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
