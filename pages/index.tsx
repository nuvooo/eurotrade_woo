import { Grid, Container } from '@mui/material'
import type { NextPage } from 'next'
import ProductBox from '../packages/ecommerce-ui/ProductBox'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <Container maxWidth={'xl'}>
      <Grid container spacing={1}>
        {Array(12)
          .fill('123')
          .map((value, key) => {
            return (
              <ProductBox
                key={key}
                xs={6}
                sm={6}
                md={4}
                lg={3}
                name="Product der großen!"
                image={{
                  url: 'https://picsum.photos/600/80' + key,
                  alt: 'alt',
                }}
                price={122000.99}
                brand="test"
                href="/product"
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
  )
}

export default Home
