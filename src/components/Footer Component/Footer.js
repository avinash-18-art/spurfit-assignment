import React, {useEffect} from 'react'
import {gsap} from 'gsap'

const Footer = () => {
  useEffect(() => {
    gsap.from('.footer', {opacity: 0, duration: 1, y: 50, ease: 'power4.out'})
  }, [])

  return (
    <footer className="footer bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Animation Website. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
