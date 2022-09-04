import * as React from 'react'
import {
  ProductBoxWrapper,
  ProductBoxTitle,
  ProductBoxBanner,
  ProductBoxBrand,
  ProductBoxRatingWrapper,
  ProductBoxImage,
} from './styles'
import { Rating, Typography } from '@mui/material'
import { Grid, GridProps, Button, ButtonBase, Box } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import Price from '../Price'
import Link from 'next/link'

interface ProductBoxProps extends GridProps {
  name: string
  price: number
  image?: {
    url: string
    alt: string
  }
  tax?: {
    text: string
  }
  images?: string[]
  currency?: 'EUR' | 'USD'
  locales?: 'de-DE' | 'en-US' | 'de-AT'
  onClick?: () => void
  banner?: {
    type: 'new' | 'sale' | 'special'
    text: string
  }[]
  brand?: string
  stock?: number
  rates?: {
    rate: number
    count: number
  }
  description?: string
  href: string
}

const ProductBox: React.FC<ProductBoxProps> = ({
  name,
  price,
  images,
  href = '',
  image = {
    url: 'https://picsum.photos/300',
    alt: 'alt',
  },
  onClick,
  banner,
  brand,
  rates = {
    rate: 0,
    count: 0,
  },
  tax = {
    text: 'inkl. Mwst',
  },
  currency = 'EUR',
  locales = 'de-DE',
  ...props
}) => {
  return (
    <Grid component={ProductBoxWrapper} {...props}>
      <Link href={href}>
        <a>
          <ProductBoxBanner>
            {banner?.map((value, key) => (
              <span key={key} className={`banner-${value.type}`}>
                {value.text}
              </span>
            ))}
          </ProductBoxBanner>
          <ButtonBase
            component="span"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '16px',
            }}
          >
            <ProductBoxRatingWrapper>
              <Rating
                precision={0.5}
                value={rates.rate}
                readOnly
                size="small"
                icon={<StarIcon fontSize="inherit" />}
                emptyIcon={
                  <StarIcon
                    sx={{ color: '#fff', opacity: 0.55 }}
                    fontSize="inherit"
                  />
                }
              />
            </ProductBoxRatingWrapper>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                paddingBottom: '100%',
              }}
            >
              <ProductBoxImage alt={image.alt} src={image.url} layout="fill" />
            </Box>
          </ButtonBase>
          <Grid container my={1.5} p={0.75} direction="row">
            <Grid
              item
              sm={12}
              md
              component={ProductBoxTitle}
              mb={2}
              sx={{ marginBottom: { md: 0 } }}
            >
              <Typography variant="h6" component="span">
                {name}
              </Typography>
            </Grid>
            <Grid item container sm={12} md={4} direction="column">
              <Price
                price={price}
                locales={locales}
                currency={currency}
                taxText={tax.text}
              />
            </Grid>
          </Grid>
        </a>
      </Link>
      {/* {brand && <ProductBoxBrand>{brand}</ProductBoxBrand>} */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          height: '46px',
          borderRadius: '23px',
          background: '#6F37BC',
          marginBottom: 2,
        }}
      >
        In den Warenkorb
      </Button>
    </Grid>
  )
}

export default ProductBox
