import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import { styles } from './NavBar.styles';

interface NavBarProps {
  pageName: string,
}

const NavBar = ({
  pageName,
}: NavBarProps) => {
const test = '';
return (
  <div
    style={styles.mainNav}
  >
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        md={3}
      >
        <Image
          src="/logo.jpg"
          alt="logo"
          height={60}
          width={50}
        />
      </Grid>
      <Grid
        item
        md={6}
      >
        <Typography
          variant="h6"
          style={styles.titleText}
        >
          {pageName}
        </Typography>
      </Grid>
      <Grid
        item
        md={3}
      >
      </Grid>
    
    </Grid>
  </div>
)
}

export default NavBar;