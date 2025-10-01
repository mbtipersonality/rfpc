import './App.css'
import React from 'react'

function App() {
  const handleClick = () => {

    const search1 = Array.from({ length: 201 }, (_, i) => i + 181);

    const search2 = JSON.parse(localStorage.getItem('numbers'))
    if(!search2){
      localStorage.setItem('numbers', JSON.stringify(search1))
    }
    const randSearch = search2[Math.floor(Math.random() * (search2.length - 1 + 1) + 1 )]

    const newNumbers = search2.filter(item => item !== randSearch)
    localStorage.setItem('numbers', JSON.stringify(newNumbers))
    
    window.location = `https://redditfavorites.com/product_categories/subjects?page=${randSearch}`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
