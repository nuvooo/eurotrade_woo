import { Grid } from '@mui/material'
import React from 'react'
import { m } from 'framer-motion'
import { ProductDetailWrapper } from './styles'

interface ProductDetailProps {
  name: string
  price: number
  image?: {
    url: string
    alt: string
  }
  tax?: {
    text: string
  }
  images?: []
  currency?: 'EUR' | 'USD'
  locales?: 'de-DE' | 'en-US' | 'de-AT'
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
const ProductDetail: React.FC<ProductDetailProps> = (): React.ReactElement => {
  const transition = {
    type: 'spring',
    damping: 25,
    stiffness: 120,
  }
  const [sliderOpen, setSliderOpen] = React.useState(false)
  return (
    <ProductDetailWrapper>
      <Grid container sx={{ overflow: 'hidden' }}></Grid>
    </ProductDetailWrapper>
  )
}

export default ProductDetail
