import { Grid, Container, Typography, Box } from '@mui/material'
import * as React from 'react'
import Image from 'next/image'
import { HeaderWrapper, SubHeaderWrapper, LogoWrapper } from './styles'
import MyBubbleTea from '/assets/logo.svg'

interface HeaderProps {
  logo?: string
  title?: string
}

const Header: React.FC<HeaderProps> = ({ title, logo }): React.ReactElement => {
  return (
    <HeaderWrapper>
      <SubHeaderWrapper>
        <Container maxWidth={'xl'}>
          <Grid item>
            <Typography
              variant="caption"
              component={'p'}
              align="center"
              sx={{ lineHeight: 1.2, padding: 1 }}
            >
              Versand: kostenlos ab €29,00 | Set kaufen = Free Bubble-Packung
              bei nächster Bestellung
            </Typography>
          </Grid>
        </Container>
      </SubHeaderWrapper>
      <Container maxWidth={'xl'}>
        <Grid
          container
          alignItems={'center'}
          justifyContent={'center'}
          direction="column"
          height={'32vh'}
        >
          <Grid item>
            <LogoWrapper>
              <Image src={'/logo.svg'} layout={'fill'} objectFit={'contain'} />
            </LogoWrapper>
          </Grid>
          <Grid>
            <Typography variant="h5" component={'h2'} align="center">
              <b>{title}</b>
            </Typography>
            <Typography
              variant="body2"
              component={'p'}
              align="center"
              m={0}
              p={0}
            >
              experience your flavor miracle
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
