import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

const HomePageBanner = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      className="home-page-banner page-section"
    >
      <Grid
        item
        xs={8}
        direction="row"
      >
        <Image
          src="/aging.jpg"
          alt={'title image'}
          height={300}
          width={500}
          className="home-page-image"
        />
        <Typography
          variant="h5"
          className="home-page-banner-text"
        >
        “ We’ve put more effort into helping folks reach old age than into helping them enjoy it.”
        <br/>
        - Frank Howard Clark
        </Typography>
      </Grid>
    </Grid>
  )
}

export default HomePageBanner;