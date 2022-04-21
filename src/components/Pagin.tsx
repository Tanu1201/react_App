import { Pagination } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

type User = {
  id: number
  first_name: string
  last_name: string
  email: string
  avatar: string
}
function Pagin() {
  const [users, setUsers] = useState<User[]>([])
  // const classes = useStyles()
  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?page=2')
      .then(res => {
        // console.log(res)
        setUsers(res.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [setUsers])

  return (
    <div
      style={{
        display: 'block',
        padding: 30,
        textAlign: 'center'
      }}
    >
      <Pagination count={2} />
    </div>
  )
}

export default Pagin
