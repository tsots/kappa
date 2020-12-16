import React from 'react'
import boys from '../boys.jpg'

const Home = () => {
  return (
    <main>
      <img src={boys} alt="my beautiful boys" className="absolute object-cover w-full"/>
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold leading-none lg:leading-snug">How are you handsome!!!</h1>
      </section>
    </main>
  )
}

export default Home
