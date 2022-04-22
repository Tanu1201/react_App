import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Pagination } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
// import axios from 'axios'
import React, { useState } from 'react'

type User = {
  id: number
  first_name: string
  last_name: string
  email: string
  avatar: string
}

const useStyles = makeStyles(theme => ({
  gridContainer: {
    // paddingLeft: '40px',
    // paddingRight: '40px',
    padding: theme.spacing(2),
    width: '700px',
    display: 'flex',
    textAlign: 'center',
    margin: 'auto',
    justify: 'center'
  }
}))

function Pagin() {
  const [users, setUsers] = useState<User[]>([])
  const [pageCount, setPageCount] = useState(1)
  const [isLoaded, setisLoaded] = useState(false)
  const [currentPage, setcurrentPage] = useState(1)

  const classes = useStyles()

  const handleFetch = (value: any = 1) => {
    var URL = `https://reqres.in/api/users?page=${value}`
    fetch(URL)
      .then(response => response.json())
      .then(body => {
        setUsers([...body.data])
        setPageCount(body.total_pages)

        setisLoaded(true)
      })
      .catch(error => console.error('Error', error))
  }

  const handlePageChange = (
    event: any,
    value: React.SetStateAction<number>
  ) => {
    handleFetch(value)
    setcurrentPage(value)
  }
  if (!isLoaded) handleFetch()

  return (
    <div
      style={{
        display: 'block',
        padding: 30,
        textAlign: 'center'
      }}
    >
      <Grid
        container
        className={classes.gridContainer}
        spacing={6}
        justify="center"
        alignItems="center"
      >
        {isLoaded ? (
          users.map(user => (
            <Grid item xs={6} sm={6} md={6} key={user.id}>
              {/* <Box sx={{ minWidth: 275 }}> */}
              <Card>
                {/* <CardActionArea> */}
                {/* <div key={user.id}> */}
                <img alt={user.first_name} src={user.avatar}></img>

                <div>
                  <CardContent>
                    {/* <Typography variant="body2" color="text.secondary"> */}
                    <b>
                      {user.first_name} {user.last_name}
                      <br />
                      {user.email}
                    </b>
                    {/* </Typography> */}
                  </CardContent>
                </div>
                {/* </div> */}
              </Card>
              {/* </Box> */}
            </Grid>
          ))
        ) : (
          <div></div>
        )}
      </Grid>

      <div className="main">
        <Pagination
          count={pageCount}
          page={currentPage}
          defaultPage={1}
          onChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default Pagin

