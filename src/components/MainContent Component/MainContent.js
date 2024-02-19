import React, {useEffect} from 'react'
import {gsap} from 'gsap'

const MainContent = () => {
  useEffect(() => {
    gsap.from('.content', {opacity: 0, duration: 1, y: 50, ease: 'power4.out'})
  }, [])

  return (
    <div className="container mx-auto py-8">
      <div className="content max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Welcome to Spur Fit
        </h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
          lacinia nulla. Proin feugiat malesuada felis, ut lacinia urna tempus
          vel. Vivamus vehicula libero nec velit ullamcorper, at luctus nulla
          fermentum.
        </p>
        <p className="mb-4">
          Nullam nec arcu luctus, rutrum quam et, tincidunt mi. Maecenas feugiat
          vestibulum augue, eget ultrices justo vehicula sit amet. Sed
          ullamcorper felis vel ante feugiat, vel hendrerit ante fermentum.
        </p>
        <p className="mb-4">
          Etiam vitae consequat elit. Ut id mi quam. Proin convallis arcu sit
          amet est bibendum eleifend. Morbi gravida nisl nec purus volutpat,
          quis ultrices ex dapibus. Phasellus sit amet scelerisque ex.
        </p>
      </div>
    </div>
  )
}

export default MainContent
