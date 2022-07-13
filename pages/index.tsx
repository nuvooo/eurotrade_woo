import { Grid, Container } from '@mui/material'
import type { NextPage } from 'next'
import Footer from '../packages/Footer'
import Header from '../packages/Header'
import Layout from '../packages/Layout'
import Navigation from '../packages/Navigation'
import ProductBox from '../packages/ProductBox'

const Home: NextPage = () => {
  return (
    <Layout mode="light">
      <Header title="MyBubbleTea.com" />
      <Navigation />
      <Container maxWidth={'xl'}>
        <Grid container spacing={1}>
          {Array(12)
            .fill('123')
            .map((value, key) => {
              return (
                <ProductBox
                  key={key}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  name="Product der großen!"
                  image={{
                    url: 'https://picsum.photos/600/80' + key,
                    alt: 'alt',
                  }}
                  price={1220.99}
                  brand="test"
                  rates={{ rate: 4.3, count: 2 }}
                  banner={[
                    { type: 'special', text: 'sonderposten' },
                    { type: 'new', text: 'neu' },
                  ]}
                />
              )
            })}
        </Grid>
      </Container>
      <Footer />
    </Layout>
  )
}

export default Home
