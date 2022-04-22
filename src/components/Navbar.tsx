// Importing files from Material-UI
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'

// Exporting Default Navbar to the App.js File
export default function Navbar() {
  // const classes = useStyles()
  return (
    <div>
      <div className="bg">
        <AppBar position="static">
          <Toolbar>
            <h2
              style={{
                textAlign: 'center',
                margin: 'auto',
                minHeight: '100px'
              }}
            >
              <br />
              Yobny's Company
              <br />
            </h2>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}
