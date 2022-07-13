import * as React from 'react'
import {
  ProductBoxWrapper,
  ProductBoxTitle,
  ProductBoxPrice,
  ProductBoxBanner,
  ProductBoxBrand,
  ProductBoxRatingWrapper,
  ProductBoxImage,
} from './styles'
import { Rating } from '@mui/material'
import { Grid, GridProps, Button, ButtonBase, Box } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

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
}

const ProductBox: React.FC<ProductBoxProps> = ({
  name,
  price,
  images,
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
    <Grid component={ProductBoxWrapper} onClick={onClick} {...props}>
      <ProductBoxBanner>
        {banner?.map((value, key) => (
          <span key={key} className={`banner-${value.type}`}>
            {value.text}
          </span>
        ))}
      </ProductBoxBanner>
      <ButtonBase
        component="span"
        sx={{ display: 'flex', flexDirection: 'column', borderRadius: '16px' }}
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
          sx={{ position: 'relative', width: '100%', paddingBottom: '100%' }}
        >
          <ProductBoxImage alt={image.alt} src={image.url} layout="fill" />
        </Box>
      </ButtonBase>
      <Grid container my={1.5} p={0.75}>
        <ProductBoxTitle>{name}</ProductBoxTitle>
        <ProductBoxPrice>
          <span className={'displayed-price'}>
            {price.toLocaleString(locales, { style: 'currency', currency })}
          </span>
          <span className={'displayed-tax'}>{tax.text}</span>
        </ProductBoxPrice>
      </Grid>
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
