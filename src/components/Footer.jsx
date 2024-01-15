import React from 'react'
import Angle from '../assets/group-2.png'
import { Button, Grid } from '@mui/material'


export default function Footer (){

    return (
        <footer>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md="auto">
            <Button className='btn back-btn' sx={{ backgroundColor: '#3A3940', color: 'white' }}>Back</Button>
          </Grid>
          <Grid item xs={12} md="auto" sx={{ mt: { xs: 1, md: 0 } }}>
            <Button className='btn next-btn' sx={{ backgroundColor: 'white', color: '#523FD7, #FF7DFF' }}>
              <span>Next</span> <img src={Angle} alt="Angle" />
            </Button>
          </Grid>
        </Grid>
      </footer>
    )
}