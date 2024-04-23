import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {
    const randSearch = search[Math.floor(Math.random() * 2997 )]
    
    window.location = `https://www.google.com/search?q=site%3Aremedyskin.com%2Fblogs+${randSearch}&sca_esv=f9e9aef3ae3c6c42&sca_upv=1&ei=34onZuaQKNbV4-EP_N6B6Ak&oq=site%3Aremedyskin.com%2Fblogs+a&gs_lp=EhNtb2JpbGUtZ3dzLXdpei1zZXJwIhtzaXRlOnJlbWVkeXNraW4uY29tL2Jsb2dzIGFIiwZQAFgAcAB4AJABAJgBggKgAYICqgEDMi0xuAEDyAEAmAIAoAIAmAMAiAYBkgcAoAct&sclient=mobile-gws-wiz-serp`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
