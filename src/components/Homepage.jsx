import React from 'react'


const Homepage = () => {
  return (
  
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-600 text-white">
        <div className="font-bold text-lg">Lookscout</div>
        <div className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Our Products</a>
          <a href="#" className="hover:underline">Resources</a>
          <a href="#" className="hover:underline">Contacts</a>
        </div>
        <div className="space-x-4">
          <button >Log in</button>
          <button>Sign up</button>
        </div>
      </nav>
  )
}

export default Homepage
