import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Pagin from './components/Pagin'
import SearchBar from './components/SearchBar'
// import {ThemeProvider, createTheme} from '@material-ui/core/styles'
function App() {
  const isBackgroundRed = true
  return (
    <div className="background-red">
      <Navbar />
      <br />
      <SearchBar />
      <br />

      {/* <DataFetching /> */}
      <Pagin />
      <Navbar />
      {/* <style>{'body { background-color: black; }'}</style> */}
    </div>
  )
}

export default App
