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
          Welcome to my animation Website
        </h2>
        <p className="mb-4">
          Website Animations make sites come alive and delight users. If done
          correctly, they can enhance the overall user experience. Also,
          animations show site visitors your website's information. they help
          them better understand how your site works.
        </p>
        <p className="mb-4">
          Web animation is used on all kinds of web pages. They can be small web
          animations that happen as a visitor is scrolling through a web page to
          draw attention to an element, an animation that demonstrates a
          product, or a promotional web animation that shows off something
          entertainingly and engagingly.
        </p>
        <p className="mb-4">
          Animation in web design has revolutionized the way users interact with
          websites, taking user experience to new heights. From subtle motion
          graphics to eye-catching visual effects, animations have become a
          powerful tool in engaging visitors and conveying information in a more
          captivating manner.
        </p>
      </div>
    </div>
  )
}

export default MainContent
