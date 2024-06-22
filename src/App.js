import './App.css'
import React from 'react'

function App() {
  const handleClick = () => {
    
    const number = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
    
    window.location = `https://redditfavorites.com/product_categories?page=${number}`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
