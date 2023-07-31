// REACT IMPORTS
import React, { FC } from 'react'

// MUI IMPORTS
import { Grid, Typography } from '@mui/material'

// PROJECT IMPORTS
import { THEME_GRID_SPACING } from '@styles/CONSTANTS'

// ===========================|| DASHBOARD - VIEW ||=========================== //

export const DashboardView: FC = (): JSX.Element => {
  return (
    <Grid container spacing={THEME_GRID_SPACING} height={'100%'}>
      <Grid item xs={12} display={'flex'} alignItems={'center'} justifyContent={'center'} height={'100%'}>
        <Typography variant={'h1'} color={'primary'} align={'center'}>
          Hi adrian, this is the start of your new project, you can do it!
        </Typography>
      </Grid>
    </Grid>
  )
}
