import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles(theme => ({
  gridContainer: {
    // paddingLeft: '40px',
    // paddingRight: '40px',
    padding: theme.spacing(2),
    width: '500px',
    display: 'flex',
    textAlign: 'center',
    justify: 'center'
  }
}))

type User = {
  id: number
  first_name: string
  last_name: string
  email: string
  avatar: string
}

function DataFetching() {
  const [users, setUsers] = useState<User[]>([])
  const classes = useStyles()
  useEffect(() => {
    axios
      .get('https://reqres.in/api/users')
      .then(res => {
        // console.log(res)
        setUsers(res.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <Grid
      container
      className={classes.gridContainer}
      spacing={4}
      justify="center"
      alignItems="center"
    >
      {users.map(user => (
        <Grid item xs={6} sm={6} md={6} key={user.id}>
          {/* <Box sx={{ minWidth: 275 }}> */}
          <Card>
            {/* <CardActionArea> */}
            {/* <div key={user.id}> */}
            <img src={user.avatar}></img>

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
      ))}
    </Grid>
  )
}
export default DataFetching
