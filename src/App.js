import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {
    const randSearch = search[Math.floor(Math.random() * 2997 )]

    window.location = `https://www.google.com/search?q=site%3Amayoclinic.org+${randSearch}&sca_esv=8db531018b40ad46&sca_upv=1&ei=WEYXZq-aCLbbseMPq828wAw&ved=0ahUKEwivpvmoirmFAxW2bWwGHasmD8gQ4dUDCBA&uact=5&oq=site%3Amayoclinic.org+a&gs_lp=Egxnd3Mtd2l6LXNlcnAiFXNpdGU6bWF5b2NsaW5pYy5vcmcgYUiUCFCCBliCBnACeACQAQCYAYQCoAGEAqoBAzItMbgBA8gBAPgBAZgCAKACAJgDAIgGAZIHAKAHLQ&sclient=gws-wiz-serp`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
